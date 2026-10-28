
import { Injectable } from '@angular/core';
import {
  Observable,
  of,
  shareReplay,
  tap,
  finalize
} from 'rxjs';

interface EntradaCache<T> {
  dados?: T;
  expiracao: number;
  requisicao$?: Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class CacheBibliotecaService {
  private readonly tempoCache = 5 * 60 * 1000;

  private readonly cache =
    new Map<string, EntradaCache<unknown>>();

  obter<T>(
    chave: string,
    buscar: () => Observable<T>
  ): Observable<T> {
    const entrada = this.cache.get(chave);
    const agora = Date.now();

    if (entrada && entrada.expiracao > agora) {
      if (entrada.requisicao$) {
        console.log(`[CACHE] Reutilizando requisição: ${chave}`);
        return entrada.requisicao$ as Observable<T>;
      }

      if (entrada.dados !== undefined) {
        console.log(`[CACHE HIT] ${chave}`);
        return of(entrada.dados as T);
      }
    }

    console.log(`[CACHE MISS] ${chave} — consultando API`);

    const novaEntrada: EntradaCache<T> = {
      expiracao: agora + this.tempoCache
    };

    this.cache.set(chave, novaEntrada);

    const requisicao$ = buscar().pipe(
      tap(dados => {
        novaEntrada.dados = dados;
        novaEntrada.expiracao =
          Date.now() + this.tempoCache;

        console.log(`[CACHE SAVED] ${chave}`);
      }),
      finalize(() => {
        if (this.cache.get(chave) === novaEntrada) {
          novaEntrada.requisicao$ = undefined;
        }
      }),
      shareReplay({ bufferSize: 1, refCount: false })
    );

    novaEntrada.requisicao$ = requisicao$;

    return requisicao$;
  }

  atualizar<T>(chave: string, dados: T): void {
    this.cache.set(chave, {
      dados,
      expiracao: Date.now() + this.tempoCache
    });
    console.log(`[CACHE UPDATE] ${chave}`);
  }

  limpar(chave?: string): void {
    if (chave) {
      this.cache.delete(chave);
      console.log(`[CACHE CLEAR] ${chave}`);
      return;
    }

    this.cache.clear();
    console.log('[CACHE CLEAR] Todo o cache foi removido');
  }
}
