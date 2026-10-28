import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';
import { ExemplaresService } from './ExemplaresService';

export interface Aluguel {
  id: number;
  alugatarioId: number;
  nomeLocatario: string;
  exemplarId: number;
  codigoBarras: string;
  livro: string;
  dataAluguel?: string;
  dataDevolucaoPrevista?: string;
  dataDevolucaoReal?: string;
  status: string;
  observacoes?: string;
  usuarioResponsavel?: string;
  usuarioDevolucao?: string;
}

export interface CriarAluguelDto {
  alugatarioId?: number;
  nomeAlugatario?: string;
  exemplarId?: number;
  codigoBarras?: string;
  observacoes?: string;
}

export interface IdentificarExemplarDto {
  exemplarId?: number;
  codigoBarras?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlugueisService {
  private readonly http = inject(HttpClient);
  private readonly cache = inject(CacheBibliotecaService);
  private readonly exemplaresService = inject(ExemplaresService);
  private readonly apiUrl = `${environment.apiUrl}/api/Alugueis`;
  private readonly cacheKey = 'alugueis:todos';
  private readonly alugueisSubject = new BehaviorSubject<Aluguel[]>([]);

  readonly alugueis$ = this.alugueisSubject.asObservable();

  get alugueisAtuais(): Aluguel[] {
    return this.alugueisSubject.value;
  }

  listar(forcarAtualizacao = false): Observable<Aluguel[]> {
    if (forcarAtualizacao) {
      this.cache.limpar(this.cacheKey);
    }

    return this.cache.obter(
      this.cacheKey,
      () => this.http.get<AluguelApi[]>(this.apiUrl, {
        withCredentials: true
      })
    ).pipe(
      map(alugueis => alugueis.map(aluguel => this.normalizar(aluguel))),
      tap(alugueis => this.alugueisSubject.next([...alugueis]))
    );
  }

  buscarPorId(id: number): Observable<Aluguel> {
    const existente = this.alugueisAtuais.find(aluguel => aluguel.id === id);
    if (existente) {
      return of(existente);
    }

    return this.http.get<AluguelApi>(`${this.apiUrl}/${id}`, {
      withCredentials: true
    }).pipe(map(aluguel => this.normalizar(aluguel)));
  }

  listarPorLocatario(alugatarioId: number): Observable<Aluguel[]> {
    const carregados = this.alugueisAtuais.filter(
      aluguel => aluguel.alugatarioId === alugatarioId
    );

    return carregados.length
      ? of(carregados)
      : this.http.get<AluguelApi[]>(
          `${this.apiUrl}/locatario/${alugatarioId}`,
          { withCredentials: true }
        ).pipe(
          map(alugueis => alugueis.map(aluguel => this.normalizar(aluguel)))
        );
  }

  criar(dados: CriarAluguelDto): Observable<Aluguel> {
    return this.http.post<AluguelApi>(this.apiUrl, this.montarPayload(dados), {
      withCredentials: true
    }).pipe(
      map(aluguel => this.normalizar(aluguel)),
      tap(aluguel => {
        this.atualizarCache(aluguel);
        this.exemplaresService.atualizarStatusCache(
          aluguel.exemplarId,
          1
        );
      }),
      tap(() => this.sincronizarCache())
    );
  }

  devolver(dados: IdentificarExemplarDto): Observable<Aluguel> {
    const payload = dados.exemplarId
      ? { ExemplarId: dados.exemplarId }
      : { CodigoBarras: dados.codigoBarras?.trim() };

    return this.http.put<AluguelApi>(
      `${this.apiUrl}/devolver`,
      payload,
      { withCredentials: true }
    ).pipe(
      map(aluguel => {
        const normalizado = this.normalizar(aluguel);
        const anterior = this.alugueisAtuais.find(
          item => item.id === normalizado.id ||
            (dados.exemplarId !== undefined &&
              item.exemplarId === dados.exemplarId)
        );
        return anterior
          ? { ...anterior, ...normalizado }
          : normalizado;
      }),
      tap(aluguel => {
        this.atualizarCache(aluguel);
        this.exemplaresService.atualizarStatusCache(
          aluguel.exemplarId,
          0
        );
      }),
      tap(() => this.sincronizarCache())
    );
  }

  limparCache(): void {
    this.cache.limpar(this.cacheKey);
    this.alugueisSubject.next([]);
  }

  private montarPayload(dados: CriarAluguelDto): Record<string, unknown> {
    const payload: Record<string, unknown> = {
      Observacoes: dados.observacoes?.trim() || undefined
    };

    if (dados.alugatarioId) {
      payload['AlugatarioId'] = dados.alugatarioId;
    } else {
      payload['NomeAlugatario'] = dados.nomeAlugatario?.trim();
    }

    if (dados.exemplarId) {
      payload['ExemplarId'] = dados.exemplarId;
    } else {
      payload['CodigoBarras'] = dados.codigoBarras?.trim();
    }

    return payload;
  }

  private atualizarCache(aluguel: Aluguel): void {
    const atuais = this.alugueisAtuais;
    const atualizados = atuais.some(item => item.id === aluguel.id)
      ? atuais.map(item => item.id === aluguel.id ? aluguel : item)
      : [...atuais, aluguel];
    this.alugueisSubject.next(atualizados);
  }

  private sincronizarCache(): void {
    this.cache.atualizar(this.cacheKey, this.alugueisAtuais);
  }

  private normalizar(dados: AluguelApi): Aluguel {
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
}

interface AluguelApi {
  id?: number;
  Id?: number;
  alugatarioId?: number;
  AlugatarioId?: number;
  nomeLocatario?: string | null;
  NomeLocatario?: string | null;
  exemplarId?: number;
  ExemplarId?: number;
  codigoBarras?: string | null;
  CodigoBarras?: string | null;
  livro?: string | null;
  Livro?: string | null;
  dataAluguel?: string;
  DataAluguel?: string;
  dataDevolucaoPrevista?: string;
  DataDevolucaoPrevista?: string;
  dataDevolucaoReal?: string;
  DataDevolucaoReal?: string;
  status?: string;
  Status?: string;
  observacoes?: string | null;
  Observacoes?: string | null;
  usuarioResponsavel?: string | null;
  UsuarioResponsavel?: string | null;
  usuarioDevolucao?: string | null;
  UsuarioDevolucao?: string | null;
}
