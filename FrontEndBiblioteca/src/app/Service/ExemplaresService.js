import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';
import * as i0 from "@angular/core";
export class ExemplaresService {
    http = inject(HttpClient);
    cache = inject(CacheBibliotecaService);
    apiUrl = `${environment.apiUrl}/getExemplares`;
    cacheKey = 'exemplares';
    exemplaresSubject = new BehaviorSubject([]);
    // Observable compartilhado entre as páginas.
    exemplares$ = this.exemplaresSubject.asObservable();
    // Lista atual do cache.
    get exemplaresAtuais() {
        return this.exemplaresSubject.value;
    }
    atualizarStatusCache(id, status) {
        const atualizados = this.exemplaresAtuais.map(exemplar => exemplar.id === id ? { ...exemplar, status } : exemplar);
        this.atualizarCache(atualizados);
        this.cache.atualizar(this.cacheKey, atualizados);
    }
    // GET: carregar exemplares.
    listar(forcarAtualizacao = false) {
        if (forcarAtualizacao) {
            this.cache.limpar(this.cacheKey);
        }
        return this.cache.obter(this.cacheKey, () => this.http.get(this.apiUrl, { withCredentials: true })).pipe(map(exemplares => exemplares.map(exemplar => this.normalizarExemplar(exemplar))), tap(exemplares => this.atualizarCache(exemplares)));
    }
    normalizarExemplar(exemplar) {
        return {
            id: exemplar.id ?? exemplar.Id ?? 0,
            livroId: exemplar.livroId ?? exemplar.LivroId ?? 0,
            nomeLivro: exemplar.nomeLivro ?? exemplar.NomeLivro ?? '',
            codigoBarras: exemplar.codigoBarras ?? exemplar.CodigoBarras ?? '',
            endereçavel: this.obterLocalizacao(exemplar),
            status: exemplar.status ?? exemplar.Status ?? 0,
            diasAluguel: exemplar.diasAluguel ?? exemplar.DiasAluguel ?? 0
        };
    }
    obterLocalizacao(exemplar) {
        const entrada = Object.entries(exemplar).find(([chave]) => chave
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase() === 'enderecavel');
        return typeof entrada?.[1] === 'string'
            ? entrada[1].trim()
            : '';
    }
    // Atualiza o cache de todos os componentes inscritos.
    atualizarCache(exemplares) {
        this.exemplaresSubject.next([...exemplares]);
    }
    // Atualiza um exemplar ou adiciona um novo ao cache.
    atualizarOuAdicionar(exemplar) {
        const atuais = this.exemplaresAtuais;
        const existe = atuais.some(item => item.id === exemplar.id);
        const atualizados = existe
            ? atuais.map(item => item.id === exemplar.id ? exemplar : item)
            : [...atuais, exemplar];
        this.atualizarCache(atualizados);
    }
    // POST: cadastrar exemplar.
    criar(dto) {
        const payload = dto.livroId
            ? {
                LivroId: dto.livroId,
                Endereçavel: dto.endereçavel?.trim(),
                Status: dto.status ?? 0,
                DiasAluguel: dto.diasAluguel ?? 0
            }
            : {
                NomeLivro: dto.nomeLivro?.trim(),
                Endereçavel: dto.endereçavel?.trim(),
                Status: dto.status ?? 0,
                DiasAluguel: dto.diasAluguel ?? 0
            };
        return this.http
            .post(`${environment.apiUrl}/postExemplar`, payload, {
            withCredentials: true
        })
            .pipe(map(exemplar => this.normalizarExemplar(exemplar)), switchMap(exemplar => this.sincronizarAposMutacao(exemplar)), tap(() => this.invalidarCachesRelacionados()));
    }
    // PUT: editar exemplar.
    atualizar(id, dto) {
        return this.http
            .put(`${environment.apiUrl}/putExemplar`, { Id: id, ...dto }, {
            withCredentials: true
        })
            .pipe(map(exemplar => this.normalizarExemplar(exemplar)), switchMap(exemplar => this.sincronizarAposMutacao(exemplar)), tap(() => this.invalidarCachesRelacionados()));
    }
    // DELETE: excluir exemplar pelo ID enviado no corpo.
    excluir(id) {
        return this.http
            .request('DELETE', `${environment.apiUrl}/deleteExemplar`, {
            body: { Id: id },
            withCredentials: true
        })
            .pipe(tap(() => {
            this.atualizarCache(this.exemplaresAtuais.filter(item => item.id !== id));
            this.invalidarCachesRelacionados();
        }));
    }
    // GET: buscar pelo código de barras.
    buscarPorCodigoBarras(codigoBarras) {
        const existente = this.exemplaresAtuais.find(item => item.codigoBarras === codigoBarras);
        if (existente) {
            return of(existente);
        }
        return this.http.get(`${environment.apiUrl}/getExemplar/${encodeURIComponent(codigoBarras)}`, { withCredentials: true }).pipe(map(exemplar => this.normalizarExemplar({
            ...exemplar,
            LivroId: exemplar.LivroId ?? exemplar.Livro?.LivroId,
            NomeLivro: exemplar.NomeLivro ?? exemplar.Livro?.Titulo
        })));
    }
    // Atualiza os dados compartilhados após POST ou PUT.
    sincronizarAposMutacao(exemplar) {
        this.atualizarOuAdicionar(exemplar);
        return of(exemplar);
    }
    // Invalida o cache para buscar novamente do backend.
    limparCache() {
        this.invalidarCachesRelacionados();
    }
    invalidarCachesRelacionados() {
        this.cache.limpar();
    }
    // Força a atualização da lista a partir da API.
    recarregar() {
        return this.listar(true);
    }
    static ɵfac = function ExemplaresService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExemplaresService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExemplaresService, factory: ExemplaresService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExemplaresService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
