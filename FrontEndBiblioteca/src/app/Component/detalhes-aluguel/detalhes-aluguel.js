import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlugueisService } from '../../Service/alugueis-service';
import { ExemplaresService } from '../../Service/ExemplaresService';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DetalhesAluguelComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "Carregando detalhes do empr\u00E9stimo...");
    i0.ɵɵelementEnd();
} }
function DetalhesAluguelComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function DetalhesAluguelComponent_ng_container_5_section_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7)(1, "header", 13)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Dados do exemplar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Informa\u00E7\u00F5es do exemplar associado a este empr\u00E9stimo.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 10)(8, "div")(9, "span");
    i0.ɵɵtext(10, "C\u00F3digo de barras");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "span");
    i0.ɵɵtext(15, "Dias de aluguel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div")(19, "span");
    i0.ɵɵtext(20, "Localiza\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div")(24, "span");
    i0.ɵɵtext(25, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div")(29, "span");
    i0.ɵɵtext(30, "Livro ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "strong");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div")(34, "span");
    i0.ɵɵtext(35, "Nome do livro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div")(39, "span");
    i0.ɵɵtext(40, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.codigoBarras);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.diasAluguel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar["endere\u00E7avel"] || "N\u00E3o informada");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.livroId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.exemplar.nomeLivro || ctx_r0.aluguel.livro);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r0.exemplar.status, " - ", ctx_r0.statusExemplar(ctx_r0.exemplar.status));
} }
function DetalhesAluguelComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 9);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 10)(9, "div")(10, "span");
    i0.ɵɵtext(11, "Alugatario ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "span");
    i0.ɵɵtext(16, "Exemplar ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "span");
    i0.ɵɵtext(21, "C\u00F3digo de barras");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "span");
    i0.ɵɵtext(26, "Nome do locat\u00E1rio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "span");
    i0.ɵɵtext(31, "Data do aluguel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div")(36, "span");
    i0.ɵɵtext(37, "Devolu\u00E7\u00E3o prevista");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "strong");
    i0.ɵɵtext(39);
    i0.ɵɵpipe(40, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div")(42, "span");
    i0.ɵɵtext(43, "Devolu\u00E7\u00E3o real");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "strong");
    i0.ɵɵtext(45);
    i0.ɵɵpipe(46, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "span");
    i0.ɵɵtext(49, "Usu\u00E1rio respons\u00E1vel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "span");
    i0.ɵɵtext(54, "Usu\u00E1rio da devolu\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "strong");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 11)(58, "span");
    i0.ɵɵtext(59, "Observa\u00E7\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "strong");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(62, DetalhesAluguelComponent_ng_container_5_section_62_Template, 43, 8, "section", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Empr\u00E9stimo #", ctx_r0.aluguel.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.livro || "Livro n\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.status);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.alugatarioId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.exemplarId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.codigoBarras);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.nomeLocatario || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(34, 14, ctx_r0.aluguel.dataAluguel, "dd/MM/yyyy"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(40, 17, ctx_r0.aluguel.dataDevolucaoPrevista, "dd/MM/yyyy"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(46, 20, ctx_r0.aluguel.dataDevolucaoReal, "dd/MM/yyyy"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.usuarioResponsavel || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.usuarioDevolucao || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.aluguel.observacoes || "Nenhuma observa\u00E7\u00E3o");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.exemplar);
} }
export class DetalhesAluguelComponent {
    route = inject(ActivatedRoute);
    alugueisService = inject(AlugueisService);
    exemplaresService = inject(ExemplaresService);
    cdr = inject(ChangeDetectorRef);
    aluguel;
    exemplar;
    carregando = true;
    erro = '';
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!Number.isInteger(id) || id <= 0) {
            this.erro = 'Empréstimo inválido.';
            this.carregando = false;
            return;
        }
        this.alugueisService.buscarPorId(id).subscribe({
            next: aluguel => {
                this.aluguel = aluguel;
                this.carregarExemplar(aluguel);
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
    carregarExemplar(aluguel) {
        this.exemplaresService.listar().subscribe({
            next: exemplares => {
                this.exemplar = exemplares.find(item => item.id === aluguel.exemplarId ||
                    item.codigoBarras === aluguel.codigoBarras);
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: erro => this.mostrarErro(erro)
        });
    }
    mostrarErro(erro) {
        console.error('Erro ao carregar detalhes do empréstimo:', erro);
        const resposta = erro?.error;
        this.erro = typeof resposta === 'string'
            ? resposta
            : resposta?.mensagem ||
                resposta?.message ||
                'Não foi possível carregar os detalhes do empréstimo.';
        this.carregando = false;
        this.cdr.detectChanges();
    }
    static ɵfac = function DetalhesAluguelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetalhesAluguelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetalhesAluguelComponent, selectors: [["app-detalhes-aluguel"]], decls: 6, vars: 3, consts: [[1, "detalhes-aluguel"], ["routerLink", "/Barra/alugueis", 1, "voltar"], ["class", "estado", 4, "ngIf"], ["class", "erro", 4, "ngIf"], [4, "ngIf"], [1, "estado"], [1, "erro"], [1, "card"], [1, "identificador"], [1, "status"], [1, "informacoes"], [1, "campo-largo"], ["class", "card", 4, "ngIf"], [1, "cabecalho"]], template: function DetalhesAluguelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵtext(2, " \u2190 Voltar para empr\u00E9stimos ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DetalhesAluguelComponent_p_3_Template, 2, 0, "p", 2)(4, DetalhesAluguelComponent_p_4_Template, 2, 1, "p", 3)(5, DetalhesAluguelComponent_ng_container_5_Template, 63, 23, "ng-container", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.aluguel);
        } }, dependencies: [CommonModule, i1.NgIf, RouterLink, i1.DatePipe], styles: [".detalhes-aluguel[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado[_ngcontent-%COMP%], \r\n.erro[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin-bottom: 20px;\r\n  padding: 28px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.identificador[_ngcontent-%COMP%], \r\n.cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \r\n.informacoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 8px 16px 0 0;\r\n  font-size: 28px;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 6px 10px;\r\n  border-radius: 999px;\r\n  background: #e8f5ed;\r\n  color: #18794e;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 28px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.campo-largo[_ngcontent-%COMP%] {\r\n  grid-column: span 3;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 6px;\r\n  font-size: 19px;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-aluguel[_ngcontent-%COMP%] {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .campo-largo[_ngcontent-%COMP%] {\r\n    grid-column: span 2;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetalhesAluguelComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], selector: 'app-detalhes-aluguel', template: "<main class=\"detalhes-aluguel\">\r\n  <a class=\"voltar\" routerLink=\"/Barra/alugueis\">\r\n    \u2190 Voltar para empr\u00E9stimos\r\n  </a>\r\n\r\n  <p *ngIf=\"carregando\" class=\"estado\">Carregando detalhes do empr\u00E9stimo...</p>\r\n  <p *ngIf=\"!carregando && erro\" class=\"erro\">{{ erro }}</p>\r\n\r\n  <ng-container *ngIf=\"!carregando && aluguel\">\r\n    <section class=\"card\">\r\n      <span class=\"identificador\">Empr\u00E9stimo #{{ aluguel.id }}</span>\r\n      <h1>{{ aluguel.livro || 'Livro n\u00E3o informado' }}</h1>\r\n      <span class=\"status\">{{ aluguel.status }}</span>\r\n\r\n      <div class=\"informacoes\">\r\n        <div><span>Alugatario ID</span><strong>{{ aluguel.alugatarioId }}</strong></div>\r\n        <div><span>Exemplar ID</span><strong>{{ aluguel.exemplarId }}</strong></div>\r\n        <div><span>C\u00F3digo de barras</span><strong>{{ aluguel.codigoBarras }}</strong></div>\r\n        <div><span>Nome do locat\u00E1rio</span><strong>{{ aluguel.nomeLocatario || 'N\u00E3o informado' }}</strong></div>\r\n        <div><span>Data do aluguel</span><strong>{{ aluguel.dataAluguel | date:'dd/MM/yyyy' }}</strong></div>\r\n        <div><span>Devolu\u00E7\u00E3o prevista</span><strong>{{ aluguel.dataDevolucaoPrevista | date:'dd/MM/yyyy' }}</strong></div>\r\n        <div><span>Devolu\u00E7\u00E3o real</span><strong>{{ aluguel.dataDevolucaoReal | date:'dd/MM/yyyy' }}</strong></div>\r\n        <div><span>Usu\u00E1rio respons\u00E1vel</span><strong>{{ aluguel.usuarioResponsavel || 'N\u00E3o informado' }}</strong></div>\r\n        <div><span>Usu\u00E1rio da devolu\u00E7\u00E3o</span><strong>{{ aluguel.usuarioDevolucao || 'N\u00E3o informado' }}</strong></div>\r\n        <div class=\"campo-largo\"><span>Observa\u00E7\u00F5es</span><strong>{{ aluguel.observacoes || 'Nenhuma observa\u00E7\u00E3o' }}</strong></div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"card\" *ngIf=\"exemplar\">\r\n      <header class=\"cabecalho\">\r\n        <div>\r\n          <h2>Dados do exemplar</h2>\r\n          <p>Informa\u00E7\u00F5es do exemplar associado a este empr\u00E9stimo.</p>\r\n        </div>\r\n      </header>\r\n\r\n      <div class=\"informacoes\">\r\n        <div><span>C\u00F3digo de barras</span><strong>{{ exemplar.codigoBarras }}</strong></div>\r\n        <div><span>Dias de aluguel</span><strong>{{ exemplar.diasAluguel }}</strong></div>\r\n        <div><span>Localiza\u00E7\u00E3o</span><strong>{{ exemplar['endere\u00E7avel'] || 'N\u00E3o informada' }}</strong></div>\r\n        <div><span>ID</span><strong>{{ exemplar.id }}</strong></div>\r\n        <div><span>Livro ID</span><strong>{{ exemplar.livroId }}</strong></div>\r\n        <div><span>Nome do livro</span><strong>{{ exemplar.nomeLivro || aluguel.livro }}</strong></div>\r\n        <div><span>Status</span><strong>{{ exemplar.status }} - {{ statusExemplar(exemplar.status) }}</strong></div>\r\n      </div>\r\n    </section>\r\n  </ng-container>\r\n</main>\r\n", styles: [".detalhes-aluguel {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado,\r\n.erro {\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro {\r\n  color: #b42318;\r\n}\r\n\r\n.card {\r\n  max-width: 1100px;\r\n  margin-bottom: 20px;\r\n  padding: 28px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.identificador,\r\n.cabecalho p,\r\n.informacoes span {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\nh1 {\r\n  display: inline-block;\r\n  margin: 8px 16px 0 0;\r\n  font-size: 28px;\r\n}\r\n\r\n.status {\r\n  display: inline-block;\r\n  padding: 6px 10px;\r\n  border-radius: 999px;\r\n  background: #e8f5ed;\r\n  color: #18794e;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.informacoes {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 28px;\r\n}\r\n\r\n.informacoes div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes strong {\r\n  font-size: 14px;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.campo-largo {\r\n  grid-column: span 3;\r\n}\r\n\r\n.cabecalho h2 {\r\n  margin: 0 0 6px;\r\n  font-size: 19px;\r\n}\r\n\r\n.cabecalho p {\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-aluguel {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .card {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .campo-largo {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetalhesAluguelComponent, { className: "DetalhesAluguelComponent", filePath: "src/app/component/detalhes-aluguel/detalhes-aluguel.ts", lineNumber: 19 }); })();
