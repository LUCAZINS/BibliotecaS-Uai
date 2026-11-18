import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlugatarioService } from '../../Service/alugatarioService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AlugatarioDetalhesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 5)(2, "p");
    i0.ɵɵtext(3, "Carregando detalhes...");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function AlugatarioDetalhesComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 6)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function AlugatarioDetalhesComponent_ng_container_5_small_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pessoa_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" (", pessoa_r3.livroMaisEmprestado.quantidade, " empr\u00E9stimos) ");
} }
function AlugatarioDetalhesComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "header", 7)(2, "div", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "span", 9);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h1");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function AlugatarioDetalhesComponent_ng_container_5_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.abrirEdicao()); });
    i0.ɵɵtext(12, " Editar informa\u00E7\u00F5es ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "section", 11)(14, "article")(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Total de empr\u00E9stimos");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "article")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23, "Empr\u00E9stimos ativos");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "article")(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "Empr\u00E9stimos devolvidos");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "section", 12)(30, "article", 13)(31, "h2");
    i0.ɵɵtext(32, "Dados cadastrais");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "dl")(34, "div")(35, "dt");
    i0.ɵɵtext(36, "CPF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "dd");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div")(40, "dt");
    i0.ɵɵtext(41, "Telefone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "dd");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div")(45, "dt");
    i0.ɵɵtext(46, "Endere\u00E7o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "dd");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "dt");
    i0.ɵɵtext(51, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "dd");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div")(55, "dt");
    i0.ɵɵtext(56, "E-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "dd");
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div")(60, "dt");
    i0.ɵɵtext(61, "Data de nascimento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "dd");
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div")(65, "dt");
    i0.ɵɵtext(66, "Livros alugados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "dd");
    i0.ɵɵtext(68);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(69, "article", 13)(70, "h2");
    i0.ɵɵtext(71, "Hist\u00F3rico");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "dl")(73, "div")(74, "dt");
    i0.ɵɵtext(75, "Primeiro empr\u00E9stimo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "dd");
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div")(79, "dt");
    i0.ɵɵtext(80, "\u00DAltimo empr\u00E9stimo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "dd");
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(83, "div")(84, "dt");
    i0.ɵɵtext(85, "Livro mais emprestado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "dd");
    i0.ɵɵtext(87);
    i0.ɵɵtemplate(88, AlugatarioDetalhesComponent_ng_container_5_small_88_Template, 2, 1, "small", 2);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pessoa_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((pessoa_r3.nome || "?").charAt(0).toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("LOCAT\u00C1RIO #", pessoa_r3.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pessoa_r3.nome || "Nome n\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pessoa_r3.email || "E-mail n\u00E3o informado");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(pessoa_r3.totalEmprestimos);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.emprestimosAtivos);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.emprestimosDevolvidos);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(pessoa_r3.cpf || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.telefone || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.endereco || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.email || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.formatarData(pessoa_r3.dataNascimento));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pessoa_r3.livrosAlugados || "Nenhum registro");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.formatarData(pessoa_r3.primeiroEmprestimo));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.formatarData(pessoa_r3.ultimoEmprestimo));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", pessoa_r3.livroMaisEmprestado?.titulo || "Nenhum registro", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pessoa_r3.livroMaisEmprestado);
} }
function AlugatarioDetalhesComponent_div_6_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.mensagem);
} }
function AlugatarioDetalhesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "section", 15)(2, "header")(3, "h2");
    i0.ɵɵtext(4, "Editar locat\u00E1rio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 16);
    i0.ɵɵlistener("click", function AlugatarioDetalhesComponent_div_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "form", 17);
    i0.ɵɵlistener("ngSubmit", function AlugatarioDetalhesComponent_div_6_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salvarEdicao()); });
    i0.ɵɵelementStart(8, "label");
    i0.ɵɵtext(9, "Nome ");
    i0.ɵɵelementStart(10, "input", 18);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.nome, $event) || (ctx_r0.formulario.nome = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, "E-mail ");
    i0.ɵɵelementStart(13, "input", 19);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.email, $event) || (ctx_r0.formulario.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "label");
    i0.ɵɵtext(15, "CPF ");
    i0.ɵɵelementStart(16, "input", 20);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.atualizarCpf($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label");
    i0.ɵɵtext(18, "Telefone ");
    i0.ɵɵelementStart(19, "input", 21);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.atualizarTelefone($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label");
    i0.ɵɵtext(21, "Endere\u00E7o ");
    i0.ɵɵelementStart(22, "input", 22);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.endereco, $event) || (ctx_r0.formulario.endereco = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "label");
    i0.ɵɵtext(24, "Data de nascimento ");
    i0.ɵɵelementStart(25, "input", 23);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function AlugatarioDetalhesComponent_div_6_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.dataNascimento, $event) || (ctx_r0.formulario.dataNascimento = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, AlugatarioDetalhesComponent_div_6_p_26_Template, 2, 1, "p", 24);
    i0.ɵɵelementStart(27, "footer")(28, "button", 16);
    i0.ɵɵlistener("click", function AlugatarioDetalhesComponent_div_6_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(29, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 25);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.nome);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.email);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.formulario.cpf);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.formulario.telefone);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.endereco);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.dataNascimento);
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
export class AlugatarioDetalhesComponent {
    route = inject(ActivatedRoute);
    service = inject(AlugatarioService);
    cdr = inject(ChangeDetectorRef);
    locatario;
    carregando = true;
    erro = '';
    editando = false;
    salvando = false;
    mensagem = '';
    locatarioId = 0;
    formulario = {
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        dataNascimento: '',
        livrosAlugados: ''
    };
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.locatarioId = id;
        if (!Number.isInteger(id) || id <= 0) {
            this.erro = 'Locatário inválido.';
            this.carregando = false;
            this.cdr.detectChanges();
            return;
        }
        this.service.buscarEstatisticas(id).subscribe({
            next: dados => {
                this.locatario = dados;
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao buscar estatísticas do locatário:', erro);
                this.erro =
                    erro?.error?.mensagem ||
                        erro?.error?.message ||
                        'Não foi possível carregar os detalhes do locatário.';
                this.carregando = false;
                this.cdr.detectChanges();
            }
        });
    }
    abrirEdicao() {
        if (!this.locatario) {
            return;
        }
        this.formulario = {
            nome: this.locatario.nome || '',
            email: this.locatario.email || '',
            telefone: this.locatario.telefone || '',
            endereco: this.locatario.endereco || '',
            cpf: this.locatario.cpf || '',
            dataNascimento: this.locatario.dataNascimento?.slice(0, 10) || '',
            livrosAlugados: this.locatario.livrosAlugados || ''
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
        const cpf = this.formulario.cpf.trim()
            ? this.formatarCpf(this.formulario.cpf)
            : this.locatario?.cpf || '';
        this.service.atualizar(this.locatarioId, {
            nome: this.formulario.nome.trim(),
            email: this.formulario.email.trim(),
            telefone: this.formulario.telefone,
            endereco: this.formulario.endereco,
            cpf,
            dataNascimento: this.formulario.dataNascimento,
        }).subscribe({
            next: () => {
                this.editando = false;
                this.salvando = false;
                this.carregarDetalhes();
            },
            error: erro => {
                console.error('Erro ao atualizar locatário:', erro);
                this.mensagem =
                    erro?.error?.mensagem ||
                        erro?.error?.message ||
                        'Não foi possível atualizar o locatário.';
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
    formatarData(data) {
        if (!data) {
            return 'Não informado';
        }
        const valor = new Date(data);
        return Number.isNaN(valor.getTime())
            ? 'Não informado'
            : valor.toLocaleDateString('pt-BR');
    }
    carregarDetalhes() {
        this.carregando = true;
        this.service.buscarEstatisticas(this.locatarioId).subscribe({
            next: dados => {
                this.locatario = dados;
                this.carregando = false;
                this.salvando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao recarregar detalhes do locatário:', erro);
                this.erro = 'Não foi possível atualizar os detalhes do locatário.';
                this.carregando = false;
                this.salvando = false;
                this.cdr.detectChanges();
            }
        });
    }
    static ɵfac = function AlugatarioDetalhesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlugatarioDetalhesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlugatarioDetalhesComponent, selectors: [["app-alugatario-detalhes"]], decls: 7, vars: 4, consts: [[1, "detalhes-page"], ["routerLink", "/Barra/alugatarios", 1, "voltar"], [4, "ngIf"], ["class", "estado erro", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "estado"], [1, "estado", "erro"], [1, "cabecalho"], [1, "avatar"], [1, "eyebrow"], ["type", "button", 1, "btn-editar", 3, "click"], [1, "cards"], [1, "grid"], [1, "painel"], [1, "modal-overlay"], ["role", "dialog", "aria-modal", "true", 1, "modal-edicao"], ["type", "button", 3, "click", "disabled"], [3, "ngSubmit"], ["name", "nome", "required", "", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", 3, "ngModelChange", "ngModel"], ["name", "cpf", "inputmode", "numeric", "placeholder", "000.000.000-00", "maxlength", "14", 3, "ngModelChange", "ngModel"], ["name", "telefone", "type", "tel", "inputmode", "numeric", 3, "ngModelChange", "ngModel"], ["name", "endereco", 3, "ngModelChange", "ngModel"], ["name", "dataNascimento", "type", "date", 3, "ngModelChange", "ngModel"], ["class", "mensagem", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "mensagem"]], template: function AlugatarioDetalhesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Voltar para locat\u00E1rios");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, AlugatarioDetalhesComponent_ng_container_3_Template, 4, 0, "ng-container", 2)(4, AlugatarioDetalhesComponent_section_4_Template, 3, 1, "section", 3)(5, AlugatarioDetalhesComponent_ng_container_5_Template, 89, 18, "ng-container", 2)(6, AlugatarioDetalhesComponent_div_6_Template, 32, 11, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && ctx.locatario);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.editando);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, i2.NgForm, RouterLink], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100%;\r\n  background: #f6f7fb;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.detalhes-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n}\r\n\r\n.voltar[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 25px;\r\n  color: #5364a8;\r\n  font-size: 13px;\r\n  text-decoration: none;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%], \r\n.painel[_ngcontent-%COMP%], \r\n.cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], \r\n.estado[_ngcontent-%COMP%] {\r\n  border: 1px solid #e5e8f0;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px rgb(35 42 65 / 4%);\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 18px;\r\n  padding: 25px;\r\n}\r\n\r\n.btn-editar[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  padding: 10px 14px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  background: #5364a8;\r\n  cursor: pointer;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 58px;\r\n  height: 58px;\r\n  place-items: center;\r\n  border-radius: 16px;\r\n  background: #eeeaff;\r\n  color: #6956df;\r\n  font-size: 24px;\r\n  font-weight: 800;\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  color: #78809a;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .08em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-bottom: 6px;\r\n  font-size: 27px;\r\n}\r\n\r\n.cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  color: #7e879a;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 16px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \r\n.cards[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #314ea3;\r\n  font-size: 28px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  color: #7e879a;\r\n  font-size: 12px;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.painel[_ngcontent-%COMP%] {\r\n  padding: 23px;\r\n}\r\n\r\n.painel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-bottom: 18px;\r\n  font-size: 17px;\r\n}\r\n\r\ndl[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  padding: 12px 0;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\ndt[_ngcontent-%COMP%] {\r\n  color: #858da0;\r\n  font-size: 12px;\r\n}\r\n\r\ndd[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #354056;\r\n  font-size: 13px;\r\n  text-align: right;\r\n}\r\n\r\ndd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #858da0;\r\n}\r\n\r\n.estado[_ngcontent-%COMP%] {\r\n  padding: 35px;\r\n  color: #707b91;\r\n  text-align: center;\r\n}\r\n\r\n.erro[_ngcontent-%COMP%] {\r\n  color: #b33b3b;\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 10;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%] {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 13px;\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-edicao[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.mensagem[_ngcontent-%COMP%] {\r\n  color: #b33b3b;\r\n  font-size: 12px;\r\n}\r\n\r\n.id-locatario[_ngcontent-%COMP%] {\r\n  color: #667085;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-page[_ngcontent-%COMP%] {\r\n    padding: 18px;\r\n  }\r\n\r\n  .cards[_ngcontent-%COMP%], \r\n   .grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .cabecalho[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .btn-editar[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlugatarioDetalhesComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, FormsModule, RouterLink], selector: 'app-alugatario-detalhes', template: "<main class=\"detalhes-page\">\r\n  <a class=\"voltar\" routerLink=\"/Barra/alugatarios\">\u2190 Voltar para locat\u00E1rios</a>\r\n\r\n  <ng-container *ngIf=\"carregando\">\r\n    <section class=\"estado\">\r\n      <p>Carregando detalhes...</p>\r\n    </section>\r\n  </ng-container>\r\n\r\n  <section class=\"estado erro\" *ngIf=\"!carregando && erro\">\r\n    <strong>{{ erro }}</strong>\r\n  </section>\r\n\r\n  <ng-container *ngIf=\"!carregando && !erro && locatario as pessoa\">\r\n    <header class=\"cabecalho\">\r\n      <div class=\"avatar\">{{ (pessoa.nome || '?').charAt(0).toUpperCase() }}</div>\r\n      <div>\r\n        <span class=\"eyebrow\">LOCAT\u00C1RIO #{{ pessoa.id }}</span>\r\n        <h1>{{ pessoa.nome || 'Nome n\u00E3o informado' }}</h1>\r\n        <p>{{ pessoa.email || 'E-mail n\u00E3o informado' }}</p>\r\n      </div>\r\n      <button class=\"btn-editar\" type=\"button\" (click)=\"abrirEdicao()\">\r\n        Editar informa\u00E7\u00F5es\r\n      </button>\r\n    </header>\r\n\r\n    <section class=\"cards\">\r\n      <article><strong>{{ pessoa.totalEmprestimos }}</strong><span>Total de empr\u00E9stimos</span></article>\r\n      <article><strong>{{ pessoa.emprestimosAtivos }}</strong><span>Empr\u00E9stimos ativos</span></article>\r\n      <article><strong>{{ pessoa.emprestimosDevolvidos }}</strong><span>Empr\u00E9stimos devolvidos</span></article>\r\n    </section>\r\n\r\n    <section class=\"grid\">\r\n      <article class=\"painel\">\r\n        <h2>Dados cadastrais</h2>\r\n        <dl>\r\n          <div><dt>CPF</dt><dd>{{ pessoa.cpf || 'N\u00E3o informado' }}</dd></div>\r\n          <div><dt>Telefone</dt><dd>{{ pessoa.telefone || 'N\u00E3o informado' }}</dd></div>\r\n          <div><dt>Endere\u00E7o</dt><dd>{{ pessoa.endereco || 'N\u00E3o informado' }}</dd></div>\r\n          <div><dt>ID</dt><dd>{{ pessoa.id }}</dd></div>\r\n          <div><dt>E-mail</dt><dd>{{ pessoa.email || 'N\u00E3o informado' }}</dd></div>\r\n          <div><dt>Data de nascimento</dt><dd>{{ formatarData(pessoa.dataNascimento) }}</dd></div>\r\n          <div><dt>Livros alugados</dt><dd>{{ pessoa.livrosAlugados || 'Nenhum registro' }}</dd></div>\r\n        </dl>\r\n      </article>\r\n\r\n      <article class=\"painel\">\r\n        <h2>Hist\u00F3rico</h2>\r\n        <dl>\r\n          <div><dt>Primeiro empr\u00E9stimo</dt><dd>{{ formatarData(pessoa.primeiroEmprestimo) }}</dd></div>\r\n          <div><dt>\u00DAltimo empr\u00E9stimo</dt><dd>{{ formatarData(pessoa.ultimoEmprestimo) }}</dd></div>\r\n          <div>\r\n            <dt>Livro mais emprestado</dt>\r\n            <dd>\r\n              {{ pessoa.livroMaisEmprestado?.titulo || 'Nenhum registro' }}\r\n              <small *ngIf=\"pessoa.livroMaisEmprestado\">\r\n                ({{ pessoa.livroMaisEmprestado.quantidade }} empr\u00E9stimos)\r\n              </small>\r\n            </dd>\r\n          </div>\r\n        </dl>\r\n      </article>\r\n    </section>\r\n  </ng-container>\r\n\r\n  <div class=\"modal-overlay\" *ngIf=\"editando\">\r\n    <section class=\"modal-edicao\" role=\"dialog\" aria-modal=\"true\">\r\n      <header>\r\n        <h2>Editar locat\u00E1rio</h2>\r\n        <button type=\"button\" [disabled]=\"salvando\" (click)=\"cancelarEdicao()\">\u00D7</button>\r\n      </header>\r\n\r\n      <form (ngSubmit)=\"salvarEdicao()\">\r\n        <label>Nome\r\n          <input name=\"nome\" [(ngModel)]=\"formulario.nome\" required>\r\n        </label>\r\n        <label>E-mail\r\n          <input name=\"email\" type=\"email\" [(ngModel)]=\"formulario.email\">\r\n        </label>\r\n        <label>CPF\r\n          <input\r\n            name=\"cpf\"\r\n            inputmode=\"numeric\"\r\n            [ngModel]=\"formulario.cpf\"\r\n            (ngModelChange)=\"atualizarCpf($event)\"\r\n            placeholder=\"000.000.000-00\"\r\n            maxlength=\"14\">\r\n        </label>\r\n        <label>Telefone\r\n          <input\r\n            name=\"telefone\"\r\n            type=\"tel\"\r\n            inputmode=\"numeric\"\r\n            [ngModel]=\"formulario.telefone\"\r\n            (ngModelChange)=\"atualizarTelefone($event)\">\r\n        </label>\r\n        <label>Endere\u00E7o\r\n          <input name=\"endereco\" [(ngModel)]=\"formulario.endereco\">\r\n        </label>\r\n        <label>Data de nascimento\r\n          <input name=\"dataNascimento\" type=\"date\" [(ngModel)]=\"formulario.dataNascimento\">\r\n        </label>\r\n        <p class=\"mensagem\" *ngIf=\"mensagem\">{{ mensagem }}</p>\r\n        <footer>\r\n          <button type=\"button\" [disabled]=\"salvando\" (click)=\"cancelarEdicao()\">Cancelar</button>\r\n          <button class=\"btn-primary\" type=\"submit\" [disabled]=\"salvando\">\r\n            {{ salvando ? 'Salvando...' : 'Salvar altera\u00E7\u00F5es' }}\r\n          </button>\r\n        </footer>\r\n      </form>\r\n    </section>\r\n  </div>\r\n</main>\r\n", styles: [":host {\r\n  display: block;\r\n  min-height: 100%;\r\n  background: #f6f7fb;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.detalhes-page {\r\n  min-height: 100vh;\r\n  padding: 32px;\r\n}\r\n\r\n.voltar {\r\n  display: inline-block;\r\n  margin-bottom: 25px;\r\n  color: #5364a8;\r\n  font-size: 13px;\r\n  text-decoration: none;\r\n}\r\n\r\n.cabecalho,\r\n.painel,\r\n.cards article,\r\n.estado {\r\n  border: 1px solid #e5e8f0;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px rgb(35 42 65 / 4%);\r\n}\r\n\r\n.cabecalho {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 18px;\r\n  padding: 25px;\r\n}\r\n\r\n.btn-editar {\r\n  margin-left: auto;\r\n  padding: 10px 14px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  background: #5364a8;\r\n  cursor: pointer;\r\n}\r\n\r\n.avatar {\r\n  display: grid;\r\n  width: 58px;\r\n  height: 58px;\r\n  place-items: center;\r\n  border-radius: 16px;\r\n  background: #eeeaff;\r\n  color: #6956df;\r\n  font-size: 24px;\r\n  font-weight: 800;\r\n}\r\n\r\n.eyebrow {\r\n  color: #78809a;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: .08em;\r\n}\r\n\r\nh1, h2, p {\r\n  margin-top: 0;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 6px;\r\n  font-size: 27px;\r\n}\r\n\r\n.cabecalho p {\r\n  margin-bottom: 0;\r\n  color: #7e879a;\r\n}\r\n\r\n.cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 16px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.cards article {\r\n  padding: 20px;\r\n}\r\n\r\n.cards strong,\r\n.cards span {\r\n  display: block;\r\n}\r\n\r\n.cards strong {\r\n  color: #314ea3;\r\n  font-size: 28px;\r\n}\r\n\r\n.cards span {\r\n  margin-top: 5px;\r\n  color: #7e879a;\r\n  font-size: 12px;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.painel {\r\n  padding: 23px;\r\n}\r\n\r\n.painel h2 {\r\n  margin-bottom: 18px;\r\n  font-size: 17px;\r\n}\r\n\r\ndl {\r\n  margin: 0;\r\n}\r\n\r\ndl div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  padding: 12px 0;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\ndl div:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\ndt {\r\n  color: #858da0;\r\n  font-size: 12px;\r\n}\r\n\r\ndd {\r\n  margin: 0;\r\n  color: #354056;\r\n  font-size: 13px;\r\n  text-align: right;\r\n}\r\n\r\ndd small {\r\n  color: #858da0;\r\n}\r\n\r\n.estado {\r\n  padding: 35px;\r\n  color: #707b91;\r\n  text-align: center;\r\n}\r\n\r\n.erro {\r\n  color: #b33b3b;\r\n}\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  z-index: 10;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 20px;\r\n  background: rgb(20 28 49 / 55%);\r\n}\r\n\r\n.modal-edicao {\r\n  width: min(100%, 560px);\r\n  max-height: calc(100vh - 40px);\r\n  overflow: auto;\r\n  padding: 24px;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n}\r\n\r\n.modal-edicao header,\r\n.modal-edicao footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.modal-edicao header {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.modal-edicao header h2 {\r\n  margin: 0;\r\n}\r\n\r\n.modal-edicao header button {\r\n  border: 0;\r\n  background: transparent;\r\n  color: #697386;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-edicao label {\r\n  display: block;\r\n  margin-bottom: 13px;\r\n  color: #4c566b;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.modal-edicao input {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 6px;\r\n  padding: 11px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  font: inherit;\r\n}\r\n\r\n.modal-edicao footer {\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.modal-edicao footer button {\r\n  padding: 10px 14px;\r\n  border: 1px solid #dce3ec;\r\n  border-radius: 7px;\r\n  background: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.mensagem {\r\n  color: #b33b3b;\r\n  font-size: 12px;\r\n}\r\n\r\n.id-locatario {\r\n  color: #667085;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .detalhes-page {\r\n    padding: 18px;\r\n  }\r\n\r\n  .cards,\r\n  .grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .cabecalho {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .btn-editar {\r\n    margin-left: 0;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlugatarioDetalhesComponent, { className: "AlugatarioDetalhesComponent", filePath: "src/app/component/alugatario-detalhes/alugatario-detalhes.ts", lineNumber: 17 }); })();
