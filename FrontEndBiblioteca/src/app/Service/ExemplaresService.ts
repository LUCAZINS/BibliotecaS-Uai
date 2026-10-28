
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';

export interface Exemplar {
  id: number;
  livroId: number;
  nomeLivro: string;
  codigoBarras: string;
  endereçavel: string;
  status: number;
  diasAluguel: number;
}

export interface CriarExemplarDto {
  livroId?: number;
  nomeLivro?: string;
  endereçavel?: string;
  status?: number;
  diasAluguel?: number;
}

export interface AtualizarExemplarDto {
  Id: number;
  Endereçavel?: string;
  DiasAluguel: number;
  Status: number;
}

interface ExemplarApi {
  id?: number;
  Id?: number;
  livroId?: number;
  LivroId?: number;
  nomeLivro?: string | null;
  NomeLivro?: string | null;
  codigoBarras?: string | null;
  CodigoBarras?: string | null;
  endereçavel?: string | null;
  endereçável?: string | null;
  Endereçavel?: string | null;
  Endereçável?: string | null;
  status?: number;
  Status?: number;
  diasAluguel?: number;
  DiasAluguel?: number;
  Livro?: {
    LivroId?: number;
    Titulo?: string | null;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ExemplaresService {
  private readonly http = inject(HttpClient);
  private readonly cache = inject(CacheBibliotecaService);

  private readonly apiUrl =
    `${environment.apiUrl}/getExemplares`;

  private readonly cacheKey = 'exemplares';

  private readonly exemplaresSubject =
    new BehaviorSubject<Exemplar[]>([]);

  // Observable compartilhado entre as páginas.
  readonly exemplares$ = this.exemplaresSubject.asObservable();

  // Lista atual do cache.
  get exemplaresAtuais(): Exemplar[] {
    return this.exemplaresSubject.value;
  }

  atualizarStatusCache(id: number, status: number): void {
    const atualizados = this.exemplaresAtuais.map(exemplar =>
      exemplar.id === id ? { ...exemplar, status } : exemplar
    );

    this.atualizarCache(atualizados);
    this.cache.atualizar(this.cacheKey, atualizados);
  }

  // GET: carregar exemplares.
  listar(forcarAtualizacao = false): Observable<Exemplar[]> {
    if (forcarAtualizacao) {
      this.cache.limpar(this.cacheKey);
    }

    return this.cache.obter(
      this.cacheKey,
      () => this.http.get<ExemplarApi[]>(
        this.apiUrl,
        { withCredentials: true }
      )
    ).pipe(
      map(exemplares =>
        exemplares.map(exemplar => this.normalizarExemplar(exemplar))
      ),
      tap(exemplares => this.atualizarCache(exemplares))
    );
  }

  private normalizarExemplar(exemplar: ExemplarApi): Exemplar {
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

  private obterLocalizacao(exemplar: ExemplarApi): string {
    const entrada = Object.entries(exemplar).find(([chave]) =>
      chave
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase() === 'enderecavel'
    );

    return typeof entrada?.[1] === 'string'
      ? entrada[1].trim()
      : '';
  }

  // Atualiza o cache de todos os componentes inscritos.
  private atualizarCache(exemplares: Exemplar[]): void {
    this.exemplaresSubject.next([...exemplares]);
  }

  // Atualiza um exemplar ou adiciona um novo ao cache.
  private atualizarOuAdicionar(exemplar: Exemplar): void {
    const atuais = this.exemplaresAtuais;
    const existe = atuais.some(item => item.id === exemplar.id);

    const atualizados = existe
      ? atuais.map(item =>
          item.id === exemplar.id ? exemplar : item
        )
      : [...atuais, exemplar];

    this.atualizarCache(atualizados);
  }

  // POST: cadastrar exemplar.
  criar(dto: CriarExemplarDto): Observable<Exemplar> {
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
      .post<ExemplarApi>(
        `${environment.apiUrl}/postExemplar`,
        payload,
        {
        withCredentials: true
        }
      )
      .pipe(
        map(exemplar =>
          this.normalizarExemplar(exemplar)
        ),
        switchMap(exemplar =>
          this.sincronizarAposMutacao(exemplar)
        ),
        tap(() => this.invalidarCachesRelacionados())
      );
  }

  // PUT: editar exemplar.
  atualizar(
    id: number,
    dto: Omit<AtualizarExemplarDto, 'Id'>
  ): Observable<Exemplar> {
    return this.http
      .put<ExemplarApi>(
        `${environment.apiUrl}/putExemplar`,
        { Id: id, ...dto },
        {
        withCredentials: true
        }
      )
      .pipe(
        map(exemplar => this.normalizarExemplar(exemplar)),
        switchMap(exemplar =>
          this.sincronizarAposMutacao(exemplar)
        ),
        tap(() => this.invalidarCachesRelacionados())
      );
  }

  // DELETE: excluir exemplar pelo ID enviado no corpo.
  excluir(id: number): Observable<void> {
    return this.http
      .request<void>(
        'DELETE',
        `${environment.apiUrl}/deleteExemplar`,
        {
          body: { Id: id },
          withCredentials: true
        }
      )
      .pipe(
        tap(() => {
          this.atualizarCache(
            this.exemplaresAtuais.filter(item => item.id !== id)
          );
          this.invalidarCachesRelacionados();
        })
      );
  }

  // GET: buscar pelo código de barras.
  buscarPorCodigoBarras(
    codigoBarras: string
  ): Observable<Exemplar> {
    const existente = this.exemplaresAtuais.find(
      item => item.codigoBarras === codigoBarras
    );

    if (existente) {
      return of(existente);
    }

    return this.http.get<ExemplarApi>(
      `${environment.apiUrl}/getExemplar/${encodeURIComponent(codigoBarras)}`,
      { withCredentials: true }
    ).pipe(map(exemplar => this.normalizarExemplar({
      ...exemplar,
      LivroId: exemplar.LivroId ?? exemplar.Livro?.LivroId,
      NomeLivro: exemplar.NomeLivro ?? exemplar.Livro?.Titulo
    })));
  }

  // Atualiza os dados compartilhados após POST ou PUT.
  private sincronizarAposMutacao(
    exemplar: Exemplar
  ): Observable<Exemplar> {
    this.atualizarOuAdicionar(exemplar);

    return of(exemplar);
  }

  // Invalida o cache para buscar novamente do backend.
  limparCache(): void {
    this.invalidarCachesRelacionados();
  }

  private invalidarCachesRelacionados(): void {
    this.cache.limpar();
  }

  // Força a atualização da lista a partir da API.
  recarregar(): Observable<Exemplar[]> {
    return this.listar(true);
  }
}
