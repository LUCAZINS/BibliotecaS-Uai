import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlugueisService } from '../../Service/alugueis-service';
import { AlugatarioService } from '../../Service/alugatarioService';
import { ExemplaresService } from '../../Service/ExemplaresService';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AlugueisComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.mensagemSucesso, " ");
} }
function AlugueisComponent_tr_111_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 45)(5, "div", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div")(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "td")(13, "div", 47);
    i0.ɵɵlistener("click", function AlugueisComponent_tr_111_Template_div_click_13_listener() { const aluguel_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.abrirLivro(aluguel_r3)); })("keydown.enter", function AlugueisComponent_tr_111_Template_div_keydown_enter_13_listener() { const aluguel_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.abrirLivro(aluguel_r3)); })("keydown.space", function AlugueisComponent_tr_111_Template_div_keydown_space_13_listener($event) { const aluguel_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.abrirLivro(aluguel_r3); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td")(25, "span", 48);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 49);
    i0.ɵɵlistener("click", function AlugueisComponent_tr_111_Template_button_click_28_listener() { const aluguel_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.abrirDetalhesEmprestimo(aluguel_r3)); });
    i0.ɵɵtext(29, " \u22EF ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const aluguel_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", aluguel_r3.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", aluguel_r3.nomeLocatario.slice(0, 2).toUpperCase(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(aluguel_r3.nomeLocatario);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", aluguel_r3.alugatarioId);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Abrir detalhes do livro " + aluguel_r3.livro);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(aluguel_r3.livro);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Exemplar #", aluguel_r3.codigoBarras);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(20, 17, aluguel_r3.dataAluguel, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(23, 20, aluguel_r3.dataDevolucaoPrevista, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("status-ativo", aluguel_r3.status.toLowerCase() === "ativo")("status-devolvido", aluguel_r3.status.toLowerCase() === "devolvido")("status-atrasado", aluguel_r3.status.toLowerCase() !== "ativo" && aluguel_r3.status.toLowerCase() !== "devolvido");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", aluguel_r3.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Ver empr\u00E9stimo de " + aluguel_r3.nomeLocatario);
} }
function AlugueisComponent_tr_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.erro || "Nenhum empr\u00E9stimo encontrado.", " ");
} }
function AlugueisComponent_button_119_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function AlugueisComponent_button_119_Template_button_click_0_listener() { const pagina_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.irParaPagina(pagina_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pagina_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("pagina-atual", ctx_r0.paginaAtual === pagina_r5);
    i0.ɵɵattribute("aria-current", ctx_r0.paginaAtual === pagina_r5 ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pagina_r5, " ");
} }
function AlugueisComponent_div_122_label_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 63);
    i0.ɵɵtext(1, " C\u00F3digo de barras ");
    i0.ɵɵelementStart(2, "input", 64);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugueisComponent_div_122_label_10_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.codigoBarras, $event) || (ctx_r0.codigoBarras = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function AlugueisComponent_div_122_label_10_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.consultarExemplar()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.codigoBarras);
    i0.ɵɵcontrol();
} }
function AlugueisComponent_div_122_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.mensagem);
} }
function AlugueisComponent_div_122_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.exemplarSelecionado.nomeLivro);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("C\u00F3digo: ", ctx_r0.exemplarSelecionado.codigoBarras);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Status: ", ctx_r0.exemplarSelecionado.status === 0 ? "Dispon\u00EDvel" : "Emprestado", " ");
} }
function AlugueisComponent_div_122_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "strong");
    i0.ɵɵtext(2, "Empr\u00E9stimo ativo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 67);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_div_13_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.confirmarDevolucao()); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Locat\u00E1rio: ", ctx_r0.aluguelSelecionado.nomeLocatario);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Devolu\u00E7\u00E3o prevista: ", i0.ɵɵpipeBind2(7, 4, ctx_r0.aluguelSelecionado.dataDevolucaoPrevista, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.salvando ? "Registrando..." : "Confirmar devolu\u00E7\u00E3o", " ");
} }
function AlugueisComponent_div_122_div_14_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 67);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_div_14_div_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.confirmarEmprestimo()); });
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.locatarioSelecionado.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("CPF: ", ctx_r0.locatarioSelecionado.cpf);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.salvando ? "Registrando..." : "Confirmar empr\u00E9stimo", " ");
} }
function AlugueisComponent_div_122_div_14_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 72);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_div_14_div_7_div_1_Template_button_click_3_listener() { const locatario_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.selecionarLocatario(locatario_r12)); });
    i0.ɵɵtext(4, "Selecionar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const locatario_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", locatario_r12.nome, " - ", locatario_r12.cpf);
} }
function AlugueisComponent_div_122_div_14_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, AlugueisComponent_div_122_div_14_div_7_div_1_Template, 5, 2, "div", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.resultadosLocatarios);
} }
function AlugueisComponent_div_122_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "label", 63);
    i0.ɵɵtext(2, "CPF do locat\u00E1rio ");
    i0.ɵɵelementStart(3, "input", 69);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function AlugueisComponent_div_122_div_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.atualizarCpf($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_div_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.buscarPorCpf()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AlugueisComponent_div_122_div_14_div_6_Template, 7, 4, "div", 57)(7, AlugueisComponent_div_122_div_14_div_7_Template, 2, 1, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.cpf);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.carregandoLocatarios || ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.carregandoLocatarios ? "Buscando..." : "Buscar CPF", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.locatarioSelecionado);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.resultadosLocatarios.length);
} }
function AlugueisComponent_div_122_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.voltarParaCodigo()); });
    i0.ɵɵtext(1, "Voltar");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
} }
function AlugueisComponent_div_122_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.consultarExemplar()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.carregandoConsulta || ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.carregandoConsulta ? "Consultando..." : ctx_r0.operacao === "f2" ? "Abrir livro" : "Consultar", " ");
} }
function AlugueisComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "section", 53)(2, "header", 22)(3, "div")(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 54);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.fecharModal()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, AlugueisComponent_div_122_label_10_Template, 3, 1, "label", 55)(11, AlugueisComponent_div_122_p_11_Template, 2, 1, "p", 56)(12, AlugueisComponent_div_122_div_12_Template, 7, 3, "div", 57)(13, AlugueisComponent_div_122_div_13_Template, 10, 7, "div", 57)(14, AlugueisComponent_div_122_div_14_Template, 8, 5, "div", 58);
    i0.ɵɵelementStart(15, "footer", 59)(16, "button", 60);
    i0.ɵɵlistener("click", function AlugueisComponent_div_122_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.fecharModal()); });
    i0.ɵɵtext(17, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, AlugueisComponent_div_122_button_18_Template, 2, 1, "button", 61)(19, AlugueisComponent_div_122_button_19_Template, 2, 2, "button", 62);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.etapa === "codigo" ? "Consultar exemplar" : ctx_r0.etapa === "devolucao" ? "Devolu\u00E7\u00E3o de empr\u00E9stimo" : "Novo empr\u00E9stimo");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.etapa === "codigo" ? "Informe o c\u00F3digo de barras para continuar." : ctx_r0.etapa === "devolucao" ? "Confirme a devolu\u00E7\u00E3o do exemplar." : "Identifique o locat\u00E1rio para registrar o empr\u00E9stimo.");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.etapa === "codigo");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.mensagem);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.exemplarSelecionado && ctx_r0.etapa !== "codigo");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.etapa === "devolucao" && ctx_r0.aluguelSelecionado);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.etapa === "locatario");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.etapa === "locatario");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.etapa === "codigo");
} }
export class AlugueisComponent {
    alugueisService = inject(AlugueisService);
    exemplaresService = inject(ExemplaresService);
    alugatarioService = inject(AlugatarioService);
    router = inject(Router);
    cdr = inject(ChangeDetectorRef);
    alugueis = [];
    locatarios = [];
    resultadosLocatarios = [];
    busca = '';
    filtroStatus = '';
    filtroData = '';
    paginaAtual = 1;
    itensPorPagina = 10;
    carregando = true;
    carregandoConsulta = false;
    carregandoLocatarios = false;
    erro = '';
    mensagemSucesso = '';
    etapa = null;
    operacao = 'novo';
    codigoBarras = '';
    cpf = '';
    buscaLocatario = '';
    exemplarSelecionado;
    aluguelSelecionado;
    locatarioSelecionado;
    salvando = false;
    mensagem = '';
    subscriptions = new Subscription();
    ngOnInit() {
        this.subscriptions.add(this.alugueisService.alugueis$.subscribe(alugueis => {
            this.alugueis = alugueis;
            this.irParaPagina(this.paginaAtual);
            this.cdr.detectChanges();
        }));
        this.carregarEmprestimos();
        this.alugatarioService.listar().subscribe({
            next: locatarios => this.locatarios = locatarios,
            error: erro => console.error('Erro ao preparar locatários:', erro)
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    get alugueisFiltrados() {
        const termo = this.busca.trim().toLowerCase();
        return this.alugueis.filter(aluguel => {
            const texto = !termo ||
                aluguel.nomeLocatario.toLowerCase().includes(termo) ||
                aluguel.livro.toLowerCase().includes(termo) ||
                aluguel.codigoBarras.toLowerCase().includes(termo);
            const status = !this.filtroStatus ||
                aluguel.status.toLowerCase() === this.filtroStatus;
            const data = !this.filtroData ||
                aluguel.dataAluguel?.slice(0, 10) === this.filtroData;
            return texto && status && data;
        });
    }
    get emprestimosAtivos() {
        return this.alugueis.filter(item => this.ehStatus(item, 'ativo')).length;
    }
    get emprestimosDevolvidos() {
        return this.alugueis.filter(item => this.ehStatus(item, 'devolvido')).length;
    }
    get emprestimosAtrasados() {
        const hoje = new Date().toISOString().slice(0, 10);
        return this.alugueis.filter(item => this.ehStatus(item, 'ativo') &&
            !!item.dataDevolucaoPrevista &&
            item.dataDevolucaoPrevista < hoje).length;
    }
    get totalPaginas() {
        return Math.max(1, Math.ceil(this.alugueisFiltrados.length / this.itensPorPagina));
    }
    get paginas() {
        return Array.from({ length: this.totalPaginas }, (_, indice) => indice + 1);
    }
    get alugueisDaPagina() {
        const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
        return this.alugueisFiltrados.slice(inicio, inicio + this.itensPorPagina);
    }
    get primeiroItemExibido() {
        return this.alugueisFiltrados.length === 0
            ? 0
            : (this.paginaAtual - 1) * this.itensPorPagina + 1;
    }
    get ultimoItemExibido() {
        return Math.min(this.paginaAtual * this.itensPorPagina, this.alugueisFiltrados.length);
    }
    irParaPagina(pagina) {
        this.paginaAtual = Math.min(Math.max(pagina, 1), this.totalPaginas);
    }
    paginaAnterior() {
        this.irParaPagina(this.paginaAtual - 1);
    }
    proximaPagina() {
        this.irParaPagina(this.paginaAtual + 1);
    }
    atualizarFiltros() {
        this.paginaAtual = 1;
    }
    tratarAtalho(event) {
        if (event.key !== 'F2' && event.key !== 'F3') {
            return;
        }
        event.preventDefault();
        this.abrirFluxo(event.key === 'F2' ? 'f2' : 'novo');
    }
    abrirFluxo(operacao) {
        this.operacao = operacao;
        this.etapa = 'codigo';
        this.codigoBarras = '';
        this.cpf = '';
        this.buscaLocatario = '';
        this.resultadosLocatarios = [];
        this.exemplarSelecionado = undefined;
        this.aluguelSelecionado = undefined;
        this.locatarioSelecionado = undefined;
        this.mensagem = '';
        this.mensagemSucesso = '';
    }
    fecharModal() {
        if (!this.salvando && !this.carregandoConsulta) {
            this.etapa = null;
            this.mensagem = '';
        }
    }
    consultarExemplar() {
        const codigo = this.codigoBarras.trim();
        if (!codigo) {
            this.mensagem = 'Informe o código de barras.';
            return;
        }
        this.carregandoConsulta = true;
        this.mensagem = '';
        this.exemplaresService.buscarPorCodigoBarras(codigo).subscribe({
            next: exemplar => {
                this.exemplarSelecionado = exemplar;
                this.carregandoConsulta = false;
                if (this.operacao === 'f2') {
                    this.router.navigate(['/Barra/Livros', exemplar.livroId]);
                    this.fecharModal();
                    return;
                }
                if (exemplar.status === 1) {
                    this.alugueisService.listar().subscribe({
                        next: alugueis => {
                            this.aluguelSelecionado = alugueis.find(aluguel => aluguel.exemplarId === exemplar.id &&
                                this.ehStatus(aluguel, 'ativo'));
                            this.etapa = 'devolucao';
                            if (!this.aluguelSelecionado) {
                                this.mensagem =
                                    'O exemplar está emprestado, mas o empréstimo ativo não foi encontrado.';
                            }
                            this.cdr.detectChanges();
                        },
                        error: erro => this.mostrarErro(erro)
                    });
                    return;
                }
                if (exemplar.status !== 0) {
                    this.mensagem = 'Este exemplar não está disponível para empréstimo.';
                    this.cdr.detectChanges();
                    return;
                }
                this.etapa = 'locatario';
                this.cdr.detectChanges();
            },
            error: erro => {
                this.carregandoConsulta = false;
                this.mostrarErro(erro);
            }
        });
    }
    buscarPorCpf() {
        const cpf = this.cpf.trim();
        if (!this.cpfValido(cpf)) {
            this.mensagem = 'Informe um CPF válido com 11 dígitos.';
            return;
        }
        this.carregandoLocatarios = true;
        this.mensagem = '';
        this.alugatarioService.buscarPorCpf(cpf).subscribe({
            next: locatario => {
                this.locatarioSelecionado = locatario;
                this.carregandoLocatarios = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                this.carregandoLocatarios = false;
                this.mostrarErro(erro);
            }
        });
    }
    buscarLocatarios() {
        const termo = this.buscaLocatario.trim().toLowerCase();
        if (!termo) {
            this.mensagem = 'Informe um CPF para buscar.';
            return;
        }
        this.carregandoLocatarios = true;
        this.mensagem = '';
        this.alugatarioService.listar().subscribe({
            next: locatarios => {
                this.resultadosLocatarios = locatarios.filter(locatario => locatario.nome?.toLowerCase().includes(termo) ||
                    locatario.cpf?.toLowerCase().includes(termo));
                this.carregandoLocatarios = false;
                if (!this.resultadosLocatarios.length) {
                    this.mensagem = 'Nenhum locatário encontrado.';
                }
                this.cdr.detectChanges();
            },
            error: erro => {
                this.carregandoLocatarios = false;
                this.mostrarErro(erro);
            }
        });
    }
    selecionarLocatario(locatario) {
        this.locatarioSelecionado = locatario;
        this.mensagem = '';
        this.resultadosLocatarios = [];
    }
    abrirLivro(aluguel) {
        this.exemplaresService.buscarPorCodigoBarras(aluguel.codigoBarras).subscribe({
            next: exemplar => {
                this.router.navigate(['/Barra/Livros', exemplar.livroId]);
            },
            error: erro => this.mostrarErro(erro)
        });
    }
    abrirDetalhesEmprestimo(aluguel) {
        this.router.navigate(['/Barra/alugueis', aluguel.id]);
    }
    voltarParaCodigo() {
        if (!this.salvando) {
            this.etapa = 'codigo';
            this.mensagem = '';
        }
    }
    confirmarEmprestimo() {
        if (!this.exemplarSelecionado || !this.locatarioSelecionado) {
            this.mensagem = 'Selecione um locatário antes de confirmar.';
            return;
        }
        this.salvando = true;
        this.mensagem = '';
        this.alugueisService.criar({
            alugatarioId: this.locatarioSelecionado.id,
            exemplarId: this.exemplarSelecionado.id
        }).subscribe({
            next: aluguel => {
                this.salvando = false;
                this.etapa = null;
                this.mensagemSucesso = 'Empréstimo registrado com sucesso.';
                const alugueisAtualizados = [
                    aluguel,
                    ...this.alugueis.filter(item => item.id !== aluguel.id)
                ];
                this.alugueis = alugueisAtualizados;
                this.paginaAtual = 1;
                this.irParaPagina(this.paginaAtual);
                this.cdr.detectChanges();
                this.carregarEmprestimos(true);
            },
            error: erro => this.mostrarErro(erro)
        });
    }
    confirmarDevolucao() {
        if (!this.exemplarSelecionado) {
            return;
        }
        this.salvando = true;
        this.mensagem = '';
        this.alugueisService.devolver({
            exemplarId: this.exemplarSelecionado.id
        }).subscribe({
            next: aluguel => {
                this.salvando = false;
                this.etapa = null;
                this.mensagemSucesso = 'Devolução registrada com sucesso.';
                this.alugueis = this.alugueis.map(item => item.id === aluguel.id ? aluguel : item);
                this.irParaPagina(this.paginaAtual);
                this.cdr.detectChanges();
                this.carregarEmprestimos(true);
            },
            error: erro => this.mostrarErro(erro)
        });
    }
    formatarCpf(cpf) {
        const numeros = cpf.replace(/\D/g, '').slice(0, 11);
        return numeros
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
    }
    atualizarCpf(valor) {
        this.cpf = this.formatarCpf(valor);
    }
    cpfValido(cpf) {
        const numeros = cpf.replace(/\D/g, '');
        if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
            return false;
        }
        const digito = (tamanho) => {
            let soma = 0;
            for (let indice = 0; indice < tamanho; indice++) {
                soma += Number(numeros[indice]) * (tamanho + 1 - indice);
            }
            const resto = (soma * 10) % 11;
            return resto === 10 ? 0 : resto;
        };
        return digito(9) === Number(numeros[9]) &&
            digito(10) === Number(numeros[10]);
    }
    carregarEmprestimos(forcarAtualizacao = false) {
        this.carregando = true;
        this.alugueisService.listar(forcarAtualizacao).subscribe({
            next: alugueis => {
                this.alugueis = alugueis;
                this.carregando = false;
                this.irParaPagina(this.paginaAtual);
                this.cdr.detectChanges();
            },
            error: erro => {
                this.carregando = false;
                this.erro = erro?.error?.mensagem ||
                    erro?.error?.message ||
                    'Não foi possível carregar os empréstimos.';
                this.cdr.detectChanges();
            }
        });
    }
    ehStatus(aluguel, status) {
        return aluguel.status.trim().toLowerCase() === status;
    }
    mostrarErro(erro) {
        console.error('Erro na operação de empréstimo:', erro);
        const resposta = erro?.error;
        this.mensagem = typeof resposta === 'string'
            ? resposta
            : resposta?.mensagem ||
                resposta?.message ||
                'Não foi possível concluir a operação.';
        this.salvando = false;
        this.cdr.detectChanges();
    }
    static ɵfac = function AlugueisComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlugueisComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlugueisComponent, selectors: [["app-alugueis-component"]], hostBindings: function AlugueisComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function AlugueisComponent_keydown_HostBindingHandler($event) { return ctx.tratarAtalho($event); }, i0.ɵɵresolveWindow);
        } }, decls: 123, vars: 17, consts: [[1, "pagina-emprestimos"], [1, "topbar"], [1, "breadcrumb"], [1, "breadcrumb-separator"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot"], [1, "avatar"], [1, "conteudo"], [1, "cabecalho-pagina"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "icone"], ["class", "mensagem-sucesso", 4, "ngIf"], [1, "cards-resumo"], [1, "card-resumo"], [1, "card-info"], [1, "card-titulo"], [1, "card-icone", "azul"], [1, "card-icone", "verde"], [1, "card-icone", "vermelho"], [1, "card-icone", "roxo"], [1, "painel-emprestimos"], [1, "painel-cabecalho"], ["type", "button", 1, "btn-secundario"], [1, "filtros"], [1, "campo-pesquisa"], [1, "pesquisa-icone"], ["type", "search", "placeholder", "Buscar por locat\u00E1rio, livro ou c\u00F3digo...", "aria-label", "Buscar empr\u00E9stimos", 3, "ngModelChange", "ngModel"], ["aria-label", "Filtrar por situa\u00E7\u00E3o", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ativo"], ["value", "atrasado"], ["value", "devolvido"], ["type", "date", "aria-label", "Filtrar por data", "title", "Filtrar por data", 3, "ngModelChange", "ngModel"], [1, "tabela-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "tabela-rodape"], [1, "paginacao"], ["type", "button", "aria-label", "P\u00E1gina anterior", 3, "click", "disabled"], ["type", "button", 3, "pagina-atual", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Pr\u00F3xima p\u00E1gina", 3, "click", "disabled"], ["class", "modal-overlay", 4, "ngIf"], [1, "mensagem-sucesso"], [1, "id-emprestimo"], [1, "pessoa"], [1, "pessoa-avatar"], ["role", "link", "tabindex", "0", 1, "livro-info", "livro-clicavel", 3, "click", "keydown.enter", "keydown.space"], [1, "status-badge"], ["type", "button", "title", "Ver detalhes do empr\u00E9stimo", 1, "btn-acao", 3, "click"], ["colspan", "7", 1, "estado-vazio"], ["type", "button", 3, "click"], [1, "modal-overlay"], ["role", "dialog", "aria-modal", "true", 1, "modal-emprestimo"], ["type", "button", "aria-label", "Fechar", 1, "btn-acao", 3, "click", "disabled"], ["class", "campo-modal", 4, "ngIf"], ["class", "mensagem-erro", 4, "ngIf"], ["class", "resultado-exemplar", 4, "ngIf"], ["class", "formulario-emprestimo", 4, "ngIf"], [1, "modal-acoes"], ["type", "button", 1, "btn-secundario", 3, "click", "disabled"], ["class", "btn-secundario", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "campo-modal"], ["autocomplete", "off", "autofocus", "", "aria-label", "C\u00F3digo de barras do exemplar", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "mensagem-erro"], [1, "resultado-exemplar"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "formulario-emprestimo"], ["maxlength", "14", "inputmode", "numeric", "aria-label", "CPF do locat\u00E1rio", 3, "ngModelChange", "ngModel"], ["class", "resultados-locatarios", 4, "ngIf"], [1, "resultados-locatarios"], ["type", "button", 1, "btn-secundario", 3, "click"]], template: function AlugueisComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span");
            i0.ɵɵtext(4, "Biblioteca");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 3);
            i0.ɵɵtext(6, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Empr\u00E9stimos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4)(10, "div", 5);
            i0.ɵɵelement(11, "span", 6);
            i0.ɵɵtext(12, " Sistema ativo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵtext(14, "B");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "main", 8)(16, "section", 9)(17, "div")(18, "h1");
            i0.ɵɵtext(19, "Empr\u00E9stimos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Gerencie os empr\u00E9stimos e as devolu\u00E7\u00F5es de livros.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "button", 10);
            i0.ɵɵlistener("click", function AlugueisComponent_Template_button_click_22_listener() { return ctx.abrirFluxo("novo"); });
            i0.ɵɵelementStart(23, "span", 11);
            i0.ɵɵtext(24, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Novo empr\u00E9stimo ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(26, AlugueisComponent_p_26_Template, 2, 1, "p", 12);
            i0.ɵɵelementStart(27, "section", 13)(28, "article", 14)(29, "div", 15)(30, "span", 16);
            i0.ɵɵtext(31, "Empr\u00E9stimos ativos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "strong");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "small");
            i0.ɵɵtext(35, "Livros atualmente emprestados");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 17);
            i0.ɵɵtext(37, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "article", 14)(39, "div", 15)(40, "span", 16);
            i0.ɵɵtext(41, "Devolu\u00E7\u00F5es hoje");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "strong");
            i0.ɵɵtext(43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "small");
            i0.ɵɵtext(45, "Previstas para hoje");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 18);
            i0.ɵɵtext(47, "\u21A9");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "article", 14)(49, "div", 15)(50, "span", 16);
            i0.ɵɵtext(51, "Em atraso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "strong");
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "small");
            i0.ɵɵtext(55, "Precisam de aten\u00E7\u00E3o");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 19);
            i0.ɵɵtext(57, "!");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "article", 14)(59, "div", 15)(60, "span", 16);
            i0.ɵɵtext(61, "Devolvidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "strong");
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "small");
            i0.ɵɵtext(65, "Total de devolu\u00E7\u00F5es");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 20);
            i0.ɵɵtext(67, "\u2713");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(68, "section", 21)(69, "div", 22)(70, "div")(71, "h2");
            i0.ɵɵtext(72, "Todos os empr\u00E9stimos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "p");
            i0.ɵɵtext(74, "Acompanhe os registros de empr\u00E9stimos da biblioteca.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "button", 23);
            i0.ɵɵtext(76, " \u2193 Exportar ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "div", 24)(78, "div", 25)(79, "span", 26);
            i0.ɵɵtext(80, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "input", 27);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function AlugueisComponent_Template_input_ngModelChange_81_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.busca, $event) || (ctx.busca = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AlugueisComponent_Template_input_ngModelChange_81_listener() { return ctx.atualizarFiltros(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(82, "select", 28);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function AlugueisComponent_Template_select_ngModelChange_82_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filtroStatus, $event) || (ctx.filtroStatus = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AlugueisComponent_Template_select_ngModelChange_82_listener() { return ctx.atualizarFiltros(); });
            i0.ɵɵelementStart(83, "option", 29);
            i0.ɵɵtext(84, "Todas as situa\u00E7\u00F5es");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "option", 30);
            i0.ɵɵtext(86, "Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "option", 31);
            i0.ɵɵtext(88, "Em atraso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "option", 32);
            i0.ɵɵtext(90, "Devolvido");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "input", 33);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function AlugueisComponent_Template_input_ngModelChange_91_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filtroData, $event) || (ctx.filtroData = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AlugueisComponent_Template_input_ngModelChange_91_listener() { return ctx.atualizarFiltros(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "div", 34)(93, "table")(94, "thead")(95, "tr")(96, "th");
            i0.ɵɵtext(97, "ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "th");
            i0.ɵɵtext(99, "LOCAT\u00C1RIO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "th");
            i0.ɵɵtext(101, "LIVRO / EXEMPLAR");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "th");
            i0.ɵɵtext(103, "DATA DO EMPR\u00C9STIMO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "th");
            i0.ɵɵtext(105, "DEVOLU\u00C7\u00C3O PREVISTA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "th");
            i0.ɵɵtext(107, "STATUS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "th");
            i0.ɵɵtext(109, "A\u00C7\u00D5ES");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(110, "tbody");
            i0.ɵɵtemplate(111, AlugueisComponent_tr_111_Template, 30, 23, "tr", 35)(112, AlugueisComponent_tr_112_Template, 3, 1, "tr", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(113, "footer", 37)(114, "span");
            i0.ɵɵtext(115);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "div", 38)(117, "button", 39);
            i0.ɵɵlistener("click", function AlugueisComponent_Template_button_click_117_listener() { return ctx.paginaAnterior(); });
            i0.ɵɵtext(118, " \u2039 ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(119, AlugueisComponent_button_119_Template, 2, 4, "button", 40);
            i0.ɵɵelementStart(120, "button", 41);
            i0.ɵɵlistener("click", function AlugueisComponent_Template_button_click_120_listener() { return ctx.proximaPagina(); });
            i0.ɵɵtext(121, " \u203A ");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(122, AlugueisComponent_div_122_Template, 20, 11, "div", 42);
        } if (rf & 2) {
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("ngIf", ctx.mensagemSucesso);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.emprestimosAtivos);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.emprestimosAtivos);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.emprestimosAtrasados);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.emprestimosDevolvidos);
            i0.ɵɵadvance(18);
            i0.ɵɵtwoWayProperty("ngModel", ctx.busca);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.filtroStatus);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filtroData);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(20);
            i0.ɵɵproperty("ngForOf", ctx.alugueisDaPagina);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.alugueisFiltrados.length === 0);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate3(" Mostrando ", ctx.primeiroItemExibido, "-", ctx.ultimoItemExibido, " de ", ctx.alugueisFiltrados.length, " empr\u00E9stimos ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.paginaAtual === 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.paginas);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.paginaAtual === ctx.totalPaginas);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.etapa);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.MaxLengthValidator, i2.NgModel, i1.DatePipe], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100vh;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  color: #1e293b;\r\n  background: #f5f7fb;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.pagina-emprestimos[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n  padding: 0 34px;\r\n  background: #ffffff;\r\n  border-bottom: 1px solid #e8edf4;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  color: #7b8798;\r\n  font-size: 14px;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #1e293b;\r\n  font-weight: 600;\r\n}\r\n\r\n.breadcrumb-separator[_ngcontent-%COMP%] {\r\n  color: #c4cbd5;\r\n}\r\n\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n\r\n.system-status[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #64748b;\r\n  font-size: 12px;\r\n}\r\n\r\n.status-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 36px;\r\n  height: 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  background: #e8efff;\r\n  color: #3159c9;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.conteudo[_ngcontent-%COMP%] {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 32px 34px;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0 0 8px;\r\n  font-size: 27px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.7px;\r\n  color: #172033;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \r\n.painel-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #8792a4;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 12px 18px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #315bd6;\r\n  color: white;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: #2449b8;\r\n}\r\n\r\n.icone[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  line-height: 14px;\r\n}\r\n\r\n.btn-secundario[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: white;\r\n  color: #475569;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-secundario[_ngcontent-%COMP%]:hover {\r\n  background: #f8fafc;\r\n}\r\n\r\n.livro-clicavel[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-radius: 6px;\r\n  outline: none;\r\n}\r\n\r\n.livro-clicavel[_ngcontent-%COMP%]:hover, \r\n.livro-clicavel[_ngcontent-%COMP%]:focus-visible {\r\n  background: #edf2ff;\r\n}\r\n\r\n.mensagem-sucesso[_ngcontent-%COMP%] {\r\n  margin: -12px 0 20px;\r\n  color: #147d52;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 20;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(15 23 42 / 55%);\r\n}\r\n\r\n.modal-emprestimo[_ngcontent-%COMP%] {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.campo-modal[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 16px 0;\r\n  color: #475569;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.campo-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.campo-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 7px;\r\n  padding: 10px 12px;\r\n  border: 1px solid #dfe5ee;\r\n  border-radius: 7px;\r\n  color: #1e293b;\r\n  font: inherit;\r\n}\r\n\r\n.campo-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  min-height: 70px;\r\n  resize: vertical;\r\n}\r\n\r\n.resultado-exemplar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin: 18px 0;\r\n  padding: 14px;\r\n  border-radius: 8px;\r\n  background: #f5f7fb;\r\n}\r\n\r\n.resultado-exemplar[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \r\n.texto-ajuda[_ngcontent-%COMP%] {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n}\r\n\r\n.mensagem-erro[_ngcontent-%COMP%] {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}\r\n\r\n.modal-acoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.resultados-locatarios[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-top: 16px;\r\n}\r\n\r\n.resultados-locatarios[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  padding: 10px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  color: #475569;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.cards-resumo[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 18px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.card-resumo[_ngcontent-%COMP%] {\r\n  min-height: 142px;\r\n  padding: 22px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  background: #ffffff;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(15 23 42 / 2%);\r\n}\r\n\r\n.card-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.card-titulo[_ngcontent-%COMP%] {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.card-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #172033;\r\n  font-size: 29px;\r\n  line-height: 1.1;\r\n  font-weight: 700;\r\n}\r\n\r\n.card-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #9aa4b3;\r\n  font-size: 11px;\r\n}\r\n\r\n.card-icone[_ngcontent-%COMP%] {\r\n  width: 39px;\r\n  height: 39px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.card-icone.azul[_ngcontent-%COMP%] {\r\n  color: #315bd6;\r\n  background: #edf2ff;\r\n}\r\n\r\n.card-icone.verde[_ngcontent-%COMP%] {\r\n  color: #15966a;\r\n  background: #e7f8f0;\r\n}\r\n\r\n.card-icone.vermelho[_ngcontent-%COMP%] {\r\n  color: #dc4545;\r\n  background: #fff0f0;\r\n}\r\n\r\n.card-icone.roxo[_ngcontent-%COMP%] {\r\n  color: #8055ce;\r\n  background: #f2edff;\r\n}\r\n\r\n\r\n\r\n.painel-emprestimos[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background: #ffffff;\r\n  border: 1px solid #e8edf4;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(15 23 42 / 2%);\r\n}\r\n\r\n.painel-cabecalho[_ngcontent-%COMP%] {\r\n  padding: 24px 24px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n}\r\n\r\n.painel-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 7px;\r\n  color: #202b3c;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.filtros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding: 0 24px 22px;\r\n}\r\n\r\n.campo-pesquisa[_ngcontent-%COMP%] {\r\n  min-width: 180px;\r\n  flex: 1;\r\n  height: 42px;\r\n  padding: 0 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: #ffffff;\r\n}\r\n\r\n.pesquisa-icone[_ngcontent-%COMP%] {\r\n  color: #94a3b8;\r\n  font-size: 23px;\r\n}\r\n\r\n.campo-pesquisa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 0;\r\n  border: none;\r\n  outline: none;\r\n  color: #334155;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  background: transparent;\r\n}\r\n\r\n.campo-pesquisa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #a0aaba;\r\n}\r\n\r\n.filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \r\n.filtros[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  outline: none;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n}\r\n\r\n.filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  max-width: 190px;\r\n}\r\n\r\n.filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \r\n.filtros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.campo-pesquisa[_ngcontent-%COMP%]:focus-within {\r\n  border-color: #315bd6;\r\n}\r\n\r\n\r\n\r\n.tabela-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n  text-align: left;\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n  background: #f8fafd;\r\n}\r\n\r\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n  color: #8a96a8;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.45px;\r\n  border-top: 1px solid #edf0f5;\r\n  border-bottom: 1px solid #edf0f5;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #edf0f5;\r\n  transition: background 0.15s;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: #fafcff;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 17px 20px;\r\n  color: #64748b;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.pessoa[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n}\r\n\r\n.pessoa-avatar[_ngcontent-%COMP%] {\r\n  width: 37px;\r\n  height: 37px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  background: #edf2ff;\r\n  color: #315bd6;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.pessoa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \r\n.livro-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  color: #334155;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.pessoa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \r\n.livro-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #98a2b3;\r\n  font-size: 10px;\r\n}\r\n\r\n\r\n\r\n.status-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 6px 10px;\r\n  border-radius: 20px;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n.status-ativo[_ngcontent-%COMP%] {\r\n  background: #e8f8ef;\r\n  color: #16845b;\r\n}\r\n\r\n.status-atrasado[_ngcontent-%COMP%] {\r\n  background: #fff0ed;\r\n  color: #d84b3f;\r\n}\r\n\r\n.status-devolvido[_ngcontent-%COMP%] {\r\n  background: #edf2ff;\r\n  color: #4262c7;\r\n}\r\n\r\n\r\n\r\n.btn-acao[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 7px;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-acao[_ngcontent-%COMP%]:hover {\r\n  border-color: #315bd6;\r\n  color: #315bd6;\r\n  background: #f5f8ff;\r\n}\r\n\r\n\r\n\r\n.tabela-rodape[_ngcontent-%COMP%] {\r\n  min-height: 67px;\r\n  padding: 14px 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  border-top: 1px solid #edf0f5;\r\n}\r\n\r\n.tabela-rodape[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  color: #8995a6;\r\n  font-size: 11px;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  min-width: 30px;\r\n  height: 30px;\r\n  padding: 0 8px;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 6px;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  border-color: #315bd6;\r\n  color: #315bd6;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.4;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%]   .pagina-atual[_ngcontent-%COMP%] {\r\n  border-color: #315bd6;\r\n  background: #315bd6;\r\n  color: #ffffff;\r\n}\r\n\r\n.paginacao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 0 4px;\r\n  color: #94a3b8;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1100px) {\r\n  .cards-resumo[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .conteudo[_ngcontent-%COMP%] {\r\n    padding: 26px 22px;\r\n  }\r\n\r\n  .topbar[_ngcontent-%COMP%] {\r\n    padding: 0 22px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .topbar[_ngcontent-%COMP%] {\r\n    height: 62px;\r\n    padding: 0 16px;\r\n  }\r\n\r\n  .topbar-right[_ngcontent-%COMP%] {\r\n    gap: 12px;\r\n  }\r\n\r\n  .system-status[_ngcontent-%COMP%] {\r\n    font-size: 0;\r\n    gap: 0;\r\n  }\r\n\r\n  .system-status[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\r\n    width: 9px;\r\n    height: 9px;\r\n  }\r\n\r\n  .conteudo[_ngcontent-%COMP%] {\r\n    padding: 22px 14px;\r\n  }\r\n\r\n  .cabecalho-pagina[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .cards-resumo[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 12px;\r\n  }\r\n\r\n  .card-resumo[_ngcontent-%COMP%] {\r\n    min-height: 120px;\r\n  }\r\n\r\n  .filtros[_ngcontent-%COMP%] {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 0 16px 18px;\r\n  }\r\n\r\n  .filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \r\n   .filtros[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%] {\r\n    max-width: none;\r\n    width: 100%;\r\n  }\r\n\r\n  .painel-cabecalho[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .painel-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .btn-secundario[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .tabela-rodape[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n  }\r\n\r\n  .paginacao[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlugueisComponent, [{
        type: Component,
        args: [{ imports: [CommonModule, FormsModule], standalone: true, selector: 'app-alugueis-component', template: "<div class=\"pagina-emprestimos\">\r\n\r\n  <!-- Barra superior -->\r\n  <header class=\"topbar\">\r\n    <div class=\"breadcrumb\">\r\n      <span>Biblioteca</span>\r\n      <span class=\"breadcrumb-separator\">/</span>\r\n      <strong>Empr\u00E9stimos</strong>\r\n    </div>\r\n\r\n    <div class=\"topbar-right\">\r\n      <div class=\"system-status\">\r\n        <span class=\"status-dot\"></span>\r\n        Sistema ativo\r\n      </div>\r\n      <div class=\"avatar\">B</div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Conte\u00FAdo -->\r\n  <main class=\"conteudo\">\r\n\r\n    <section class=\"cabecalho-pagina\">\r\n      <div>\r\n        <h1>Empr\u00E9stimos</h1>\r\n        <p>Gerencie os empr\u00E9stimos e as devolu\u00E7\u00F5es de livros.</p>\r\n      </div>\r\n\r\n      <button class=\"btn-primary\" type=\"button\" (click)=\"abrirFluxo('novo')\">\r\n        <span class=\"icone\">+</span>\r\n        Novo empr\u00E9stimo\r\n      </button>\r\n    </section>\r\n\r\n    <p class=\"mensagem-sucesso\" *ngIf=\"mensagemSucesso\">\r\n      {{ mensagemSucesso }}\r\n    </p>\r\n\r\n    <!-- Indicadores -->\r\n    <section class=\"cards-resumo\">\r\n\r\n      <article class=\"card-resumo\">\r\n        <div class=\"card-info\">\r\n          <span class=\"card-titulo\">Empr\u00E9stimos ativos</span>\r\n          <strong>{{ emprestimosAtivos }}</strong>\r\n          <small>Livros atualmente emprestados</small>\r\n        </div>\r\n        <div class=\"card-icone azul\">\u2197</div>\r\n      </article>\r\n\r\n      <article class=\"card-resumo\">\r\n        <div class=\"card-info\">\r\n          <span class=\"card-titulo\">Devolu\u00E7\u00F5es hoje</span>\r\n          <strong>{{ emprestimosAtivos }}</strong>\r\n          <small>Previstas para hoje</small>\r\n        </div>\r\n        <div class=\"card-icone verde\">\u21A9</div>\r\n      </article>\r\n\r\n      <article class=\"card-resumo\">\r\n        <div class=\"card-info\">\r\n          <span class=\"card-titulo\">Em atraso</span>\r\n          <strong>{{ emprestimosAtrasados }}</strong>\r\n          <small>Precisam de aten\u00E7\u00E3o</small>\r\n        </div>\r\n        <div class=\"card-icone vermelho\">!</div>\r\n      </article>\r\n\r\n      <article class=\"card-resumo\">\r\n        <div class=\"card-info\">\r\n          <span class=\"card-titulo\">Devolvidos</span>\r\n          <strong>{{ emprestimosDevolvidos }}</strong>\r\n          <small>Total de devolu\u00E7\u00F5es</small>\r\n        </div>\r\n        <div class=\"card-icone roxo\">\u2713</div>\r\n      </article>\r\n\r\n    </section>\r\n\r\n    <!-- Tabela de empr\u00E9stimos -->\r\n    <section class=\"painel-emprestimos\">\r\n\r\n      <div class=\"painel-cabecalho\">\r\n        <div>\r\n          <h2>Todos os empr\u00E9stimos</h2>\r\n          <p>Acompanhe os registros de empr\u00E9stimos da biblioteca.</p>\r\n        </div>\r\n\r\n        <button class=\"btn-secundario\" type=\"button\">\r\n          \u2193 Exportar\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Pesquisa e filtros -->\r\n      <div class=\"filtros\">\r\n\r\n        <div class=\"campo-pesquisa\">\r\n          <span class=\"pesquisa-icone\">\u2315</span>\r\n          <input\r\n            type=\"search\"\r\n            placeholder=\"Buscar por locat\u00E1rio, livro ou c\u00F3digo...\"\r\n            aria-label=\"Buscar empr\u00E9stimos\"\r\n            [(ngModel)]=\"busca\"\r\n            (ngModelChange)=\"atualizarFiltros()\"\r\n          />\r\n        </div>\r\n\r\n        <select aria-label=\"Filtrar por situa\u00E7\u00E3o\" [(ngModel)]=\"filtroStatus\"\r\n          (ngModelChange)=\"atualizarFiltros()\">\r\n          <option value=\"\">Todas as situa\u00E7\u00F5es</option>\r\n          <option value=\"ativo\">Ativo</option>\r\n          <option value=\"atrasado\">Em atraso</option>\r\n          <option value=\"devolvido\">Devolvido</option>\r\n        </select>\r\n\r\n        <input\r\n          type=\"date\"\r\n          aria-label=\"Filtrar por data\"\r\n          title=\"Filtrar por data\"\r\n          [(ngModel)]=\"filtroData\"\r\n          (ngModelChange)=\"atualizarFiltros()\"\r\n        />\r\n\r\n      </div>\r\n\r\n      <!-- Tabela -->\r\n      <div class=\"tabela-container\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>LOCAT\u00C1RIO</th>\r\n              <th>LIVRO / EXEMPLAR</th>\r\n              <th>DATA DO EMPR\u00C9STIMO</th>\r\n              <th>DEVOLU\u00C7\u00C3O PREVISTA</th>\r\n              <th>STATUS</th>\r\n              <th>A\u00C7\u00D5ES</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let aluguel of alugueisDaPagina\">\r\n              <td class=\"id-emprestimo\">#{{ aluguel.id }}</td>\r\n              <td>\r\n                <div class=\"pessoa\">\r\n                  <div class=\"pessoa-avatar\">\r\n                    {{ aluguel.nomeLocatario.slice(0, 2).toUpperCase() }}\r\n                  </div>\r\n                  <div>\r\n                    <strong>{{ aluguel.nomeLocatario }}</strong>\r\n                    <small>ID: {{ aluguel.alugatarioId }}</small>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <div\r\n                  class=\"livro-info livro-clicavel\"\r\n                  role=\"link\"\r\n                  tabindex=\"0\"\r\n                  [attr.aria-label]=\"'Abrir detalhes do livro ' + aluguel.livro\"\r\n                  (click)=\"abrirLivro(aluguel)\"\r\n                  (keydown.enter)=\"abrirLivro(aluguel)\"\r\n                  (keydown.space)=\"abrirLivro(aluguel); $event.preventDefault()\"\r\n                >\r\n                  <strong>{{ aluguel.livro }}</strong>\r\n                  <small>Exemplar #{{ aluguel.codigoBarras }}</small>\r\n                </div>\r\n              </td>\r\n\r\n              <td>{{ aluguel.dataAluguel | date:'dd/MM/yyyy' }}</td>\r\n              <td>{{ aluguel.dataDevolucaoPrevista | date:'dd/MM/yyyy' }}</td>\r\n\r\n              <td>\r\n                <span class=\"status-badge\"\r\n                  [class.status-ativo]=\"aluguel.status.toLowerCase() === 'ativo'\"\r\n                  [class.status-devolvido]=\"aluguel.status.toLowerCase() === 'devolvido'\"\r\n                  [class.status-atrasado]=\"aluguel.status.toLowerCase() !== 'ativo' &&\r\n                    aluguel.status.toLowerCase() !== 'devolvido'\">\r\n                  {{ aluguel.status }}\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                <button class=\"btn-acao\" type=\"button\"\r\n                  [attr.aria-label]=\"'Ver empr\u00E9stimo de ' + aluguel.nomeLocatario\"\r\n                  title=\"Ver detalhes do empr\u00E9stimo\"\r\n                  (click)=\"abrirDetalhesEmprestimo(aluguel)\">\r\n                  \u22EF\r\n                </button>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr *ngIf=\"!carregando && alugueisFiltrados.length === 0\">\r\n              <td colspan=\"7\" class=\"estado-vazio\">\r\n                {{ erro || 'Nenhum empr\u00E9stimo encontrado.' }}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Rodap\u00E9 da tabela -->\r\n      <footer class=\"tabela-rodape\">\r\n        <span>\r\n          Mostrando {{ primeiroItemExibido }}-{{ ultimoItemExibido }}\r\n          de {{ alugueisFiltrados.length }} empr\u00E9stimos\r\n        </span>\r\n\r\n        <div class=\"paginacao\">\r\n          <button type=\"button\" [disabled]=\"paginaAtual === 1\"\r\n            (click)=\"paginaAnterior()\" aria-label=\"P\u00E1gina anterior\">\r\n            \u2039\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            *ngFor=\"let pagina of paginas\"\r\n            [class.pagina-atual]=\"paginaAtual === pagina\"\r\n            [attr.aria-current]=\"paginaAtual === pagina ? 'page' : null\"\r\n            (click)=\"irParaPagina(pagina)\">\r\n            {{ pagina }}\r\n          </button>\r\n          <button type=\"button\" [disabled]=\"paginaAtual === totalPaginas\"\r\n            (click)=\"proximaPagina()\" aria-label=\"Pr\u00F3xima p\u00E1gina\">\r\n            \u203A\r\n          </button>\r\n        </div>\r\n      </footer>\r\n\r\n    </section>\r\n\r\n  </main>\r\n</div>\r\n\r\n<div class=\"modal-overlay\" *ngIf=\"etapa\">\r\n  <section class=\"modal-emprestimo\" role=\"dialog\" aria-modal=\"true\">\r\n    <header class=\"painel-cabecalho\">\r\n      <div>\r\n        <h2>{{ etapa === 'codigo' ? 'Consultar exemplar' :\r\n          etapa === 'devolucao' ? 'Devolu\u00E7\u00E3o de empr\u00E9stimo' :\r\n          'Novo empr\u00E9stimo' }}</h2>\r\n        <p>{{ etapa === 'codigo' ? 'Informe o c\u00F3digo de barras para continuar.' :\r\n          etapa === 'devolucao' ? 'Confirme a devolu\u00E7\u00E3o do exemplar.' :\r\n          'Identifique o locat\u00E1rio para registrar o empr\u00E9stimo.' }}</p>\r\n      </div>\r\n      <button class=\"btn-acao\" type=\"button\" [disabled]=\"salvando\"\r\n        (click)=\"fecharModal()\" aria-label=\"Fechar\">\u00D7</button>\r\n    </header>\r\n\r\n    <label class=\"campo-modal\" *ngIf=\"etapa === 'codigo'\">\r\n      C\u00F3digo de barras\r\n      <input [(ngModel)]=\"codigoBarras\" (keyup.enter)=\"consultarExemplar()\"\r\n        autocomplete=\"off\" autofocus aria-label=\"C\u00F3digo de barras do exemplar\">\r\n    </label>\r\n\r\n    <p class=\"mensagem-erro\" *ngIf=\"mensagem\">{{ mensagem }}</p>\r\n\r\n    <div class=\"resultado-exemplar\" *ngIf=\"exemplarSelecionado &&\r\n      etapa !== 'codigo'\">\r\n      <strong>{{ exemplarSelecionado.nomeLivro }}</strong>\r\n      <small>C\u00F3digo: {{ exemplarSelecionado.codigoBarras }}</small>\r\n      <small>Status:\r\n        {{ exemplarSelecionado.status === 0 ? 'Dispon\u00EDvel' : 'Emprestado' }}\r\n      </small>\r\n    </div>\r\n\r\n    <div *ngIf=\"etapa === 'devolucao' && aluguelSelecionado\"\r\n      class=\"resultado-exemplar\">\r\n      <strong>Empr\u00E9stimo ativo</strong>\r\n      <small>Locat\u00E1rio: {{ aluguelSelecionado.nomeLocatario }}</small>\r\n      <small>Devolu\u00E7\u00E3o prevista:\r\n        {{ aluguelSelecionado.dataDevolucaoPrevista | date:'dd/MM/yyyy' }}\r\n      </small>\r\n      <button class=\"btn-primary\" type=\"button\" [disabled]=\"salvando\"\r\n        (click)=\"confirmarDevolucao()\">\r\n        {{ salvando ? 'Registrando...' : 'Confirmar devolu\u00E7\u00E3o' }}\r\n      </button>\r\n    </div>\r\n\r\n    <div *ngIf=\"etapa === 'locatario'\"\r\n      class=\"formulario-emprestimo\">\r\n      <label class=\"campo-modal\">CPF do locat\u00E1rio\r\n        <input [ngModel]=\"cpf\" (ngModelChange)=\"atualizarCpf($event)\"\r\n          maxlength=\"14\" inputmode=\"numeric\" aria-label=\"CPF do locat\u00E1rio\">\r\n      </label>\r\n      <button class=\"btn-secundario\" type=\"button\"\r\n        [disabled]=\"carregandoLocatarios || salvando\" (click)=\"buscarPorCpf()\">\r\n        {{ carregandoLocatarios ? 'Buscando...' : 'Buscar CPF' }}\r\n      </button>\r\n      <!-- <button class=\"btn-secundario\" type=\"button\"\r\n        [disabled]=\"carregandoLocatarios || salvando\"\r\n        (click)=\"buscarLocatarios()\">Buscar locat\u00E1rio</button> -->\r\n\r\n      <div class=\"resultado-exemplar\" *ngIf=\"locatarioSelecionado\">\r\n        <strong>{{ locatarioSelecionado.nome }}</strong>\r\n        <small>CPF: {{ locatarioSelecionado.cpf }}</small>\r\n        <button class=\"btn-primary\" type=\"button\" [disabled]=\"salvando\"\r\n          (click)=\"confirmarEmprestimo()\">\r\n          {{ salvando ? 'Registrando...' : 'Confirmar empr\u00E9stimo' }}\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"resultados-locatarios\" *ngIf=\"resultadosLocatarios.length\">\r\n        <div *ngFor=\"let locatario of resultadosLocatarios\">\r\n          <span>{{ locatario.nome }} - {{ locatario.cpf }}</span>\r\n          <button class=\"btn-secundario\" type=\"button\"\r\n            (click)=\"selecionarLocatario(locatario)\">Selecionar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"modal-acoes\">\r\n      <button class=\"btn-secundario\" type=\"button\" [disabled]=\"salvando\"\r\n        (click)=\"fecharModal()\">Cancelar</button>\r\n      <button class=\"btn-secundario\" type=\"button\"\r\n        *ngIf=\"etapa === 'locatario'\" [disabled]=\"salvando\"\r\n        (click)=\"voltarParaCodigo()\">Voltar</button>\r\n      <button class=\"btn-primary\" type=\"button\" *ngIf=\"etapa === 'codigo'\"\r\n        [disabled]=\"carregandoConsulta || salvando\"\r\n        (click)=\"consultarExemplar()\">\r\n        {{ carregandoConsulta ? 'Consultando...' :\r\n          operacao === 'f2' ? 'Abrir livro' : 'Consultar' }}\r\n      </button>\r\n    </footer>\r\n  </section>\r\n</div>", styles: ["\r\n:host {\r\n  display: block;\r\n  min-height: 100vh;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  color: #1e293b;\r\n  background: #f5f7fb;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.pagina-emprestimos {\r\n  min-height: 100vh;\r\n}\r\n\r\n/* Barra superior */\r\n\r\n.topbar {\r\n  height: 70px;\r\n  padding: 0 34px;\r\n  background: #ffffff;\r\n  border-bottom: 1px solid #e8edf4;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  color: #7b8798;\r\n  font-size: 14px;\r\n}\r\n\r\n.breadcrumb strong {\r\n  color: #1e293b;\r\n  font-weight: 600;\r\n}\r\n\r\n.breadcrumb-separator {\r\n  color: #c4cbd5;\r\n}\r\n\r\n.topbar-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n\r\n.system-status {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #64748b;\r\n  font-size: 12px;\r\n}\r\n\r\n.status-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n}\r\n\r\n.avatar {\r\n  width: 36px;\r\n  height: 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  background: #e8efff;\r\n  color: #3159c9;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n/* Conte\u00FAdo principal */\r\n\r\n.conteudo {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 32px 34px;\r\n}\r\n\r\n.cabecalho-pagina {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.cabecalho-pagina h1 {\r\n  margin: 0 0 8px;\r\n  font-size: 27px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.7px;\r\n  color: #172033;\r\n}\r\n\r\n.cabecalho-pagina p,\r\n.painel-cabecalho p {\r\n  margin: 0;\r\n  color: #8792a4;\r\n  font-size: 13px;\r\n}\r\n\r\n/* Bot\u00F5es */\r\n\r\n.btn-primary {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 12px 18px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #315bd6;\r\n  color: white;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.btn-primary:hover {\r\n  background: #2449b8;\r\n}\r\n\r\n.icone {\r\n  font-size: 20px;\r\n  line-height: 14px;\r\n}\r\n\r\n.btn-secundario {\r\n  padding: 10px 14px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: white;\r\n  color: #475569;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-secundario:hover {\r\n  background: #f8fafc;\r\n}\r\n\r\n.livro-clicavel {\r\n  cursor: pointer;\r\n  border-radius: 6px;\r\n  outline: none;\r\n}\r\n\r\n.livro-clicavel:hover,\r\n.livro-clicavel:focus-visible {\r\n  background: #edf2ff;\r\n}\r\n\r\n.mensagem-sucesso {\r\n  margin: -12px 0 20px;\r\n  color: #147d52;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  z-index: 20;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(15 23 42 / 55%);\r\n}\r\n\r\n.modal-emprestimo {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n}\r\n\r\n.campo-modal {\r\n  display: block;\r\n  margin: 16px 0;\r\n  color: #475569;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.campo-modal input,\r\n.campo-modal textarea {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 7px;\r\n  padding: 10px 12px;\r\n  border: 1px solid #dfe5ee;\r\n  border-radius: 7px;\r\n  color: #1e293b;\r\n  font: inherit;\r\n}\r\n\r\n.campo-modal textarea {\r\n  min-height: 70px;\r\n  resize: vertical;\r\n}\r\n\r\n.resultado-exemplar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  margin: 18px 0;\r\n  padding: 14px;\r\n  border-radius: 8px;\r\n  background: #f5f7fb;\r\n}\r\n\r\n.resultado-exemplar small,\r\n.texto-ajuda {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n}\r\n\r\n.mensagem-erro {\r\n  color: #b42318;\r\n  font-size: 12px;\r\n}\r\n\r\n.modal-acoes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.resultados-locatarios {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-top: 16px;\r\n}\r\n\r\n.resultados-locatarios > div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  padding: 10px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  color: #475569;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Cards de resumo */\r\n\r\n.cards-resumo {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 18px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.card-resumo {\r\n  min-height: 142px;\r\n  padding: 22px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  background: #ffffff;\r\n  border: 1px solid #e9edf4;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(15 23 42 / 2%);\r\n}\r\n\r\n.card-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.card-titulo {\r\n  color: #7b8798;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n.card-info strong {\r\n  color: #172033;\r\n  font-size: 29px;\r\n  line-height: 1.1;\r\n  font-weight: 700;\r\n}\r\n\r\n.card-info small {\r\n  color: #9aa4b3;\r\n  font-size: 11px;\r\n}\r\n\r\n.card-icone {\r\n  width: 39px;\r\n  height: 39px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.card-icone.azul {\r\n  color: #315bd6;\r\n  background: #edf2ff;\r\n}\r\n\r\n.card-icone.verde {\r\n  color: #15966a;\r\n  background: #e7f8f0;\r\n}\r\n\r\n.card-icone.vermelho {\r\n  color: #dc4545;\r\n  background: #fff0f0;\r\n}\r\n\r\n.card-icone.roxo {\r\n  color: #8055ce;\r\n  background: #f2edff;\r\n}\r\n\r\n/* Painel da tabela */\r\n\r\n.painel-emprestimos {\r\n  overflow: hidden;\r\n  background: #ffffff;\r\n  border: 1px solid #e8edf4;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 5px rgb(15 23 42 / 2%);\r\n}\r\n\r\n.painel-cabecalho {\r\n  padding: 24px 24px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n}\r\n\r\n.painel-cabecalho h2 {\r\n  margin: 0 0 7px;\r\n  color: #202b3c;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n/* Pesquisa e filtros */\r\n\r\n.filtros {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding: 0 24px 22px;\r\n}\r\n\r\n.campo-pesquisa {\r\n  min-width: 180px;\r\n  flex: 1;\r\n  height: 42px;\r\n  padding: 0 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  background: #ffffff;\r\n}\r\n\r\n.pesquisa-icone {\r\n  color: #94a3b8;\r\n  font-size: 23px;\r\n}\r\n\r\n.campo-pesquisa input {\r\n  width: 100%;\r\n  min-width: 0;\r\n  border: none;\r\n  outline: none;\r\n  color: #334155;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  background: transparent;\r\n}\r\n\r\n.campo-pesquisa input::placeholder {\r\n  color: #a0aaba;\r\n}\r\n\r\n.filtros select,\r\n.filtros input[type=\"date\"] {\r\n  height: 42px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e0e6ef;\r\n  border-radius: 7px;\r\n  outline: none;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n}\r\n\r\n.filtros select {\r\n  max-width: 190px;\r\n}\r\n\r\n.filtros select:focus,\r\n.filtros input:focus,\r\n.campo-pesquisa:focus-within {\r\n  border-color: #315bd6;\r\n}\r\n\r\n/* Tabela */\r\n\r\n.tabela-container {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n  text-align: left;\r\n}\r\n\r\nthead {\r\n  background: #f8fafd;\r\n}\r\n\r\nthead th {\r\n  padding: 15px 20px;\r\n  color: #8a96a8;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.45px;\r\n  border-top: 1px solid #edf0f5;\r\n  border-bottom: 1px solid #edf0f5;\r\n}\r\n\r\ntbody tr {\r\n  border-bottom: 1px solid #edf0f5;\r\n  transition: background 0.15s;\r\n}\r\n\r\ntbody tr:hover {\r\n  background: #fafcff;\r\n}\r\n\r\ntbody tr:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\ntbody td {\r\n  padding: 17px 20px;\r\n  color: #64748b;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Locat\u00E1rio */\r\n\r\n.pessoa {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n}\r\n\r\n.pessoa-avatar {\r\n  width: 37px;\r\n  height: 37px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  background: #edf2ff;\r\n  color: #315bd6;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.pessoa strong,\r\n.livro-info strong {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  color: #334155;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.pessoa small,\r\n.livro-info small {\r\n  display: block;\r\n  color: #98a2b3;\r\n  font-size: 10px;\r\n}\r\n\r\n/* Situa\u00E7\u00E3o do empr\u00E9stimo */\r\n\r\n.status-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 6px 10px;\r\n  border-radius: 20px;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n.status-ativo {\r\n  background: #e8f8ef;\r\n  color: #16845b;\r\n}\r\n\r\n.status-atrasado {\r\n  background: #fff0ed;\r\n  color: #d84b3f;\r\n}\r\n\r\n.status-devolvido {\r\n  background: #edf2ff;\r\n  color: #4262c7;\r\n}\r\n\r\n/* A\u00E7\u00F5es */\r\n\r\n.btn-acao {\r\n  width: 32px;\r\n  height: 32px;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 7px;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-acao:hover {\r\n  border-color: #315bd6;\r\n  color: #315bd6;\r\n  background: #f5f8ff;\r\n}\r\n\r\n/* Pagina\u00E7\u00E3o */\r\n\r\n.tabela-rodape {\r\n  min-height: 67px;\r\n  padding: 14px 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  border-top: 1px solid #edf0f5;\r\n}\r\n\r\n.tabela-rodape > span {\r\n  color: #8995a6;\r\n  font-size: 11px;\r\n}\r\n\r\n.paginacao {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.paginacao button {\r\n  min-width: 30px;\r\n  height: 30px;\r\n  padding: 0 8px;\r\n  border: 1px solid #e5eaf1;\r\n  border-radius: 6px;\r\n  background: #ffffff;\r\n  color: #64748b;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.paginacao button:hover:not(:disabled) {\r\n  border-color: #315bd6;\r\n  color: #315bd6;\r\n}\r\n\r\n.paginacao button:disabled {\r\n  opacity: 0.4;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.paginacao .pagina-atual {\r\n  border-color: #315bd6;\r\n  background: #315bd6;\r\n  color: #ffffff;\r\n}\r\n\r\n.paginacao span {\r\n  padding: 0 4px;\r\n  color: #94a3b8;\r\n}\r\n\r\n/* Responsividade */\r\n\r\n@media (max-width: 1100px) {\r\n  .cards-resumo {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .conteudo {\r\n    padding: 26px 22px;\r\n  }\r\n\r\n  .topbar {\r\n    padding: 0 22px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .topbar {\r\n    height: 62px;\r\n    padding: 0 16px;\r\n  }\r\n\r\n  .topbar-right {\r\n    gap: 12px;\r\n  }\r\n\r\n  .system-status {\r\n    font-size: 0;\r\n    gap: 0;\r\n  }\r\n\r\n  .system-status .status-dot {\r\n    width: 9px;\r\n    height: 9px;\r\n  }\r\n\r\n  .conteudo {\r\n    padding: 22px 14px;\r\n  }\r\n\r\n  .cabecalho-pagina {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .cabecalho-pagina h1 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .cards-resumo {\r\n    grid-template-columns: 1fr;\r\n    gap: 12px;\r\n  }\r\n\r\n  .card-resumo {\r\n    min-height: 120px;\r\n  }\r\n\r\n  .filtros {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 0 16px 18px;\r\n  }\r\n\r\n  .filtros select,\r\n  .filtros input[type=\"date\"] {\r\n    max-width: none;\r\n    width: 100%;\r\n  }\r\n\r\n  .painel-cabecalho {\r\n    align-items: flex-start;\r\n    padding: 20px 16px;\r\n  }\r\n\r\n  .painel-cabecalho h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .btn-secundario {\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .tabela-rodape {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n  }\r\n\r\n  .paginacao {\r\n    flex-wrap: wrap;\r\n  }\r\n}"] }]
    }], null, { tratarAtalho: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlugueisComponent, { className: "AlugueisComponent", filePath: "src/app/component/alugueis-component/alugueis-component.ts", lineNumber: 29 }); })();
