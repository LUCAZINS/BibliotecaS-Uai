import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';
import * as i0 from "@angular/core";
export class AlugatarioService {
    http = inject(HttpClient);
    cache = inject(CacheBibliotecaService);
    apiUrl = `${environment.apiUrl}/api/Alugatario`;
    cacheKey = 'alugatarios:todos';
    locatariosSubject = new BehaviorSubject([]);
    locatarios$ = this.locatariosSubject.asObservable();
    listar() {
        return this.cache.obter(this.cacheKey, () => this.http.get(this.apiUrl, {
            withCredentials: true
        })).pipe(map(locatarios => locatarios.map(locatario => this.normalizar(locatario))), tap(locatarios => this.locatariosSubject.next([...locatarios])));
    }
    buscarPorId(id) {
        const existente = this.locatariosSubject.value.find(locatario => locatario.id === id);
        if (existente) {
            return of(existente);
        }
        return this.http.get(`${this.apiUrl}/${id}`, { withCredentials: true }).pipe(map(locatario => this.normalizar(locatario)));
    }
    buscarPorCpf(cpf) {
        const valor = cpf.trim();
        return this.http.get(`${this.apiUrl}/buscarPorCpf/${encodeURIComponent(valor)}`, { withCredentials: true }).pipe(map(locatario => this.normalizar(locatario)));
    }
    buscarEstatisticas(id) {
        return this.http.get(`${this.apiUrl}/${id}/estatisticas`, { withCredentials: true }).pipe(map(dados => this.normalizarEstatisticas(dados)));
    }
    criar(dados) {
        return this.http.post(this.apiUrl, dados, {
            withCredentials: true
        }).pipe(map(locatario => this.normalizar(locatario)), tap(locatario => {
            this.atualizarLocatario(locatario);
            this.invalidarCache();
        }));
    }
    atualizar(id, dados) {
        return this.http.put(`${this.apiUrl}/${id}`, dados, { withCredentials: true }).pipe(map(locatario => this.normalizar(locatario)), tap(locatario => {
            this.atualizarLocatario(locatario);
            this.invalidarCache();
        }));
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`, {
            withCredentials: true
        }).pipe(tap(() => {
            this.locatariosSubject.next(this.locatariosSubject.value.filter(locatario => locatario.id !== id));
            this.invalidarCache();
        }));
    }
    limparCache() {
        this.invalidarCache();
    }
    atualizarLocatario(locatario) {
        const atuais = this.locatariosSubject.value;
        const existe = atuais.some(item => item.id === locatario.id);
        const atualizados = existe
            ? atuais.map(item => item.id === locatario.id ? locatario : item)
            : [...atuais, locatario];
        this.locatariosSubject.next(atualizados);
    }
    invalidarCache() {
        this.cache.limpar();
    }
    normalizar(dados) {
        return {
            id: dados.id ?? dados.Id ?? 0,
            nome: dados.nome ?? dados.Nome ?? '',
            email: dados.email ?? dados.Email ?? '',
            telefone: dados.telefone ?? dados.Telefone ?? '',
            endereco: dados.endereco ?? dados.Endereco ?? '',
            cpf: dados.cpf ?? dados.CPF ?? '',
            dataNascimento: dados.dataNascimento ?? dados.DataNascimento,
            livrosAlugados: dados.livrosAlugados ?? dados.LivrosAlugados
        };
    }
    normalizarEstatisticas(dados) {
        return {
            ...this.normalizar(dados),
            totalEmprestimos: dados.totalEmprestimos ?? dados.TotalEmprestimos ?? 0,
            emprestimosAtivos: dados.emprestimosAtivos ??
                dados.EmprestimosAtivos ?? 0,
            emprestimosDevolvidos: dados.emprestimosDevolvidos ??
                dados.EmprestimosDevolvidos ?? 0,
            primeiroEmprestimo: dados.primeiroEmprestimo ??
                dados.PrimeiroEmprestimo,
            ultimoEmprestimo: dados.ultimoEmprestimo ??
                dados.UltimoEmprestimo,
            livroMaisEmprestado: dados.livroMaisEmprestado ??
                (dados.LivroMaisEmprestado
                    ? {
                        titulo: dados.LivroMaisEmprestado.Titulo,
                        quantidade: dados.LivroMaisEmprestado.Quantidade
                    }
                    : undefined)
        };
    }
    static ɵfac = function AlugatarioService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlugatarioService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AlugatarioService, factory: AlugatarioService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlugatarioService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
