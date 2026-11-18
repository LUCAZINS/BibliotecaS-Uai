import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LivrosService, StatusExemplar } from '../../Service/livros-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function Detalheslivros_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Carregando detalhes do livro...");
    i0.ɵɵelementEnd();
} }
function Detalheslivros_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function Detalheslivros_section_5_section_52_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const genero_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" #", genero_r3.id, " ", genero_r3.nome || "Sem nome", " ");
} }
function Detalheslivros_section_5_section_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 20)(1, "h2");
    i0.ɵɵtext(2, "G\u00EAneros");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 21);
    i0.ɵɵtemplate(4, Detalheslivros_section_5_section_52_span_4_Template, 2, 2, "span", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.livro.generos);
} }
function Detalheslivros_section_5_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Sinopse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.livro.sinopse);
} }
function Detalheslivros_section_5_div_63_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "span", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const exemplar_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", exemplar_r4.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(exemplar_r4.codigoBarras);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusExemplar(exemplar_r4.status), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.localizacaoExemplar(exemplar_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(exemplar_r4.diasAluguel);
} }
function Detalheslivros_section_5_div_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "C\u00D3DIGO DE BARRAS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "STATUS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "LOCALIZA\u00C7\u00C3O");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "DIAS DE ALUGUEL");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵtemplate(15, Detalheslivros_section_5_div_63_tr_15_Template, 12, 5, "tr", 26);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngForOf", ctx_r0.livro.exemplares);
} }
function Detalheslivros_section_5_p_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1, " Nenhum exemplar cadastrado para este livro. ");
    i0.ɵɵelementEnd();
} }
function Detalheslivros_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8)(1, "header")(2, "div")(3, "span", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 10);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 11);
    i0.ɵɵlistener("click", function Detalheslivros_section_5_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.abrirEdicao()); });
    i0.ɵɵtext(10, " Editar informa\u00E7\u00F5es ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 12)(12, "div")(13, "span");
    i0.ɵɵtext(14, "ISBN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "span");
    i0.ɵɵtext(19, "Editora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "span");
    i0.ɵɵtext(24, "Gr\u00E1fica");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "span");
    i0.ɵɵtext(29, "Edi\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "span");
    i0.ɵɵtext(34, "Ano de publica\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "span");
    i0.ɵɵtext(39, "Idade recomendada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "span");
    i0.ɵɵtext(44, "Total de exemplares");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "span");
    i0.ɵɵtext(49, "Dispon\u00EDveis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(52, Detalheslivros_section_5_section_52_Template, 5, 1, "section", 13)(53, Detalheslivros_section_5_div_53_Template, 5, 1, "div", 14);
    i0.ɵɵelementStart(54, "section", 15)(55, "header", 16)(56, "div")(57, "h2", 17);
    i0.ɵɵtext(58, "Exemplares");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "p");
    i0.ɵɵtext(60, "Consulte o status e a localiza\u00E7\u00E3o de cada exemplar.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "strong");
    i0.ɵɵtext(62);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(63, Detalheslivros_section_5_div_63_Template, 16, 1, "div", 18)(64, Detalheslivros_section_5_p_64_Template, 2, 0, "p", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Livro #", ctx_r0.livro.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.livro.titulo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.livro.autor || "Autor n\u00E3o informado");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.livro.isbn || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.editora || "N\u00E3o informada");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.grafica || "N\u00E3o informada");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.edicao || "N\u00E3o informada");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.anoPublicacao || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.idade);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.totalExemplares);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.livro.exemplaresDisponiveis);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.livro.generos.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.livro.sinopse);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r0.livro.exemplares.length, " exemplar(es)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.livro.exemplares.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.livro.exemplares.length);
} }
function Detalheslivros_div_6_p_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.mensagem);
} }
function Detalheslivros_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "section", 30)(2, "header")(3, "h2", 31);
    i0.ɵɵtext(4, "Editar livro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 32);
    i0.ɵɵlistener("click", function Detalheslivros_div_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "form", 33);
    i0.ɵɵlistener("ngSubmit", function Detalheslivros_div_6_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salvarEdicao()); });
    i0.ɵɵelementStart(8, "div", 34)(9, "label");
    i0.ɵɵtext(10, "T\u00EDtulo * ");
    i0.ɵɵelementStart(11, "input", 35);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.titulo, $event) || (ctx_r0.formulario.titulo = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label");
    i0.ɵɵtext(13, "Autor * ");
    i0.ɵɵelementStart(14, "input", 36);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.autor, $event) || (ctx_r0.formulario.autor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label");
    i0.ɵɵtext(16, "ISBN ");
    i0.ɵɵelementStart(17, "input", 37);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.isbn, $event) || (ctx_r0.formulario.isbn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, "Editora ");
    i0.ɵɵelementStart(20, "input", 38);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.editora, $event) || (ctx_r0.formulario.editora = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label");
    i0.ɵɵtext(22, "Gr\u00E1fica ");
    i0.ɵɵelementStart(23, "input", 39);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.grafica, $event) || (ctx_r0.formulario.grafica = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label");
    i0.ɵɵtext(25, "Edi\u00E7\u00E3o ");
    i0.ɵɵelementStart(26, "input", 40);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.edicao, $event) || (ctx_r0.formulario.edicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "label");
    i0.ɵɵtext(28, "Ano de publica\u00E7\u00E3o ");
    i0.ɵɵelementStart(29, "input", 41);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.anoPublicacao, $event) || (ctx_r0.formulario.anoPublicacao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "label");
    i0.ɵɵtext(31, "Idade recomendada ");
    i0.ɵɵelementStart(32, "input", 42);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.idade, $event) || (ctx_r0.formulario.idade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "label", 43);
    i0.ɵɵtext(34, "G\u00EAneros ");
    i0.ɵɵelementStart(35, "input", 44);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.generos, $event) || (ctx_r0.formulario.generos = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label", 43);
    i0.ɵɵtext(37, "Sinopse ");
    i0.ɵɵelementStart(38, "textarea", 45);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Detalheslivros_div_6_Template_textarea_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.sinopse, $event) || (ctx_r0.formulario.sinopse = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(39, Detalheslivros_div_6_p_39_Template, 2, 1, "p", 46);
    i0.ɵɵelementStart(40, "footer")(41, "button", 47);
    i0.ɵɵlistener("click", function Detalheslivros_div_6_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(42, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 48);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.titulo);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.autor);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.isbn);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.editora);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.grafica);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.edicao);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.anoPublicacao);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.idade);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.generos);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.sinopse);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.mensagem);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.salvando ? "Salvando..." : "Salvar altera\u00E7\u00F5es", " ");
} }
export class Detalheslivros {
    route = inject(ActivatedRoute);
    livrosService = inject(LivrosService);
    cdr = inject(ChangeDetectorRef);
    livro;
    carregando = true;
    erro = '';
    editando = false;
    salvando = false;
    mensagem = '';
    livroId = 0;
    formulario = {
        titulo: '',
        autor: '',
        sinopse: '',
        isbn: '',
        editora: '',
        grafica: '',
        edicao: '',
        anoPublicacao: 0,
        idade: 0,
        generos: ''
    };
    statusExemplar(status) {
        switch (status) {
            case StatusExemplar.Disponivel:
                return 'Disponível';
            case StatusExemplar.Alugado:
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
    localizacaoExemplar(exemplar) {
        return exemplar.endereçavel || 'Não informada';
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.livroId = id;
        if (!Number.isInteger(id) || id <= 0) {
            this.erro = 'Livro inválido.';
            this.carregando = false;
            return;
        }
        this.carregarDetalhes();
    }
    abrirEdicao() {
        if (!this.livro) {
            return;
        }
        this.formulario = {
            titulo: this.livro.titulo || '',
            autor: this.livro.autor || '',
            sinopse: this.livro.sinopse || '',
            isbn: this.livro.isbn || '',
            editora: this.livro.editora || '',
            grafica: this.livro.grafica || '',
            edicao: this.livro.edicao || '',
            anoPublicacao: this.livro.anoPublicacao || 0,
            idade: this.livro.idade || 0,
            generos: (this.livro.generos ?? [])
                .map(genero => genero.nome?.trim())
                .filter((nome) => !!nome)
                .join(', ')
        };
        this.mensagem = '';
        this.editando = true;
    }
    cancelarEdicao() {
        if (!this.salvando) {
            this.editando = false;
            this.mensagem = '';
        }
    }
    salvarEdicao() {
        this.mensagem = '';
        if (!this.formulario.titulo.trim() || !this.formulario.autor.trim()) {
            this.mensagem = 'Título e autor são obrigatórios.';
            return;
        }
        if (this.formulario.anoPublicacao < 0 || this.formulario.idade < 0) {
            this.mensagem = 'Ano de publicação e idade não podem ser negativos.';
            return;
        }
        const generos = this.formulario.generos
            .split(',')
            .map(nome => nome.trim())
            .filter((nome, indice, lista) => !!nome && lista.findIndex(item => item.toLowerCase() === nome.toLowerCase()) === indice);
        this.salvando = true;
        this.livrosService.atualizar(this.livroId, {
            titulo: this.formulario.titulo.trim(),
            autor: this.formulario.autor.trim(),
            sinopse: this.formulario.sinopse,
            isbn: this.formulario.isbn,
            editora: this.formulario.editora,
            grafica: this.formulario.grafica,
            edicao: this.formulario.edicao,
            anoPublicacao: Number(this.formulario.anoPublicacao) || 0,
            idade: Number(this.formulario.idade) || 0,
            generos
        }).subscribe({
            next: () => {
                this.editando = false;
                this.salvando = false;
                this.carregarDetalhes();
            },
            error: erro => {
                console.error('Erro ao atualizar livro:', erro);
                this.mensagem =
                    erro?.error?.mensagem ||
                        erro?.error?.message ||
                        'Não foi possível atualizar o livro.';
                this.salvando = false;
                this.cdr.detectChanges();
            }
        });
    }
    carregarDetalhes() {
        this.carregando = true;
        this.erro = '';
        this.livrosService.buscarTodos().subscribe({
            next: livros => {
                this.livro = livros.find(item => item.id === this.livroId);
                if (!this.livro) {
                    this.erro = 'Livro não encontrado.';
                }
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao carregar detalhes do livro:', erro);
                this.erro = erro?.error?.mensagem ||
                    erro?.error?.message ||
                    'Não foi possível carregar os detalhes do livro.';
                this.carregando = false;
                this.cdr.detectChanges();
            }
        });
    }
    static ɵfac = function Detalheslivros_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Detalheslivros)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Detalheslivros, selectors: [["app-detalheslivros"]], decls: 7, vars: 4, consts: [[1, "detalhes-livro"], ["routerLink", "/Barra/livros", 1, "voltar"], ["class", "estado", 4, "ngIf"], ["class", "erro", 4, "ngIf"], ["class", "livro-card", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "estado"], [1, "erro"], [1, "livro-card"], [1, "identificador"], [1, "autor"], ["type", "button", 1, "btn-editar", 3, "click"], [1, "informacoes"], ["class", "generos", 4, "ngIf"], ["class", "sinopse", 4, "ngIf"], ["aria-labelledby", "titulo-exemplares", 1, "exemplares"], [1, "exemplares-cabecalho"], ["id", "titulo-exemplares"], ["class", "tabela-exemplares", 4, "ngIf"], ["class", "sem-exemplares", 4, "ngIf"], [1, "generos"], [1, "generos-lista"], ["class", "genero", 4, "ngFor", "ngForOf"], [1, "genero"], [1, "sinopse"], [1, "tabela-exemplares"], [4, "ngFor", "ngForOf"], [1, "status-exemplar"], [1, "sem-exemplares"], [1, "modal-overlay"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-edicao", 1, "modal-edicao"], ["id", "titulo-edicao"], ["type", "button", "aria-label", "Fechar", 3, "click", "disabled"], [3, "ngSubmit"], [1, "campos-edicao"], ["name", "titulo", "required", "", 3, "ngModelChange", "ngModel"], ["name", "autor", "required", "", 3, "ngModelChange", "ngModel"], ["name", "isbn", 3, "ngModelChange", "ngModel"], ["name", "editora", 3, "ngModelChange", "ngModel"], ["name", "grafica", 3, "ngModelChange", "ngModel"], ["name", "edicao", 3, "ngModelChange", "ngModel"], ["name", "anoPublicacao", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["name", "idade", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], [1, "campo-completo"], ["name", "generos", "placeholder", "Romance, Fic\u00E7\u00E3o, Drama", 3, "ngModelChange", "ngModel"], ["name", "sinopse", "rows", "4", 3, "ngModelChange", "ngModel"], ["class", "mensagem-edicao", 4, "ngIf"], ["type", "button", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "mensagem-edicao"]], template: function Detalheslivros_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Voltar para livros");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, Detalheslivros_p_3_Template, 2, 0, "p", 2)(4, Detalheslivros_p_4_Template, 2, 1, "p", 3)(5, Detalheslivros_section_5_Template, 65, 16, "section", 4)(6, Detalheslivros_div_6_Template, 45, 15, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.livro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editando);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.NgModel, i2.NgForm, RouterLink], styles: [".detalhes-livro[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado[_ngcontent-%COMP%], \r\n.erro[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n}\r\n\r\n.livro-card[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  padding: 30px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.livro-card[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.btn-editar[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  background: #315bd6;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.identificador[_ngcontent-%COMP%] {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.autor[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #64748b;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\n.informacoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.sinopse[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.sinopse[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.sinopse[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #64748b;\r\n  line-height: 1.6;\r\n}\r\n\r\n.generos[_ngcontent-%COMP%], \r\n.exemplares[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.generos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \r\n.exemplares[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 12px;\r\n  font-size: 18px;\r\n}\r\n\r\n.generos-lista[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.genero[_ngcontent-%COMP%] {\r\n  padding: 6px 10px;\r\n  border-radius: 999px;\r\n  background: #edf2ff;\r\n  color: #315bd6;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.exemplares-cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.exemplares-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #8792a4;\r\n  font-size: 13px;\r\n}\r\n\r\n.exemplares-cabecalho[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-exemplares[_ngcontent-%COMP%] {\r\n  overflow-x: auto;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 8px;\r\n}\r\n\r\n.tabela-exemplares[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-exemplares[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \r\n.tabela-exemplares[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n  border-bottom: 1px solid #edf0f4;\r\n  white-space: nowrap;\r\n  font-size: 12px;\r\n}\r\n\r\n.tabela-exemplares[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  color: #8792a4;\r\n  background: #fafbfd;\r\n  font-size: 10px;\r\n}\r\n\r\n.tabela-exemplares[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n}\r\n\r\n.status-exemplar[_ngcontent-%COMP%] {\r\n  color: #315bd6;\r\n  font-weight: 600;\r\n}\r\n\r\n.sem-exemplares[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n  background: #f8fafc;\r\n  color: #64748b;\r\n  font-size: 13px;\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 20;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%] {\r\n  width: min(100%, 620px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.campos-edicao[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 13px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo-completo[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.modal-edicao[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n  resize: vertical;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n  border-color: #315bd6;\r\n  color: #fff;\r\n  background: #315bd6;\r\n}\r\n\r\n.mensagem-edicao[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-livro[_ngcontent-%COMP%] {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .livro-card[_ngcontent-%COMP%] {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .exemplares-cabecalho[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Detalheslivros, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, FormsModule, RouterLink], selector: 'app-detalheslivros', template: "<main class=\"detalhes-livro\">\r\n  <a class=\"voltar\" routerLink=\"/Barra/livros\">\u2190 Voltar para livros</a>\r\n\r\n  <p *ngIf=\"carregando\" class=\"estado\">Carregando detalhes do livro...</p>\r\n  <p *ngIf=\"!carregando && erro\" class=\"erro\">{{ erro }}</p>\r\n\r\n  <section *ngIf=\"!carregando && livro\" class=\"livro-card\">\r\n    <header>\r\n      <div>\r\n        <span class=\"identificador\">Livro #{{ livro.id }}</span>\r\n        <h1>{{ livro.titulo }}</h1>\r\n        <p class=\"autor\">{{ livro.autor || 'Autor n\u00E3o informado' }}</p>\r\n      </div>\r\n      <button class=\"btn-editar\" type=\"button\" (click)=\"abrirEdicao()\">\r\n        Editar informa\u00E7\u00F5es\r\n      </button>\r\n    </header>\r\n\r\n    <div class=\"informacoes\">\r\n      <div>\r\n        <span>ISBN</span>\r\n        <strong>{{ livro.isbn || 'N\u00E3o informado' }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Editora</span>\r\n        <strong>{{ livro.editora || 'N\u00E3o informada' }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Gr\u00E1fica</span>\r\n        <strong>{{ livro.grafica || 'N\u00E3o informada' }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Edi\u00E7\u00E3o</span>\r\n        <strong>{{ livro.edicao || 'N\u00E3o informada' }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Ano de publica\u00E7\u00E3o</span>\r\n        <strong>{{ livro.anoPublicacao || 'N\u00E3o informado' }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Idade recomendada</span>\r\n        <strong>{{ livro.idade }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Total de exemplares</span>\r\n        <strong>{{ livro.totalExemplares }}</strong>\r\n      </div>\r\n      <div>\r\n        <span>Dispon\u00EDveis</span>\r\n        <strong>{{ livro.exemplaresDisponiveis }}</strong>\r\n      </div>\r\n    </div>\r\n\r\n    <section class=\"generos\" *ngIf=\"livro.generos.length\">\r\n      <h2>G\u00EAneros</h2>\r\n      <div class=\"generos-lista\">\r\n        <span class=\"genero\" *ngFor=\"let genero of livro.generos\">\r\n          #{{ genero.id }} {{ genero.nome || 'Sem nome' }}\r\n        </span>\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"sinopse\" *ngIf=\"livro.sinopse\">\r\n      <h2>Sinopse</h2>\r\n      <p>{{ livro.sinopse }}</p>\r\n    </div>\r\n\r\n    <section class=\"exemplares\" aria-labelledby=\"titulo-exemplares\">\r\n      <header class=\"exemplares-cabecalho\">\r\n        <div>\r\n          <h2 id=\"titulo-exemplares\">Exemplares</h2>\r\n          <p>Consulte o status e a localiza\u00E7\u00E3o de cada exemplar.</p>\r\n        </div>\r\n        <strong>{{ livro.exemplares.length }} exemplar(es)</strong>\r\n      </header>\r\n\r\n      <div class=\"tabela-exemplares\" *ngIf=\"livro.exemplares.length\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>C\u00D3DIGO DE BARRAS</th>\r\n              <th>STATUS</th>\r\n              <th>LOCALIZA\u00C7\u00C3O</th>\r\n              <th>DIAS DE ALUGUEL</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let exemplar of livro.exemplares\">\r\n              <td>#{{ exemplar.id }}</td>\r\n              <td>{{ exemplar.codigoBarras }}</td>\r\n              <td>\r\n                <span class=\"status-exemplar\">\r\n                  {{ statusExemplar(exemplar.status) }}\r\n                </span>\r\n              </td>\r\n              <td>{{ localizacaoExemplar(exemplar) }}</td>\r\n              <td>{{ exemplar.diasAluguel }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <p class=\"sem-exemplares\" *ngIf=\"!livro.exemplares.length\">\r\n        Nenhum exemplar cadastrado para este livro.\r\n      </p>\r\n    </section>\r\n  </section>\r\n\r\n  <div class=\"modal-overlay\" *ngIf=\"editando\">\r\n    <section class=\"modal-edicao\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"titulo-edicao\">\r\n      <header>\r\n        <h2 id=\"titulo-edicao\">Editar livro</h2>\r\n        <button type=\"button\" [disabled]=\"salvando\" (click)=\"cancelarEdicao()\" aria-label=\"Fechar\">\u00D7</button>\r\n      </header>\r\n\r\n      <form (ngSubmit)=\"salvarEdicao()\">\r\n        <div class=\"campos-edicao\">\r\n          <label>T\u00EDtulo *\r\n            <input name=\"titulo\" [(ngModel)]=\"formulario.titulo\" required>\r\n          </label>\r\n          <label>Autor *\r\n            <input name=\"autor\" [(ngModel)]=\"formulario.autor\" required>\r\n          </label>\r\n          <label>ISBN\r\n            <input name=\"isbn\" [(ngModel)]=\"formulario.isbn\">\r\n          </label>\r\n          <label>Editora\r\n            <input name=\"editora\" [(ngModel)]=\"formulario.editora\">\r\n          </label>\r\n          <label>Gr\u00E1fica\r\n            <input name=\"grafica\" [(ngModel)]=\"formulario.grafica\">\r\n          </label>\r\n          <label>Edi\u00E7\u00E3o\r\n            <input name=\"edicao\" [(ngModel)]=\"formulario.edicao\">\r\n          </label>\r\n          <label>Ano de publica\u00E7\u00E3o\r\n            <input name=\"anoPublicacao\" type=\"number\" min=\"0\" [(ngModel)]=\"formulario.anoPublicacao\">\r\n          </label>\r\n          <label>Idade recomendada\r\n            <input name=\"idade\" type=\"number\" min=\"0\" [(ngModel)]=\"formulario.idade\">\r\n          </label>\r\n          <label class=\"campo-completo\">G\u00EAneros\r\n            <input name=\"generos\" [(ngModel)]=\"formulario.generos\" placeholder=\"Romance, Fic\u00E7\u00E3o, Drama\">\r\n          </label>\r\n          <label class=\"campo-completo\">Sinopse\r\n            <textarea name=\"sinopse\" rows=\"4\" [(ngModel)]=\"formulario.sinopse\"></textarea>\r\n          </label>\r\n        </div>\r\n\r\n        <p class=\"mensagem-edicao\" *ngIf=\"mensagem\">{{ mensagem }}</p>\r\n        <footer>\r\n          <button type=\"button\" [disabled]=\"salvando\" (click)=\"cancelarEdicao()\">Cancelar</button>\r\n          <button class=\"btn-primary\" type=\"submit\" [disabled]=\"salvando\">\r\n            {{ salvando ? 'Salvando...' : 'Salvar altera\u00E7\u00F5es' }}\r\n          </button>\r\n        </footer>\r\n      </form>\r\n    </section>\r\n  </div>\r\n</main>\r\n", styles: [".detalhes-livro {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n  background: #f5f7fb;\r\n  color: #172033;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.voltar {\r\n  display: inline-block;\r\n  margin-bottom: 24px;\r\n  color: #315bd6;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.estado,\r\n.erro {\r\n  padding: 24px;\r\n  border-radius: 10px;\r\n  background: #fff;\r\n}\r\n\r\n.erro {\r\n  color: #b42318;\r\n}\r\n\r\n.livro-card {\r\n  max-width: 900px;\r\n  padding: 30px;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.livro-card > header {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.btn-editar {\r\n  padding: 10px 14px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  background: #315bd6;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n.identificador {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\nh1 {\r\n  margin: 8px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.autor {\r\n  margin: 0;\r\n  color: #64748b;\r\n}\r\n\r\n.informacoes {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 18px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.informacoes div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.informacoes span {\r\n  color: #8792a4;\r\n  font-size: 12px;\r\n}\r\n\r\n.informacoes strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.sinopse {\r\n  margin-top: 30px;\r\n}\r\n\r\n.sinopse h2 {\r\n  font-size: 18px;\r\n}\r\n\r\n.sinopse p {\r\n  color: #64748b;\r\n  line-height: 1.6;\r\n}\r\n\r\n.generos,\r\n.exemplares {\r\n  margin-top: 30px;\r\n}\r\n\r\n.generos h2,\r\n.exemplares h2 {\r\n  margin: 0 0 12px;\r\n  font-size: 18px;\r\n}\r\n\r\n.generos-lista {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.genero {\r\n  padding: 6px 10px;\r\n  border-radius: 999px;\r\n  background: #edf2ff;\r\n  color: #315bd6;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.exemplares-cabecalho {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.exemplares-cabecalho p {\r\n  margin: 0;\r\n  color: #8792a4;\r\n  font-size: 13px;\r\n}\r\n\r\n.exemplares-cabecalho > strong {\r\n  color: #64748b;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-exemplares {\r\n  overflow-x: auto;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 8px;\r\n}\r\n\r\n.tabela-exemplares table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-exemplares th,\r\n.tabela-exemplares td {\r\n  padding: 12px 14px;\r\n  border-bottom: 1px solid #edf0f4;\r\n  white-space: nowrap;\r\n  font-size: 12px;\r\n}\r\n\r\n.tabela-exemplares th {\r\n  color: #8792a4;\r\n  background: #fafbfd;\r\n  font-size: 10px;\r\n}\r\n\r\n.tabela-exemplares tr:last-child td {\r\n  border-bottom: 0;\r\n}\r\n\r\n.status-exemplar {\r\n  color: #315bd6;\r\n  font-weight: 600;\r\n}\r\n\r\n.sem-exemplares {\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n  background: #f8fafc;\r\n  color: #64748b;\r\n  font-size: 13px;\r\n}\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  z-index: 20;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-edicao {\r\n  width: min(100%, 620px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-edicao header,\r\n.modal-edicao footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-edicao header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-edicao header h2 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-edicao header button {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.campos-edicao {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 13px;\r\n}\r\n\r\n.modal-edicao label {\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo-completo {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.modal-edicao input,\r\n.modal-edicao textarea {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n  resize: vertical;\r\n}\r\n\r\n.modal-edicao footer {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-edicao footer button {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-edicao footer .btn-primary {\r\n  border-color: #315bd6;\r\n  color: #fff;\r\n  background: #315bd6;\r\n}\r\n\r\n.mensagem-edicao {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-livro {\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .livro-card {\r\n    padding: 22px;\r\n  }\r\n\r\n  .informacoes {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .exemplares-cabecalho {\r\n    flex-direction: column;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Detalheslivros, { className: "Detalheslivros", filePath: "src/app/component/detalheslivros/detalheslivros.ts", lineNumber: 24 }); })();
