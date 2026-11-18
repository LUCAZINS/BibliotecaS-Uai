import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Service/login-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Perfil_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Carregando seus dados...");
    i0.ɵɵelementEnd()();
} }
function Perfil_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Atualize a p\u00E1gina e tente novamente.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function Perfil_Conditional_11_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 21);
    i0.ɵɵlistener("ngSubmit", function Perfil_Conditional_11_Conditional_5_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.salvarNome()); });
    i0.ɵɵelementStart(1, "label", 22);
    i0.ɵɵtext(2, "Nome");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 23);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Perfil_Conditional_11_Conditional_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.nomeEdicao, $event) || (ctx_r0.nomeEdicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 24)(5, "button", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 26);
    i0.ɵɵlistener("click", function Perfil_Conditional_11_Conditional_5_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(8, " Cancelar ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.nomeEdicao);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.salvando ? "Salvando..." : "Salvar nome", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
} }
function Perfil_Conditional_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 27);
    i0.ɵɵlistener("click", function Perfil_Conditional_11_Conditional_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.iniciarEdicao()); });
    i0.ɵɵtext(4, " Editar nome ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.usuario.nome);
} }
function Perfil_Conditional_11_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const funcao_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(funcao_r4);
} }
function Perfil_Conditional_11_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function Perfil_Conditional_11_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.mensagem);
} }
function Perfil_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5)(1, "div", 8)(2, "div", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵconditionalCreate(5, Perfil_Conditional_11_Conditional_5_Template, 9, 5, "form", 11)(6, Perfil_Conditional_11_Conditional_6_Template, 5, 1, "div", 12);
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵrepeaterCreate(8, Perfil_Conditional_11_For_9_Template, 2, 1, "span", 14, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 15)(11, "div", 16)(12, "label")(13, "span", 17);
    i0.ɵɵtext(14, "@");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, "E-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 18);
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18, "O e-mail n\u00E3o pode ser alterado.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 16)(20, "label")(21, "span", 17);
    i0.ɵɵtext(22, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23, "Situa\u00E7\u00E3o do e-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 16)(27, "label")(28, "span", 17);
    i0.ɵɵtext(29, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, "Identifica\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(33, Perfil_Conditional_11_Conditional_33_Template, 2, 1, "p", 19);
    i0.ɵɵconditionalCreate(34, Perfil_Conditional_11_Conditional_34_Template, 2, 1, "p", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.inicial);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.editando ? 5 : 6);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.usuario.funcoes);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("value", ctx_r0.usuario.email);
    i0.ɵɵadvance(8);
    i0.ɵɵclassProp("email-confirmado", ctx_r0.usuario.emailConfirmado)("email-pendente", !ctx_r0.usuario.emailConfirmado);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.usuario.emailConfirmado ? "Confirmado" : "Pendente", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.usuario.id);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.erro ? 33 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.mensagem ? 34 : -1);
} }
function Perfil_Conditional_12_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erroCriacao);
} }
function Perfil_Conditional_12_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.mensagemCriacao);
} }
function Perfil_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 6)(1, "div", 28)(2, "span", 29);
    i0.ɵɵtext(3, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h2");
    i0.ɵɵtext(6, "Criar perfil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Cadastre um novo usu\u00E1rio para acessar o sistema.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "form", 30);
    i0.ɵɵlistener("ngSubmit", function Perfil_Conditional_12_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.criarPerfil()); });
    i0.ɵɵelementStart(10, "label");
    i0.ɵɵtext(11, " Nome ");
    i0.ɵɵelementStart(12, "input", 31);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Perfil_Conditional_12_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoPerfil.nome, $event) || (ctx_r0.novoPerfil.nome = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label");
    i0.ɵɵtext(14, " E-mail ");
    i0.ɵɵelementStart(15, "input", 32);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Perfil_Conditional_12_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoPerfil.email, $event) || (ctx_r0.novoPerfil.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label");
    i0.ɵɵtext(17, " Senha ");
    i0.ɵɵelementStart(18, "input", 33);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function Perfil_Conditional_12_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoPerfil.senha, $event) || (ctx_r0.novoPerfil.senha = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(19, Perfil_Conditional_12_Conditional_19_Template, 2, 1, "p", 19);
    i0.ɵɵconditionalCreate(20, Perfil_Conditional_12_Conditional_20_Template, 2, 1, "p", 20);
    i0.ɵɵelementStart(21, "button", 25);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoPerfil.nome);
    i0.ɵɵproperty("disabled", ctx_r0.criandoPerfil);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoPerfil.email);
    i0.ɵɵproperty("disabled", ctx_r0.criandoPerfil);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoPerfil.senha);
    i0.ɵɵproperty("disabled", ctx_r0.criandoPerfil);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.erroCriacao ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.mensagemCriacao ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.criandoPerfil);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.criandoPerfil ? "Criando..." : "Criar perfil", " ");
} }
export class Perfil {
    loginService = inject(LoginService);
    cdr = inject(ChangeDetectorRef);
    usuario = {
        id: '',
        nome: '',
        email: '',
        emailConfirmado: false,
        funcoes: []
    };
    carregando = true;
    editando = false;
    salvando = false;
    nomeEdicao = '';
    erro = '';
    mensagem = '';
    criandoPerfil = false;
    erroCriacao = '';
    mensagemCriacao = '';
    novoPerfil = {
        nome: '',
        email: '',
        senha: ''
    };
    ngOnInit() {
        this.carregarPerfil();
    }
    carregarPerfil() {
        this.carregando = true;
        this.erro = '';
        this.cdr.detectChanges();
        this.loginService.getMeuUsuario().subscribe({
            next: (dados) => {
                this.usuario = this.normalizarUsuario(dados);
                this.nomeEdicao = this.usuario.nome;
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar perfil:', erro);
                this.carregando = false;
                this.erro = 'Não foi possível carregar os dados do perfil.';
                this.cdr.detectChanges();
            }
        });
    }
    iniciarEdicao() {
        this.nomeEdicao = this.usuario.nome;
        this.erro = '';
        this.mensagem = '';
        this.editando = true;
        this.cdr.detectChanges();
    }
    cancelarEdicao() {
        this.nomeEdicao = this.usuario.nome;
        this.editando = false;
        this.erro = '';
        this.mensagem = '';
        this.cdr.detectChanges();
    }
    salvarNome() {
        const nome = this.nomeEdicao.trim();
        if (!nome) {
            this.erro = 'Informe um nome válido.';
            this.cdr.detectChanges();
            return;
        }
        this.salvando = true;
        this.erro = '';
        this.mensagem = '';
        this.cdr.detectChanges();
        this.loginService.atualizarMeuUsuario({ nome }).subscribe({
            next: (dados) => {
                this.usuario = {
                    ...this.usuario,
                    nome: dados.nome || nome
                };
                this.nomeEdicao = this.usuario.nome;
                this.editando = false;
                this.salvando = false;
                this.mensagem = 'Nome atualizado com sucesso.';
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao atualizar perfil:', erro);
                this.salvando = false;
                this.erro = 'Não foi possível atualizar o nome.';
                this.cdr.detectChanges();
            }
        });
    }
    get inicial() {
        return this.usuario.nome.trim().charAt(0).toUpperCase() || 'U';
    }
    get isAdmin() {
        return this.usuario.funcoes.some(funcao => funcao.trim().toLowerCase() === 'admin');
    }
    criarPerfil() {
        const nome = this.novoPerfil.nome.trim();
        const email = this.novoPerfil.email.trim();
        const senha = this.novoPerfil.senha;
        this.erroCriacao = '';
        this.mensagemCriacao = '';
        if (!nome || !email || !senha) {
            this.erroCriacao = 'Preencha nome, e-mail e senha.';
            this.cdr.detectChanges();
            return;
        }
        this.criandoPerfil = true;
        this.cdr.detectChanges();
        this.loginService.criarUsuario({ nome, email, senha }).subscribe({
            next: () => {
                this.novoPerfil = { nome: '', email: '', senha: '' };
                this.criandoPerfil = false;
                this.mensagemCriacao = 'Perfil criado com sucesso.';
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao criar perfil:', erro);
                this.criandoPerfil = false;
                this.erroCriacao =
                    erro?.error?.mensagem ||
                        'Não foi possível criar o perfil.';
                this.cdr.detectChanges();
            }
        });
    }
    normalizarUsuario(dados) {
        return {
            id: dados.id || 'Não informado',
            nome: dados.nome?.trim() || 'Usuário da biblioteca',
            email: dados.email || 'Não informado',
            emailConfirmado: dados.emailConfirmado,
            funcoes: dados.funcoes?.filter(funcao => funcao.trim()) || ['Usuário']
        };
    }
    static ɵfac = function Perfil_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Perfil)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Perfil, selectors: [["app-perfil"]], decls: 13, vars: 2, consts: [[1, "perfil-container"], [1, "perfil-header"], [1, "eyebrow"], [1, "perfil-card", "estado-card"], ["role", "alert", 1, "perfil-card", "estado-card", "erro-card"], [1, "perfil-card"], [1, "perfil-card", "criacao-card"], ["aria-hidden", "true", 1, "spinner"], [1, "perfil-foto"], ["aria-hidden", "true", 1, "foto-placeholder"], [1, "perfil-dados"], [1, "edicao-form"], [1, "nome-linha"], [1, "perfil-funcoes"], [1, "badge-usuario"], [1, "dados-grid"], [1, "campo"], [1, "campo-icone"], ["type", "email", "aria-label", "E-mail", "disabled", "", 1, "campo-valor", 3, "value"], ["role", "alert", 1, "mensagem", "erro-mensagem"], ["role", "status", 1, "mensagem", "sucesso-mensagem"], [1, "edicao-form", 3, "ngSubmit"], ["for", "nome"], ["id", "nome", "name", "nome", "type", "text", "maxlength", "120", "autocomplete", "name", 3, "ngModelChange", "ngModel", "disabled"], [1, "acoes-edicao"], ["type", "submit", 1, "botao-primario", 3, "disabled"], ["type", "button", 1, "botao-secundario", 3, "click", "disabled"], ["type", "button", 1, "botao-editar", 3, "click"], [1, "criacao-cabecalho"], [1, "painel-icone"], [1, "criacao-form", 3, "ngSubmit"], ["name", "novoNome", "type", "text", "required", "", "autocomplete", "name", 3, "ngModelChange", "ngModel", "disabled"], ["name", "novoEmail", "type", "email", "required", "", "autocomplete", "email", 3, "ngModelChange", "ngModel", "disabled"], ["name", "novaSenha", "type", "password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel", "disabled"]], template: function Perfil_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "CONTA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Meu perfil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Confira suas informa\u00E7\u00F5es pessoais e o status da sua conta.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(9, Perfil_Conditional_9_Template, 4, 0, "section", 3)(10, Perfil_Conditional_10_Template, 5, 1, "section", 4)(11, Perfil_Conditional_11_Template, 35, 11, "section", 5);
            i0.ɵɵconditionalCreate(12, Perfil_Conditional_12_Template, 23, 10, "section", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.carregando ? 9 : ctx.erro ? 10 : 11);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.carregando && !ctx.erro && ctx.isAdmin ? 12 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.NgModel, i1.NgForm], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100vh;\r\n  margin-left: 260px;\r\n  box-sizing: border-box;\r\n  color: #20243a;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.perfil-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 1050px;\r\n  min-height: 100vh;\r\n  margin: 0 auto;\r\n  padding: 46px 42px;\r\n}\r\n\r\n.perfil-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 10px;\r\n  color: #7967e6;\r\n  font-size: 10px;\r\n  font-weight: 800;\r\n  letter-spacing: 1.8px;\r\n}\r\n\r\n.perfil-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0 0 9px;\r\n  color: #24263b;\r\n  font-size: clamp(26px, 3vw, 36px);\r\n  letter-spacing: -1.2px;\r\n}\r\n\r\n.perfil-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #777c91;\r\n  font-size: 13px;\r\n}\r\n\r\n.perfil-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 34px;\r\n  padding: 34px;\r\n  border: 1px solid #e9eaf1;\r\n  border-radius: 20px;\r\n  background: #fff;\r\n  box-shadow: 0 8px 26px #26274708;\r\n  animation: _ngcontent-%COMP%_fade-up 450ms ease both;\r\n}\r\n\r\n.perfil-foto[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.foto-placeholder[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  place-items: center;\r\n  width: 104px;\r\n  height: 104px;\r\n  border: 6px solid #f0edff;\r\n  border-radius: 50%;\r\n  color: #6956df;\r\n  background: linear-gradient(135deg, #f1efff, #e1dcff);\r\n  font-size: 38px;\r\n  font-weight: 750;\r\n}\r\n\r\n.perfil-dados[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.perfil-dados[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 2px 0 12px;\r\n  color: #282b40;\r\n  font-size: 24px;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.nome-linha[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n}\r\n\r\n.nome-linha[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.botao-editar[_ngcontent-%COMP%], \r\n.botao-primario[_ngcontent-%COMP%], \r\n.botao-secundario[_ngcontent-%COMP%] {\r\n  border-radius: 9px;\r\n  font: inherit;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: opacity 180ms ease, transform 180ms ease;\r\n}\r\n\r\n.botao-editar[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  padding: 9px 12px;\r\n  border: 1px solid #ded8ff;\r\n  color: #6956df;\r\n  background: #f8f7ff;\r\n}\r\n\r\n.botao-editar[_ngcontent-%COMP%]:hover, \r\n.botao-primario[_ngcontent-%COMP%]:hover, \r\n.botao-secundario[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.edicao-form[_ngcontent-%COMP%] {\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.edicao-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 7px;\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.edicao-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.campo-valor[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 41px;\r\n  padding: 0 12px;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 9px;\r\n  outline: none;\r\n  color: #393c51;\r\n  background: #fff;\r\n  font: inherit;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.edicao-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: #7967e6;\r\n  box-shadow: 0 0 0 3px #7967e61a;\r\n}\r\n\r\n.acoes-edicao[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 9px;\r\n  margin-top: 11px;\r\n}\r\n\r\n.botao-primario[_ngcontent-%COMP%], \r\n.botao-secundario[_ngcontent-%COMP%] {\r\n  padding: 10px 13px;\r\n}\r\n\r\n.botao-primario[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  color: #fff;\r\n  background: #7967e6;\r\n}\r\n\r\n.botao-secundario[_ngcontent-%COMP%] {\r\n  border: 1px solid #e1e2eb;\r\n  color: #777c91;\r\n  background: #fff;\r\n}\r\n\r\n.botao-editar[_ngcontent-%COMP%]:disabled, \r\n.botao-primario[_ngcontent-%COMP%]:disabled, \r\n.botao-secundario[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.perfil-funcoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.badge-usuario[_ngcontent-%COMP%] {\r\n  padding: 6px 11px;\r\n  border-radius: 999px;\r\n  color: #6956df;\r\n  background: #f0edff;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.dados-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 18px;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  padding: 16px;\r\n  border: 1px solid #eff0f6;\r\n  border-radius: 13px;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  margin-bottom: 9px;\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.campo-icone[_ngcontent-%COMP%] {\r\n  display: inline-grid;\r\n  place-items: center;\r\n  width: 19px;\r\n  height: 19px;\r\n  border-radius: 6px;\r\n  color: #7967e6;\r\n  background: #f0edff;\r\n  font-size: 11px;\r\n  font-weight: 800;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\r\n  display: block;\r\n  overflow: hidden;\r\n  color: #393c51;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.campo-valor[_ngcontent-%COMP%] {\r\n  min-height: auto;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 0;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 7px;\r\n  color: #a0a4b3;\r\n  font-size: 10px;\r\n}\r\n\r\n.mensagem[_ngcontent-%COMP%] {\r\n  margin: 18px 0 0;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.erro-mensagem[_ngcontent-%COMP%] {\r\n  color: #c24d5b;\r\n}\r\n\r\n.sucesso-mensagem[_ngcontent-%COMP%] {\r\n  color: #269b78;\r\n}\r\n\r\n.criacao-card[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 20px;\r\n}\r\n\r\n.criacao-cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.criacao-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 5px;\r\n  color: #282b40;\r\n  font-size: 17px;\r\n}\r\n\r\n.criacao-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #8b90a2;\r\n  font-size: 11px;\r\n}\r\n\r\n.painel-icone[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  place-items: center;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 11px;\r\n  color: #6956df;\r\n  background: #f0edff;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  align-items: end;\r\n  gap: 15px;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  min-height: 41px;\r\n  margin-top: 7px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e1e2eb;\r\n  border-radius: 9px;\r\n  outline: none;\r\n  color: #393c51;\r\n  background: #fff;\r\n  font: inherit;\r\n  font-size: 13px;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: #7967e6;\r\n  box-shadow: 0 0 0 3px #7967e61a;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%]   .botao-primario[_ngcontent-%COMP%] {\r\n  min-height: 41px;\r\n}\r\n\r\n.criacao-form[_ngcontent-%COMP%]   .mensagem[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n  margin: 0;\r\n}\r\n\r\n.email-confirmado[_ngcontent-%COMP%], \r\n.email-pendente[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.email-confirmado[_ngcontent-%COMP%] {\r\n  color: #269b78 !important;\r\n}\r\n\r\n.email-pendente[_ngcontent-%COMP%] {\r\n  color: #d18436 !important;\r\n}\r\n\r\n.estado-card[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 180px;\r\n  flex-direction: column;\r\n  gap: 13px;\r\n  color: #777c91;\r\n}\r\n\r\n.estado-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 13px;\r\n}\r\n\r\n.erro-card[_ngcontent-%COMP%] {\r\n  color: #c24d5b;\r\n}\r\n\r\n.erro-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  width: 28px;\r\n  height: 28px;\r\n  border: 3px solid #e6e1ff;\r\n  border-top-color: #7967e6;\r\n  border-radius: 50%;\r\n  animation: _ngcontent-%COMP%_spin 800ms linear infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fade-up {\r\n  from { opacity: 0; transform: translateY(12px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_spin {\r\n  to { transform: rotate(360deg); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  [_nghost-%COMP%] { margin-left: 220px; }\r\n  .perfil-container[_ngcontent-%COMP%] { padding: 36px 25px; }\r\n  .dados-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  [_nghost-%COMP%] { margin-left: 75px; }\r\n  .perfil-container[_ngcontent-%COMP%] { padding: 28px 16px; }\r\n  .perfil-card[_ngcontent-%COMP%] { align-items: center; flex-direction: column; padding: 24px 18px; }\r\n  .perfil-dados[_ngcontent-%COMP%] { width: 100%; text-align: center; }\r\n  .nome-linha[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; gap: 4px; }\r\n  .nome-linha[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { white-space: normal; }\r\n  .botao-editar[_ngcontent-%COMP%] { align-self: center; }\r\n  .perfil-funcoes[_ngcontent-%COMP%] { justify-content: center; }\r\n  .campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { justify-content: center; }\r\n  .campo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child { white-space: normal; overflow-wrap: anywhere; }\r\n  .criacao-form[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .criacao-form[_ngcontent-%COMP%]   .mensagem[_ngcontent-%COMP%] { grid-column: auto; }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .perfil-card[_ngcontent-%COMP%], \r\n   .spinner[_ngcontent-%COMP%] { animation: none; }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Perfil, [{
        type: Component,
        args: [{ imports: [CommonModule, FormsModule], standalone: true, selector: 'app-perfil', template: "\r\n<div class=\"perfil-container\">\r\n\r\n  <div class=\"perfil-header\">\r\n    <div>\r\n      <span class=\"eyebrow\">CONTA</span>\r\n      <h1>Meu perfil</h1>\r\n      <p>Confira suas informa\u00E7\u00F5es pessoais e o status da sua conta.</p>\r\n    </div>\r\n  </div>\r\n\r\n  @if (carregando) {\r\n    <section class=\"perfil-card estado-card\">\r\n      <div class=\"spinner\" aria-hidden=\"true\"></div>\r\n      <p>Carregando seus dados...</p>\r\n    </section>\r\n  } @else if (erro) {\r\n    <section class=\"perfil-card estado-card erro-card\" role=\"alert\">\r\n      <strong>{{ erro }}</strong>\r\n      <p>Atualize a p\u00E1gina e tente novamente.</p>\r\n    </section>\r\n  } @else {\r\n    <section class=\"perfil-card\">\r\n\r\n      <div class=\"perfil-foto\">\r\n        <div class=\"foto-placeholder\" aria-hidden=\"true\">{{ inicial }}</div>\r\n      </div>\r\n\r\n      <div class=\"perfil-dados\">\r\n\r\n        @if (editando) {\r\n          <form class=\"edicao-form\" (ngSubmit)=\"salvarNome()\">\r\n            <label for=\"nome\">Nome</label>\r\n            <input\r\n              id=\"nome\"\r\n              name=\"nome\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"nomeEdicao\"\r\n              [disabled]=\"salvando\"\r\n              maxlength=\"120\"\r\n              autocomplete=\"name\"\r\n            />\r\n            <div class=\"acoes-edicao\">\r\n              <button type=\"submit\" class=\"botao-primario\" [disabled]=\"salvando\">\r\n                {{ salvando ? 'Salvando...' : 'Salvar nome' }}\r\n              </button>\r\n              <button\r\n                type=\"button\"\r\n                class=\"botao-secundario\"\r\n                [disabled]=\"salvando\"\r\n                (click)=\"cancelarEdicao()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </form>\r\n        } @else {\r\n          <div class=\"nome-linha\">\r\n            <h2>{{ usuario.nome }}</h2>\r\n            <button type=\"button\" class=\"botao-editar\" (click)=\"iniciarEdicao()\">\r\n              Editar nome\r\n            </button>\r\n          </div>\r\n        }\r\n\r\n        <div class=\"perfil-funcoes\">\r\n          @for (funcao of usuario.funcoes; track funcao) {\r\n            <span class=\"badge-usuario\">{{ funcao }}</span>\r\n          }\r\n        </div>\r\n\r\n        <div class=\"dados-grid\">\r\n\r\n          <div class=\"campo\">\r\n            <label><span class=\"campo-icone\">@</span>E-mail</label>\r\n            <input\r\n              class=\"campo-valor\"\r\n              type=\"email\"\r\n              [value]=\"usuario.email\"\r\n              aria-label=\"E-mail\"\r\n              disabled\r\n            />\r\n            <small>O e-mail n\u00E3o pode ser alterado.</small>\r\n          </div>\r\n\r\n          <div class=\"campo\">\r\n            <label><span class=\"campo-icone\">\u2713</span>Situa\u00E7\u00E3o do e-mail</label>\r\n            <span\r\n              [class.email-confirmado]=\"usuario.emailConfirmado\"\r\n              [class.email-pendente]=\"!usuario.emailConfirmado\">\r\n              {{ usuario.emailConfirmado ? 'Confirmado' : 'Pendente' }}\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"campo\">\r\n            <label><span class=\"campo-icone\">#</span>Identifica\u00E7\u00E3o</label>\r\n            <span>{{ usuario.id }}</span>\r\n          </div>\r\n        </div>\r\n\r\n        @if (erro) {\r\n          <p class=\"mensagem erro-mensagem\" role=\"alert\">{{ erro }}</p>\r\n        }\r\n        @if (mensagem) {\r\n          <p class=\"mensagem sucesso-mensagem\" role=\"status\">{{ mensagem }}</p>\r\n        }\r\n\r\n      </div>\r\n\r\n    </section>\r\n  }\r\n\r\n  @if (!carregando && !erro && isAdmin) {\r\n    <section class=\"perfil-card criacao-card\">\r\n      <div class=\"criacao-cabecalho\">\r\n        <span class=\"painel-icone\">+</span>\r\n        <div>\r\n          <h2>Criar perfil</h2>\r\n          <p>Cadastre um novo usu\u00E1rio para acessar o sistema.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <form class=\"criacao-form\" (ngSubmit)=\"criarPerfil()\">\r\n        <label>\r\n          Nome\r\n          <input\r\n            name=\"novoNome\"\r\n            type=\"text\"\r\n            [(ngModel)]=\"novoPerfil.nome\"\r\n            [disabled]=\"criandoPerfil\"\r\n            required\r\n            autocomplete=\"name\"\r\n          />\r\n        </label>\r\n\r\n        <label>\r\n          E-mail\r\n          <input\r\n            name=\"novoEmail\"\r\n            type=\"email\"\r\n            [(ngModel)]=\"novoPerfil.email\"\r\n            [disabled]=\"criandoPerfil\"\r\n            required\r\n            autocomplete=\"email\"\r\n          />\r\n        </label>\r\n\r\n        <label>\r\n          Senha\r\n          <input\r\n            name=\"novaSenha\"\r\n            type=\"password\"\r\n            [(ngModel)]=\"novoPerfil.senha\"\r\n            [disabled]=\"criandoPerfil\"\r\n            required\r\n            autocomplete=\"new-password\"\r\n          />\r\n        </label>\r\n\r\n        @if (erroCriacao) {\r\n          <p class=\"mensagem erro-mensagem\" role=\"alert\">{{ erroCriacao }}</p>\r\n        }\r\n        @if (mensagemCriacao) {\r\n          <p class=\"mensagem sucesso-mensagem\" role=\"status\">{{ mensagemCriacao }}</p>\r\n        }\r\n\r\n        <button type=\"submit\" class=\"botao-primario\" [disabled]=\"criandoPerfil\">\r\n          {{ criandoPerfil ? 'Criando...' : 'Criar perfil' }}\r\n        </button>\r\n      </form>\r\n    </section>\r\n  }\r\n\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  min-height: 100vh;\r\n  margin-left: 260px;\r\n  box-sizing: border-box;\r\n  color: #20243a;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.perfil-container {\r\n  width: 100%;\r\n  max-width: 1050px;\r\n  min-height: 100vh;\r\n  margin: 0 auto;\r\n  padding: 46px 42px;\r\n}\r\n\r\n.perfil-header {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: space-between;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.eyebrow {\r\n  display: inline-block;\r\n  margin-bottom: 10px;\r\n  color: #7967e6;\r\n  font-size: 10px;\r\n  font-weight: 800;\r\n  letter-spacing: 1.8px;\r\n}\r\n\r\n.perfil-header h1 {\r\n  margin: 0 0 9px;\r\n  color: #24263b;\r\n  font-size: clamp(26px, 3vw, 36px);\r\n  letter-spacing: -1.2px;\r\n}\r\n\r\n.perfil-header p {\r\n  margin: 0;\r\n  color: #777c91;\r\n  font-size: 13px;\r\n}\r\n\r\n.perfil-card {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 34px;\r\n  padding: 34px;\r\n  border: 1px solid #e9eaf1;\r\n  border-radius: 20px;\r\n  background: #fff;\r\n  box-shadow: 0 8px 26px #26274708;\r\n  animation: fade-up 450ms ease both;\r\n}\r\n\r\n.perfil-foto {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.foto-placeholder {\r\n  display: grid;\r\n  place-items: center;\r\n  width: 104px;\r\n  height: 104px;\r\n  border: 6px solid #f0edff;\r\n  border-radius: 50%;\r\n  color: #6956df;\r\n  background: linear-gradient(135deg, #f1efff, #e1dcff);\r\n  font-size: 38px;\r\n  font-weight: 750;\r\n}\r\n\r\n.perfil-dados {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.perfil-dados h2 {\r\n  margin: 2px 0 12px;\r\n  color: #282b40;\r\n  font-size: 24px;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.nome-linha {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n}\r\n\r\n.nome-linha h2 {\r\n  min-width: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.botao-editar,\r\n.botao-primario,\r\n.botao-secundario {\r\n  border-radius: 9px;\r\n  font: inherit;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: opacity 180ms ease, transform 180ms ease;\r\n}\r\n\r\n.botao-editar {\r\n  flex-shrink: 0;\r\n  padding: 9px 12px;\r\n  border: 1px solid #ded8ff;\r\n  color: #6956df;\r\n  background: #f8f7ff;\r\n}\r\n\r\n.botao-editar:hover,\r\n.botao-primario:hover,\r\n.botao-secundario:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.edicao-form {\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.edicao-form label {\r\n  display: block;\r\n  margin-bottom: 7px;\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.edicao-form input,\r\n.campo-valor {\r\n  width: 100%;\r\n  min-height: 41px;\r\n  padding: 0 12px;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 9px;\r\n  outline: none;\r\n  color: #393c51;\r\n  background: #fff;\r\n  font: inherit;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.edicao-form input:focus {\r\n  border-color: #7967e6;\r\n  box-shadow: 0 0 0 3px #7967e61a;\r\n}\r\n\r\n.acoes-edicao {\r\n  display: flex;\r\n  gap: 9px;\r\n  margin-top: 11px;\r\n}\r\n\r\n.botao-primario,\r\n.botao-secundario {\r\n  padding: 10px 13px;\r\n}\r\n\r\n.botao-primario {\r\n  border: 0;\r\n  color: #fff;\r\n  background: #7967e6;\r\n}\r\n\r\n.botao-secundario {\r\n  border: 1px solid #e1e2eb;\r\n  color: #777c91;\r\n  background: #fff;\r\n}\r\n\r\n.botao-editar:disabled,\r\n.botao-primario:disabled,\r\n.botao-secundario:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.perfil-funcoes {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.badge-usuario {\r\n  padding: 6px 11px;\r\n  border-radius: 999px;\r\n  color: #6956df;\r\n  background: #f0edff;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n\r\n.dados-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 18px;\r\n}\r\n\r\n.campo {\r\n  min-width: 0;\r\n  padding: 16px;\r\n  border: 1px solid #eff0f6;\r\n  border-radius: 13px;\r\n}\r\n\r\n.campo label {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  margin-bottom: 9px;\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.campo-icone {\r\n  display: inline-grid;\r\n  place-items: center;\r\n  width: 19px;\r\n  height: 19px;\r\n  border-radius: 6px;\r\n  color: #7967e6;\r\n  background: #f0edff;\r\n  font-size: 11px;\r\n  font-weight: 800;\r\n}\r\n\r\n.campo > span:last-child {\r\n  display: block;\r\n  overflow: hidden;\r\n  color: #393c51;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.campo-valor {\r\n  min-height: auto;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 0;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.campo small {\r\n  display: block;\r\n  margin-top: 7px;\r\n  color: #a0a4b3;\r\n  font-size: 10px;\r\n}\r\n\r\n.mensagem {\r\n  margin: 18px 0 0;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.erro-mensagem {\r\n  color: #c24d5b;\r\n}\r\n\r\n.sucesso-mensagem {\r\n  color: #269b78;\r\n}\r\n\r\n.criacao-card {\r\n  display: block;\r\n  margin-top: 20px;\r\n}\r\n\r\n.criacao-cabecalho {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 13px;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.criacao-cabecalho h2 {\r\n  margin: 0 0 5px;\r\n  color: #282b40;\r\n  font-size: 17px;\r\n}\r\n\r\n.criacao-cabecalho p {\r\n  margin: 0;\r\n  color: #8b90a2;\r\n  font-size: 11px;\r\n}\r\n\r\n.painel-icone {\r\n  display: grid;\r\n  place-items: center;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 11px;\r\n  color: #6956df;\r\n  background: #f0edff;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\n.criacao-form {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  align-items: end;\r\n  gap: 15px;\r\n}\r\n\r\n.criacao-form label {\r\n  color: #8b90a2;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.6px;\r\n}\r\n\r\n.criacao-form input {\r\n  display: block;\r\n  width: 100%;\r\n  min-height: 41px;\r\n  margin-top: 7px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e1e2eb;\r\n  border-radius: 9px;\r\n  outline: none;\r\n  color: #393c51;\r\n  background: #fff;\r\n  font: inherit;\r\n  font-size: 13px;\r\n}\r\n\r\n.criacao-form input:focus {\r\n  border-color: #7967e6;\r\n  box-shadow: 0 0 0 3px #7967e61a;\r\n}\r\n\r\n.criacao-form .botao-primario {\r\n  min-height: 41px;\r\n}\r\n\r\n.criacao-form .mensagem {\r\n  grid-column: 1 / -1;\r\n  margin: 0;\r\n}\r\n\r\n.email-confirmado,\r\n.email-pendente {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.email-confirmado {\r\n  color: #269b78 !important;\r\n}\r\n\r\n.email-pendente {\r\n  color: #d18436 !important;\r\n}\r\n\r\n.estado-card {\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 180px;\r\n  flex-direction: column;\r\n  gap: 13px;\r\n  color: #777c91;\r\n}\r\n\r\n.estado-card p {\r\n  margin: 0;\r\n  font-size: 13px;\r\n}\r\n\r\n.erro-card {\r\n  color: #c24d5b;\r\n}\r\n\r\n.erro-card strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.spinner {\r\n  width: 28px;\r\n  height: 28px;\r\n  border: 3px solid #e6e1ff;\r\n  border-top-color: #7967e6;\r\n  border-radius: 50%;\r\n  animation: spin 800ms linear infinite;\r\n}\r\n\r\n@keyframes fade-up {\r\n  from { opacity: 0; transform: translateY(12px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes spin {\r\n  to { transform: rotate(360deg); }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  :host { margin-left: 220px; }\r\n  .perfil-container { padding: 36px 25px; }\r\n  .dados-grid { grid-template-columns: 1fr; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  :host { margin-left: 75px; }\r\n  .perfil-container { padding: 28px 16px; }\r\n  .perfil-card { align-items: center; flex-direction: column; padding: 24px 18px; }\r\n  .perfil-dados { width: 100%; text-align: center; }\r\n  .nome-linha { align-items: stretch; flex-direction: column; gap: 4px; }\r\n  .nome-linha h2 { white-space: normal; }\r\n  .botao-editar { align-self: center; }\r\n  .perfil-funcoes { justify-content: center; }\r\n  .campo label { justify-content: center; }\r\n  .campo > span:last-child { white-space: normal; overflow-wrap: anywhere; }\r\n  .criacao-form { grid-template-columns: 1fr; }\r\n  .criacao-form .mensagem { grid-column: auto; }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .perfil-card,\r\n  .spinner { animation: none; }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Perfil, { className: "Perfil", filePath: "src/app/component/perfil/perfil.ts", lineNumber: 21 }); })();
