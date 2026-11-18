import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../Service/login-service';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.erro, " ");
} }
export class LoginComponent {
    loginService = inject(LoginService);
    router = inject(Router);
    email = '';
    senha = '';
    twoFactorCode = '';
    twoFactorRecoveryCode = '';
    erro = '';
    carregando = false;
    lembrarDeMim = false;
    entrar() {
        this.erro = '';
        if (!this.email.trim() || !this.senha) {
            this.erro = 'Informe o e-mail e a senha.';
            return;
        }
        this.carregando = true;
        this.loginService.login({
            email: this.email.trim(),
            password: this.senha,
            lembrarDeMim: this.lembrarDeMim
        }).subscribe({
            next: () => {
                this.carregando = false;
                this.router.navigate(['/Barra/home']);
            },
            error: (err) => {
                this.carregando = false;
                console.error('Erro no login:', err);
                if (err.status === 401) {
                    this.erro = 'E-mail ou senha inválidos.';
                }
                else if (err.status === 400) {
                    this.erro = 'Dados inválidos. Confira as informações.';
                }
                else if (err.status === 0) {
                    this.erro =
                        'Não foi possível conectar à API. Verifique o backend e o CORS.';
                }
                else {
                    this.erro = 'Não foi possível realizar o login.';
                }
            }
        });
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login-component"]], decls: 32, vars: 5, consts: [["loginForm", "ngForm"], [1, "login-container"], [1, "login-card"], [1, "logo-container"], ["src", "images (1).jpg", "alt", "Logo da empresa", 1, "logo"], [1, "login-header"], ["class", "erro-login", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "seuemail@empresa.com", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel"], ["for", "senha"], ["type", "password", "id", "senha", "name", "senha", "placeholder", "Digite sua senha", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "ngModel"], [1, "login-options"], [1, "remember-option"], ["type", "checkbox", "name", "lembrar", 3, "ngModelChange", "ngModel"], ["routerLink", "/recuperar-senha"], ["type", "submit", 1, "login-button", 3, "disabled"], [1, "login-footer"], [1, "erro-login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
            i0.ɵɵelement(3, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 5)(5, "h1");
            i0.ɵɵtext(6, "Bem-vindo de volta!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Entre com suas credenciais para continuar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, LoginComponent_p_9_Template, 2, 1, "p", 6);
            i0.ɵɵelementStart(10, "form", 7, 0);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.entrar(); });
            i0.ɵɵelementStart(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 10);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 8)(17, "label", 11);
            i0.ɵɵtext(18, "Senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "input", 12);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.senha, $event) || (ctx.senha = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 13)(21, "label", 14)(22, "input", 15);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.lembrarDeMim, $event) || (ctx.lembrarDeMim = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Lembrar de mim");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "a", 16);
            i0.ɵɵtext(26, " Esqueceu a senha? ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "button", 17);
            i0.ɵɵtext(28, " Entrar ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 18)(30, "p");
            i0.ɵɵtext(31, "\u00A9 2026 Sua Empresa. Todos os direitos reservados.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const loginForm_r3 = i0.ɵɵreference(11);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.erro);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.senha);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.lembrarDeMim);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", loginForm_r3.invalid);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.NgModel, i2.NgForm, RouterLink], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100vh;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.login-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  background: linear-gradient(135deg, #7f7f80, #a6a7aa, #ffffff);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.login-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 40px;\r\n  background: #ffffff;\r\n  border-radius: 18px;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 28px;\r\n  min-height: 80px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 180px;\r\n  max-height: 80px;\r\n  object-fit: contain;\r\n}\r\n\r\n.login-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0 0 10px;\r\n  color: #111827;\r\n  font-size: 26px;\r\n  font-weight: 700;\r\n}\r\n\r\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #6b7280;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #374151;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 13px 14px;\r\n  border: 1px solid #d1d5db;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  font-size: 14px;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: #2563eb;\r\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\r\n}\r\n\r\n.login-options[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  margin: 4px 0 24px;\r\n  font-size: 12px;\r\n}\r\n\r\n.remember-option[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: #4b5563;\r\n  cursor: pointer;\r\n}\r\n\r\n.login-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2563eb;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.login-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 14px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #2563eb;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s, transform 0.2s;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background: #4a7ef0;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.login-footer[_ngcontent-%COMP%] {\r\n  margin-top: 28px;\r\n  text-align: center;\r\n}\r\n\r\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #9ca3af;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .login-container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n\r\n  .login-card[_ngcontent-%COMP%] {\r\n    padding: 28px 22px;\r\n  }\r\n\r\n  .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n  }\r\n}\r\n\r\n\r\n.erro-login[_ngcontent-%COMP%] {\r\n  margin-bottom: 16px;\r\n  color: #dc2626;\r\n  font-size: 13px;\r\n  text-align: center;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ imports: [
                    CommonModule,
                    FormsModule,
                    RouterLink
                ], standalone: true, selector: 'app-login-component', template: "\r\n<div class=\"login-container\">\r\n  <div class=\"login-card\">\r\n\r\n    <!-- Espa\u00E7o reservado para a logo -->\r\n    <div class=\"logo-container\">\r\n      <img\r\n        src=\"images (1).jpg\"\r\n        alt=\"Logo da empresa\"\r\n        class=\"logo\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"login-header\">\r\n      <h1>Bem-vindo de volta!</h1>\r\n      <p>Entre com suas credenciais para continuar.</p>\r\n    </div>\r\n    <p class=\"erro-login\" *ngIf=\"erro\">\r\n    {{ erro }}\r\n    </p>\r\n    <form (ngSubmit)=\"entrar()\" #loginForm=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-mail</label>\r\n        <input\r\n          type=\"email\"\r\n          id=\"email\"\r\n          name=\"email\"\r\n          [(ngModel)]=\"email\"\r\n          placeholder=\"seuemail@empresa.com\"\r\n          autocomplete=\"username\"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"senha\">Senha</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"senha\"\r\n          name=\"senha\"\r\n          [(ngModel)]=\"senha\"\r\n          placeholder=\"Digite sua senha\"\r\n          autocomplete=\"current-password\"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class=\"login-options\">\r\n        <label class=\"remember-option\">\r\n        <input\r\n          type=\"checkbox\"\r\n          name=\"lembrar\"\r\n          [(ngModel)]=\"lembrarDeMim\"\r\n        />\r\n        <span>Lembrar de mim</span>\r\n      </label>\r\n\r\n        <a routerLink=\"/recuperar-senha\">\r\n          Esqueceu a senha?\r\n        </a>\r\n      </div>\r\n\r\n      <button\r\n        type=\"submit\"\r\n        class=\"login-button\"\r\n        [disabled]=\"loginForm.invalid\"\r\n      >\r\n        Entrar\r\n      </button>\r\n\r\n    </form>\r\n\r\n    <div class=\"login-footer\">\r\n      <p>\u00A9 2026 Sua Empresa. Todos os direitos reservados.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["\r\n:host {\r\n  display: block;\r\n  min-height: 100vh;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.login-container {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  background: linear-gradient(135deg, #7f7f80, #a6a7aa, #ffffff);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.login-card {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 40px;\r\n  background: #ffffff;\r\n  border-radius: 18px;\r\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 28px;\r\n  min-height: 80px;\r\n}\r\n\r\n.logo {\r\n  display: block;\r\n  max-width: 180px;\r\n  max-height: 80px;\r\n  object-fit: contain;\r\n}\r\n\r\n.login-header {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.login-header h1 {\r\n  margin: 0 0 10px;\r\n  color: #111827;\r\n  font-size: 26px;\r\n  font-weight: 700;\r\n}\r\n\r\n.login-header p {\r\n  margin: 0;\r\n  color: #6b7280;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group label {\r\n  color: #374151;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.form-group input {\r\n  width: 100%;\r\n  padding: 13px 14px;\r\n  border: 1px solid #d1d5db;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  font-size: 14px;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.form-group input:focus {\r\n  border-color: #2563eb;\r\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\r\n}\r\n\r\n.login-options {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  margin: 4px 0 24px;\r\n  font-size: 12px;\r\n}\r\n\r\n.remember-option {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: #4b5563;\r\n  cursor: pointer;\r\n}\r\n\r\n.login-options a {\r\n  color: #2563eb;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.login-options a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.login-button {\r\n  width: 100%;\r\n  padding: 14px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #2563eb;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s, transform 0.2s;\r\n}\r\n\r\n.login-button:hover:not(:disabled) {\r\n  background: #4a7ef0;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.login-button:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.login-footer {\r\n  margin-top: 28px;\r\n  text-align: center;\r\n}\r\n\r\n.login-footer p {\r\n  margin: 0;\r\n  color: #9ca3af;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .login-container {\r\n    padding: 16px;\r\n  }\r\n\r\n  .login-card {\r\n    padding: 28px 22px;\r\n  }\r\n\r\n  .login-header h1 {\r\n    font-size: 23px;\r\n  }\r\n}\r\n\r\n\r\n.erro-login {\r\n  margin-bottom: 16px;\r\n  color: #dc2626;\r\n  font-size: 13px;\r\n  text-align: center;\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/component/login-component/login-component.ts", lineNumber: 19 }); })();
