
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface LoginRequest {
  email: string;
  password: string;
  lembrarDeMim?: boolean;
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
}
