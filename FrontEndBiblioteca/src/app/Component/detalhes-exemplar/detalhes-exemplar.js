import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ExemplaresService } from '../../Service/ExemplaresService';
import { AlugueisService } from '../../Service/alugueis-service';
import { CodigoBarrasComponent } from '../codigo-barras-component/codigo-barras-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DetalhesExemplarComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "Carregando detalhes do exemplar...");
    i0.ɵɵelementEnd();
} }
function DetalhesExemplarComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function DetalhesExemplarComponent_ng_container_5_app_codigo_barras_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-codigo-barras", 15);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("codigo", ctx_r0.exemplar.codigoBarras)("titulo", ctx_r0.exemplar.nomeLivro)("nomeArquivo", "exemplar-" + ctx_r0.exemplar.id);
} }
function DetalhesExemplarComponent_ng_container_5_div_47_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const aluguel_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", aluguel_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(aluguel_r2.nomeLocatario || "N\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 6, aluguel_r2.dataAluguel, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 9, aluguel_r2.dataDevolucaoPrevista, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 12, aluguel_r2.dataDevolucaoReal, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(aluguel_r2.status);
} }
function DetalhesExemplarComponent_ng_container_5_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "LOCAT\u00C1RIO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "DATA DO EMPR\u00C9STIMO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "DEVOLU\u00C7\u00C3O PREVISTA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "DEVOLU\u00C7\u00C3O REAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "STATUS");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵtemplate(17, DetalhesExemplarComponent_ng_container_5_div_47_tr_17_Template, 16, 15, "tr", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r0.emprestimos);
} }
function DetalhesExemplarComponent_ng_container_5_p_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1, " Nenhum empr\u00E9stimo foi realizado para este exemplar. ");
    i0.ɵɵelementEnd();
} }
function DetalhesExemplarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9)(7, "div")(8, "span");
    i0.ɵɵtext(9, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "span");
    i0.ɵɵtext(14, "Livro ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "span");
    i0.ɵɵtext(19, "C\u00F3digo de barras");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "span");
    i0.ɵɵtext(24, "Dias de aluguel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "span");
    i0.ɵɵtext(29, "Localiza\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "span");
    i0.ɵɵtext(34, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(37, DetalhesExemplarComponent_ng_container_5_app_codigo_barras_37_Template, 1, 3, "app-codigo-barras", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "section", 11)(39, "header", 12)(40, "div")(41, "h2");
    i0.ɵɵtext(42, "Empr\u00E9stimos realizados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "p");
    i0.ɵɵtext(44, "Hist\u00F3rico completo deste exemplar.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(47, DetalhesExemplarComponent_ng_container_5_div_47_Template, 18, 1, "div", 13)(48, DetalhesExemplarComponent_ng_container_5_p_48_Template, 2, 0, "p", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Exemplar #", ctx_r0.exemplar.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.nomeLivro || "Livro n\u00E3o informado");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.livroId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.codigoBarras);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.diasAluguel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar["endere\u00E7avel"] || "N\u00E3o informada");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.statusExemplar(ctx_r0.exemplar.status));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.exemplar.codigoBarras);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r0.emprestimos.length, " registro(s)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.emprestimos.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.emprestimos.length);
} }
export class DetalhesExemplarComponent {
    route = inject(ActivatedRoute);
    exemplaresService = inject(ExemplaresService);
    alugueisService = inject(AlugueisService);
    cdr = inject(ChangeDetectorRef);
    exemplar;
    emprestimos = [];
    carregando = true;
    erro = '';
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!Number.isInteger(id) || id <= 0) {
            this.erro = 'Exemplar inválido.';
            this.carregando = false;
            return;
        }
        this.exemplaresService.listar().subscribe({
            next: exemplares => {
                this.exemplar = exemplares.find(item => item.id === id);
                if (!this.exemplar) {
                    this.erro = 'Exemplar não encontrado.';
                    this.carregando = false;
                    this.cdr.detectChanges();
                    return;
                }
                this.alugueisService.listar().subscribe({
                    next: alugueis => {
                        this.emprestimos = alugueis.filter(aluguel => aluguel.exemplarId === id);
                        this.carregando = false;
                        this.cdr.detectChanges();
                    },
                    error: erro => this.mostrarErro(erro)
                });
            },
            error: erro => this.mostrarErro(erro)
        });
    }
    statusExemplar(status) {
        switch (status) {
            case 0:
                return 'Disponível';
            case 1:
                return 'Emprestado';
            case 2:
                return 'Manutenção';
            case 3:
                return 'Perdido';
            case 4:
                return 'Baixado';
            default:
                return 'Status desconhecido';
        }
    }
    mostrarErro(erro) {
        console.error('Erro ao carregar detalhes do exemplar:', erro);
        const resposta = erro?.error;
        this.erro = typeof resposta === 'string'
            ? resposta
            : resposta?.mensagem ||
                resposta?.message ||
                'Não foi possível carregar os detalhes do exemplar.';
        this.carregando = false;
        this.cdr.detectChanges();
    }
    static ɵfac = function DetalhesExemplarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetalhesExemplarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetalhesExemplarComponent, selectors: [["app-detalhes-exemplar"]], decls: 6, vars: 3, consts: [[1, "detalhes-exemplar"], ["routerLink", "/Barra/exemplares", 1, "voltar"], ["class", "estado", 4, "ngIf"], ["class", "erro", 4, "ngIf"], [4, "ngIf"], [1, "estado"], [1, "erro"], [1, "card"], [1, "identificador"], [1, "informacoes"], [3, "codigo", "titulo", "nomeArquivo", 4, "ngIf"], [1, "card", "historico"], [1, "cabecalho"], ["class", "tabela-wrapper", 4, "ngIf"], ["class", "sem-registros", 4, "ngIf"], [3, "codigo", "titulo", "nomeArquivo"], [1, "tabela-wrapper"], [4, "ngFor", "ngForOf"], [1, "sem-registros"]], template: function DetalhesExemplarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵtext(2, " \u2190 Voltar para exemplares ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DetalhesExemplarComponent_p_3_Template, 2, 0, "p", 2)(4, DetalhesExemplarComponent_p_4_Template, 2, 1, "p", 3)(5, DetalhesExemplarComponent_ng_container_5_Template, 49, 12, "ng-container", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.exemplar);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterLink, CodigoBarrasComponent, i1.DatePipe], styles: [".detalhes-exemplar[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado[_ngcontent-%COMP%], \r\n.erro[_ngcontent-%COMP%], \r\n.sem-registros[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin-bottom: 20px;\r\n  padding: 28px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.identificador[_ngcontent-%COMP%], \r\n.cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n  font-size: 28px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 28px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 6px;\r\n  font-size: 19px;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-wrapper[_ngcontent-%COMP%] {\r\n  overflow-x: auto;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 8px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\nth[_ngcontent-%COMP%], \r\ntd[_ngcontent-%COMP%] {\r\n  padding: 13px 14px;\r\n  border-bottom: 1px solid #edf0f4;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  background: #fafbfd;\r\n  font-size: 10px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n}\r\n\r\n.sem-registros[_ngcontent-%COMP%] {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-exemplar[_ngcontent-%COMP%] {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .cabecalho[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetalhesExemplarComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink, CodigoBarrasComponent], selector: 'app-detalhes-exemplar', template: "<main class=\"detalhes-exemplar\">\r\n  <a class=\"voltar\" routerLink=\"/Barra/exemplares\">\r\n    \u2190 Voltar para exemplares\r\n  </a>\r\n\r\n  <p *ngIf=\"carregando\" class=\"estado\">Carregando detalhes do exemplar...</p>\r\n  <p *ngIf=\"!carregando && erro\" class=\"erro\">{{ erro }}</p>\r\n\r\n  <ng-container *ngIf=\"!carregando && exemplar\">\r\n    <section class=\"card\">\r\n      <span class=\"identificador\">Exemplar #{{ exemplar.id }}</span>\r\n      <h1>{{ exemplar.nomeLivro || 'Livro n\u00E3o informado' }}</h1>\r\n\r\n      <div class=\"informacoes\">\r\n        <div><span>ID</span><strong>{{ exemplar.id }}</strong></div>\r\n        <div><span>Livro ID</span><strong>{{ exemplar.livroId }}</strong></div>\r\n        <div><span>C\u00F3digo de barras</span><strong>{{ exemplar.codigoBarras }}</strong></div>\r\n        <div><span>Dias de aluguel</span><strong>{{ exemplar.diasAluguel }}</strong></div>\r\n        <div><span>Localiza\u00E7\u00E3o</span><strong>{{ exemplar['endere\u00E7avel'] || 'N\u00E3o informada' }}</strong></div>\r\n        <div><span>Status</span><strong>{{ statusExemplar(exemplar.status) }}</strong></div>\r\n      </div>\r\n\r\n      <app-codigo-barras\r\n        *ngIf=\"exemplar.codigoBarras\"\r\n        [codigo]=\"exemplar.codigoBarras\"\r\n        [titulo]=\"exemplar.nomeLivro\"\r\n        [nomeArquivo]=\"'exemplar-' + exemplar.id\">\r\n      </app-codigo-barras>\r\n    </section>\r\n\r\n    <section class=\"card historico\">\r\n      <header class=\"cabecalho\">\r\n        <div>\r\n          <h2>Empr\u00E9stimos realizados</h2>\r\n          <p>Hist\u00F3rico completo deste exemplar.</p>\r\n        </div>\r\n        <strong>{{ emprestimos.length }} registro(s)</strong>\r\n      </header>\r\n\r\n      <div class=\"tabela-wrapper\" *ngIf=\"emprestimos.length\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>LOCAT\u00C1RIO</th>\r\n              <th>DATA DO EMPR\u00C9STIMO</th>\r\n              <th>DEVOLU\u00C7\u00C3O PREVISTA</th>\r\n              <th>DEVOLU\u00C7\u00C3O REAL</th>\r\n              <th>STATUS</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let aluguel of emprestimos\">\r\n              <td>#{{ aluguel.id }}</td>\r\n              <td>{{ aluguel.nomeLocatario || 'N\u00E3o informado' }}</td>\r\n              <td>{{ aluguel.dataAluguel | date:'dd/MM/yyyy' }}</td>\r\n              <td>{{ aluguel.dataDevolucaoPrevista | date:'dd/MM/yyyy' }}</td>\r\n              <td>{{ aluguel.dataDevolucaoReal | date:'dd/MM/yyyy' }}</td>\r\n              <td>{{ aluguel.status }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <p *ngIf=\"!emprestimos.length\" class=\"sem-registros\">\r\n        Nenhum empr\u00E9stimo foi realizado para este exemplar.\r\n      </p>\r\n    </section>\r\n  </ng-container>\r\n</main>\r\n", styles: [".detalhes-exemplar {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado,\r\n.erro,\r\n.sem-registros {\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro {\r\n  color: #b42318;\r\n}\r\n\r\n.card {\r\n  max-width: 1100px;\r\n  margin-bottom: 20px;\r\n  padding: 28px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.identificador,\r\n.cabecalho p {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\nh1 {\r\n  margin: 8px 0 0;\r\n  font-size: 28px;\r\n}\r\n\r\n.informacoes {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 28px;\r\n}\r\n\r\n.informacoes div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes span {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\n.informacoes strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.cabecalho {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.cabecalho h2 {\r\n  margin: 0 0 6px;\r\n  font-size: 19px;\r\n}\r\n\r\n.cabecalho p {\r\n  margin: 0;\r\n}\r\n\r\n.cabecalho > strong {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-wrapper {\r\n  overflow-x: auto;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 8px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 13px 14px;\r\n  border-bottom: 1px solid #edf0f4;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\nth {\r\n  color: #8792a4;\r\n  background: #fafbfd;\r\n  font-size: 10px;\r\n}\r\n\r\ntr:last-child td {\r\n  border-bottom: 0;\r\n}\r\n\r\n.sem-registros {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-exemplar {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .card {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .cabecalho {\r\n    flex-direction: column;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetalhesExemplarComponent, { className: "DetalhesExemplarComponent", filePath: "src/app/component/detalhes-exemplar/detalhes-exemplar.ts", lineNumber: 20 }); })();
