import { Injectable } from '@angular/core';
import { of, shareReplay, tap, finalize } from 'rxjs';
import * as i0 from "@angular/core";
export class CacheBibliotecaService {
    tempoCache = 5 * 60 * 1000;
    cache = new Map();
    obter(chave, buscar) {
        const entrada = this.cache.get(chave);
        const agora = Date.now();
        if (entrada && entrada.expiracao > agora) {
            if (entrada.requisicao$) {
                console.log(`[CACHE] Reutilizando requisição: ${chave}`);
                return entrada.requisicao$;
            }
            if (entrada.dados !== undefined) {
                console.log(`[CACHE HIT] ${chave}`);
                return of(entrada.dados);
            }
        }
        console.log(`[CACHE MISS] ${chave} — consultando API`);
        const novaEntrada = {
            expiracao: agora + this.tempoCache
        };
        this.cache.set(chave, novaEntrada);
        const requisicao$ = buscar().pipe(tap(dados => {
            novaEntrada.dados = dados;
            novaEntrada.expiracao =
                Date.now() + this.tempoCache;
            console.log(`[CACHE SAVED] ${chave}`);
        }), finalize(() => {
            if (this.cache.get(chave) === novaEntrada) {
                novaEntrada.requisicao$ = undefined;
            }
        }), shareReplay({ bufferSize: 1, refCount: false }));
        novaEntrada.requisicao$ = requisicao$;
        return requisicao$;
    }
    atualizar(chave, dados) {
        this.cache.set(chave, {
            dados,
            expiracao: Date.now() + this.tempoCache
        });
        console.log(`[CACHE UPDATE] ${chave}`);
    }
    limpar(chave) {
        if (chave) {
            this.cache.delete(chave);
            console.log(`[CACHE CLEAR] ${chave}`);
            return;
        }
        this.cache.clear();
        console.log('[CACHE CLEAR] Todo o cache foi removido');
    }
    static ɵfac = function CacheBibliotecaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CacheBibliotecaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CacheBibliotecaService, factory: CacheBibliotecaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CacheBibliotecaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
