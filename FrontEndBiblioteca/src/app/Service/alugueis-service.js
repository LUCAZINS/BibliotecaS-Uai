import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';
import { ExemplaresService } from './ExemplaresService';
import * as i0 from "@angular/core";
export class AlugueisService {
    http = inject(HttpClient);
    cache = inject(CacheBibliotecaService);
    exemplaresService = inject(ExemplaresService);
    apiUrl = `${environment.apiUrl}/api/Alugueis`;
    cacheKey = 'alugueis:todos';
    alugueisSubject = new BehaviorSubject([]);
    alugueis$ = this.alugueisSubject.asObservable();
    get alugueisAtuais() {
        return this.alugueisSubject.value;
    }
    listar(forcarAtualizacao = false) {
        if (forcarAtualizacao) {
            this.cache.limpar(this.cacheKey);
        }
        return this.cache.obter(this.cacheKey, () => this.http.get(this.apiUrl, {
            withCredentials: true
        })).pipe(map(alugueis => alugueis.map(aluguel => this.normalizar(aluguel))), tap(alugueis => this.alugueisSubject.next([...alugueis])));
    }
    buscarPorId(id) {
        const existente = this.alugueisAtuais.find(aluguel => aluguel.id === id);
        if (existente) {
            return of(existente);
        }
        return this.http.get(`${this.apiUrl}/${id}`, {
            withCredentials: true
        }).pipe(map(aluguel => this.normalizar(aluguel)));
    }
    listarPorLocatario(alugatarioId) {
        const carregados = this.alugueisAtuais.filter(aluguel => aluguel.alugatarioId === alugatarioId);
        return carregados.length
            ? of(carregados)
            : this.http.get(`${this.apiUrl}/locatario/${alugatarioId}`, { withCredentials: true }).pipe(map(alugueis => alugueis.map(aluguel => this.normalizar(aluguel))));
    }
    criar(dados) {
        return this.http.post(this.apiUrl, this.montarPayload(dados), {
            withCredentials: true
        }).pipe(map(aluguel => this.normalizar(aluguel)), tap(aluguel => {
            this.atualizarCache(aluguel);
            this.exemplaresService.atualizarStatusCache(aluguel.exemplarId, 1);
        }), tap(() => this.sincronizarCache()));
    }
    devolver(dados) {
        const payload = dados.exemplarId
            ? { ExemplarId: dados.exemplarId }
            : { CodigoBarras: dados.codigoBarras?.trim() };
        return this.http.put(`${this.apiUrl}/devolver`, payload, { withCredentials: true }).pipe(map(aluguel => {
            const normalizado = this.normalizar(aluguel);
            const anterior = this.alugueisAtuais.find(item => item.id === normalizado.id ||
                (dados.exemplarId !== undefined &&
                    item.exemplarId === dados.exemplarId));
            return anterior
                ? { ...anterior, ...normalizado }
                : normalizado;
        }), tap(aluguel => {
            this.atualizarCache(aluguel);
            this.exemplaresService.atualizarStatusCache(aluguel.exemplarId, 0);
        }), tap(() => this.sincronizarCache()));
    }
    limparCache() {
        this.cache.limpar(this.cacheKey);
        this.alugueisSubject.next([]);
    }
    montarPayload(dados) {
        const payload = {
            Observacoes: dados.observacoes?.trim() || undefined
        };
        if (dados.alugatarioId) {
            payload['AlugatarioId'] = dados.alugatarioId;
        }
        else {
            payload['NomeAlugatario'] = dados.nomeAlugatario?.trim();
        }
        if (dados.exemplarId) {
            payload['ExemplarId'] = dados.exemplarId;
        }
        else {
            payload['CodigoBarras'] = dados.codigoBarras?.trim();
        }
        return payload;
    }
    atualizarCache(aluguel) {
        const atuais = this.alugueisAtuais;
        const atualizados = atuais.some(item => item.id === aluguel.id)
            ? atuais.map(item => item.id === aluguel.id ? aluguel : item)
            : [...atuais, aluguel];
        this.alugueisSubject.next(atualizados);
    }
    sincronizarCache() {
        this.cache.atualizar(this.cacheKey, this.alugueisAtuais);
    }
    normalizar(dados) {
        return {
            id: dados.id ?? dados.Id ?? 0,
            alugatarioId: dados.alugatarioId ?? dados.AlugatarioId ?? 0,
            nomeLocatario: dados.nomeLocatario ?? dados.NomeLocatario ?? '',
            exemplarId: dados.exemplarId ?? dados.ExemplarId ?? 0,
            codigoBarras: dados.codigoBarras ?? dados.CodigoBarras ?? '',
            livro: dados.livro ?? dados.Livro ?? '',
            dataAluguel: dados.dataAluguel ?? dados.DataAluguel,
            dataDevolucaoPrevista: dados.dataDevolucaoPrevista ??
                dados.DataDevolucaoPrevista,
            dataDevolucaoReal: dados.dataDevolucaoReal ??
                dados.DataDevolucaoReal,
            status: dados.status ?? dados.Status ?? '',
            observacoes: dados.observacoes ?? dados.Observacoes ?? undefined,
            usuarioResponsavel: dados.usuarioResponsavel ??
                dados.UsuarioResponsavel ?? undefined,
            usuarioDevolucao: dados.usuarioDevolucao ??
                dados.UsuarioDevolucao ?? undefined
        };
    }
    static ɵfac = function AlugueisService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlugueisService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AlugueisService, factory: AlugueisService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlugueisService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
