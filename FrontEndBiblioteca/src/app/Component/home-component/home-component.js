import { Component, inject } from '@angular/core';
import { LoginService } from '../../Service/login-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LivrosService } from '../../Service/livros-service';
import { ExemplaresService } from '../../Service/ExemplaresService';
import { AlugatarioService } from '../../Service/alugatarioService';
import { AlugueisService } from '../../Service/alugueis-service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
export class HomeComponent {
    loginService = inject(LoginService);
    router = inject(Router);
    livrosService = inject(LivrosService);
    exemplaresService = inject(ExemplaresService);
    alugatarioService = inject(AlugatarioService);
    alugueisService = inject(AlugueisService);
    livros = [];
    erro = '';
    carregando = false;
    ngOnInit() {
        this.preCarregarDados();
    }
    preCarregarDados() {
        this.livrosService.buscarTodos().subscribe({
            next: livros => {
                console.log(`[HOME] Cache de livros preparado: ${livros.length} livros`);
            },
            error: erro => {
                console.error('[HOME] Falha ao carregar livros:', erro);
            }
        });
        this.exemplaresService.listar().subscribe({
            next: exemplares => {
                console.log(`[HOME] Cache de exemplares preparado: ${exemplares.length} exemplares`);
            },
            error: erro => {
                console.error('[HOME] Falha ao carregar exemplares:', erro);
            }
        });
        this.alugatarioService.listar().subscribe({
            next: locatarios => {
                console.log(`[HOME] Cache de locatários preparado: ${locatarios.length} locatários`);
            },
            error: erro => {
                console.error('[HOME] Falha ao carregar locatários:', erro);
            }
        });
        this.alugueisService.listar().subscribe({
            next: alugueis => {
                console.log(`[HOME] Cache de empréstimos preparado: ${alugueis.length} empréstimos`);
            },
            error: erro => {
                console.error('[HOME] Falha ao carregar empréstimos:', erro);
            }
        });
    }
    carregarLivros() {
        this.carregando = true;
        this.erro = '';
        this.livrosService.buscarTodos().subscribe({
            next: (dados) => {
                this.livros = dados;
                console.log('Livros carregados:', this.livros);
                this.carregando = false;
            },
            error: (err) => {
                console.error('Erro ao buscar livros:', err);
                this.erro = 'Não foi possível carregar os livros.';
                this.carregando = false;
            }
        });
    }
    Logout() {
        this.loginService.logout().subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.error('Erro no logout:', err);
                this.erro = 'Não foi possível realizar o logout.';
            }
        });
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home-component"]], decls: 58, vars: 2, consts: [[1, "dashboard"], [1, "sidebar"], [1, "brand"], [1, "brand-icon"], ["src", "/images (1).jpg", "alt", "Logo da Biblioteca"], [1, "menu-label"], [1, "navigation"], ["routerLink", "/Barra/home", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "nav-icon"], ["routerLink", "/Barra/livros", "routerLinkActive", "active"], ["routerLink", "/Barra/exemplares", "routerLinkActive", "active"], ["routerLink", "/Barra/alugueis", "routerLinkActive", "active"], ["routerLink", "/Barra/alugatarios", "routerLinkActive", "active"], ["routerLink", "/Barra/perfil", "routerLinkActive", "active"], [1, "sidebar-bottom"], ["href", "https://wa.me/5538998393623?text=Ol\u00E1!%20Preciso%20de%20suporte%20no%20sistema%20da%20biblioteca.", "target", "_blank", "rel", "noopener noreferrer", 1, "sidebar-help"], [1, "help-icon"], [1, "help-button"], ["type", "button", 1, "logout-button", 3, "click"], [1, "sidebar-footer"], [1, "status-dot"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div")(6, "h2");
            i0.ɵɵtext(7, "Biblioteca");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtext(9, "MENU PRINCIPAL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "nav", 6)(11, "a", 7)(12, "span", 8);
            i0.ɵɵtext(13, "\u2302");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "Vis\u00E3o geral");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "a", 9)(17, "span", 8);
            i0.ɵɵtext(18, "\u25A4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20, "Livros");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "a", 10)(22, "span", 8);
            i0.ɵɵtext(23, "\u25A5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span");
            i0.ɵɵtext(25, "Exemplares");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "a", 11)(27, "span", 8);
            i0.ɵɵtext(28, "\u21C4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30, "Empr\u00E9stimos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "a", 12)(32, "span", 8);
            i0.ɵɵtext(33, "\u2659");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35, "Leitores");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "a", 13)(37, "span", 8);
            i0.ɵɵtext(38, "\u2659");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "Meu Perfil");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 14)(42, "a", 15)(43, "div", 16);
            i0.ɵɵtext(44, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 17)(46, "strong");
            i0.ɵɵtext(47, "Central de ajuda");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "span");
            i0.ɵɵtext(49, "Precisa de suporte?");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(50, "button", 18);
            i0.ɵɵlistener("click", function HomeComponent_Template_button_click_50_listener() { return ctx.Logout(); });
            i0.ɵɵelementStart(51, "span", 8);
            i0.ɵɵtext(52, "\u21AA");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(53, " Sair do sistema ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 19);
            i0.ɵɵelement(55, "span", 20);
            i0.ɵɵtext(56, " Sistema operacional ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(57, "router-outlet");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [CommonModule,
            FormsModule,
            RouterOutlet,
            RouterLinkActive,
            RouterLink], styles: ["\r\n.dashboard[_ngcontent-%COMP%] {\r\n  \r\n  min-height: 100vh;\r\n  background: #f5f7fb;\r\n  color: #1e293b;\r\n  font-family: \"Inter\", \"Segoe UI\", sans-serif;\r\n}\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 260px;\r\n  height: 100vh;\r\n  padding: 26px 18px 18px;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n  background: #111827;\r\n  color: #f8fafc;\r\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\r\n}\r\n\r\n\r\n.brand[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-height: 48px;\r\n  margin-bottom: 38px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.brand-icon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 46px;\r\n  height: 46px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  background: #ffffff;\r\n}\r\n\r\n.brand-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 3px;\r\n  box-sizing: border-box;\r\n  object-fit: contain;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #ffffff;\r\n  font-size: 21px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n\r\n.menu-label[_ngcontent-%COMP%] {\r\n  margin: 0 0 13px 10px;\r\n  color: #8490a5;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  letter-spacing: 1.5px;\r\n}\r\n\r\n\r\n.navigation[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  min-height: 46px;\r\n  padding: 0 13px;\r\n  box-sizing: border-box;\r\n  border-radius: 10px;\r\n  color: #b8c2d2;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    color 0.2s ease,\r\n    transform 0.2s ease;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: rgba(255, 255, 255, 0.07);\r\n  color: #ffffff;\r\n  transform: translateX(3px);\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], \r\n.navigation[_ngcontent-%COMP%]   a[aria-current=\"page\"][_ngcontent-%COMP%] {\r\n  background: #2563eb;\r\n  color: #ffffff;\r\n  box-shadow: 0 5px 14px rgba(37, 99, 235, 0.22);\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 23px;\r\n  font-size: 21px;\r\n  line-height: 1;\r\n}\r\n\r\n\r\n.sidebar-bottom[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-top: auto;\r\n  padding-top: 30px;\r\n}\r\n\r\n\r\n.sidebar-help[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n  width: 100%;\r\n  min-width: 0;\r\n  padding: 13px 11px;\r\n  box-sizing: border-box;\r\n  border: 1px solid rgba(255, 255, 255, 0.09);\r\n  border-radius: 12px;\r\n  background: rgba(255, 255, 255, 0.045);\r\n  color: #f8fafc;\r\n  text-decoration: none;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    border-color 0.2s ease;\r\n}\r\n\r\n.sidebar-help[_ngcontent-%COMP%]:hover {\r\n  background: rgba(255, 255, 255, 0.09);\r\n  border-color: rgba(255, 255, 255, 0.17);\r\n}\r\n\r\n.help-icon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 31px;\r\n  height: 31px;\r\n  border-radius: 9px;\r\n  background: rgba(59, 130, 246, 0.18);\r\n  color: #93c5fd;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.help-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  min-width: 0;\r\n}\r\n\r\n.help-button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #f8fafc;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.help-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #9ca9bc;\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n.logout-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  width: 100%;\r\n  min-height: 45px;\r\n  padding: 0 13px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background: transparent;\r\n  color: #b8c2d2;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    color 0.2s ease;\r\n}\r\n\r\n.logout-button[_ngcontent-%COMP%]:hover {\r\n  background: rgba(239, 68, 68, 0.12);\r\n  color: #fca5a5;\r\n}\r\n\r\n.logout-button[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n}\r\n\r\n\r\n.sidebar-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  padding: 15px 8px 3px;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.09);\r\n  color: #9ca9bc;\r\n  font-size: 11px;\r\n}\r\n\r\n.status-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px rgba(34, 197, 94, 0.45);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.sidebar) {\r\n  min-width: 0;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n    padding: 22px 13px 15px;\r\n  }\r\n\r\n  .dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.sidebar) {\r\n    margin-left: 220px;\r\n  }\r\n\r\n  .brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    padding: 20px 9px 12px;\r\n  }\r\n\r\n  .brand[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n    padding: 0;\r\n  }\r\n\r\n  .brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \r\n   .menu-label[_ngcontent-%COMP%], \r\n   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.nav-icon), \r\n   .help-button[_ngcontent-%COMP%], \r\n   .logout-button[_ngcontent-%COMP%]:not(.nav-icon), \r\n   .sidebar-footer[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .sidebar-help[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .help-icon[_ngcontent-%COMP%] {\r\n    width: 31px;\r\n    height: 31px;\r\n  }\r\n\r\n  .logout-button[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.sidebar) {\r\n    margin-left: 75px;\r\n  }\r\n}\r\n\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \r\n   .sidebar-help[_ngcontent-%COMP%], \r\n   .logout-button[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  min-width: 0;\r\n  min-height: 100vh;\r\n  margin-left: 260px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  [_nghost-%COMP%] {\r\n    margin-left: 220px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  [_nghost-%COMP%] {\r\n    margin-left: 75px;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    RouterOutlet,
                    RouterLinkActive,
                    RouterLink
                ], selector: 'app-home-component', template: "\r\n<div class=\"dashboard\">\r\n\r\n  <!-- Menu lateral -->\r\n  <aside class=\"sidebar\">\r\n    <div class=\"brand\">\r\n      <div class=\"brand-icon\">\r\n        <img src=\"/images (1).jpg\" alt=\"Logo da Biblioteca\">\r\n    </div>\r\n      <div>\r\n        <h2>Biblioteca</h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"menu-label\">MENU PRINCIPAL</div>\r\n\r\n    <nav class=\"navigation\">\r\n  <a\r\n  routerLink=\"/Barra/home\"\r\n  routerLinkActive=\"active\"\r\n  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n  <span class=\"nav-icon\">\u2302</span>\r\n  <span>Vis\u00E3o geral</span>\r\n</a>\r\n\r\n  <a routerLink=\"/Barra/livros\" routerLinkActive=\"active\">\r\n    <span class=\"nav-icon\">\u25A4</span>\r\n    <span>Livros</span>\r\n  </a>\r\n\r\n  <a routerLink=\"/Barra/exemplares\" routerLinkActive=\"active\">\r\n    <span class=\"nav-icon\">\u25A5</span>\r\n    <span>Exemplares</span>\r\n  </a>\r\n\r\n  <a routerLink=\"/Barra/alugueis\" routerLinkActive=\"active\">\r\n    <span class=\"nav-icon\">\u21C4</span>\r\n    <span>Empr\u00E9stimos</span>\r\n  </a>\r\n\r\n  <a routerLink=\"/Barra/alugatarios\" routerLinkActive=\"active\">\r\n    <span class=\"nav-icon\">\u2659</span>\r\n    <span>Leitores</span>\r\n  </a>\r\n\r\n  <a routerLink=\"/Barra/perfil\" routerLinkActive=\"active\">\r\n    <span class=\"nav-icon\">\u2659</span>\r\n    <span>Meu Perfil</span>\r\n  </a>\r\n</nav>\r\n\r\n    <div class=\"sidebar-bottom\">\r\n    <a\r\n        href=\"https://wa.me/5538998393623?text=Ol\u00E1!%20Preciso%20de%20suporte%20no%20sistema%20da%20biblioteca.\"\r\n        target=\"_blank\"\r\n        rel=\"noopener noreferrer\"\r\n        class=\"sidebar-help\">\r\n\r\n        <div class=\"help-icon\">i</div>\r\n\r\n        <div class=\"help-button\">\r\n            <strong>Central de ajuda</strong>\r\n            <span>Precisa de suporte?</span>\r\n        </div>\r\n    </a>\r\n\r\n      <button class=\"logout-button\" type=\"button\" (click)=\"Logout()\">\r\n        <span class=\"nav-icon\">\u21AA</span>\r\n        Sair do sistema\r\n      </button>\r\n\r\n      <div class=\"sidebar-footer\">\r\n        <span class=\"status-dot\"></span>\r\n        Sistema operacional\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  \r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n  ", styles: ["\r\n/* ===== LAYOUT PRINCIPAL ===== */\r\n.dashboard {\r\n  /* display: flex; */\r\n  min-height: 100vh;\r\n  background: #f5f7fb;\r\n  color: #1e293b;\r\n  font-family: \"Inter\", \"Segoe UI\", sans-serif;\r\n}\r\n\r\n/* ===== MENU LATERAL ===== */\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 260px;\r\n  height: 100vh;\r\n  padding: 26px 18px 18px;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n  background: #111827;\r\n  color: #f8fafc;\r\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\r\n}\r\n\r\n/* ===== LOGO E IDENTIFICA\u00C7\u00C3O ===== */\r\n.brand {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-height: 48px;\r\n  margin-bottom: 38px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.brand-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 46px;\r\n  height: 46px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  background: #ffffff;\r\n}\r\n\r\n.brand-icon img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 3px;\r\n  box-sizing: border-box;\r\n  object-fit: contain;\r\n}\r\n\r\n.brand h2 {\r\n  margin: 0;\r\n  color: #ffffff;\r\n  font-size: 21px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n/* ===== T\u00CDTULO DO MENU ===== */\r\n.menu-label {\r\n  margin: 0 0 13px 10px;\r\n  color: #8490a5;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  letter-spacing: 1.5px;\r\n}\r\n\r\n/* ===== NAVEGA\u00C7\u00C3O ===== */\r\n.navigation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n}\r\n\r\n.navigation a {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  min-height: 46px;\r\n  padding: 0 13px;\r\n  box-sizing: border-box;\r\n  border-radius: 10px;\r\n  color: #b8c2d2;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    color 0.2s ease,\r\n    transform 0.2s ease;\r\n}\r\n\r\n.navigation a:hover {\r\n  background: rgba(255, 255, 255, 0.07);\r\n  color: #ffffff;\r\n  transform: translateX(3px);\r\n}\r\n\r\n.navigation a.active,\r\n.navigation a[aria-current=\"page\"] {\r\n  background: #2563eb;\r\n  color: #ffffff;\r\n  box-shadow: 0 5px 14px rgba(37, 99, 235, 0.22);\r\n}\r\n\r\n.nav-icon {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 23px;\r\n  font-size: 21px;\r\n  line-height: 1;\r\n}\r\n\r\n/* ===== PARTE INFERIOR DA SIDEBAR ===== */\r\n.sidebar-bottom {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-top: auto;\r\n  padding-top: 30px;\r\n}\r\n\r\n/* ===== CENTRAL DE AJUDA ===== */\r\n.sidebar-help {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n  width: 100%;\r\n  min-width: 0;\r\n  padding: 13px 11px;\r\n  box-sizing: border-box;\r\n  border: 1px solid rgba(255, 255, 255, 0.09);\r\n  border-radius: 12px;\r\n  background: rgba(255, 255, 255, 0.045);\r\n  color: #f8fafc;\r\n  text-decoration: none;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    border-color 0.2s ease;\r\n}\r\n\r\n.sidebar-help:hover {\r\n  background: rgba(255, 255, 255, 0.09);\r\n  border-color: rgba(255, 255, 255, 0.17);\r\n}\r\n\r\n.help-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  width: 31px;\r\n  height: 31px;\r\n  border-radius: 9px;\r\n  background: rgba(59, 130, 246, 0.18);\r\n  color: #93c5fd;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.help-button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  min-width: 0;\r\n}\r\n\r\n.help-button strong {\r\n  color: #f8fafc;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.help-button span {\r\n  color: #9ca9bc;\r\n  font-size: 11px;\r\n}\r\n\r\n/* ===== BOT\u00C3O SAIR ===== */\r\n.logout-button {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  width: 100%;\r\n  min-height: 45px;\r\n  padding: 0 13px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background: transparent;\r\n  color: #b8c2d2;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition:\r\n    background-color 0.2s ease,\r\n    color 0.2s ease;\r\n}\r\n\r\n.logout-button:hover {\r\n  background: rgba(239, 68, 68, 0.12);\r\n  color: #fca5a5;\r\n}\r\n\r\n.logout-button .nav-icon {\r\n  font-size: 21px;\r\n}\r\n\r\n/* ===== STATUS DO SISTEMA ===== */\r\n.sidebar-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  padding: 15px 8px 3px;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.09);\r\n  color: #9ca9bc;\r\n  font-size: 11px;\r\n}\r\n\r\n.status-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px rgba(34, 197, 94, 0.45);\r\n}\r\n\r\n/* ===== \u00C1REA CENTRAL DAS TELAS ===== */\r\n/* O router-outlet \u00E9 substitu\u00EDdo pelo componente da rota.\r\n   Por isso, a margem deve ficar nos componentes exibidos\r\n   ou em um cont\u00EAiner que envolva o router-outlet. */\r\n\r\n.dashboard > *:not(.sidebar) {\r\n  min-width: 0;\r\n}\r\n\r\n/* ===== RESPONSIVIDADE ===== */\r\n@media (max-width: 768px) {\r\n  .sidebar {\r\n    width: 220px;\r\n    padding: 22px 13px 15px;\r\n  }\r\n\r\n  .dashboard > *:not(.sidebar) {\r\n    margin-left: 220px;\r\n  }\r\n\r\n  .brand h2 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .sidebar {\r\n    width: 75px;\r\n    padding: 20px 9px 12px;\r\n  }\r\n\r\n  .brand {\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n    padding: 0;\r\n  }\r\n\r\n  .brand h2,\r\n  .menu-label,\r\n  .navigation a span:not(.nav-icon),\r\n  .help-button,\r\n  .logout-button:not(.nav-icon),\r\n  .sidebar-footer {\r\n    display: none;\r\n  }\r\n\r\n  .navigation a {\r\n    justify-content: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .sidebar-help {\r\n    justify-content: center;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  .help-icon {\r\n    width: 31px;\r\n    height: 31px;\r\n  }\r\n\r\n  .logout-button {\r\n    justify-content: center;\r\n    padding: 0;\r\n  }\r\n\r\n  .dashboard > *:not(.sidebar) {\r\n    margin-left: 75px;\r\n  }\r\n}\r\n\r\n/* ===== ACESSIBILIDADE ===== */\r\n@media (prefers-reduced-motion: reduce) {\r\n  .navigation a,\r\n  .sidebar-help,\r\n  .logout-button {\r\n    transition: none;\r\n  }\r\n}\r\n:host {\r\n  display: block;\r\n  min-width: 0;\r\n  min-height: 100vh;\r\n  margin-left: 260px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  :host {\r\n    margin-left: 220px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  :host {\r\n    margin-left: 75px;\r\n  }\r\n}\r\n\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/component/home-component/home-component.ts", lineNumber: 32 }); })();
