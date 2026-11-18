import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CacheBibliotecaService } from './cache-biblioteca.service';
import * as i0 from "@angular/core";
export var StatusExemplar;
(function (StatusExemplar) {
    StatusExemplar[StatusExemplar["Disponivel"] = 0] = "Disponivel";
    StatusExemplar[StatusExemplar["Alugado"] = 1] = "Alugado";
})(StatusExemplar || (StatusExemplar = {}));
export class LivrosService {
    cache = inject(CacheBibliotecaService);
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/api/Livros/Livros`;
    buscarTodos() {
        return this.cache.obter('livros:todos', () => {
            console.log('[LIVROS] Consultando todos os livros na API');
            return this.http.get(this.apiUrl, { withCredentials: true });
        });
    }
    buscarInteligente(busca) {
        const termo = busca.trim();
        if (!termo) {
            return this.buscarTodos();
        }
        const params = new HttpParams().set('busca', termo);
        return this.cache.obter(`livros:busca:${termo.toLowerCase()}`, () => {
            console.log('[LIVROS] Pesquisando na API:', termo);
            return this.http.get(`${this.apiUrl}/buscarinteligente`, {
                params,
                withCredentials: true
            });
        });
    }
    criar(dados) {
        return this.http.post(`${environment.apiUrl}/postlivro`, dados, { withCredentials: true }).pipe(tap(() => {
            console.log('[LIVROS] Cadastro concluído. Limpando cache.');
            this.limparCache();
        }));
    }
    atualizar(id, dados) {
        return this.http.put(`${environment.apiUrl}/put=${id}`, dados, { withCredentials: true }).pipe(tap(() => {
            console.log('[LIVROS] Atualização concluída. Limpando cache.');
            this.limparCache();
        }));
    }
    excluir(id) {
        return this.http.request('DELETE', `${environment.apiUrl}/deleteLivro`, {
            body: { id },
            withCredentials: true
        }).pipe(tap(() => {
            console.log('[LIVROS] Exclusão concluída. Limpando cache.');
            this.limparCache();
        }));
    }
    limparCache() {
        this.cache.limpar();
    }
    static ɵfac = function LivrosService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LivrosService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LivrosService, factory: LivrosService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LivrosService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
