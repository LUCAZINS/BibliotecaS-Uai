
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { CacheBibliotecaService } from './cache-biblioteca.service';

export interface Alugatario {
  id: number;
  nome?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  cpf?: string;
  dataNascimento?: string;
  livrosAlugados?: string;
}

export interface AlugatarioEstatisticas extends Alugatario {
  totalEmprestimos: number;
  emprestimosAtivos: number;
  emprestimosDevolvidos: number;
  primeiroEmprestimo?: string;
  ultimoEmprestimo?: string;
  livroMaisEmprestado?: {
    titulo: string;
    quantidade: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AlugatarioService {

  private readonly http = inject(HttpClient);
  private readonly cache = inject(CacheBibliotecaService);

  private readonly apiUrl =
    `${environment.apiUrl}/api/Alugatario`;
  private readonly cacheKey = 'alugatarios:todos';
  private readonly locatariosSubject =
    new BehaviorSubject<Alugatario[]>([]);

  readonly locatarios$ = this.locatariosSubject.asObservable();

  listar(): Observable<Alugatario[]> {
    return this.cache.obter(
      this.cacheKey,
      () => this.http.get<AlugatarioApi[]>(this.apiUrl, {
        withCredentials: true
      })
    ).pipe(
      map(locatarios =>
        locatarios.map(locatario => this.normalizar(locatario))
      ),
      tap(locatarios => this.locatariosSubject.next([...locatarios]))
    );
  }

  buscarPorId(id: number): Observable<Alugatario> {
    const existente = this.locatariosSubject.value.find(
      locatario => locatario.id === id
    );

    if (existente) {
      return of(existente);
    }

    return this.http.get<AlugatarioApi>(
      `${this.apiUrl}/${id}`,
      { withCredentials: true }
    ).pipe(map(locatario => this.normalizar(locatario)));
  }

  buscarPorCpf(cpf: string): Observable<Alugatario> {
    const valor = cpf.trim();
    return this.http.get<AlugatarioApi>(
      `${this.apiUrl}/buscarPorCpf/${encodeURIComponent(valor)}`,
      { withCredentials: true }
    ).pipe(map(locatario => this.normalizar(locatario)));
  }

  buscarEstatisticas(id: number): Observable<AlugatarioEstatisticas> {
    return this.http.get<AlugatarioEstatisticasApi>(
      `${this.apiUrl}/${id}/estatisticas`,
      { withCredentials: true }
    ).pipe(map(dados => this.normalizarEstatisticas(dados)));
  }

  criar(dados: Partial<Alugatario>): Observable<Alugatario> {
    return this.http.post<AlugatarioApi>(this.apiUrl, dados, {
      withCredentials: true
    }).pipe(
      map(locatario => this.normalizar(locatario)),
      tap(locatario => {
        this.atualizarLocatario(locatario);
        this.invalidarCache();
      })
    );
  }

  atualizar(id: number, dados: Partial<Alugatario>): Observable<Alugatario> {
    return this.http.put<AlugatarioApi>(
      `${this.apiUrl}/${id}`,
      dados,
      { withCredentials: true }
    ).pipe(
      map(locatario => this.normalizar(locatario)),
      tap(locatario => {
        this.atualizarLocatario(locatario);
        this.invalidarCache();
      })
    );
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.locatariosSubject.next(
          this.locatariosSubject.value.filter(
            locatario => locatario.id !== id
          )
        );
        this.invalidarCache();
      })
    );
  }

  limparCache(): void {
    this.invalidarCache();
  }

  private atualizarLocatario(locatario: Alugatario): void {
    const atuais = this.locatariosSubject.value;
    const existe = atuais.some(item => item.id === locatario.id);
    const atualizados = existe
      ? atuais.map(item => item.id === locatario.id ? locatario : item)
      : [...atuais, locatario];

    this.locatariosSubject.next(atualizados);
  }

  private invalidarCache(): void {
    this.cache.limpar();
  }

  private normalizar(dados: AlugatarioApi): Alugatario {
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

  private normalizarEstatisticas(
    dados: AlugatarioEstatisticasApi
  ): AlugatarioEstatisticas {
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
}

interface AlugatarioApi {
  id?: number;
  Id?: number;
  nome?: string | null;
  Nome?: string | null;
  email?: string | null;
  Email?: string | null;
  telefone?: string | null;
  Telefone?: string | null;
  endereco?: string | null;
  Endereco?: string | null;
  cpf?: string | null;
  CPF?: string | null;
  dataNascimento?: string;
  DataNascimento?: string;
  livrosAlugados?: string;
  LivrosAlugados?: string;
}

interface AlugatarioEstatisticasApi extends AlugatarioApi {
  totalEmprestimos?: number;
  TotalEmprestimos?: number;
  emprestimosAtivos?: number;
  EmprestimosAtivos?: number;
  emprestimosDevolvidos?: number;
  EmprestimosDevolvidos?: number;
  primeiroEmprestimo?: string;
  PrimeiroEmprestimo?: string;
  ultimoEmprestimo?: string;
  UltimoEmprestimo?: string;
  livroMaisEmprestado?: {
    titulo: string;
    quantidade: number;
  };
  LivroMaisEmprestado?: {
    Titulo: string;
    Quantidade: number;
  };
}
