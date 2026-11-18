import { Component, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoBarrasService } from '../../Service/codigo-barras-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["codigoSvg"];
function CodigoBarrasComponent_section_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, " Este c\u00F3digo n\u00E3o \u00E9 compat\u00EDvel com o formato CODE128. ");
    i0.ɵɵelementEnd();
} }
function CodigoBarrasComponent_section_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "button", 9);
    i0.ɵɵlistener("click", function CodigoBarrasComponent_section_0_div_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.baixar()); });
    i0.ɵɵtext(2, "Baixar SVG");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 9);
    i0.ɵɵlistener("click", function CodigoBarrasComponent_section_0_div_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.imprimir()); });
    i0.ɵɵtext(4, "Imprimir");
    i0.ɵɵelementEnd()();
} }
function CodigoBarrasComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "div", 3);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 4, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CodigoBarrasComponent_section_0_p_4_Template, 2, 0, "p", 5)(5, CodigoBarrasComponent_section_0_div_5_Template, 5, 0, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.valido);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.valido);
} }
export class CodigoBarrasComponent {
    codigoBarrasService = inject(CodigoBarrasService);
    codigoSvg;
    codigo = '';
    titulo = '';
    formato = {};
    nomeArquivo = 'codigo-barras';
    valido = true;
    inicializado = false;
    ngAfterViewInit() {
        this.inicializado = true;
        this.renderizar();
    }
    ngOnChanges(changes) {
        if (this.inicializado &&
            (changes['codigo'] || changes['formato'])) {
            this.renderizar();
        }
    }
    baixar() {
        if (this.codigoSvg) {
            this.codigoBarrasService.baixarSvg(this.codigoSvg.nativeElement, this.nomeArquivo);
        }
    }
    imprimir() {
        if (this.codigoSvg) {
            this.codigoBarrasService.imprimir(this.codigoSvg.nativeElement, this.titulo);
        }
    }
    renderizar() {
        if (!this.codigoSvg) {
            return;
        }
        this.valido = this.codigoBarrasService.gerar(this.codigoSvg.nativeElement, this.codigo, this.formato);
    }
    static ɵfac = function CodigoBarrasComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CodigoBarrasComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CodigoBarrasComponent, selectors: [["app-codigo-barras"]], viewQuery: function CodigoBarrasComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.codigoSvg = _t.first);
        } }, inputs: { codigo: "codigo", titulo: "titulo", formato: "formato", nomeArquivo: "nomeArquivo" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["codigoSvg", ""], ["class", "codigo-barras-card", 4, "ngIf"], [1, "codigo-barras-card"], [1, "codigo-barras-visual"], ["aria-label", "C\u00F3digo de barras"], ["class", "codigo-barras-invalido", 4, "ngIf"], ["class", "codigo-barras-acoes", 4, "ngIf"], [1, "codigo-barras-invalido"], [1, "codigo-barras-acoes"], ["type", "button", 3, "click"]], template: function CodigoBarrasComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CodigoBarrasComponent_section_0_Template, 6, 2, "section", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.codigo);
        } }, dependencies: [CommonModule, i1.NgIf], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.codigo-barras-card[_ngcontent-%COMP%] {\r\n  max-width: 420px;\r\n  padding: 16px;\r\n  border: 1px solid #e5e8f0;\r\n  border-radius: 10px;\r\n  background: #fafbfd;\r\n}\r\n\r\n.codigo-barras-visual[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  min-height: 100px;\r\n  place-items: center;\r\n  overflow-x: auto;\r\n  background: #fff;\r\n}\r\n\r\n.codigo-barras-acoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 8px;\r\n  margin-top: 12px;\r\n}\r\n\r\n.codigo-barras-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 8px 10px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  color: #315bd6;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.codigo-barras-invalido[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CodigoBarrasComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'app-codigo-barras', imports: [CommonModule], template: "<section class=\"codigo-barras-card\" *ngIf=\"codigo\">\r\n  <div class=\"codigo-barras-visual\">\r\n    <svg #codigoSvg aria-label=\"C\u00F3digo de barras\"></svg>\r\n  </div>\r\n\r\n  <p class=\"codigo-barras-invalido\" *ngIf=\"!valido\">\r\n    Este c\u00F3digo n\u00E3o \u00E9 compat\u00EDvel com o formato CODE128.\r\n  </p>\r\n\r\n  <div class=\"codigo-barras-acoes\" *ngIf=\"valido\">\r\n    <button type=\"button\" (click)=\"baixar()\">Baixar SVG</button>\r\n    <button type=\"button\" (click)=\"imprimir()\">Imprimir</button>\r\n  </div>\r\n</section>\r\n", styles: [":host {\r\n  display: block;\r\n}\r\n\r\n.codigo-barras-card {\r\n  max-width: 420px;\r\n  padding: 16px;\r\n  border: 1px solid #e5e8f0;\r\n  border-radius: 10px;\r\n  background: #fafbfd;\r\n}\r\n\r\n.codigo-barras-visual {\r\n  display: grid;\r\n  min-height: 100px;\r\n  place-items: center;\r\n  overflow-x: auto;\r\n  background: #fff;\r\n}\r\n\r\n.codigo-barras-acoes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 8px;\r\n  margin-top: 12px;\r\n}\r\n\r\n.codigo-barras-acoes button {\r\n  padding: 8px 10px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  color: #315bd6;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.codigo-barras-invalido {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}\r\n"] }]
    }], null, { codigoSvg: [{
            type: ViewChild,
            args: ['codigoSvg']
        }], codigo: [{
            type: Input,
            args: [{ required: true }]
        }], titulo: [{
            type: Input
        }], formato: [{
            type: Input
        }], nomeArquivo: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CodigoBarrasComponent, { className: "CodigoBarrasComponent", filePath: "src/app/component/codigo-barras-component/codigo-barras-component.ts", lineNumber: 24 }); })();
