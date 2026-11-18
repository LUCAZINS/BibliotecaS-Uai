import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ExemplaresService } from '../../Service/ExemplaresService';
import { LivrosService } from '../../Service/livros-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ExemplaresComponent_tr_115_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 41);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 42)(6, "div", 43);
    i0.ɵɵtext(7, "\u25A4");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "td")(14, "span", 44);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "span", 45);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 46);
    i0.ɵɵelement(23, "span", 47);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td")(26, "div", 48)(27, "button", 49);
    i0.ɵɵlistener("click", function ExemplaresComponent_tr_115_Template_button_click_27_listener() { const exemplar_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.abrirDetalhes(exemplar_r2)); });
    i0.ɵɵtext(28, " \u24D8 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 50);
    i0.ɵɵlistener("click", function ExemplaresComponent_tr_115_Template_button_click_29_listener() { const exemplar_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editarExemplar(exemplar_r2)); });
    i0.ɵɵtext(30, " \u270E ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "button", 51);
    i0.ɵɵlistener("click", function ExemplaresComponent_tr_115_Template_button_click_31_listener() { const exemplar_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.confirmarExclusao(exemplar_r2)); });
    i0.ɵɵtext(32, " \uD83D\uDDD1 ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const exemplar_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" #", exemplar_r2.id, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", exemplar_r2.nomeLivro || ctx_r2.nomeLivroPorId(exemplar_r2.livroId), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Livro ID: ", exemplar_r2.livroId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", exemplar_r2.codigoBarras || "N\u00E3o informado", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getLocalizacao(exemplar_r2) || "N\u00E3o informada", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", exemplar_r2.diasAluguel, " dias ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.classeStatus(exemplar_r2.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.textoStatus(exemplar_r2.status), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", exemplar_r2.status === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", exemplar_r2.status === 1);
} }
function ExemplaresComponent_tr_116_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 52)(2, "div", 53)(3, "div", 54);
    i0.ɵɵtext(4, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6, "Nenhum exemplar encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, " Tente alterar os filtros ou cadastre um novo exemplar. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 22);
    i0.ɵɵlistener("click", function ExemplaresComponent_tr_116_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.limparFiltros()); });
    i0.ɵɵtext(10, " Limpar filtros ");
    i0.ɵɵelementEnd()()()();
} }
function ExemplaresComponent_div_120_div_12_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 71);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const livro_r8 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", livro_r8.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", livro_r8.titulo, " ");
} }
function ExemplaresComponent_div_120_div_12_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 83);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_div_120_div_12_select_8_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.formExemplarDados.livroId, $event) || (ctx_r2.formExemplarDados.livroId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(1, "option", 84);
    i0.ɵɵtext(2, " Selecione um livro ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ExemplaresComponent_div_120_div_12_select_8_option_3_Template, 2, 2, "option", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formExemplarDados.livroId);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.livros);
} }
function ExemplaresComponent_div_120_div_12_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 86);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_div_120_div_12_input_9_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.formExemplarDados.nomeLivro, $event) || (ctx_r2.formExemplarDados.nomeLivro = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formExemplarDados.nomeLivro);
    i0.ɵɵcontrol();
} }
function ExemplaresComponent_div_120_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "label", 77);
    i0.ɵɵtext(2, "Localizar livro por *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_div_120_div_12_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.formaBuscaLivro, $event) || (ctx_r2.formaBuscaLivro = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 79);
    i0.ɵɵtext(5, "ID do livro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 80);
    i0.ɵɵtext(7, "Nome do livro");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, ExemplaresComponent_div_120_div_12_select_8_Template, 4, 3, "select", 81)(9, ExemplaresComponent_div_120_div_12_input_9_Template, 1, 1, "input", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formaBuscaLivro);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.formaBuscaLivro === "id");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.formaBuscaLivro === "nome");
} }
function ExemplaresComponent_div_120_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1, " Emprestado (gerenciado pelo sistema) ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("ngValue", 1);
} }
function ExemplaresComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_120_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵelementStart(1, "section", 56);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_120_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header", 57)(3, "div")(4, "h2", 58);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 59);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_120_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵtext(9, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 60, 0);
    i0.ɵɵlistener("ngSubmit", function ExemplaresComponent_div_120_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.salvarExemplar()); });
    i0.ɵɵtemplate(12, ExemplaresComponent_div_120_div_12_Template, 10, 3, "div", 61);
    i0.ɵɵelementStart(13, "div", 62)(14, "label", 63);
    i0.ɵɵtext(15, " Localiza\u00E7\u00E3o / Endere\u00E7o do exemplar * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 64);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function ExemplaresComponent_div_120_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setLocalizacao($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 65)(18, "div", 66)(19, "label", 67);
    i0.ɵɵtext(20, "Dias de empr\u00E9stimo *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 68);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_div_120_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formExemplarDados.diasAluguel, $event) || (ctx_r2.formExemplarDados.diasAluguel = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 66)(23, "label", 69);
    i0.ɵɵtext(24, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 70);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_div_120_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formExemplarDados.status, $event) || (ctx_r2.formExemplarDados.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(26, "option", 71);
    i0.ɵɵtext(27, "Dispon\u00EDvel");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, ExemplaresComponent_div_120_option_28_Template, 2, 1, "option", 72);
    i0.ɵɵelementStart(29, "option", 71);
    i0.ɵɵtext(30, "Manuten\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 71);
    i0.ɵɵtext(32, "Perdido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 71);
    i0.ɵɵtext(34, "Baixado");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 73)(36, "span");
    i0.ɵɵtext(37, "\u25A4");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39, " O c\u00F3digo de barras ser\u00E1 gerado pelo sistema ap\u00F3s o cadastro, conforme a configura\u00E7\u00E3o do backend. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "footer", 74)(41, "button", 75);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_120_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵtext(42, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 76);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const formExemplar_r10 = i0.ɵɵreference(11);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.modoEdicao ? "Editar exemplar" : "Novo exemplar", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.modoEdicao ? "Atualize os dados do exemplar selecionado." : "Preencha os dados para cadastrar um exemplar.", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.salvando);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r2.modoEdicao);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.getLocalizacaoFormulario());
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formExemplarDados.diasAluguel);
    i0.ɵɵproperty("disabled", ctx_r2.modoEdicao && ctx_r2.formExemplarDados.status === 1);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formExemplarDados.status);
    i0.ɵɵproperty("disabled", ctx_r2.modoEdicao && ctx_r2.formExemplarDados.status === 1);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.modoEdicao && ctx_r2.formExemplarDados.status === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", 4);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r2.salvando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.salvando || formExemplar_r10.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.salvando ? "Salvando..." : ctx_r2.modoEdicao ? "Salvar altera\u00E7\u00F5es" : "Cadastrar exemplar", " ");
} }
function ExemplaresComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_121_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelarExclusao()); });
    i0.ɵɵelementStart(1, "section", 87);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_121_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 88);
    i0.ɵɵtext(3, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 89);
    i0.ɵɵtext(5, "Excluir exemplar?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Tem certeza de que deseja excluir o exemplar ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, "? Essa a\u00E7\u00E3o n\u00E3o poder\u00E1 ser desfeita. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "footer", 74)(12, "button", 75);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_121_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelarExclusao()); });
    i0.ɵɵtext(13, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 90);
    i0.ɵɵlistener("click", function ExemplaresComponent_div_121_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.excluirExemplar()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.exemplarParaExcluir.codigoBarras || "#" + ctx_r2.exemplarParaExcluir.id, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.excluindo ? "Excluindo..." : "Sim, excluir", " ");
} }
export class ExemplaresComponent {
    exemplaresService = inject(ExemplaresService);
    livrosService = inject(LivrosService);
    cdr = inject(ChangeDetectorRef);
    router = inject(Router);
    subscriptions = new Subscription();
    exemplaresAtuais = [];
    exemplaresFiltrados = [];
    livros = [];
    busca = '';
    filtroStatus = '';
    formaBuscaLivro = 'id';
    modalAberto = false;
    modoEdicao = false;
    salvando = false;
    excluindo = false;
    exemplarParaExcluir = null;
    exemplarEditandoId = null;
    formExemplarDados = {
        livroId: undefined,
        endereçavel: '',
        diasAluguel: 7,
        status: 0
    };
    ngOnInit() {
        // Recebe atualizações do estado compartilhado.
        this.subscriptions.add(this.exemplaresService.exemplares$.subscribe(exemplares => {
            this.exemplaresAtuais = exemplares;
            this.filtrarExemplares();
            this.cdr.detectChanges();
        }));
        // Busca inicial dos exemplares.
        this.subscriptions.add(this.exemplaresService.listar().subscribe({
            next: () => this.cdr.detectChanges(),
            error: erro => this.tratarErroCarregamento('Erro ao carregar exemplares:', erro)
        }));
        this.carregarLivros();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    carregarLivros() {
        this.subscriptions.add(this.livrosService.buscarTodos().subscribe({
            next: livros => {
                this.livros = livros;
                this.filtrarExemplares();
                this.cdr.detectChanges();
            },
            error: erro => this.tratarErroCarregamento('Erro ao carregar livros:', erro)
        }));
    }
    filtrarExemplares() {
        const termo = this.busca.trim().toLowerCase();
        this.exemplaresFiltrados = this.exemplaresAtuais.filter(exemplar => {
            const titulo = (exemplar.nomeLivro || this.nomeLivroPorId(exemplar.livroId)).toLowerCase();
            const codigo = (exemplar.codigoBarras || '').toLowerCase();
            const localizacao = this.getLocalizacao(exemplar).toLowerCase();
            const correspondeBusca = !termo ||
                titulo.includes(termo) ||
                codigo.includes(termo) ||
                localizacao.includes(termo) ||
                String(exemplar.id).includes(termo);
            const correspondeStatus = !this.filtroStatus ||
                exemplar.status === Number(this.filtroStatus);
            return correspondeBusca && correspondeStatus;
        });
    }
    nomeLivroPorId(livroId) {
        const livro = this.livros.find(item => item.id === livroId);
        return livro?.titulo || `Livro #${livroId}`;
    }
    abrirDetalhes(exemplar) {
        this.router.navigate(['/Barra/exemplares', exemplar.id]);
    }
    // Métodos auxiliares para usar "endereçavel" no template
    // sem provocar erro no parser do Angular.
    getLocalizacao(exemplar) {
        return exemplar.endereçavel || '';
    }
    getLocalizacaoFormulario() {
        return this.formExemplarDados['endereçavel'] || '';
    }
    setLocalizacao(valor) {
        this.formExemplarDados['endereçavel'] = valor;
    }
    textoStatus(status) {
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
    classeStatus(status) {
        switch (status) {
            case 0:
                return 'status-disponivel';
            case 1:
                return 'status-alugado';
            default:
                return 'status-indisponivel';
        }
    }
    contarStatus(status) {
        return this.exemplaresAtuais.filter(exemplar => exemplar.status === status).length;
    }
    contarIndisponiveis() {
        return this.exemplaresAtuais.filter(exemplar => exemplar.status !== 0 && exemplar.status !== 1).length;
    }
    limparFiltros() {
        this.busca = '';
        this.filtroStatus = '';
        this.filtrarExemplares();
    }
    abrirCadastro() {
        this.modoEdicao = false;
        this.exemplarEditandoId = null;
        this.formaBuscaLivro = 'id';
        this.formExemplarDados = {
            livroId: undefined,
            endereçavel: '',
            diasAluguel: 7,
            status: 0
        };
        this.modalAberto = true;
    }
    editarExemplar(exemplar) {
        if (exemplar.status === 1) {
            return;
        }
        this.modoEdicao = true;
        this.exemplarEditandoId = exemplar.id;
        this.formExemplarDados = {
            livroId: exemplar.livroId,
            endereçavel: this.getLocalizacao(exemplar),
            diasAluguel: exemplar.diasAluguel,
            status: exemplar.status
        };
        this.modalAberto = true;
    }
    fecharModal() {
        if (this.salvando) {
            return;
        }
        this.modalAberto = false;
    }
    salvarExemplar() {
        const livroInformado = this.formaBuscaLivro === 'id'
            ? !!this.formExemplarDados.livroId
            : !!this.formExemplarDados.nomeLivro?.trim();
        if (this.salvando ||
            (!this.modoEdicao && !livroInformado) ||
            !this.getLocalizacaoFormulario().trim() ||
            !this.formExemplarDados.diasAluguel) {
            return;
        }
        this.salvando = true;
        const dados = {
            livroId: this.formaBuscaLivro === 'id'
                ? this.formExemplarDados.livroId
                : undefined,
            nomeLivro: this.formaBuscaLivro === 'nome'
                ? this.formExemplarDados.nomeLivro?.trim()
                : undefined,
            endereçavel: this.getLocalizacaoFormulario().trim(),
            diasAluguel: this.formExemplarDados.diasAluguel,
            status: this.formExemplarDados.status
        };
        try {
            const operacao = this.modoEdicao && this.exemplarEditandoId !== null
                ? this.exemplaresService.atualizar(this.exemplarEditandoId, {
                    Endereçavel: this.getLocalizacaoFormulario().trim(),
                    DiasAluguel: this.formExemplarDados.diasAluguel,
                    Status: this.formExemplarDados.status ?? 0
                })
                : this.exemplaresService.criar(dados);
            this.subscriptions.add(operacao.pipe(finalize(() => {
                this.salvando = false;
                this.cdr.detectChanges();
            })).subscribe({
                next: () => {
                    this.modalAberto = false;
                },
                error: erro => {
                    console.error('Erro ao salvar exemplar:', erro);
                    alert(erro?.error?.detail ||
                        erro?.error?.message ||
                        erro?.error?.mensagem ||
                        'Não foi possível salvar o exemplar.');
                }
            }));
        }
        catch (erro) {
            console.error('Erro ao iniciar salvamento do exemplar:', erro);
            this.salvando = false;
            this.cdr.detectChanges();
            alert('Não foi possível iniciar o salvamento do exemplar.');
        }
    }
    confirmarExclusao(exemplar) {
        if (exemplar.status === 1) {
            return;
        }
        this.exemplarParaExcluir = exemplar;
    }
    cancelarExclusao() {
        if (this.excluindo) {
            return;
        }
        this.exemplarParaExcluir = null;
    }
    excluirExemplar() {
        if (!this.exemplarParaExcluir || this.excluindo) {
            return;
        }
        const id = this.exemplarParaExcluir.id;
        this.excluindo = true;
        this.subscriptions.add(this.exemplaresService.excluir(id).subscribe({
            next: () => {
                this.exemplarParaExcluir = null;
                this.excluindo = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao excluir exemplar:', erro);
                alert(erro?.error?.detail ||
                    erro?.error?.message ||
                    erro?.error?.mensagem ||
                    'Não foi possível excluir o exemplar.');
                this.excluindo = false;
                this.cdr.detectChanges();
            }
        }));
    }
    recarregarExemplares() {
        this.subscriptions.add(this.exemplaresService.recarregar().subscribe({
            next: () => this.cdr.detectChanges(),
            error: erro => this.tratarErroCarregamento('Erro ao atualizar exemplares:', erro)
        }));
    }
    tratarErroCarregamento(mensagem, erro) {
        console.error(mensagem, erro);
        this.cdr.detectChanges();
    }
    static ɵfac = function ExemplaresComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExemplaresComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExemplaresComponent, selectors: [["app-exemplares-component"]], decls: 122, vars: 12, consts: [["formExemplar", "ngForm"], [1, "topbar"], [1, "breadcrumb"], [1, "breadcrumb-separator"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot"], [1, "avatar"], [1, "pagina-exemplares"], [1, "conteudo"], [1, "cabecalho"], [1, "titulo-area"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "indicadores"], [1, "indicador"], [1, "indicador-icone", "azul"], [1, "indicador-topo"], [1, "indicador-icone", "verde"], [1, "indicador-icone", "laranja"], [1, "indicador-icone", "vermelho"], [1, "painel-listagem"], [1, "painel-titulo"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "filtros"], [1, "campo-busca"], [1, "icone-pesquisa"], ["type", "text", "placeholder", "Buscar por livro, c\u00F3digo de barras ou localiza\u00E7\u00E3o...", 3, "ngModelChange", "ngModel"], ["aria-label", "Filtrar por status", 1, "filtro-status", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["type", "button", 1, "limpar-busca", 3, "click"], [1, "tabela-container"], [1, "coluna-acoes"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "resumo-listagem"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "id-exemplar"], [1, "livro-info"], [1, "livro-icone"], [1, "codigo-barras"], [1, "dias-aluguel"], [1, "status", 3, "ngClass"], [1, "status-ponto"], [1, "acoes"], ["type", "button", "title", "Ver detalhes do exemplar", "aria-label", "Ver detalhes do exemplar", 1, "acao-btn", "detalhes", 3, "click"], ["type", "button", "title", "Editar exemplar", "aria-label", "Editar exemplar", 1, "acao-btn", "editar", 3, "click", "disabled"], ["type", "button", "title", "Excluir exemplar", "aria-label", "Excluir exemplar", 1, "acao-btn", "excluir", 3, "click", "disabled"], ["colspan", "7"], [1, "estado-vazio"], [1, "vazio-icone"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-modal", 1, "modal", 3, "click"], [1, "modal-cabecalho"], ["id", "titulo-modal"], ["type", "button", "aria-label", "Fechar", 1, "fechar-modal", 3, "click", "disabled"], [1, "formulario", 3, "ngSubmit"], ["class", "campo campo-completo", 4, "ngIf"], [1, "campo", "campo-completo"], ["for", "enderecavel"], ["id", "enderecavel", "name", "enderecavel", "type", "text", "placeholder", "Ex.: Estante A, Prateleira 2", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-linha"], [1, "campo"], ["for", "diasAluguel"], ["id", "diasAluguel", "name", "diasAluguel", "type", "number", "min", "1", "max", "365", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "status"], ["id", "status", "name", "status", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["disabled", "", 3, "ngValue", 4, "ngIf"], [1, "aviso-codigo"], [1, "modal-acoes"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["for", "formaBuscaLivro"], ["id", "formaBuscaLivro", "name", "formaBuscaLivro", 3, "ngModelChange", "ngModel"], ["value", "id"], ["value", "nome"], ["id", "livroId", "name", "livroId", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "nomeLivro", "name", "nomeLivro", "type", "text", "placeholder", "Digite o nome exato do livro", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "livroId", "name", "livroId", "required", "", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "nomeLivro", "name", "nomeLivro", "type", "text", "placeholder", "Digite o nome exato do livro", "required", "", 3, "ngModelChange", "ngModel"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "titulo-exclusao", 1, "modal", "modal-confirmacao", 3, "click"], [1, "confirmacao-icone"], ["id", "titulo-exclusao"], ["type", "button", 1, "btn-danger", 3, "click", "disabled"]], template: function ExemplaresComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 1)(1, "div", 2)(2, "span");
            i0.ɵɵtext(3, "Biblioteca");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "strong");
            i0.ɵɵtext(7, "Exemplares");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4)(9, "div", 5);
            i0.ɵɵelement(10, "span", 6);
            i0.ɵɵtext(11, " Sistema ativo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵtext(13, "B");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 8)(15, "main", 9)(16, "section", 10)(17, "div", 11)(18, "h1");
            i0.ɵɵtext(19, "Gest\u00E3o de exemplares");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, " Gerencie os exemplares f\u00EDsicos, c\u00F3digos de barras e disponibilidade do acervo. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "button", 12);
            i0.ɵɵlistener("click", function ExemplaresComponent_Template_button_click_22_listener() { return ctx.abrirCadastro(); });
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Novo exemplar ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "section", 13)(27, "article", 14)(28, "div", 15);
            i0.ɵɵtext(29, "\u25A4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div")(31, "span", 16);
            i0.ɵɵtext(32, "Total de exemplares");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "strong");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "small");
            i0.ɵɵtext(36, "Cadastrados no sistema");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "article", 14)(38, "div", 17);
            i0.ɵɵtext(39, "\u2713");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div")(41, "span", 16);
            i0.ɵɵtext(42, "Dispon\u00EDveis");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "strong");
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "small");
            i0.ɵɵtext(46, "Prontos para empr\u00E9stimo");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "article", 14)(48, "div", 18);
            i0.ɵɵtext(49, "\u2197");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div")(51, "span", 16);
            i0.ɵɵtext(52, "Emprestados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "strong");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "small");
            i0.ɵɵtext(56, "Fora do acervo dispon\u00EDvel");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "article", 14)(58, "div", 19);
            i0.ɵɵtext(59, "!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div")(61, "span", 16);
            i0.ɵɵtext(62, "Indispon\u00EDveis");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "strong");
            i0.ɵɵtext(64);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "small");
            i0.ɵɵtext(66, "Outros status");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(67, "section", 20)(68, "div", 21)(69, "div")(70, "h2");
            i0.ɵɵtext(71, "Exemplares cadastrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "p");
            i0.ɵɵtext(73, "Consulte e gerencie os itens do acervo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "button", 22);
            i0.ɵɵlistener("click", function ExemplaresComponent_Template_button_click_74_listener() { return ctx.recarregarExemplares(); });
            i0.ɵɵtext(75, " \u21BB Atualizar ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 23)(77, "div", 24)(78, "span", 25);
            i0.ɵɵtext(79, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "input", 26);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_Template_input_ngModelChange_80_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.busca, $event) || (ctx.busca = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExemplaresComponent_Template_input_ngModelChange_80_listener() { return ctx.filtrarExemplares(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "select", 27);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function ExemplaresComponent_Template_select_ngModelChange_81_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filtroStatus, $event) || (ctx.filtroStatus = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExemplaresComponent_Template_select_ngModelChange_81_listener() { return ctx.filtrarExemplares(); });
            i0.ɵɵelementStart(82, "option", 28);
            i0.ɵɵtext(83, "Todos os status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "option", 29);
            i0.ɵɵtext(85, "Dispon\u00EDvel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "option", 30);
            i0.ɵɵtext(87, "Emprestado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "option", 31);
            i0.ɵɵtext(89, "Manuten\u00E7\u00E3o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "option", 32);
            i0.ɵɵtext(91, "Perdido");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "option", 33);
            i0.ɵɵtext(93, "Baixado");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "button", 34);
            i0.ɵɵlistener("click", function ExemplaresComponent_Template_button_click_94_listener() { return ctx.limparFiltros(); });
            i0.ɵɵtext(95, " Limpar filtros ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 35)(97, "table")(98, "thead")(99, "tr")(100, "th");
            i0.ɵɵtext(101, "Exemplar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "th");
            i0.ɵɵtext(103, "Livro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "th");
            i0.ɵɵtext(105, "C\u00F3digo de barras");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "th");
            i0.ɵɵtext(107, "Localiza\u00E7\u00E3o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "th");
            i0.ɵɵtext(109, "Dias de empr\u00E9stimo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "th");
            i0.ɵɵtext(111, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "th", 36);
            i0.ɵɵtext(113, "A\u00E7\u00F5es");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(114, "tbody");
            i0.ɵɵtemplate(115, ExemplaresComponent_tr_115_Template, 33, 10, "tr", 37)(116, ExemplaresComponent_tr_116_Template, 11, 0, "tr", 38);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(117, "footer", 39)(118, "span");
            i0.ɵɵtext(119);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(120, ExemplaresComponent_div_120_Template, 45, 17, "div", 40)(121, ExemplaresComponent_div_121_Template, 16, 4, "div", 40);
        } if (rf & 2) {
            i0.ɵɵadvance(34);
            i0.ɵɵtextInterpolate(ctx.exemplaresAtuais.length);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.contarStatus(0));
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.contarStatus(1));
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.contarIndisponiveis());
            i0.ɵɵadvance(16);
            i0.ɵɵtwoWayProperty("ngModel", ctx.busca);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.filtroStatus);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(34);
            i0.ɵɵproperty("ngForOf", ctx.exemplaresFiltrados);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.exemplaresFiltrados.length === 0);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" Exibindo ", ctx.exemplaresFiltrados.length, " de ", ctx.exemplaresAtuais.length, " exemplares ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.exemplarParaExcluir);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgForm], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100%;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  min-height: 72px;\r\n  padding: 0 34px;\r\n  background: #fff;\r\n  border-bottom: 1px solid #eaebf2;\r\n}\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  gap: 22px;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #9297a8;\r\n  font-size: 12px;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #373b50;\r\n  font-weight: 650;\r\n}\r\n.breadcrumb-separator[_ngcontent-%COMP%] {\r\n  color: #c8cad5;\r\n}\r\n.system-status[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #777d91;\r\n  font-size: 11px;\r\n}\r\n.status-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px rgba(34, 197, 94, 0.45);\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 37px;\r\n  height: 37px;\r\n  place-items: center;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 12px;\r\n  background: #f0edff;\r\n  color: #6956df;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n}\r\n\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  min-width: 0;\r\n  color: #202b3c;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], \r\ninput[_ngcontent-%COMP%], \r\nselect[_ngcontent-%COMP%] {\r\n  font: inherit;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.pagina-exemplares[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  padding: 30px;\r\n  background: #f5f7fb;\r\n}\r\n\r\n\r\n\r\n.cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 9px;\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.titulo-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #18263b;\r\n  font-size: 27px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.titulo-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 9px 0 0;\r\n  color: #788497;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%], \r\n.btn-secondary[_ngcontent-%COMP%], \r\n.btn-danger[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 9px;\r\n  min-height: 42px;\r\n  padding: 0 17px;\r\n  border: 1px solid transparent;\r\n  border-radius: 8px;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  transition: background 0.2s, border-color 0.2s;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background: #2459d3;\r\n  box-shadow: 0 3px 7px rgb(36 89 211 / 12%);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background: #1948b7;\r\n}\r\n\r\n.icone[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  line-height: 1;\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n  color: #34445a;\r\n  background: #fff;\r\n  border-color: #dce3ec;\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background: #f4f7fb;\r\n  border-color: #c3cfdd;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background: #c93636;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background: #aa2828;\r\n}\r\n\r\n\r\n\r\n.indicadores[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 17px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.indicador[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  padding: 21px;\r\n  background: #fff;\r\n  border: 1px solid #e6ebf2;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(20 39 70 / 2%);\r\n}\r\n\r\n.indicador-topo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #68768a;\r\n  font-size: 13px;\r\n  font-weight: 550;\r\n}\r\n\r\n.indicador-icone[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 9px;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.azul[_ngcontent-%COMP%] {\r\n  color: #2459d3;\r\n  background: #edf3ff;\r\n}\r\n\r\n.verde[_ngcontent-%COMP%] {\r\n  color: #18845c;\r\n  background: #e9f8f0;\r\n}\r\n\r\n.laranja[_ngcontent-%COMP%] {\r\n  color: #bc7517;\r\n  background: #fff4df;\r\n}\r\n\r\n.vermelho[_ngcontent-%COMP%] {\r\n  color: #c53b3b;\r\n  background: #ffeded;\r\n}\r\n\r\n.indicador[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 15px;\r\n  color: #1c2a40;\r\n  font-size: 29px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.indicador[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 6px;\r\n  color: #8994a5;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.painel-listagem[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background: #fff;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 12px;\r\n  box-shadow: 0 3px 10px rgb(20 39 70 / 2%);\r\n}\r\n\r\n.painel-titulo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 23px 24px;\r\n}\r\n\r\n.painel-titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #233148;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.painel-titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 6px 0 0;\r\n  color: #8792a3;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.filtros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  padding: 0 24px 19px;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-width: 0;\r\n  height: 43px;\r\n  padding: 0 13px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]:focus-within {\r\n  border-color: #5782e9;\r\n  box-shadow: 0 0 0 3px rgb(36 89 211 / 8%);\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  color: #8a96a7;\r\n  font-size: 22px;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 0;\r\n  padding: 0;\r\n  color: #26354a;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  font-size: 13px;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #a0aaba;\r\n}\r\n\r\n.limpar-busca[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  color: #7a8799;\r\n  border: 0;\r\n  background: transparent;\r\n  font-size: 20px;\r\n}\r\n\r\n.filtro-status[_ngcontent-%COMP%] {\r\n  width: 190px;\r\n  max-width: 100%;\r\n  height: 43px;\r\n  padding: 0 12px;\r\n  color: #45546a;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  outline: none;\r\n  font-size: 13px;\r\n}\r\n\r\n.filtro-status[_ngcontent-%COMP%]:focus, \r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  border-color: #5782e9;\r\n}\r\n\r\n\r\n\r\n.resumo-listagem[_ngcontent-%COMP%] {\r\n  padding: 12px 24px;\r\n  color: #8792a3;\r\n  border-top: 1px solid #edf0f5;\r\n  background: #fbfcfe;\r\n  font-size: 12px;\r\n}\r\n\r\n.resumo-listagem[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #35455c;\r\n}\r\n\r\n\r\n\r\n.tabela-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background: #f8fafd;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 14px 20px;\r\n  color: #7a8799;\r\n  border-top: 1px solid #edf0f5;\r\n  border-bottom: 1px solid #e9edf3;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.035em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 16px 20px;\r\n  color: #536176;\r\n  border-bottom: 1px solid #edf0f5;\r\n  font-size: 12px;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(:has(.estado-vazio)) {\r\n  background: #fafcff;\r\n}\r\n\r\n.livro-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 190px;\r\n}\r\n\r\n.livro-icone[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  width: 39px;\r\n  height: 43px;\r\n  color: #315fc2;\r\n  border: 1px solid #dbe6ff;\r\n  border-radius: 5px;\r\n  background: #eff4ff;\r\n  font-size: 19px;\r\n}\r\n\r\n.livro-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 230px;\r\n  overflow: hidden;\r\n  color: #28364b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.livro-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 5px;\r\n  color: #8994a5;\r\n  font-size: 11px;\r\n}\r\n\r\n.codigo-barras[_ngcontent-%COMP%] {\r\n  padding: 5px 8px;\r\n  color: #42516a;\r\n  border: 1px solid #e6ebf2;\r\n  border-radius: 5px;\r\n  background: #f8fafd;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  letter-spacing: 0.2px;\r\n}\r\n\r\n\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  padding: 6px 9px;\r\n  border: 1px solid transparent;\r\n  border-radius: 20px;\r\n  font-size: 11px;\r\n  font-weight: 650;\r\n}\r\n\r\n.status-ponto[_ngcontent-%COMP%] {\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background: currentColor;\r\n}\r\n\r\n.status-disponivel[_ngcontent-%COMP%] {\r\n  color: #16845b;\r\n  border-color: #d4f0e1;\r\n  background: #eaf8f0;\r\n}\r\n\r\n.status-alugado[_ngcontent-%COMP%] {\r\n  color: #b87519;\r\n  border-color: #f8e8c9;\r\n  background: #fff6e6;\r\n}\r\n\r\n.status-indisponivel[_ngcontent-%COMP%] {\r\n  color: #c23a3a;\r\n  border-color: #f5d9d9;\r\n  background: #fff0f0;\r\n}\r\n\r\n.status-outro[_ngcontent-%COMP%] {\r\n  color: #657287;\r\n  border-color: #e1e6ee;\r\n  background: #f1f4f8;\r\n}\r\n\r\n\r\n\r\n.coluna-acoes[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.acoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 7px;\r\n}\r\n\r\n.acao-btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33px;\r\n  height: 33px;\r\n  color: #53647b;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  font-size: 17px;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.acao-btn[_ngcontent-%COMP%]:hover {\r\n  color: #2459d3;\r\n  border-color: #c6d7ff;\r\n  background: #eff4ff;\r\n}\r\n\r\n.acao-btn.excluir[_ngcontent-%COMP%]:hover {\r\n  color: #c93636;\r\n  border-color: #f3caca;\r\n  background: #fff0f0;\r\n}\r\n\r\n\r\n\r\n.estado-vazio[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 55px 20px;\r\n  text-align: center;\r\n  white-space: normal;\r\n}\r\n\r\n.vazio-icone[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 53px;\r\n  height: 53px;\r\n  margin-bottom: 15px;\r\n  color: #7487a5;\r\n  border-radius: 15px;\r\n  background: #f0f4fa;\r\n  font-size: 28px;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #34435a;\r\n  font-size: 14px;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 8px 0 18px;\r\n  color: #8994a5;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  inset: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow-y: auto;\r\n  padding: 24px;\r\n  background: rgb(16 27 45 / 52%);\r\n  backdrop-filter: blur(3px);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 610px;\r\n  max-height: calc(100vh - 48px);\r\n  overflow-y: auto;\r\n  border: 1px solid #e8edf4;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  box-shadow: 0 20px 70px rgb(0 0 0 / 18%);\r\n  animation: _ngcontent-%COMP%_modalEntrada 0.18s ease-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_modalEntrada {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.modal-cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 20px;\r\n  padding: 25px 27px;\r\n  border-bottom: 1px solid #edf0f5;\r\n}\r\n\r\n.modal-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #202e43;\r\n  font-size: 21px;\r\n  font-weight: 750;\r\n}\r\n\r\n.modal-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n  color: #8490a2;\r\n  font-size: 12px;\r\n}\r\n\r\n.fechar-modal[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 34px;\r\n  height: 34px;\r\n  color: #718096;\r\n  border: 1px solid #e2e7ef;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  font-size: 23px;\r\n}\r\n\r\n.fechar-modal[_ngcontent-%COMP%]:hover {\r\n  color: #c93636;\r\n  background: #fff5f5;\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 19px;\r\n  padding: 25px 27px;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.campo-completo[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #34445a;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 0;\r\n  height: 43px;\r\n  padding: 0 12px;\r\n  color: #34445a;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  outline: none;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  border-color: #5782e9;\r\n  box-shadow: 0 0 0 3px rgb(36 89 211 / 8%);\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%] {\r\n  color: #79869a;\r\n  background: #f5f7fa;\r\n  cursor: default;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #8b96a7;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal-acoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  padding: 18px 27px;\r\n  border-top: 1px solid #edf0f5;\r\n  background: #fbfcfe;\r\n}\r\n\r\n\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%] {\r\n  max-width: 440px;\r\n  padding-top: 28px;\r\n}\r\n\r\n.confirmacao-icone[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin: 0 auto 16px;\r\n  color: #c93636;\r\n  border-radius: 50%;\r\n  background: #fff0f0;\r\n  font-size: 23px;\r\n  font-weight: 800;\r\n}\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 24px;\r\n  color: #26354a;\r\n  font-size: 19px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: 14px 25px 0;\r\n  color: #758196;\r\n  font-size: 13px;\r\n  line-height: 1.7;\r\n  text-align: center;\r\n}\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #39485d;\r\n}\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%]   .aviso-exclusao[_ngcontent-%COMP%] {\r\n  color: #a45c23;\r\n  font-size: 12px;\r\n}\r\n\r\n.modal-confirmacao[_ngcontent-%COMP%]   .modal-acoes[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1100px) {\r\n  .pagina-exemplares[_ngcontent-%COMP%] {\r\n    padding: 22px;\r\n  }\r\n\r\n  .indicadores[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .tabela-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 900px;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .pagina-exemplares[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n\r\n  .cabecalho[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .cabecalho[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .titulo-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .indicadores[_ngcontent-%COMP%] {\r\n    gap: 10px;\r\n  }\r\n\r\n  .indicador[_ngcontent-%COMP%] {\r\n    padding: 14px;\r\n  }\r\n\r\n  .indicador-topo[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    font-size: 11px;\r\n  }\r\n\r\n  .indicador-icone[_ngcontent-%COMP%] {\r\n    width: 29px;\r\n    height: 29px;\r\n  }\r\n\r\n  .indicador[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .painel-titulo[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    padding: 18px;\r\n  }\r\n\r\n  .painel-titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .filtros[_ngcontent-%COMP%] {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 0 18px 16px;\r\n  }\r\n\r\n  .filtro-status[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .resumo-listagem[_ngcontent-%COMP%] {\r\n    padding: 12px 18px;\r\n  }\r\n\r\n  .formulario[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    padding: 20px;\r\n  }\r\n\r\n  .campo-completo[_ngcontent-%COMP%] {\r\n    grid-column: auto;\r\n  }\r\n\r\n  .modal-overlay[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    padding: 12px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%] {\r\n    max-height: calc(100vh - 24px);\r\n  }\r\n\r\n  .modal-cabecalho[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  .modal-acoes[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n    padding: 16px 20px;\r\n  }\r\n\r\n  .modal-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExemplaresComponent, [{
        type: Component,
        args: [{ selector: 'app-exemplares-component', standalone: true, imports: [CommonModule, FormsModule], template: "\r\n  <!-- Cabe\u00E7alho -->\r\n  <header class=\"topbar\">\r\n    <div class=\"breadcrumb\">\r\n      <span>Biblioteca</span>\r\n      <span class=\"breadcrumb-separator\">/</span>\r\n      <strong>Exemplares</strong>\r\n    </div>\r\n\r\n    <div class=\"topbar-right\">\r\n      <div class=\"system-status\">\r\n        <span class=\"status-dot\"></span>\r\n        Sistema ativo\r\n      </div>\r\n      <div class=\"avatar\">B</div>\r\n    </div>\r\n  </header>\r\n<div class=\"pagina-exemplares\">\r\n\r\n  <main class=\"conteudo\">\r\n\r\n    <!-- T\u00EDtulo da p\u00E1gina -->\r\n    <section class=\"cabecalho\">\r\n      <div class=\"titulo-area\">\r\n        <h1>Gest\u00E3o de exemplares</h1>\r\n        <p>\r\n          Gerencie os exemplares f\u00EDsicos, c\u00F3digos de barras e\r\n          disponibilidade do acervo.\r\n        </p>\r\n      </div>\r\n\r\n      <button\r\n        class=\"btn-primary\"\r\n        type=\"button\"\r\n        (click)=\"abrirCadastro()\">\r\n        <span>+</span> Novo exemplar\r\n      </button>\r\n    </section>\r\n\r\n    <!-- Indicadores -->\r\n    <section class=\"indicadores\">\r\n\r\n      <article class=\"indicador\">\r\n        <div class=\"indicador-icone azul\">\u25A4</div>\r\n        <div>\r\n          <span class=\"indicador-topo\">Total de exemplares</span>\r\n          <strong>{{ exemplaresAtuais.length }}</strong>\r\n          <small>Cadastrados no sistema</small>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"indicador\">\r\n        <div class=\"indicador-icone verde\">\u2713</div>\r\n        <div>\r\n          <span class=\"indicador-topo\">Dispon\u00EDveis</span>\r\n          <strong>{{ contarStatus(0) }}</strong>\r\n          <small>Prontos para empr\u00E9stimo</small>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"indicador\">\r\n        <div class=\"indicador-icone laranja\">\u2197</div>\r\n        <div>\r\n          <span class=\"indicador-topo\">Emprestados</span>\r\n          <strong>{{ contarStatus(1) }}</strong>\r\n          <small>Fora do acervo dispon\u00EDvel</small>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"indicador\">\r\n        <div class=\"indicador-icone vermelho\">!</div>\r\n        <div>\r\n          <span class=\"indicador-topo\">Indispon\u00EDveis</span>\r\n          <strong>{{ contarIndisponiveis() }}</strong>\r\n          <small>Outros status</small>\r\n        </div>\r\n      </article>\r\n\r\n    </section>\r\n\r\n    <!-- Tabela de exemplares -->\r\n    <section class=\"painel-listagem\">\r\n\r\n      <div class=\"painel-titulo\">\r\n        <div>\r\n          <h2>Exemplares cadastrados</h2>\r\n          <p>Consulte e gerencie os itens do acervo.</p>\r\n        </div>\r\n\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-secondary\"\r\n          (click)=\"recarregarExemplares()\">\r\n          \u21BB Atualizar\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Pesquisa e filtros -->\r\n      <div class=\"filtros\">\r\n\r\n        <div class=\"campo-busca\">\r\n          <span class=\"icone-pesquisa\">\u2315</span>\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Buscar por livro, c\u00F3digo de barras ou localiza\u00E7\u00E3o...\"\r\n            [(ngModel)]=\"busca\"\r\n            (ngModelChange)=\"filtrarExemplares()\">\r\n        </div>\r\n\r\n        <select\r\n          class=\"filtro-status\"\r\n          aria-label=\"Filtrar por status\"\r\n          [(ngModel)]=\"filtroStatus\"\r\n          (ngModelChange)=\"filtrarExemplares()\">\r\n          <option value=\"\">Todos os status</option>\r\n          <option value=\"0\">Dispon\u00EDvel</option>\r\n          <option value=\"1\">Emprestado</option>\r\n          <option value=\"2\">Manuten\u00E7\u00E3o</option>\r\n          <option value=\"3\">Perdido</option>\r\n          <option value=\"4\">Baixado</option>\r\n        </select>\r\n\r\n        <button\r\n          type=\"button\"\r\n          class=\"limpar-busca\"\r\n          (click)=\"limparFiltros()\">\r\n          Limpar filtros\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <!-- Tabela responsiva -->\r\n      <div class=\"tabela-container\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Exemplar</th>\r\n              <th>Livro</th>\r\n              <th>C\u00F3digo de barras</th>\r\n              <th>Localiza\u00E7\u00E3o</th>\r\n              <th>Dias de empr\u00E9stimo</th>\r\n              <th>Status</th>\r\n              <th class=\"coluna-acoes\">A\u00E7\u00F5es</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let exemplar of exemplaresFiltrados\">\r\n\r\n              <td>\r\n                <span class=\"id-exemplar\">\r\n                  #{{ exemplar.id }}\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"livro-info\">\r\n                  <div class=\"livro-icone\">\u25A4</div>\r\n                  <div>\r\n                    <strong>\r\n                      {{ exemplar.nomeLivro || nomeLivroPorId(exemplar.livroId) }}\r\n                    </strong>\r\n                    <small>Livro ID: {{ exemplar.livroId }}</small>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <span class=\"codigo-barras\">\r\n                  {{ exemplar.codigoBarras || 'N\u00E3o informado' }}\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                {{ getLocalizacao(exemplar) || 'N\u00E3o informada' }}\r\n              </td>\r\n\r\n              <td>\r\n                <span class=\"dias-aluguel\">\r\n                  {{ exemplar.diasAluguel }} dias\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                <span\r\n                  class=\"status\"\r\n                  [ngClass]=\"classeStatus(exemplar.status)\">\r\n                  <span class=\"status-ponto\"></span>\r\n                  {{ textoStatus(exemplar.status) }}\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"acoes\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"acao-btn detalhes\"\r\n                    title=\"Ver detalhes do exemplar\"\r\n                    aria-label=\"Ver detalhes do exemplar\"\r\n                    (click)=\"abrirDetalhes(exemplar)\">\r\n                    \u24D8\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"acao-btn editar\"\r\n                    title=\"Editar exemplar\"\r\n                    aria-label=\"Editar exemplar\"\r\n                    [disabled]=\"exemplar.status === 1\"\r\n                    (click)=\"editarExemplar(exemplar)\">\r\n                    \u270E\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"acao-btn excluir\"\r\n                    title=\"Excluir exemplar\"\r\n                    aria-label=\"Excluir exemplar\"\r\n                    [disabled]=\"exemplar.status === 1\"\r\n                    (click)=\"confirmarExclusao(exemplar)\">\r\n                    \uD83D\uDDD1\r\n                  </button>\r\n                </div>\r\n              </td>\r\n\r\n            </tr>\r\n\r\n            <!-- Lista vazia -->\r\n            <tr *ngIf=\"exemplaresFiltrados.length === 0\">\r\n              <td colspan=\"7\">\r\n                <div class=\"estado-vazio\">\r\n                  <div class=\"vazio-icone\">\u2315</div>\r\n                  <strong>Nenhum exemplar encontrado</strong>\r\n                  <p>\r\n                    Tente alterar os filtros ou cadastre um novo exemplar.\r\n                  </p>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-secondary\"\r\n                    (click)=\"limparFiltros()\">\r\n                    Limpar filtros\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <footer class=\"resumo-listagem\">\r\n        <span>\r\n          Exibindo {{ exemplaresFiltrados.length }}\r\n          de {{ exemplaresAtuais.length }} exemplares\r\n        </span>\r\n      </footer>\r\n\r\n    </section>\r\n  </main>\r\n</div>\r\n\r\n<!-- Modal de cadastro e edi\u00E7\u00E3o -->\r\n<div\r\n  class=\"modal-overlay\"\r\n  *ngIf=\"modalAberto\"\r\n  (click)=\"fecharModal()\">\r\n\r\n  <section\r\n    class=\"modal\"\r\n    role=\"dialog\"\r\n    aria-modal=\"true\"\r\n    aria-labelledby=\"titulo-modal\"\r\n    (click)=\"$event.stopPropagation()\">\r\n\r\n    <header class=\"modal-cabecalho\">\r\n      <div>\r\n        <h2 id=\"titulo-modal\">\r\n          {{ modoEdicao ? 'Editar exemplar' : 'Novo exemplar' }}\r\n        </h2>\r\n        <p>\r\n          {{ modoEdicao\r\n            ? 'Atualize os dados do exemplar selecionado.'\r\n            : 'Preencha os dados para cadastrar um exemplar.' }}\r\n        </p>\r\n      </div>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"fechar-modal\"\r\n        aria-label=\"Fechar\"\r\n        [disabled]=\"salvando\"\r\n        (click)=\"fecharModal()\">\r\n        \u00D7\r\n      </button>\r\n    </header>\r\n\r\n    <form\r\n      class=\"formulario\"\r\n      #formExemplar=\"ngForm\"\r\n      (ngSubmit)=\"salvarExemplar()\">\r\n\r\n      <!-- Sele\u00E7\u00E3o do livro -->\r\n      <div class=\"campo campo-completo\" *ngIf=\"!modoEdicao\">\r\n        <label for=\"formaBuscaLivro\">Localizar livro por *</label>\r\n\r\n        <select\r\n          id=\"formaBuscaLivro\"\r\n          name=\"formaBuscaLivro\"\r\n          [(ngModel)]=\"formaBuscaLivro\">\r\n          <option value=\"id\">ID do livro</option>\r\n          <option value=\"nome\">Nome do livro</option>\r\n        </select>\r\n\r\n        <select\r\n          *ngIf=\"formaBuscaLivro === 'id'\"\r\n          id=\"livroId\"\r\n          name=\"livroId\"\r\n          [(ngModel)]=\"formExemplarDados.livroId\"\r\n          required>\r\n\r\n          <option [ngValue]=\"undefined\" disabled>\r\n            Selecione um livro\r\n          </option>\r\n\r\n          <option\r\n            *ngFor=\"let livro of livros\"\r\n            [ngValue]=\"livro.id\">\r\n            {{ livro.titulo }}\r\n          </option>\r\n\r\n        </select>\r\n\r\n        <input\r\n          *ngIf=\"formaBuscaLivro === 'nome'\"\r\n          id=\"nomeLivro\"\r\n          name=\"nomeLivro\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"formExemplarDados.nomeLivro\"\r\n          placeholder=\"Digite o nome exato do livro\"\r\n          required>\r\n      </div>\r\n\r\n      <!-- Localiza\u00E7\u00E3o -->\r\n      <div class=\"campo campo-completo\">\r\n        <label for=\"enderecavel\">\r\n          Localiza\u00E7\u00E3o / Endere\u00E7o do exemplar *\r\n        </label>\r\n\r\n        <input\r\n          id=\"enderecavel\"\r\n          name=\"enderecavel\"\r\n          type=\"text\"\r\n          [ngModel]=\"getLocalizacaoFormulario()\"\r\n          (ngModelChange)=\"setLocalizacao($event)\"\r\n          placeholder=\"Ex.: Estante A, Prateleira 2\"\r\n          required>\r\n      </div>\r\n\r\n      <div class=\"form-linha\">\r\n\r\n        <!-- Prazo de empr\u00E9stimo -->\r\n        <div class=\"campo\">\r\n          <label for=\"diasAluguel\">Dias de empr\u00E9stimo *</label>\r\n\r\n          <input\r\n            id=\"diasAluguel\"\r\n            name=\"diasAluguel\"\r\n            type=\"number\"\r\n            min=\"1\"\r\n            max=\"365\"\r\n            [(ngModel)]=\"formExemplarDados.diasAluguel\"\r\n            [disabled]=\"modoEdicao && formExemplarDados.status === 1\"\r\n            required>\r\n        </div>\r\n\r\n        <!-- Status -->\r\n        <div class=\"campo\">\r\n          <label for=\"status\">Status</label>\r\n\r\n          <select\r\n            id=\"status\"\r\n            name=\"status\"\r\n            [(ngModel)]=\"formExemplarDados.status\"\r\n            [disabled]=\"modoEdicao && formExemplarDados.status === 1\">\r\n            <option [ngValue]=\"0\">Dispon\u00EDvel</option>\r\n            <option\r\n              *ngIf=\"modoEdicao && formExemplarDados.status === 1\"\r\n              [ngValue]=\"1\"\r\n              disabled>\r\n              Emprestado (gerenciado pelo sistema)\r\n            </option>\r\n            <option [ngValue]=\"2\">Manuten\u00E7\u00E3o</option>\r\n            <option [ngValue]=\"3\">Perdido</option>\r\n            <option [ngValue]=\"4\">Baixado</option>\r\n          </select>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Informa\u00E7\u00E3o sobre o c\u00F3digo de barras -->\r\n      <div class=\"aviso-codigo\">\r\n        <span>\u25A4</span>\r\n        <p>\r\n          O c\u00F3digo de barras ser\u00E1 gerado pelo sistema ap\u00F3s o cadastro,\r\n          conforme a configura\u00E7\u00E3o do backend.\r\n        </p>\r\n      </div>\r\n\r\n      <footer class=\"modal-acoes\">\r\n\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-secondary\"\r\n          [disabled]=\"salvando\"\r\n          (click)=\"fecharModal()\">\r\n          Cancelar\r\n        </button>\r\n\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn-primary\"\r\n          [disabled]=\"salvando || formExemplar.invalid\">\r\n          {{ salvando\r\n            ? 'Salvando...'\r\n            : (modoEdicao ? 'Salvar altera\u00E7\u00F5es' : 'Cadastrar exemplar') }}\r\n        </button>\r\n\r\n      </footer>\r\n    </form>\r\n  </section>\r\n</div>\r\n\r\n<!-- Modal de confirma\u00E7\u00E3o de exclus\u00E3o -->\r\n<div\r\n  class=\"modal-overlay\"\r\n  *ngIf=\"exemplarParaExcluir\"\r\n  (click)=\"cancelarExclusao()\">\r\n\r\n  <section\r\n    class=\"modal modal-confirmacao\"\r\n    role=\"alertdialog\"\r\n    aria-modal=\"true\"\r\n    aria-labelledby=\"titulo-exclusao\"\r\n    (click)=\"$event.stopPropagation()\">\r\n\r\n    <div class=\"confirmacao-icone\">!</div>\r\n\r\n    <h2 id=\"titulo-exclusao\">Excluir exemplar?</h2>\r\n\r\n    <p>\r\n      Tem certeza de que deseja excluir o exemplar\r\n      <strong>\r\n        {{ exemplarParaExcluir.codigoBarras || ('#' + exemplarParaExcluir.id) }}\r\n      </strong>?\r\n      Essa a\u00E7\u00E3o n\u00E3o poder\u00E1 ser desfeita.\r\n    </p>\r\n\r\n    <footer class=\"modal-acoes\">\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-secondary\"\r\n        [disabled]=\"excluindo\"\r\n        (click)=\"cancelarExclusao()\">\r\n        Cancelar\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-danger\"\r\n        [disabled]=\"excluindo\"\r\n        (click)=\"excluirExemplar()\">\r\n        {{ excluindo ? 'Excluindo...' : 'Sim, excluir' }}\r\n      </button>\r\n\r\n    </footer>\r\n  </section>\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  min-height: 100%;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Barra superior */\r\n\r\n.topbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  min-height: 72px;\r\n  padding: 0 34px;\r\n  background: #fff;\r\n  border-bottom: 1px solid #eaebf2;\r\n}\r\n.topbar-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n.topbar-right {\r\n  gap: 22px;\r\n}\r\n\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #9297a8;\r\n  font-size: 12px;\r\n}\r\n.breadcrumb strong {\r\n  color: #373b50;\r\n  font-weight: 650;\r\n}\r\n.breadcrumb-separator {\r\n  color: #c8cad5;\r\n}\r\n.system-status {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #777d91;\r\n  font-size: 11px;\r\n}\r\n.status-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px rgba(34, 197, 94, 0.45);\r\n}\r\n.avatar {\r\n  display: grid;\r\n  width: 37px;\r\n  height: 37px;\r\n  place-items: center;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 12px;\r\n  background: #f0edff;\r\n  color: #6956df;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n}\r\n\r\n\r\n:host {\r\n  display: block;\r\n  min-width: 0;\r\n  color: #202b3c;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.pagina-exemplares {\r\n  min-height: 100%;\r\n  padding: 30px;\r\n  background: #f5f7fb;\r\n}\r\n\r\n/* Cabe\u00E7alho */\r\n\r\n.cabecalho {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.breadcrumb {\r\n  display: block;\r\n  margin-bottom: 9px;\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.titulo-area h1 {\r\n  margin: 0;\r\n  color: #18263b;\r\n  font-size: 27px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.titulo-area p {\r\n  margin: 9px 0 0;\r\n  color: #788497;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* Bot\u00F5es */\r\n\r\n.btn-primary,\r\n.btn-secondary,\r\n.btn-danger {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 9px;\r\n  min-height: 42px;\r\n  padding: 0 17px;\r\n  border: 1px solid transparent;\r\n  border-radius: 8px;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  transition: background 0.2s, border-color 0.2s;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background: #2459d3;\r\n  box-shadow: 0 3px 7px rgb(36 89 211 / 12%);\r\n}\r\n\r\n.btn-primary:hover:not(:disabled) {\r\n  background: #1948b7;\r\n}\r\n\r\n.icone {\r\n  font-size: 20px;\r\n  line-height: 1;\r\n}\r\n\r\n.btn-secondary {\r\n  color: #34445a;\r\n  background: #fff;\r\n  border-color: #dce3ec;\r\n}\r\n\r\n.btn-secondary:hover:not(:disabled) {\r\n  background: #f4f7fb;\r\n  border-color: #c3cfdd;\r\n}\r\n\r\n.btn-danger {\r\n  color: #fff;\r\n  background: #c93636;\r\n}\r\n\r\n.btn-danger:hover:not(:disabled) {\r\n  background: #aa2828;\r\n}\r\n\r\n/* Indicadores */\r\n\r\n.indicadores {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 17px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.indicador {\r\n  min-width: 0;\r\n  padding: 21px;\r\n  background: #fff;\r\n  border: 1px solid #e6ebf2;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(20 39 70 / 2%);\r\n}\r\n\r\n.indicador-topo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #68768a;\r\n  font-size: 13px;\r\n  font-weight: 550;\r\n}\r\n\r\n.indicador-icone {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 9px;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.azul {\r\n  color: #2459d3;\r\n  background: #edf3ff;\r\n}\r\n\r\n.verde {\r\n  color: #18845c;\r\n  background: #e9f8f0;\r\n}\r\n\r\n.laranja {\r\n  color: #bc7517;\r\n  background: #fff4df;\r\n}\r\n\r\n.vermelho {\r\n  color: #c53b3b;\r\n  background: #ffeded;\r\n}\r\n\r\n.indicador > strong {\r\n  display: block;\r\n  margin-top: 15px;\r\n  color: #1c2a40;\r\n  font-size: 29px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.indicador > small {\r\n  display: block;\r\n  margin-top: 6px;\r\n  color: #8994a5;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Painel de listagem */\r\n\r\n.painel-listagem {\r\n  overflow: hidden;\r\n  background: #fff;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 12px;\r\n  box-shadow: 0 3px 10px rgb(20 39 70 / 2%);\r\n}\r\n\r\n.painel-titulo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 23px 24px;\r\n}\r\n\r\n.painel-titulo h2 {\r\n  margin: 0;\r\n  color: #233148;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n}\r\n\r\n.painel-titulo p {\r\n  margin: 6px 0 0;\r\n  color: #8792a3;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Filtros */\r\n\r\n.filtros {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  padding: 0 24px 19px;\r\n}\r\n\r\n.campo-busca {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-width: 0;\r\n  height: 43px;\r\n  padding: 0 13px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo-busca:focus-within {\r\n  border-color: #5782e9;\r\n  box-shadow: 0 0 0 3px rgb(36 89 211 / 8%);\r\n}\r\n\r\n.campo-busca > span {\r\n  color: #8a96a7;\r\n  font-size: 22px;\r\n}\r\n\r\n.campo-busca input {\r\n  width: 100%;\r\n  min-width: 0;\r\n  padding: 0;\r\n  color: #26354a;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  font-size: 13px;\r\n}\r\n\r\n.campo-busca input::placeholder {\r\n  color: #a0aaba;\r\n}\r\n\r\n.limpar-busca {\r\n  flex-shrink: 0;\r\n  color: #7a8799;\r\n  border: 0;\r\n  background: transparent;\r\n  font-size: 20px;\r\n}\r\n\r\n.filtro-status {\r\n  width: 190px;\r\n  max-width: 100%;\r\n  height: 43px;\r\n  padding: 0 12px;\r\n  color: #45546a;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  outline: none;\r\n  font-size: 13px;\r\n}\r\n\r\n.filtro-status:focus,\r\n.campo input:focus,\r\n.campo select:focus {\r\n  border-color: #5782e9;\r\n}\r\n\r\n/* Resumo */\r\n\r\n.resumo-listagem {\r\n  padding: 12px 24px;\r\n  color: #8792a3;\r\n  border-top: 1px solid #edf0f5;\r\n  background: #fbfcfe;\r\n  font-size: 12px;\r\n}\r\n\r\n.resumo-listagem strong {\r\n  color: #35455c;\r\n}\r\n\r\n/* Tabela */\r\n\r\n.tabela-container {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\n.tabela-container table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-container thead {\r\n  background: #f8fafd;\r\n}\r\n\r\n.tabela-container th {\r\n  padding: 14px 20px;\r\n  color: #7a8799;\r\n  border-top: 1px solid #edf0f5;\r\n  border-bottom: 1px solid #e9edf3;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.035em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.tabela-container td {\r\n  padding: 16px 20px;\r\n  color: #536176;\r\n  border-bottom: 1px solid #edf0f5;\r\n  font-size: 12px;\r\n}\r\n\r\n.tabela-container tbody tr:last-child td {\r\n  border-bottom: none;\r\n}\r\n\r\n.tabela-container tbody tr:hover:not(:has(.estado-vazio)) {\r\n  background: #fafcff;\r\n}\r\n\r\n.livro-info {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 190px;\r\n}\r\n\r\n.livro-icone {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  width: 39px;\r\n  height: 43px;\r\n  color: #315fc2;\r\n  border: 1px solid #dbe6ff;\r\n  border-radius: 5px;\r\n  background: #eff4ff;\r\n  font-size: 19px;\r\n}\r\n\r\n.livro-info strong {\r\n  display: block;\r\n  max-width: 230px;\r\n  overflow: hidden;\r\n  color: #28364b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.livro-info small {\r\n  display: block;\r\n  margin-top: 5px;\r\n  color: #8994a5;\r\n  font-size: 11px;\r\n}\r\n\r\n.codigo-barras {\r\n  padding: 5px 8px;\r\n  color: #42516a;\r\n  border: 1px solid #e6ebf2;\r\n  border-radius: 5px;\r\n  background: #f8fafd;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  letter-spacing: 0.2px;\r\n}\r\n\r\n/* Status */\r\n\r\n.status {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  padding: 6px 9px;\r\n  border: 1px solid transparent;\r\n  border-radius: 20px;\r\n  font-size: 11px;\r\n  font-weight: 650;\r\n}\r\n\r\n.status-ponto {\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background: currentColor;\r\n}\r\n\r\n.status-disponivel {\r\n  color: #16845b;\r\n  border-color: #d4f0e1;\r\n  background: #eaf8f0;\r\n}\r\n\r\n.status-alugado {\r\n  color: #b87519;\r\n  border-color: #f8e8c9;\r\n  background: #fff6e6;\r\n}\r\n\r\n.status-indisponivel {\r\n  color: #c23a3a;\r\n  border-color: #f5d9d9;\r\n  background: #fff0f0;\r\n}\r\n\r\n.status-outro {\r\n  color: #657287;\r\n  border-color: #e1e6ee;\r\n  background: #f1f4f8;\r\n}\r\n\r\n/* A\u00E7\u00F5es */\r\n\r\n.coluna-acoes {\r\n  text-align: center;\r\n}\r\n\r\n.acoes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 7px;\r\n}\r\n\r\n.acao-btn {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 33px;\r\n  height: 33px;\r\n  color: #53647b;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  font-size: 17px;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.acao-btn:hover {\r\n  color: #2459d3;\r\n  border-color: #c6d7ff;\r\n  background: #eff4ff;\r\n}\r\n\r\n.acao-btn.excluir:hover {\r\n  color: #c93636;\r\n  border-color: #f3caca;\r\n  background: #fff0f0;\r\n}\r\n\r\n/* Estado vazio */\r\n\r\n.estado-vazio {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 55px 20px;\r\n  text-align: center;\r\n  white-space: normal;\r\n}\r\n\r\n.vazio-icone {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 53px;\r\n  height: 53px;\r\n  margin-bottom: 15px;\r\n  color: #7487a5;\r\n  border-radius: 15px;\r\n  background: #f0f4fa;\r\n  font-size: 28px;\r\n}\r\n\r\n.estado-vazio strong {\r\n  color: #34435a;\r\n  font-size: 14px;\r\n}\r\n\r\n.estado-vazio p {\r\n  margin: 8px 0 18px;\r\n  color: #8994a5;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Modal */\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  inset: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow-y: auto;\r\n  padding: 24px;\r\n  background: rgb(16 27 45 / 52%);\r\n  backdrop-filter: blur(3px);\r\n}\r\n\r\n.modal {\r\n  width: 100%;\r\n  max-width: 610px;\r\n  max-height: calc(100vh - 48px);\r\n  overflow-y: auto;\r\n  border: 1px solid #e8edf4;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  box-shadow: 0 20px 70px rgb(0 0 0 / 18%);\r\n  animation: modalEntrada 0.18s ease-out;\r\n}\r\n\r\n@keyframes modalEntrada {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.modal-cabecalho {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 20px;\r\n  padding: 25px 27px;\r\n  border-bottom: 1px solid #edf0f5;\r\n}\r\n\r\n.modal-cabecalho h2 {\r\n  margin: 0;\r\n  color: #202e43;\r\n  font-size: 21px;\r\n  font-weight: 750;\r\n}\r\n\r\n.modal-cabecalho p {\r\n  margin: 8px 0 0;\r\n  color: #8490a2;\r\n  font-size: 12px;\r\n}\r\n\r\n.fechar-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 34px;\r\n  height: 34px;\r\n  color: #718096;\r\n  border: 1px solid #e2e7ef;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  font-size: 23px;\r\n}\r\n\r\n.fechar-modal:hover {\r\n  color: #c93636;\r\n  background: #fff5f5;\r\n}\r\n\r\n.formulario {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 19px;\r\n  padding: 25px 27px;\r\n}\r\n\r\n.campo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.campo-completo {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.campo label {\r\n  color: #34445a;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo input,\r\n.campo select {\r\n  width: 100%;\r\n  min-width: 0;\r\n  height: 43px;\r\n  padding: 0 12px;\r\n  color: #34445a;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  outline: none;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo input:focus,\r\n.campo select:focus {\r\n  border-color: #5782e9;\r\n  box-shadow: 0 0 0 3px rgb(36 89 211 / 8%);\r\n}\r\n\r\n.campo input[readonly] {\r\n  color: #79869a;\r\n  background: #f5f7fa;\r\n  cursor: default;\r\n}\r\n\r\n.campo small {\r\n  color: #8b96a7;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal-acoes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  padding: 18px 27px;\r\n  border-top: 1px solid #edf0f5;\r\n  background: #fbfcfe;\r\n}\r\n\r\n/* Modal de confirma\u00E7\u00E3o */\r\n\r\n.modal-confirmacao {\r\n  max-width: 440px;\r\n  padding-top: 28px;\r\n}\r\n\r\n.confirmacao-icone {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin: 0 auto 16px;\r\n  color: #c93636;\r\n  border-radius: 50%;\r\n  background: #fff0f0;\r\n  font-size: 23px;\r\n  font-weight: 800;\r\n}\r\n\r\n.modal-confirmacao h2 {\r\n  margin: 0 24px;\r\n  color: #26354a;\r\n  font-size: 19px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-confirmacao > p {\r\n  margin: 14px 25px 0;\r\n  color: #758196;\r\n  font-size: 13px;\r\n  line-height: 1.7;\r\n  text-align: center;\r\n}\r\n\r\n.modal-confirmacao > p strong {\r\n  color: #39485d;\r\n}\r\n\r\n.modal-confirmacao .aviso-exclusao {\r\n  color: #a45c23;\r\n  font-size: 12px;\r\n}\r\n\r\n.modal-confirmacao .modal-acoes {\r\n  margin-top: 25px;\r\n}\r\n\r\n/* Responsividade */\r\n\r\n@media (max-width: 1100px) {\r\n  .pagina-exemplares {\r\n    padding: 22px;\r\n  }\r\n\r\n  .indicadores {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .tabela-container table {\r\n    min-width: 900px;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .pagina-exemplares {\r\n    padding: 16px;\r\n  }\r\n\r\n  .cabecalho {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .cabecalho .btn-primary {\r\n    width: 100%;\r\n  }\r\n\r\n  .titulo-area h1 {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .indicadores {\r\n    gap: 10px;\r\n  }\r\n\r\n  .indicador {\r\n    padding: 14px;\r\n  }\r\n\r\n  .indicador-topo {\r\n    align-items: flex-start;\r\n    font-size: 11px;\r\n  }\r\n\r\n  .indicador-icone {\r\n    width: 29px;\r\n    height: 29px;\r\n  }\r\n\r\n  .indicador > strong {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .painel-titulo {\r\n    align-items: flex-start;\r\n    padding: 18px;\r\n  }\r\n\r\n  .painel-titulo h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .filtros {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 0 18px 16px;\r\n  }\r\n\r\n  .filtro-status {\r\n    width: 100%;\r\n  }\r\n\r\n  .resumo-listagem {\r\n    padding: 12px 18px;\r\n  }\r\n\r\n  .formulario {\r\n    grid-template-columns: 1fr;\r\n    padding: 20px;\r\n  }\r\n\r\n  .campo-completo {\r\n    grid-column: auto;\r\n  }\r\n\r\n  .modal-overlay {\r\n    align-items: flex-start;\r\n    padding: 12px;\r\n  }\r\n\r\n  .modal {\r\n    max-height: calc(100vh - 24px);\r\n  }\r\n\r\n  .modal-cabecalho {\r\n    padding: 20px;\r\n  }\r\n\r\n  .modal-acoes {\r\n    flex-wrap: wrap;\r\n    padding: 16px 20px;\r\n  }\r\n\r\n  .modal-acoes button {\r\n    flex: 1;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExemplaresComponent, { className: "ExemplaresComponent", filePath: "src/app/component/exemplares-component/exemplares-component.ts", lineNumber: 31 }); })();
