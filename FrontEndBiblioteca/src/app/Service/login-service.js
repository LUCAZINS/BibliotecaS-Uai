import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import * as i0 from "@angular/core";
export class LoginService {
    http = inject(HttpClient);
    apiUrl = environment.apiUrl;
    login(dados) {
        const usarCookieDeSessao = !dados.lembrarDeMim;
        return this.http.post(`${this.apiUrl}/api/auth/login?useCookies=true&useSessionCookies=${usarCookieDeSessao}`, {
            email: dados.email,
            password: dados.password
        }, {
            withCredentials: true
        });
    }
    logout() {
        return this.http.post(`${this.apiUrl}/api/auth/logout`, {}, {
            withCredentials: true
        });
    }
    getUserInfo() {
        return this.http.get(`${this.apiUrl}/api/auth/manage/info`, { withCredentials: true });
    }
    getMeuUsuario() {
        return this.http.get(`${this.apiUrl}/api/Usuarios/me`, { withCredentials: true });
    }
    atualizarMeuUsuario(dados) {
        return this.http.put(`${this.apiUrl}/api/Usuarios/me`, dados, { withCredentials: true });
    }
    criarUsuario(dados) {
        return this.http.post(`${this.apiUrl}/api/Usuarios`, dados, { withCredentials: true });
    }
    static ɵfac = function LoginService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
