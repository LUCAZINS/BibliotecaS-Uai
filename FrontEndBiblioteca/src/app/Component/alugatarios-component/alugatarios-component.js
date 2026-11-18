import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AlugatarioService } from '../../Service/alugatarioService';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/Barra/locatarios", a0];
function AlugatariosComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 24)(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 26)(5, "div", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 28)(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "button", 29);
    i0.ɵɵlistener("click", function AlugatariosComponent_tr_63_Template_button_click_19_listener($event) { const locatario_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.abrirDetalhes(locatario_r2.id, $event)); });
    i0.ɵɵtext(20, " Ver detalhes ");
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "\u2192");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const locatario_r2 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, locatario_r2.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", locatario_r2.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (locatario_r2.nome || "?").charAt(0).toUpperCase(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(locatario_r2.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("ID: ", locatario_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(locatario_r2.cpf || "N\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(locatario_r2.telefone || "N\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(locatario_r2.endereco || "N\u00E3o informado");
} }
function AlugatariosComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 30)(2, "div", 31);
    i0.ɵɵtext(3, "\u2659");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Nenhum locat\u00E1rio encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Verifique a busca ou cadastre um novo locat\u00E1rio.");
    i0.ɵɵelementEnd()()();
} }
function AlugatariosComponent_div_67_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.mensagem);
} }
function AlugatariosComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "section", 33)(2, "header", 34)(3, "h2");
    i0.ɵɵtext(4, "Novo locat\u00E1rio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 35);
    i0.ɵɵlistener("click", function AlugatariosComponent_div_67_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharCadastro()); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "form", 36);
    i0.ɵɵlistener("ngSubmit", function AlugatariosComponent_div_67_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.salvarLocatario()); });
    i0.ɵɵelementStart(8, "label");
    i0.ɵɵtext(9, "Nome * ");
    i0.ɵɵelementStart(10, "input", 37);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formulario.nome, $event) || (ctx_r2.formulario.nome = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, "E-mail ");
    i0.ɵɵelementStart(13, "input", 38);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formulario.email, $event) || (ctx_r2.formulario.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "label");
    i0.ɵɵtext(15, "CPF ");
    i0.ɵɵelementStart(16, "input", 39);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.atualizarCpf($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label");
    i0.ɵɵtext(18, "Telefone ");
    i0.ɵɵelementStart(19, "input", 40);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.atualizarTelefone($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label");
    i0.ɵɵtext(21, "Endere\u00E7o ");
    i0.ɵɵelementStart(22, "input", 41);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formulario.endereco, $event) || (ctx_r2.formulario.endereco = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "label");
    i0.ɵɵtext(24, "Data de nascimento ");
    i0.ɵɵelementStart(25, "input", 42);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatariosComponent_div_67_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.formulario.dataNascimento, $event) || (ctx_r2.formulario.dataNascimento = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, AlugatariosComponent_div_67_p_26_Template, 2, 1, "p", 43);
    i0.ɵɵelementStart(27, "footer", 44)(28, "button", 35);
    i0.ɵɵlistener("click", function AlugatariosComponent_div_67_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharCadastro()); });
    i0.ɵɵtext(29, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 45);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r2.salvando);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formulario.nome);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formulario.email);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.formulario.cpf);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.formulario.telefone);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formulario.endereco);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formulario.dataNascimento);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.mensagem);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.salvando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.salvando ? "Salvando..." : "Cadastrar locat\u00E1rio", " ");
} }
export class AlugatariosComponent {
    service = inject(AlugatarioService);
    router = inject(Router);
    cdr = inject(ChangeDetectorRef);
    locatarios = [];
    busca = '';
    cadastroAberto = false;
    salvando = false;
    mensagem = '';
    formulario = {
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        dataNascimento: ''
    };
    ngOnInit() {
        this.carregarLocatarios();
    }
    carregarLocatarios() {
        this.service.listar().subscribe({
            next: (dados) => {
                this.locatarios = dados;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar locatários:', erro);
                this.cdr.detectChanges();
            }
        });
    }
    get locatariosFiltrados() {
        const termo = this.busca.trim().toLowerCase();
        if (!termo) {
            return this.locatarios;
        }
        return this.locatarios.filter(locatario => locatario.nome?.toLowerCase().includes(termo) ||
            locatario.cpf?.toLowerCase().includes(termo) ||
            locatario.telefone?.toLowerCase().includes(termo));
    }
    abrirDetalhes(id, event) {
        event.stopPropagation();
        this.router.navigate(['/Barra/locatarios', id]);
    }
    novoLocatario() {
        this.formulario = {
            nome: '',
            email: '',
            telefone: '',
            endereco: '',
            cpf: '',
            dataNascimento: ''
        };
        this.mensagem = '';
        this.cadastroAberto = true;
    }
    fecharCadastro() {
        if (!this.salvando) {
            this.cadastroAberto = false;
            this.mensagem = '';
        }
    }
    salvarLocatario() {
        this.mensagem = '';
        if (!this.formulario.nome.trim()) {
            this.mensagem = 'Informe o nome do locatário.';
            return;
        }
        if (!this.emailValido(this.formulario.email)) {
            this.mensagem = 'Informe um e-mail válido ou deixe o campo vazio.';
            return;
        }
        if (this.formulario.cpf && !this.cpfValido(this.formulario.cpf)) {
            this.mensagem = 'Informe um CPF válido.';
            return;
        }
        this.salvando = true;
        this.service.criar({
            nome: this.formulario.nome.trim(),
            email: this.formulario.email.trim(),
            telefone: this.formulario.telefone,
            endereco: this.formulario.endereco,
            cpf: this.formulario.cpf ? this.formatarCpf(this.formulario.cpf) : '',
            dataNascimento: this.formulario.dataNascimento
        }).subscribe({
            next: () => {
                this.cadastroAberto = false;
                this.salvando = false;
                this.carregarLocatarios();
            },
            error: erro => {
                console.error('Erro ao cadastrar locatário:', erro);
                this.mensagem =
                    erro?.error?.mensagem ||
                        erro?.error?.message ||
                        'Não foi possível cadastrar o locatário.';
                this.salvando = false;
                this.cdr.detectChanges();
            }
        });
    }
    emailValido(email) {
        const valor = email.trim();
        return !valor || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }
    cpfValido(cpf) {
        const numeros = cpf.replace(/\D/g, '');
        if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
            return false;
        }
        const calcularDigito = (tamanho) => {
            let soma = 0;
            for (let indice = 0; indice < tamanho; indice++) {
                soma += Number(numeros[indice]) * (tamanho + 1 - indice);
            }
            const resto = (soma * 10) % 11;
            return resto === 10 ? 0 : resto;
        };
        return calcularDigito(9) === Number(numeros[9]) &&
            calcularDigito(10) === Number(numeros[10]);
    }
    formatarCpf(cpf) {
        const numeros = cpf.replace(/\D/g, '').slice(0, 11);
        return numeros
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
    }
    atualizarCpf(valor) {
        this.formulario.cpf = this.formatarCpf(valor);
    }
    atualizarTelefone(valor) {
        this.formulario.telefone = valor.replace(/\D/g, '');
    }
    static ɵfac = function AlugatariosComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlugatariosComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlugatariosComponent, selectors: [["app-alugatarios-component"]], decls: 68, vars: 7, consts: [[1, "page-container"], [1, "topbar"], [1, "breadcrumb"], [1, "breadcrumb-separator"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot"], [1, "avatar"], [1, "content"], [1, "page-heading"], [1, "btn-primary", 3, "click"], [1, "stats"], [1, "stat-card"], [1, "stat-icon"], [1, "list-card"], [1, "list-header"], [1, "search-box"], ["type", "text", "placeholder", "Buscar por nome, CPF ou telefone...", 3, "ngModelChange", "ngModel"], [1, "table-wrapper"], [1, "actions-column"], ["class", "clickable-row", "title", "Ver detalhes do locat\u00E1rio", 3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "list-footer"], ["class", "modal-overlay", 4, "ngIf"], ["title", "Ver detalhes do locat\u00E1rio", 1, "clickable-row", 3, "routerLink"], [1, "id-locatario"], [1, "person-info"], [1, "person-avatar"], [1, "person-name"], ["type", "button", 1, "btn-details", 3, "click"], ["colspan", "6", 1, "empty-state"], [1, "empty-icon"], [1, "modal-overlay"], ["role", "dialog", "aria-modal", "true", 1, "modal-cadastro"], [1, "modal-header"], ["type", "button", 3, "click", "disabled"], [3, "ngSubmit"], ["name", "nome", "required", "", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", 3, "ngModelChange", "ngModel"], ["name", "cpf", "inputmode", "numeric", "maxlength", "14", "placeholder", "000.000.000-00", 3, "ngModelChange", "ngModel"], ["name", "telefone", "type", "tel", "inputmode", "numeric", 3, "ngModelChange", "ngModel"], ["name", "endereco", 3, "ngModelChange", "ngModel"], ["name", "dataNascimento", "type", "date", 3, "ngModelChange", "ngModel"], ["class", "mensagem-erro", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "mensagem-erro"]], template: function AlugatariosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span");
            i0.ɵɵtext(4, "Biblioteca");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 3);
            i0.ɵɵtext(6, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Locat\u00E1rios");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4)(10, "div", 5);
            i0.ɵɵelement(11, "span", 6);
            i0.ɵɵtext(12, " Sistema ativo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵtext(14, "B");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "main", 8)(16, "section", 9)(17, "div")(18, "h1");
            i0.ɵɵtext(19, "Locat\u00E1rios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Gerencie os locat\u00E1rios cadastrados na biblioteca.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "button", 10);
            i0.ɵɵlistener("click", function AlugatariosComponent_Template_button_click_22_listener() { return ctx.novoLocatario(); });
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Novo locat\u00E1rio ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "section", 11)(27, "div", 12)(28, "div", 13);
            i0.ɵɵtext(29, "\u2659");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div")(31, "span");
            i0.ɵɵtext(32, "Total de locat\u00E1rios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "h2");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "section", 14)(36, "div", 15)(37, "div")(38, "h2");
            i0.ɵɵtext(39, "Todos os locat\u00E1rios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p");
            i0.ɵɵtext(41, "Selecione um locat\u00E1rio para visualizar seus detalhes.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 16)(43, "span");
            i0.ɵɵtext(44, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "input", 17);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function AlugatariosComponent_Template_input_ngModelChange_45_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.busca, $event) || (ctx.busca = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(46, "div", 18)(47, "table")(48, "thead")(49, "tr")(50, "th");
            i0.ɵɵtext(51, "ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "th");
            i0.ɵɵtext(53, "LOCAT\u00C1RIO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "th");
            i0.ɵɵtext(55, "CPF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "th");
            i0.ɵɵtext(57, "TELEFONE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "th");
            i0.ɵɵtext(59, "ENDERE\u00C7O");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "th", 19);
            i0.ɵɵtext(61, "A\u00C7\u00D5ES");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(62, "tbody");
            i0.ɵɵtemplate(63, AlugatariosComponent_tr_63_Template, 23, 10, "tr", 20)(64, AlugatariosComponent_tr_64_Template, 8, 0, "tr", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "div", 22);
            i0.ɵɵtext(66);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(67, AlugatariosComponent_div_67_Template, 32, 11, "div", 23);
        } if (rf & 2) {
            i0.ɵɵadvance(34);
            i0.ɵɵtextInterpolate(ctx.locatarios.length);
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.busca);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("ngForOf", ctx.locatariosFiltrados);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.locatariosFiltrados.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" Exibindo ", ctx.locatariosFiltrados.length, " de ", ctx.locatarios.length, " locat\u00E1rios ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cadastroAberto);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, i2.NgForm, RouterLink], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100vh;\r\n  background: #f6f8fb;\r\n  color: #202938;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n  height: 72px;\r\n  padding: 0 36px;\r\n  background: #ffffff;\r\n  border-bottom: 1px solid #e7ebf0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  font-size: 14px;\r\n  color: #778195;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #202938;\r\n  font-weight: 600;\r\n}\r\n\r\n.breadcrumb-separator[_ngcontent-%COMP%] {\r\n  color: #c4cad4;\r\n}\r\n\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n\r\n.system-status[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #657184;\r\n  font-size: 13px;\r\n}\r\n\r\n.status-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #22c55e;\r\n  border-radius: 50%;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 38px;\r\n  height: 38px;\r\n  background: #e8edff;\r\n  color: #3858b8;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n  padding: 36px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  margin: 0 0 9px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \r\n.list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #7b8495;\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  padding: 12px 18px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #3158c9;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: #2446a9;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n  line-height: 14px;\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 10;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-cadastro[_ngcontent-%COMP%] {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%], \r\n.modal-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-cadastro[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 13px;\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.modal-cadastro[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n  border-color: #3158c9;\r\n  background: #3158c9;\r\n  color: #fff;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: #2446a9;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\r\n  border-color: #9eafe3;\r\n  background: #0040ff;\r\n  color: #fff;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.mensagem-erro[_ngcontent-%COMP%] {\r\n  color: #b33b3b;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: minmax(220px, 300px);\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 22px;\r\n  background: white;\r\n  border: 1px solid #e8edf3;\r\n  border-radius: 12px;\r\n}\r\n\r\n.stat-icon[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  height: 48px;\r\n  background: #edf2ff;\r\n  color: #3158c9;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #7b8495;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 7px 0 0;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.list-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  border: 1px solid #e8edf3;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-bottom: 1px solid #edf0f4;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  margin: 0 0 8px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  width: min(100%, 360px);\r\n  height: 42px;\r\n  padding: 0 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: #f9fafc;\r\n  border: 1px solid #e2e7ee;\r\n  border-radius: 8px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 23px;\r\n  color: #7b8495;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  font-size: 13px;\r\n  color: #202938;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n  background: #fafbfd;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  padding: 15px 24px;\r\n  color: #8992a2;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding: 17px 24px;\r\n  border-top: 1px solid #edf0f4;\r\n  color: #626d7f;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clickable-row[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.clickable-row[_ngcontent-%COMP%]:hover {\r\n  background: #f6f8ff;\r\n}\r\n\r\n.person-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.person-avatar[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  background: #edf2ff;\r\n  color: #3158c9;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n}\r\n\r\n.person-name[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.person-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #293448;\r\n  font-size: 13px;\r\n}\r\n\r\n.person-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #939bad;\r\n  font-size: 11px;\r\n}\r\n\r\n.actions-column[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.btn-details[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: 1px solid #dce4fa;\r\n  background: #ffffff;\r\n  color: #3158c9;\r\n  border-radius: 7px;\r\n  padding: 9px 12px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-details[_ngcontent-%COMP%]:hover {\r\n  background: #edf2ff;\r\n}\r\n\r\n.btn-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n.empty-state[_ngcontent-%COMP%] {\r\n  padding: 55px 20px;\r\n  text-align: center;\r\n  white-space: normal;\r\n}\r\n\r\n.empty-icon[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #9aa8c7;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #293448;\r\n  font-size: 15px;\r\n}\r\n\r\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #8992a2;\r\n  font-size: 13px;\r\n}\r\n\r\n.list-footer[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #edf0f4;\r\n  padding: 17px 24px;\r\n  color: #8992a2;\r\n  font-size: 12px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .topbar[_ngcontent-%COMP%] {\r\n    padding: 0 18px;\r\n  }\r\n\r\n  .topbar-right[_ngcontent-%COMP%] {\r\n    gap: 12px;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 24px 16px;\r\n  }\r\n\r\n  .page-heading[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .list-header[_ngcontent-%COMP%] {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%], \r\n   td[_ngcontent-%COMP%] {\r\n    padding: 14px 16px;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlugatariosComponent, [{
        type: Component,
        args: [{ imports: [CommonModule, FormsModule, RouterLink], standalone: true, selector: 'app-alugatarios-component', template: "\r\n<div class=\"page-container\">\r\n\r\n  <header class=\"topbar\">\r\n    <div class=\"breadcrumb\">\r\n      <span>Biblioteca</span>\r\n      <span class=\"breadcrumb-separator\">/</span>\r\n      <strong>Locat\u00E1rios</strong>\r\n    </div>\r\n\r\n    <div class=\"topbar-right\">\r\n      <div class=\"system-status\">\r\n        <span class=\"status-dot\"></span>\r\n        Sistema ativo\r\n      </div>\r\n      <div class=\"avatar\">B</div>\r\n    </div>\r\n  </header>\r\n\r\n  <main class=\"content\">\r\n\r\n    <section class=\"page-heading\">\r\n      <div>\r\n        <h1>Locat\u00E1rios</h1>\r\n        <p>Gerencie os locat\u00E1rios cadastrados na biblioteca.</p>\r\n      </div>\r\n\r\n      <button class=\"btn-primary\" (click)=\"novoLocatario()\">\r\n        <span>+</span> Novo locat\u00E1rio\r\n      </button>\r\n    </section>\r\n\r\n    <section class=\"stats\">\r\n      <div class=\"stat-card\">\r\n        <div class=\"stat-icon\">\u2659</div>\r\n        <div>\r\n          <span>Total de locat\u00E1rios</span>\r\n          <h2>{{ locatarios.length }}</h2>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"list-card\">\r\n\r\n      <div class=\"list-header\">\r\n        <div>\r\n          <h2>Todos os locat\u00E1rios</h2>\r\n          <p>Selecione um locat\u00E1rio para visualizar seus detalhes.</p>\r\n        </div>\r\n\r\n        <div class=\"search-box\">\r\n          <span>\u2315</span>\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Buscar por nome, CPF ou telefone...\"\r\n            [(ngModel)]=\"busca\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-wrapper\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>LOCAT\u00C1RIO</th>\r\n              <th>CPF</th>\r\n              <th>TELEFONE</th>\r\n              <th>ENDERE\u00C7O</th>\r\n              <th class=\"actions-column\">A\u00C7\u00D5ES</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr\r\n              *ngFor=\"let locatario of locatariosFiltrados\"\r\n              class=\"clickable-row\"\r\n              [routerLink]=\"['/Barra/locatarios', locatario.id]\"\r\n              title=\"Ver detalhes do locat\u00E1rio\"\r\n            >\r\n              <td class=\"id-locatario\">#{{ locatario.id }}</td>\r\n              <td>\r\n                <div class=\"person-info\">\r\n                  <div class=\"person-avatar\">\r\n                    {{ (locatario.nome || '?').charAt(0).toUpperCase() }}\r\n                  </div>\r\n                  <div class=\"person-name\">\r\n                    <strong>{{ locatario.nome }}</strong>\r\n                    <small>ID: {{ locatario.id }}</small>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td>{{ locatario.cpf || 'N\u00E3o informado' }}</td>\r\n              <td>{{ locatario.telefone || 'N\u00E3o informado' }}</td>\r\n              <td>{{ locatario.endereco || 'N\u00E3o informado' }}</td>\r\n\r\n              <td>\r\n                <button\r\n                  class=\"btn-details\"\r\n                  type=\"button\"\r\n                  (click)=\"abrirDetalhes(locatario.id, $event)\"\r\n                >\r\n                  Ver detalhes\r\n                  <span>\u2192</span>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr *ngIf=\"locatariosFiltrados.length === 0\">\r\n              <td colspan=\"6\" class=\"empty-state\">\r\n                <div class=\"empty-icon\">\u2659</div>\r\n                <strong>Nenhum locat\u00E1rio encontrado</strong>\r\n                <p>Verifique a busca ou cadastre um novo locat\u00E1rio.</p>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"list-footer\">\r\n        Exibindo {{ locatariosFiltrados.length }} de\r\n        {{ locatarios.length }} locat\u00E1rios\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </main>\r\n</div>\r\n\r\n<div class=\"modal-overlay\" *ngIf=\"cadastroAberto\">\r\n  <section class=\"modal-cadastro\" role=\"dialog\" aria-modal=\"true\">\r\n    <header class=\"modal-header\">\r\n      <h2>Novo locat\u00E1rio</h2>\r\n      <button type=\"button\" [disabled]=\"salvando\" (click)=\"fecharCadastro()\">\u00D7</button>\r\n    </header>\r\n\r\n    <form (ngSubmit)=\"salvarLocatario()\">\r\n      <label>Nome *\r\n        <input name=\"nome\" [(ngModel)]=\"formulario.nome\" required>\r\n      </label>\r\n\r\n      <label>E-mail\r\n        <input name=\"email\" type=\"email\" [(ngModel)]=\"formulario.email\">\r\n      </label>\r\n\r\n      <label>CPF\r\n        <input\r\n          name=\"cpf\"\r\n          inputmode=\"numeric\"\r\n          [ngModel]=\"formulario.cpf\"\r\n          (ngModelChange)=\"atualizarCpf($event)\"\r\n          maxlength=\"14\"\r\n          placeholder=\"000.000.000-00\">\r\n      </label>\r\n\r\n      <label>Telefone\r\n        <input\r\n          name=\"telefone\"\r\n          type=\"tel\"\r\n          inputmode=\"numeric\"\r\n          [ngModel]=\"formulario.telefone\"\r\n          (ngModelChange)=\"atualizarTelefone($event)\">\r\n      </label>\r\n\r\n      <label>Endere\u00E7o\r\n        <input name=\"endereco\" [(ngModel)]=\"formulario.endereco\">\r\n      </label>\r\n\r\n      <label>Data de nascimento\r\n        <input name=\"dataNascimento\" type=\"date\" [(ngModel)]=\"formulario.dataNascimento\">\r\n      </label>\r\n\r\n      <p class=\"mensagem-erro\" *ngIf=\"mensagem\">{{ mensagem }}</p>\r\n\r\n      <footer class=\"modal-footer\">\r\n        <button type=\"button\" [disabled]=\"salvando\" (click)=\"fecharCadastro()\">\r\n          Cancelar\r\n        </button>\r\n        <button class=\"btn-primary\" type=\"submit\" [disabled]=\"salvando\">\r\n          {{ salvando ? 'Salvando...' : 'Cadastrar locat\u00E1rio' }}\r\n        </button>\r\n      </footer>\r\n    </form>\r\n  </section>\r\n</div>\r\n", styles: ["\r\n:host {\r\n  display: block;\r\n  min-height: 100vh;\r\n  background: #f6f8fb;\r\n  color: #202938;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.page-container {\r\n  min-height: 100vh;\r\n}\r\n\r\n/* Barra superior */\r\n\r\n.topbar {\r\n  height: 72px;\r\n  padding: 0 36px;\r\n  background: #ffffff;\r\n  border-bottom: 1px solid #e7ebf0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  font-size: 14px;\r\n  color: #778195;\r\n}\r\n\r\n.breadcrumb strong {\r\n  color: #202938;\r\n  font-weight: 600;\r\n}\r\n\r\n.breadcrumb-separator {\r\n  color: #c4cad4;\r\n}\r\n\r\n.topbar-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n\r\n.system-status {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #657184;\r\n  font-size: 13px;\r\n}\r\n\r\n.status-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #22c55e;\r\n  border-radius: 50%;\r\n}\r\n\r\n.avatar {\r\n  width: 38px;\r\n  height: 38px;\r\n  background: #e8edff;\r\n  color: #3858b8;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 700;\r\n}\r\n\r\n/* Conte\u00FAdo */\r\n\r\n.content {\r\n  max-width: 1500px;\r\n  margin: 0 auto;\r\n  padding: 36px;\r\n}\r\n\r\n.page-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.page-heading h1 {\r\n  font-size: 28px;\r\n  margin: 0 0 9px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.page-heading p,\r\n.list-header p {\r\n  color: #7b8495;\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n\r\n.btn-primary {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 9px;\r\n  padding: 12px 18px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #3158c9;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.btn-primary:hover {\r\n  background: #2446a9;\r\n}\r\n\r\n.btn-primary span {\r\n  font-size: 21px;\r\n  line-height: 14px;\r\n}\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  z-index: 10;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-cadastro {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-header,\r\n.modal-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-header h2 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-header button {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-cadastro label {\r\n  display: block;\r\n  margin-bottom: 13px;\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.modal-cadastro input {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n}\r\n\r\n.modal-footer {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-footer button {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-footer .btn-primary {\r\n  border-color: #3158c9;\r\n  background: #3158c9;\r\n  color: #fff;\r\n}\r\n\r\n.modal-footer .btn-primary:hover {\r\n  background: #2446a9;\r\n}\r\n\r\n.modal-footer .btn-primary:disabled {\r\n  border-color: #9eafe3;\r\n  background: #0040ff;\r\n  color: #fff;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.mensagem-erro {\r\n  color: #b33b3b;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Indicadores */\r\n\r\n.stats {\r\n  display: grid;\r\n  grid-template-columns: minmax(220px, 300px);\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.stat-card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 22px;\r\n  background: white;\r\n  border: 1px solid #e8edf3;\r\n  border-radius: 12px;\r\n}\r\n\r\n.stat-icon {\r\n  width: 48px;\r\n  height: 48px;\r\n  background: #edf2ff;\r\n  color: #3158c9;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n}\r\n\r\n.stat-card span {\r\n  font-size: 13px;\r\n  color: #7b8495;\r\n}\r\n\r\n.stat-card h2 {\r\n  margin: 7px 0 0;\r\n  font-size: 25px;\r\n}\r\n\r\n/* Tabela */\r\n\r\n.list-card {\r\n  background: white;\r\n  border: 1px solid #e8edf3;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.list-header {\r\n  padding: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-bottom: 1px solid #edf0f4;\r\n}\r\n\r\n.list-header h2 {\r\n  font-size: 17px;\r\n  margin: 0 0 8px;\r\n}\r\n\r\n.search-box {\r\n  width: min(100%, 360px);\r\n  height: 42px;\r\n  padding: 0 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background: #f9fafc;\r\n  border: 1px solid #e2e7ee;\r\n  border-radius: 8px;\r\n}\r\n\r\n.search-box span {\r\n  font-size: 23px;\r\n  color: #7b8495;\r\n}\r\n\r\n.search-box input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  font-size: 13px;\r\n  color: #202938;\r\n}\r\n\r\n.table-wrapper {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\nthead {\r\n  background: #fafbfd;\r\n}\r\n\r\nth {\r\n  padding: 15px 24px;\r\n  color: #8992a2;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n}\r\n\r\ntd {\r\n  padding: 17px 24px;\r\n  border-top: 1px solid #edf0f4;\r\n  color: #626d7f;\r\n  font-size: 13px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clickable-row {\r\n  cursor: pointer;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.clickable-row:hover {\r\n  background: #f6f8ff;\r\n}\r\n\r\n.person-info {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.person-avatar {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  background: #edf2ff;\r\n  color: #3158c9;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n}\r\n\r\n.person-name {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.person-name strong {\r\n  color: #293448;\r\n  font-size: 13px;\r\n}\r\n\r\n.person-name small {\r\n  color: #939bad;\r\n  font-size: 11px;\r\n}\r\n\r\n.actions-column {\r\n  text-align: right;\r\n}\r\n\r\n.btn-details {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: 1px solid #dce4fa;\r\n  background: #ffffff;\r\n  color: #3158c9;\r\n  border-radius: 7px;\r\n  padding: 9px 12px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-details:hover {\r\n  background: #edf2ff;\r\n}\r\n\r\n.btn-details span {\r\n  font-size: 16px;\r\n}\r\n\r\n.empty-state {\r\n  padding: 55px 20px;\r\n  text-align: center;\r\n  white-space: normal;\r\n}\r\n\r\n.empty-icon {\r\n  font-size: 32px;\r\n  color: #9aa8c7;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.empty-state strong {\r\n  display: block;\r\n  color: #293448;\r\n  font-size: 15px;\r\n}\r\n\r\n.empty-state p {\r\n  color: #8992a2;\r\n  font-size: 13px;\r\n}\r\n\r\n.list-footer {\r\n  border-top: 1px solid #edf0f4;\r\n  padding: 17px 24px;\r\n  color: #8992a2;\r\n  font-size: 12px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .topbar {\r\n    padding: 0 18px;\r\n  }\r\n\r\n  .topbar-right {\r\n    gap: 12px;\r\n  }\r\n\r\n  .content {\r\n    padding: 24px 16px;\r\n  }\r\n\r\n  .page-heading {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .list-header {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n  }\r\n\r\n  .search-box {\r\n    width: 100%;\r\n  }\r\n\r\n  th,\r\n  td {\r\n    padding: 14px 16px;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlugatariosComponent, { className: "AlugatariosComponent", filePath: "src/app/component/alugatarios-component/alugatarios-component.ts", lineNumber: 19 }); })();
