
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CacheBibliotecaService } from './cache-biblioteca.service';

export interface LivrosModels {
   id: number;
  titulo: string;
  autor: string;
  sinopse: string;
  isbn: string;
  editora: string;
  grafica: string;
  edicao: string;
  anoPublicacao: number;
  idade: number;
  generos: GeneroModels[];
  exemplares: Exemplar[];
  totalExemplares: number;
  exemplaresDisponiveis: number;
}

export interface GeneroModels {
  id: number;
  nome: string | null;
}

export interface Exemplar {
  id: number;
  codigoBarras: string;
  status: number;
  endereçavel: string;
  diasAluguel: number;
}

export enum StatusExemplar {
  Disponivel = 0,
  Alugado = 1
}

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private readonly cache = inject(CacheBibliotecaService);
  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    `${environment.apiUrl}/api/Livros/Livros`;

  buscarTodos(): Observable<LivrosModels[]> {
    return this.cache.obter(
      'livros:todos',
      () => {
        console.log('[LIVROS] Consultando todos os livros na API');

        return this.http.get<LivrosModels[]>(
          this.apiUrl,
          { withCredentials: true }
        );
      }
    );
  }

  buscarInteligente(
    busca: string
  ): Observable<LivrosModels[]> {
    const termo = busca.trim();

    if (!termo) {
      return this.buscarTodos();
    }

    const params = new HttpParams().set('busca', termo);

    return this.cache.obter(
      `livros:busca:${termo.toLowerCase()}`,
      () => {
        console.log('[LIVROS] Pesquisando na API:', termo);

        return this.http.get<LivrosModels[]>(
          `${this.apiUrl}/buscarinteligente`,
          {
            params,
            withCredentials: true
          }
        );
      }
    );
  }

  criar(dados: Partial<LivrosModels>): Observable<unknown> {
    return this.http.post(
      `${environment.apiUrl}/postlivro`,
      dados,
      { withCredentials: true }
    ).pipe(
      tap(() => {
        console.log('[LIVROS] Cadastro concluído. Limpando cache.');
        this.limparCache();
      })
    );
  }

  atualizar(
    id: number,
    dados: Partial<LivrosModels>
  ): Observable<unknown> {
    return this.http.put(
      `${environment.apiUrl}/put=${id}`,
      dados,
      { withCredentials: true }
    ).pipe(
      tap(() => {
        console.log('[LIVROS] Atualização concluída. Limpando cache.');
        this.limparCache();
      })
    );
  }

  excluir(id: number): Observable<unknown> {
    return this.http.request(
      'DELETE',
      `${environment.apiUrl}/deleteLivro`,
      {
        body: { id },
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        console.log('[LIVROS] Exclusão concluída. Limpando cache.');
        this.limparCache();
      })
    );
  }

  limparCache(): void {
    this.cache.limpar();
  }
}
