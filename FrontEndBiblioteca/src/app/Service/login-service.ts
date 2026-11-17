
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface LoginRequest {
  email: string;
  password: string;
  lembrarDeMim?: boolean;
}

export interface UserInfo {
  email?: string;
  userName?: string;
  name?: string;
  id?: string;
  isEmailConfirmed?: boolean;
  roles?: string[];
}

export interface MeuUsuario {
  id: string;
  nome: string;
  email: string;
  emailConfirmado: boolean;
  funcoes: string[];
}

export interface AtualizarUsuarioRequest {
  nome: string;
}

export interface CriarUsuarioRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface UsuarioCriado {
  id: string;
  nome: string;
  email: string;
  funcoes: string[];
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  login(dados: LoginRequest): Observable<unknown> {
    const usarCookieDeSessao = !dados.lembrarDeMim;

    return this.http.post(
      `${this.apiUrl}/api/auth/login?useCookies=true&useSessionCookies=${usarCookieDeSessao}`,
      {
        email: dados.email,
        password: dados.password
      },
      {
        withCredentials: true
      }
    );
  }

  logout(): Observable<unknown> {
    return this.http.post(
      `${this.apiUrl}/api/auth/logout`,
      {},
      {
        withCredentials: true
      }
    );
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(
      `${this.apiUrl}/api/auth/manage/info`,
      { withCredentials: true }
    );
  }

  getMeuUsuario(): Observable<MeuUsuario> {
    return this.http.get<MeuUsuario>(
      `${this.apiUrl}/api/Usuarios/me`,
      { withCredentials: true }
    );
  }

  atualizarMeuUsuario(
    dados: AtualizarUsuarioRequest
  ): Observable<Pick<MeuUsuario, 'id' | 'nome'>> {
    return this.http.put<Pick<MeuUsuario, 'id' | 'nome'>>(
      `${this.apiUrl}/api/Usuarios/me`,
      dados,
      { withCredentials: true }
    );
  }

  criarUsuario(dados: CriarUsuarioRequest): Observable<UsuarioCriado> {
    return this.http.post<UsuarioCriado>(
      `${this.apiUrl}/api/Usuarios`,
      dados,
      { withCredentials: true }
    );
  }
}
