import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../../Service/livros-service';
import { finalize } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LivrosComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.erro, " ");
} }
function LivrosComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const categoria_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", categoria_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", categoria_r2, " ");
} }
function LivrosComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1, " Carregando livros... ");
    i0.ɵɵelementEnd();
} }
function LivrosComponent_div_75_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 37);
    i0.ɵɵlistener("click", function LivrosComponent_div_75_tr_19_Template_div_click_4_listener() { const livro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.abrirDetalhes(livro_r4)); })("keydown.enter", function LivrosComponent_div_75_tr_19_Template_div_keydown_enter_4_listener() { const livro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.abrirDetalhes(livro_r4)); })("keydown.space", function LivrosComponent_div_75_tr_19_Template_div_keydown_space_4_listener($event) { const livro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.abrirDetalhes(livro_r4); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementStart(5, "div", 38);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 39)(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "div", 40);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td")(22, "span", 41);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const livro_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", livro_r4.id);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Abrir detalhes do livro " + livro_r4.titulo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", livro_r4.cor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", livro_r4.simbolo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(livro_r4.titulo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ISBN: ", livro_r4.isbn || "N\u00E3o informado", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(livro_r4.autor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getGeneros(livro_r4), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", livro_r4.anoPublicacao || "N\u00E3o informado", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(livro_r4.totalExemplares);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", livro_r4.exemplaresDisponiveis, " ");
} }
function LivrosComponent_div_75_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 42);
    i0.ɵɵtext(2, " Nenhum livro encontrado. ");
    i0.ɵɵelementEnd()();
} }
function LivrosComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Livro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Autor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "G\u00EAneros");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Ano");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Exemplares");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Dispon\u00EDveis");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, LivrosComponent_div_75_tr_19_Template, 24, 11, "tr", 34)(20, LivrosComponent_div_75_tr_20_Template, 3, 0, "tr", 35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r0.livrosFiltrados);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.livrosFiltrados.length === 0);
} }
function LivrosComponent_div_76_p_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.mensagem, " ");
} }
function LivrosComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵlistener("click", function LivrosComponent_div_76_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.fecharCadastro()); });
    i0.ɵɵelementStart(1, "section", 44);
    i0.ɵɵlistener("click", function LivrosComponent_div_76_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header", 45)(3, "div")(4, "span", 10);
    i0.ɵɵtext(5, "NOVO REGISTRO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 46);
    i0.ɵɵtext(7, "Cadastrar livro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Preencha os dados para adicionar ao acervo.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 47);
    i0.ɵɵlistener("click", function LivrosComponent_div_76_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.fecharCadastro()); });
    i0.ɵɵtext(11, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "form", 48, 0);
    i0.ɵɵlistener("ngSubmit", function LivrosComponent_div_76_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salvarLivro()); });
    i0.ɵɵelementStart(14, "div", 49)(15, "div", 50)(16, "label", 51);
    i0.ɵɵtext(17, "T\u00EDtulo ");
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "input", 52);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.titulo, $event) || (ctx_r0.novoLivro.titulo = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 53)(22, "label", 54);
    i0.ɵɵtext(23, "Autor ");
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "input", 55);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.autor, $event) || (ctx_r0.novoLivro.autor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 53)(28, "label", 56);
    i0.ɵɵtext(29, "ISBN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 57);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.isbn, $event) || (ctx_r0.novoLivro.isbn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 53)(32, "label", 58);
    i0.ɵɵtext(33, "Editora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 59);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.editora, $event) || (ctx_r0.novoLivro.editora = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 53)(36, "label", 60);
    i0.ɵɵtext(37, "Gr\u00E1fica");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "input", 61);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.grafica, $event) || (ctx_r0.novoLivro.grafica = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 53)(40, "label", 62);
    i0.ɵɵtext(41, "Edi\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 63);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.edicao, $event) || (ctx_r0.novoLivro.edicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 53)(44, "label", 64);
    i0.ɵɵtext(45, "Ano de publica\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "input", 65);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.anoPublicacao, $event) || (ctx_r0.novoLivro.anoPublicacao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 53)(48, "label", 66);
    i0.ɵɵtext(49, "Classifica\u00E7\u00E3o et\u00E1ria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "input", 67);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.idade, $event) || (ctx_r0.novoLivro.idade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 50)(52, "label", 68);
    i0.ɵɵtext(53, "Sinopse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "textarea", 69);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_div_76_Template_textarea_ngModelChange_54_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.novoLivro.sinopse, $event) || (ctx_r0.novoLivro.sinopse = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(55, "          ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(56, LivrosComponent_div_76_p_56_Template, 2, 1, "p", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "footer", 71)(58, "button", 72);
    i0.ɵɵlistener("click", function LivrosComponent_div_76_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.fecharCadastro()); });
    i0.ɵɵtext(59, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "button", 73);
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const formLivro_r6 = i0.ɵɵreference(13);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(20);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.titulo);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.autor);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.isbn);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.editora);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.grafica);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.edicao);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.anoPublicacao);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.idade);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.novoLivro.sinopse);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.mensagem);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.salvando || formLivro_r6.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.salvando ? "Salvando..." : "Cadastrar livro", " ");
} }
export class LivrosComponent {
    livrosService = inject(LivrosService);
    cdr = inject(ChangeDetectorRef);
    route = inject(ActivatedRoute);
    router = inject(Router);
    livros = [];
    livrosFiltrados = [];
    categorias = ['Todos os gêneros'];
    busca = '';
    generoSelecionado = 'Todos os gêneros';
    modalCadastroAberto = false;
    carregando = false;
    erro = '';
    cores = [
        'capa-roxa',
        'capa-azul',
        'capa-verde',
        'capa-laranja'
    ];
    simbolos = ['✦', '◈', '❋', '◎'];
    novoLivro = {
        titulo: '',
        autor: '',
        sinopse: '',
        isbn: '',
        editora: '',
        grafica: '',
        edicao: '',
        anoPublicacao: new Date().getFullYear(),
        idade: 0,
        generos: []
    };
    salvando = false;
    mensagem = '';
    ngOnInit() {
        this.carregarLivros();
        this.route.queryParamMap.subscribe(params => {
            const cadastrar = params.get('cadastrarLivros');
            if (cadastrar?.toLowerCase() === 'true') {
                this.abrirCadastro();
            }
        });
    }
    carregarLivros() {
        this.carregando = true;
        this.erro = '';
        this.livrosService.buscarTodos()
            .pipe(finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (dados) => {
                this.livros = dados.map((livro, index) => ({
                    ...livro,
                    cor: this.cores[index % this.cores.length],
                    simbolo: this.simbolos[index % this.simbolos.length]
                }));
                this.atualizarCategorias();
                this.aplicarFiltros();
            },
            error: (erro) => {
                console.error('Erro ao carregar livros:', erro);
                this.erro = 'Não foi possível carregar os livros.';
            }
        });
    }
    atualizarCategorias() {
        const generos = this.livros.flatMap(livro => (livro.generos ?? [])
            .map(genero => genero.nome?.trim())
            .filter((nome) => !!nome));
        this.categorias = [
            'Todos os gêneros',
            ...Array.from(new Set(generos)).sort((a, b) => a.localeCompare(b, 'pt-BR'))
        ];
        if (this.generoSelecionado !== 'Todos os gêneros' &&
            !this.categorias.includes(this.generoSelecionado)) {
            this.generoSelecionado = 'Todos os gêneros';
        }
    }
    aplicarFiltros() {
        const termo = this.busca.trim().toLocaleLowerCase('pt-BR');
        this.livrosFiltrados = this.livros.filter(livro => {
            const generos = (livro.generos ?? [])
                .map(genero => genero.nome)
                .filter((nome) => !!nome);
            const correspondeBusca = !termo ||
                (livro.titulo ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
                (livro.autor ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
                (livro.isbn ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
                (livro.editora ?? '').toLocaleLowerCase('pt-BR').includes(termo);
            const correspondeGenero = this.generoSelecionado === 'Todos os gêneros' ||
                generos.includes(this.generoSelecionado);
            return correspondeBusca && correspondeGenero;
        });
    }
    get totalGeneros() {
        return this.categorias.length - 1;
    }
    getDescricao(livro) {
        return livro.sinopse || 'Nenhuma descrição cadastrada.';
    }
    getGeneros(livro) {
        const generos = (livro.generos ?? [])
            .map(genero => genero.nome?.trim())
            .filter((Nome) => !!Nome);
        return [...new Set(generos)].join(', ') || 'Não informado';
    }
    salvarLivro() {
        if (!this.novoLivro.titulo?.trim() || !this.novoLivro.autor?.trim()) {
            this.mensagem = 'Preencha o título e o autor do livro.';
            return;
        }
        this.salvando = true;
        this.mensagem = '';
        this.erro = '';
        this.livrosService.criar(this.novoLivro).subscribe({
            next: () => {
                this.salvando = false;
                // Fecha o modal após o cadastro bem-sucedido
                this.modalCadastroAberto = false;
                // Limpa o formulário
                this.novoLivro = {
                    titulo: '',
                    autor: '',
                    sinopse: '',
                    isbn: '',
                    editora: '',
                    grafica: '',
                    edicao: '',
                    anoPublicacao: new Date().getFullYear(),
                    idade: 0,
                    generos: []
                };
                this.mensagem = '';
                // Atualiza a lista de livros
                this.carregarLivros();
            },
            error: (erro) => {
                this.salvando = false;
                this.mensagem =
                    erro.error?.message ||
                        'Não foi possível cadastrar o livro.';
                console.error('Erro ao cadastrar livro:', erro);
            }
        });
    }
    abrirCadastro() {
        this.mensagem = '';
        this.modalCadastroAberto = true;
    }
    fecharCadastro() {
        if (this.salvando)
            return;
        this.modalCadastroAberto = false;
        this.mensagem = '';
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { cadastrarLivros: null },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
    }
    abrirDetalhes(livro) {
        this.router.navigate(['/Barra/Livros', livro.id]);
    }
    atalhosTeclado(event) {
        // F2: abrir cadastro de livros
        if (event.key === 'F2') {
            event.preventDefault();
            this.abrirCadastro();
        }
        // Escape: fechar o modal
        if (event.key === 'Escape' && this.modalCadastroAberto) {
            this.fecharCadastro();
        }
        // F3: focar na pesquisa
        if (event.key === 'F3') {
            event.preventDefault();
            const campoBusca = document.querySelector('input[aria-label="Buscar livros"]');
            campoBusca?.focus();
        }
    }
    static ɵfac = function LivrosComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LivrosComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LivrosComponent, selectors: [["app-livros-component"]], hostBindings: function LivrosComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function LivrosComponent_keydown_HostBindingHandler($event) { return ctx.atalhosTeclado($event); }, i0.ɵɵresolveWindow);
        } }, decls: 77, vars: 14, consts: [["formLivro", "ngForm"], [1, "topbar"], [1, "breadcrumb"], [1, "breadcrumb-separator"], [1, "topbar-right"], [1, "system-status"], [1, "status-dot"], [1, "avatar"], [1, "pagina-livros"], [1, "cabecalho-pagina"], [1, "subtitulo"], [1, "acoes-cabecalho"], ["type", "button", 1, "botao-atualizar", 3, "click", "disabled"], ["type", "button", 1, "btn-cadastrar", 3, "click"], [1, "icone-botao"], ["class", "mensagem-erro", 4, "ngIf"], [1, "estatisticas"], [1, "card-estatistica"], [1, "estatistica-icone"], [1, "secao-acervo"], [1, "secao-cabecalho"], [1, "barra-filtros"], ["type", "search", "placeholder", "Buscar por t\u00EDtulo, autor, ISBN ou editora...", "aria-label", "Buscar livros", 3, "ngModelChange", "ngModel"], ["aria-label", "Filtrar por g\u00EAnero", 3, "ngModelChange", "ngModel"], ["value", "Todos os g\u00EAneros"], [3, "value", 4, "ngFor", "ngForOf"], [1, "resumo-livros"], ["class", "estado-carregamento", 4, "ngIf"], ["class", "tabela-container", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "mensagem-erro"], [3, "value"], [1, "estado-carregamento"], [1, "tabela-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "id-livro"], ["role", "link", "tabindex", "0", 1, "livro-info", "livro-clicavel", 3, "click", "keydown.enter", "keydown.space"], [1, "livro-capa", 3, "ngClass"], [1, "livro-detalhes"], [1, "livro-genero"], [1, "disponibilidade"], ["colspan", "7", 1, "sem-resultados"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-modal", 1, "modal-cadastro", 3, "click"], [1, "modal-cabecalho"], ["id", "titulo-modal"], ["type", "button", "aria-label", "Fechar formul\u00E1rio", 1, "btn-fechar", 3, "click"], [3, "ngSubmit"], [1, "formulario-conteudo"], [1, "campo", "campo-completo"], ["for", "titulo"], ["id", "titulo", "name", "titulo", "placeholder", "Digite o t\u00EDtulo do livro", "required", "", 3, "ngModelChange", "ngModel"], [1, "campo"], ["for", "autor"], ["id", "autor", "name", "autor", "placeholder", "Nome do autor", "required", "", 3, "ngModelChange", "ngModel"], ["for", "isbn"], ["id", "isbn", "name", "isbn", "placeholder", "C\u00F3digo ISBN", 3, "ngModelChange", "ngModel"], ["for", "editora"], ["id", "editora", "name", "editora", "placeholder", "Nome da editora", 3, "ngModelChange", "ngModel"], ["for", "grafica"], ["id", "grafica", "name", "grafica", "placeholder", "Nome da gr\u00E1fica", 3, "ngModelChange", "ngModel"], ["for", "edicao"], ["id", "edicao", "name", "edicao", "placeholder", "Ex.: 2\u00AA edi\u00E7\u00E3o", 3, "ngModelChange", "ngModel"], ["for", "ano"], ["id", "ano", "name", "anoPublicacao", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["for", "idade"], ["id", "idade", "name", "idade", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["for", "sinopse"], ["id", "sinopse", "name", "sinopse", "rows", "4", "placeholder", "Descreva brevemente o livro...", 3, "ngModelChange", "ngModel"], ["class", "mensagem-formulario", "role", "status", 4, "ngIf"], [1, "modal-acoes"], ["type", "button", 1, "btn-cancelar", 3, "click"], ["type", "submit", 1, "btn-salvar", 3, "disabled"], ["role", "status", 1, "mensagem-formulario"]], template: function LivrosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 1)(1, "div", 2)(2, "span");
            i0.ɵɵtext(3, "Biblioteca");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "strong");
            i0.ɵɵtext(7, "Livros");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4)(9, "div", 5);
            i0.ɵɵelement(10, "span", 6);
            i0.ɵɵtext(11, " Sistema ativo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵtext(13, "B");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "main", 8)(15, "header", 9)(16, "div")(17, "span", 10);
            i0.ɵɵtext(18, "ACERVO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "h1");
            i0.ɵɵtext(20, "Gerenciamento de livros");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22, "Consulte e gerencie os livros cadastrados no acervo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 11)(24, "button", 12);
            i0.ɵɵlistener("click", function LivrosComponent_Template_button_click_24_listener() { return ctx.carregarLivros(); });
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 13);
            i0.ɵɵlistener("click", function LivrosComponent_Template_button_click_26_listener() { return ctx.abrirCadastro(); });
            i0.ɵɵelementStart(27, "span", 14);
            i0.ɵɵtext(28, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, " Cadastrar livro ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(30, LivrosComponent_div_30_Template, 2, 1, "div", 15);
            i0.ɵɵelementStart(31, "section", 16)(32, "article", 17)(33, "span", 18);
            i0.ɵɵtext(34, "\u25A4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div")(36, "p");
            i0.ɵɵtext(37, "Total de livros");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "h2");
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "article", 17)(41, "span", 18);
            i0.ɵɵtext(42, "\u25C8");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div")(44, "p");
            i0.ɵɵtext(45, "G\u00EAneros cadastrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "h2");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "article", 17)(49, "span", 18);
            i0.ɵɵtext(50, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div")(52, "p");
            i0.ɵɵtext(53, "Livros encontrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "h2");
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(56, "section", 19)(57, "div", 20)(58, "div")(59, "h2");
            i0.ɵɵtext(60, "Acervo cadastrado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "p");
            i0.ɵɵtext(62, "Pesquise e consulte os livros dispon\u00EDveis.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "div", 21)(64, "input", 22);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_Template_input_ngModelChange_64_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.busca, $event) || (ctx.busca = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function LivrosComponent_Template_input_ngModelChange_64_listener() { return ctx.aplicarFiltros(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "select", 23);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtwoWayListener("ngModelChange", function LivrosComponent_Template_select_ngModelChange_65_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.generoSelecionado, $event) || (ctx.generoSelecionado = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function LivrosComponent_Template_select_ngModelChange_65_listener() { return ctx.aplicarFiltros(); });
            i0.ɵɵelementStart(66, "option", 24);
            i0.ɵɵtext(67, " Todos os g\u00EAneros ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(68, LivrosComponent_option_68_Template, 2, 2, "option", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "div", 26)(70, "span");
            i0.ɵɵtext(71);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "span");
            i0.ɵɵtext(73);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(74, LivrosComponent_div_74_Template, 2, 0, "div", 27)(75, LivrosComponent_div_75_Template, 21, 2, "div", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(76, LivrosComponent_div_76_Template, 62, 12, "div", 29);
        } if (rf & 2) {
            i0.ɵɵadvance(24);
            i0.ɵɵproperty("disabled", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.carregando ? "Carregando..." : "\u21BB Atualizar", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.erro);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.livros.length);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.totalGeneros);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.livrosFiltrados.length);
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.busca);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.generoSelecionado);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.categorias.slice(1));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.livrosFiltrados.length, " livro(s) encontrado(s) ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.totalGeneros, " g\u00EAnero(s) ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalCadastroAberto);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.NgModel, i2.NgForm], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  min-height: 100%;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  min-height: 72px;\r\n  padding: 0 34px;\r\n  background: #fff;\r\n  border-bottom: 1px solid #eaebf2;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #9297a8;\r\n  font-size: 12px;\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #373b50;\r\n  font-weight: 650;\r\n}\r\n\r\n.breadcrumb-separator[_ngcontent-%COMP%] {\r\n  color: #c8cad5;\r\n}\r\n\r\n.topbar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n\r\n.system-status[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #777d91;\r\n  font-size: 11px;\r\n}\r\n\r\n.status-dot[_ngcontent-%COMP%] {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px #22c55e66;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 37px;\r\n  height: 37px;\r\n  place-items: center;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 12px;\r\n  background: #f0edff;\r\n  color: #6956df;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n}\r\n\r\n\r\n\r\n.pagina-livros[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 72px);\r\n  padding: 32px;\r\n  background: #f6f7fb;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n  animation: _ngcontent-%COMP%_fade-in 0.4s ease both;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 9px;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #25283b;\r\n  font-size: 28px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 9px 0 0;\r\n  color: #85899b;\r\n  font-size: 13px;\r\n  line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n.botao-atualizar[_ngcontent-%COMP%], \r\n.botao-limpar[_ngcontent-%COMP%], \r\n.estado-tabela[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  min-height: 40px;\r\n  padding: 0 15px;\r\n  border: 1px solid #e3e5ee;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  color: #555b70;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  font-weight: 650;\r\n  cursor: pointer;\r\n  transition: background 0.2s, border-color 0.2s,\r\n    transform 0.2s;\r\n}\r\n\r\n.botao-atualizar[_ngcontent-%COMP%]:hover, \r\n.botao-limpar[_ngcontent-%COMP%]:hover, \r\n.estado-tabela[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  border-color: #c9bdf7;\r\n  background: #f7f4ff;\r\n}\r\n\r\n.botao-atualizar[_ngcontent-%COMP%]:active, \r\n.botao-limpar[_ngcontent-%COMP%]:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.botao-atualizar[_ngcontent-%COMP%]:disabled {\r\n  cursor: wait;\r\n  opacity: 0.65;\r\n}\r\n\r\n\r\n\r\n.estatisticas[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 18px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  min-width: 0;\r\n  padding: 22px;\r\n  border: 1px solid #e9ebf2;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px #20294d05;\r\n  animation: _ngcontent-%COMP%_rise-in 0.45s ease both;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 9px 24px #20294d0c;\r\n}\r\n\r\n.estatistica-icone[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 48px;\r\n  height: 48px;\r\n  flex-shrink: 0;\r\n  place-items: center;\r\n  border-radius: 12px;\r\n  background: #eee9ff;\r\n  color: #7558d8;\r\n  font-size: 23px;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%]:nth-child(2)   .estatistica-icone[_ngcontent-%COMP%] {\r\n  background: #e7f1ff;\r\n  color: #397ad3;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%]:nth-child(3)   .estatistica-icone[_ngcontent-%COMP%] {\r\n  background: #e4f7ed;\r\n  color: #269765;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0 0 7px;\r\n  color: #85899b;\r\n  font-size: 12px;\r\n}\r\n\r\n.card-estatistica[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #292d40;\r\n  font-size: 27px;\r\n  font-weight: 750;\r\n}\r\n\r\n\r\n\r\n.painel-acervo[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border: 1px solid #e8eaf1;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  box-shadow: 0 4px 15px #20294d05;\r\n  animation: _ngcontent-%COMP%_fade-in 0.5s ease both;\r\n}\r\n\r\n.painel-cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  padding: 24px 25px;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\n.painel-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #303448;\r\n  font-size: 17px;\r\n  font-weight: 750;\r\n}\r\n\r\n.painel-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n  color: #85899b;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.filtros-livros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding: 20px 25px;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-width: 180px;\r\n  min-height: 43px;\r\n  padding: 0 13px;\r\n  border: 1px solid #e4e6ef;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  color: #9196a8;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]:focus-within {\r\n  border-color: #9d8ae8;\r\n  box-shadow: 0 0 0 3px #7358d512;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n  line-height: 1;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 0;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  color: #35394c;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n}\r\n\r\n.campo-busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #a0a4b3;\r\n}\r\n\r\n.filtros-livros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 190px;\r\n  min-height: 43px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e4e6ef;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  background: #fff;\r\n  color: #606579;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filtros-livros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  border-color: #9d8ae8;\r\n}\r\n\r\n\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background: #f8f9fc;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 15px 18px;\r\n  border-bottom: 1px solid #eef0f5;\r\n  color: #85899b;\r\n  font-size: 10px;\r\n  font-weight: 750;\r\n  letter-spacing: 0.45px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 16px 18px;\r\n  border-bottom: 1px solid #f0f1f6;\r\n  color: #62677b;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_rise-in 0.35s ease both;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: #faf9ff;\r\n}\r\n\r\n.tabela-responsiva[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n\r\n.livro-identificacao[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 230px;\r\n}\r\n\r\n.livro-capa[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  width: 42px;\r\n  height: 49px;\r\n  flex-shrink: 0;\r\n  place-items: center;\r\n  border: 1px solid #fff;\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 5px #20294d0b;\r\n  font-size: 20px;\r\n  transition: transform 0.2s;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover   .livro-capa[_ngcontent-%COMP%] {\r\n  transform: rotate(-4deg);\r\n}\r\n\r\n.livro-capa.capa-roxa[_ngcontent-%COMP%] {\r\n  background: #eee8ff;\r\n  color: #7558c8;\r\n}\r\n\r\n.livro-capa.capa-azul[_ngcontent-%COMP%] {\r\n  background: #e5f0ff;\r\n  color: #3975bd;\r\n}\r\n\r\n.livro-capa.capa-verde[_ngcontent-%COMP%] {\r\n  background: #e3f6e9;\r\n  color: #31895b;\r\n}\r\n\r\n.livro-capa.capa-laranja[_ngcontent-%COMP%] {\r\n  background: #fff0e2;\r\n  color: #b76a32;\r\n}\r\n\r\n.livro-informacoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  min-width: 0;\r\n}\r\n\r\n.livro-informacoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #33374a;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.livro-informacoes[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #999daf;\r\n  font-size: 10px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.livro-informacoes[_ngcontent-%COMP%]   .descricao-livro[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  line-clamp: 2;\r\n}\r\n\r\n\r\n\r\n.etiqueta-genero[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 230px;\r\n  padding: 6px 9px;\r\n  border-radius: 6px;\r\n  background: #eee9ff;\r\n  color: #7558c8;\r\n  font-size: 10px;\r\n  font-weight: 650;\r\n  line-height: 1.5;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n\r\n\r\n.estado-tabela[_ngcontent-%COMP%] {\r\n  padding: 30px 24px;\r\n  color: #777d91;\r\n  font-size: 13px;\r\n  text-align: center;\r\n}\r\n\r\n.estado-tabela.erro[_ngcontent-%COMP%] {\r\n  color: #b54755;\r\n}\r\n\r\n.estado-tabela[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%] {\r\n  padding: 52px 20px;\r\n  color: #898da0;\r\n  text-align: center;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  display: inline-grid;\r\n  width: 54px;\r\n  height: 54px;\r\n  place-items: center;\r\n  margin-bottom: 12px;\r\n  border-radius: 15px;\r\n  background: #f0edff;\r\n  color: #7558d8;\r\n  font-size: 27px;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0 0 8px;\r\n  color: #3c4054;\r\n  font-size: 16px;\r\n}\r\n\r\n.estado-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n.rodape-tabela[_ngcontent-%COMP%] {\r\n  padding: 17px 25px;\r\n  border-top: 1px solid #eef0f5;\r\n  color: #85899b;\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_rise-in {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1000px) {\r\n  .pagina-livros[_ngcontent-%COMP%] {\r\n    padding: 24px;\r\n  }\r\n\r\n  .estatisticas[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .filtros-livros[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .campo-busca[_ngcontent-%COMP%] {\r\n    flex-basis: 100%;\r\n  }\r\n\r\n  .filtros-livros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    min-width: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .topbar[_ngcontent-%COMP%] {\r\n    min-height: 62px;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .topbar-right[_ngcontent-%COMP%] {\r\n    gap: 12px;\r\n  }\r\n\r\n  .system-status[_ngcontent-%COMP%] {\r\n    font-size: 0;\r\n  }\r\n\r\n  .pagina-livros[_ngcontent-%COMP%] {\r\n    padding: 20px 12px;\r\n  }\r\n\r\n  .cabecalho-pagina[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n\r\n  .cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .estatisticas[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 10px;\r\n  }\r\n\r\n  .card-estatistica[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n\r\n  .estatistica-icone[_ngcontent-%COMP%] {\r\n    width: 43px;\r\n    height: 43px;\r\n  }\r\n\r\n  .card-estatistica[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .painel-cabecalho[_ngcontent-%COMP%] {\r\n    padding: 19px 15px;\r\n  }\r\n\r\n  .painel-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .filtros-livros[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n\r\n  .botao-limpar[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .tabela-responsiva[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 760px;\r\n  }\r\n\r\n  .rodape-tabela[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  *[_ngcontent-%COMP%], \r\n   *[_ngcontent-%COMP%]::before, \r\n   *[_ngcontent-%COMP%]::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  color: #202938;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.pagina-livros[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 28px;\r\n  box-sizing: border-box;\r\n  background: #f7f8fc;\r\n  min-height: 100%;\r\n}\r\n\r\n\r\n\r\n.cabecalho-livros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #6754c8;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 1.5px;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.cabecalho-livros[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \r\n.modal-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #202938;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n}\r\n\r\n.cabecalho-livros[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \r\n.modal-cabecalho[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0;\r\n  color: #788195;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n.btn-cadastrar[_ngcontent-%COMP%], \r\n.btn-salvar[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 9px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #6754c8;\r\n  color: #fff;\r\n  padding: 12px 18px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s, transform 0.2s;\r\n}\r\n\r\n.btn-cadastrar[_ngcontent-%COMP%]:hover, \r\n.btn-salvar[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background: #5140ac;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.icone-botao[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  line-height: 16px;\r\n}\r\n\r\n.btn-atualizar[_ngcontent-%COMP%], \r\n.btn-cancelar[_ngcontent-%COMP%] {\r\n  border: 1px solid #dfe3ec;\r\n  border-radius: 8px;\r\n  padding: 11px 15px;\r\n  background: #fff;\r\n  color: #414b5d;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-atualizar[_ngcontent-%COMP%]:hover, \r\n.btn-cancelar[_ngcontent-%COMP%]:hover {\r\n  background: #f0f1f7;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n\r\n.barra-filtros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.barra-filtros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.barra-filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  box-sizing: border-box;\r\n  border: 1px solid #e0e4ed;\r\n  border-radius: 9px;\r\n  padding: 12px 14px;\r\n  background: #fff;\r\n  color: #30394b;\r\n  font-size: 13px;\r\n  outline: none;\r\n}\r\n\r\n.barra-filtros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.barra-filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  min-width: 180px;\r\n}\r\n\r\n.barra-filtros[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.barra-filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \r\n.campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border-color: #8373dc;\r\n  box-shadow: 0 0 0 3px rgb(103 84 200 / 10%);\r\n}\r\n\r\n\r\n\r\n.resumo-livros[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  margin-bottom: 14px;\r\n  color: #778094;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.tabela-container[_ngcontent-%COMP%] {\r\n  overflow-x: auto;\r\n  background: #fff;\r\n  border: 1px solid #e8eaf1;\r\n  border-radius: 12px;\r\n  box-shadow: 0 3px 12px rgb(35 42 65 / 3%);\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  background: #fafbfe;\r\n  border-bottom: 1px solid #e8eaf1;\r\n  color: #778094;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 15px 16px;\r\n  border-bottom: 1px solid #eef0f5;\r\n  color: #424b5d;\r\n  font-size: 13px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n}\r\n\r\n.tabela-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: #fafaff;\r\n}\r\n\r\n.id-livro[_ngcontent-%COMP%] {\r\n  color: #667085;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  white-space: nowrap;\r\n}\r\n\r\n.livro-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 180px;\r\n}\r\n\r\n.livro-capa[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 38px;\r\n  height: 48px;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n}\r\n\r\n.capa-roxa[_ngcontent-%COMP%] {\r\n  background: #eee9ff;\r\n  color: #6754c8;\r\n}\r\n\r\n.capa-azul[_ngcontent-%COMP%] {\r\n  background: #e2efff;\r\n  color: #3574bf;\r\n}\r\n\r\n.capa-verde[_ngcontent-%COMP%] {\r\n  background: #e1f6eb;\r\n  color: #23895b;\r\n}\r\n\r\n.capa-laranja[_ngcontent-%COMP%] {\r\n  background: #fff0df;\r\n  color: #c8792c;\r\n}\r\n\r\n.livro-detalhes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.livro-detalhes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #283144;\r\n  font-size: 13px;\r\n}\r\n\r\n.livro-detalhes[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  color: #9098a8;\r\n  font-size: 11px;\r\n}\r\n\r\n.livro-genero[_ngcontent-%COMP%] {\r\n  color: #6253b1;\r\n  line-height: 1.5;\r\n}\r\n\r\n.disponibilidade[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  min-width: 25px;\r\n  padding: 5px 8px;\r\n  border-radius: 6px;\r\n  background: #e6f7ee;\r\n  color: #238456;\r\n  text-align: center;\r\n  font-weight: 700;\r\n}\r\n\r\n.sem-resultados[_ngcontent-%COMP%], \r\n.estado-carregamento[_ngcontent-%COMP%] {\r\n  padding: 35px !important;\r\n  text-align: center;\r\n  color: #858da0 !important;\r\n}\r\n\r\n.mensagem-erro[_ngcontent-%COMP%] {\r\n  margin-bottom: 16px;\r\n  padding: 12px 14px;\r\n  border: 1px solid #f2cccc;\r\n  border-radius: 8px;\r\n  background: #fff0f0;\r\n  color: #a52d2d;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 1000;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  background: rgb(20 25 42 / 55%);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-cadastro[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 680px;\r\n  max-height: calc(100vh - 40px);\r\n  overflow-y: auto;\r\n  border-radius: 16px;\r\n  background: #fff;\r\n  box-shadow: 0 20px 70px rgb(0 0 0 / 20%);\r\n  animation: _ngcontent-%COMP%_modal-entrada 0.2s ease-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_modal-entrada {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.modal-cabecalho[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  padding: 25px 28px;\r\n  border-bottom: 1px solid #eceef4;\r\n}\r\n\r\n.modal-cabecalho[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 23px;\r\n}\r\n\r\n.btn-fechar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 34px;\r\n  height: 34px;\r\n  flex-shrink: 0;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  background: #f1f2f7;\r\n  color: #626b7c;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-fechar[_ngcontent-%COMP%]:hover {\r\n  background: #e5e6ef;\r\n}\r\n\r\n\r\n\r\n.formulario-conteudo[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 19px 16px;\r\n  padding: 25px 28px;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.campo-completo[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #414a5c;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #d64b58;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \r\n.campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: 1px solid #dfe3ec;\r\n  border-radius: 8px;\r\n  padding: 12px;\r\n  background: #fff;\r\n  color: #293246;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  outline: none;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \r\n.campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n  color: #a0a7b5;\r\n}\r\n\r\n.campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  resize: vertical;\r\n  min-height: 100px;\r\n}\r\n\r\n.mensagem-formulario[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n  margin: 0;\r\n  color: #6754c8;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n\r\n.modal-acoes[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  padding: 18px 28px 24px;\r\n  border-top: 1px solid #eceef4;\r\n}\r\n\r\n.btn-salvar[_ngcontent-%COMP%] {\r\n  min-width: 145px;\r\n}\r\n\r\n.btn-salvar[_ngcontent-%COMP%]:disabled {\r\n  transform: none;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 700px) {\r\n  .pagina-livros[_ngcontent-%COMP%] {\r\n    padding: 18px 12px;\r\n  }\r\n\r\n  .cabecalho-livros[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .cabecalho-livros[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .btn-cadastrar[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .barra-filtros[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .barra-filtros[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-overlay[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    padding: 10px;\r\n  }\r\n\r\n  .modal-cadastro[_ngcontent-%COMP%] {\r\n    max-height: calc(100vh - 20px);\r\n  }\r\n\r\n  .modal-cabecalho[_ngcontent-%COMP%], \r\n   .formulario-conteudo[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  .formulario-conteudo[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .campo-completo[_ngcontent-%COMP%] {\r\n    grid-column: auto;\r\n  }\r\n\r\n  .modal-acoes[_ngcontent-%COMP%] {\r\n    padding: 16px 20px 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .cabecalho-livros[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .modal-acoes[_ngcontent-%COMP%] {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .modal-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n.livro-clicavel[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.livro-clicavel[_ngcontent-%COMP%]:hover, \r\n.livro-clicavel[_ngcontent-%COMP%]:focus-visible {\r\n  background: #edf2ff;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LivrosComponent, [{
        type: Component,
        args: [{ selector: 'app-livros-component', standalone: true, imports: [CommonModule, FormsModule], template: "\r\n<!-- Barra superior do sistema -->\r\n<header class=\"topbar\">\r\n  <div class=\"breadcrumb\">\r\n    <span>Biblioteca</span>\r\n    <span class=\"breadcrumb-separator\">/</span>\r\n    <strong>Livros</strong>\r\n  </div>\r\n\r\n  <div class=\"topbar-right\">\r\n    <div class=\"system-status\">\r\n      <span class=\"status-dot\"></span>\r\n      Sistema ativo\r\n    </div>\r\n\r\n    <div class=\"avatar\">B</div>\r\n  </div>\r\n</header>\r\n\r\n<!-- P\u00E1gina de gerenciamento -->\r\n<main class=\"pagina-livros\">\r\n\r\n  <!-- Cabe\u00E7alho da p\u00E1gina -->\r\n  <header class=\"cabecalho-pagina\">\r\n    <div>\r\n      <span class=\"subtitulo\">ACERVO</span>\r\n      <h1>Gerenciamento de livros</h1>\r\n      <p>Consulte e gerencie os livros cadastrados no acervo.</p>\r\n    </div>\r\n\r\n    <div class=\"acoes-cabecalho\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"botao-atualizar\"\r\n        (click)=\"carregarLivros()\"\r\n        [disabled]=\"carregando\">\r\n        {{ carregando ? 'Carregando...' : '\u21BB Atualizar' }}\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-cadastrar\"\r\n        (click)=\"abrirCadastro()\">\r\n        <span class=\"icone-botao\">+</span>\r\n        Cadastrar livro\r\n      </button>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Mensagem de erro -->\r\n  <div class=\"mensagem-erro\" *ngIf=\"erro\">\r\n    {{ erro }}\r\n  </div>\r\n\r\n  <!-- Estat\u00EDsticas -->\r\n  <section class=\"estatisticas\">\r\n    <article class=\"card-estatistica\">\r\n      <span class=\"estatistica-icone\">\u25A4</span>\r\n      <div>\r\n        <p>Total de livros</p>\r\n        <h2>{{ livros.length }}</h2>\r\n      </div>\r\n    </article>\r\n\r\n    <article class=\"card-estatistica\">\r\n      <span class=\"estatistica-icone\">\u25C8</span>\r\n      <div>\r\n        <p>G\u00EAneros cadastrados</p>\r\n        <h2>{{ totalGeneros }}</h2>\r\n      </div>\r\n    </article>\r\n\r\n    <article class=\"card-estatistica\">\r\n      <span class=\"estatistica-icone\">\u2315</span>\r\n      <div>\r\n        <p>Livros encontrados</p>\r\n        <h2>{{ livrosFiltrados.length }}</h2>\r\n      </div>\r\n    </article>\r\n\r\n  </section>\r\n\r\n  <!-- Busca e filtros -->\r\n  <section class=\"secao-acervo\">\r\n\r\n    <div class=\"secao-cabecalho\">\r\n      <div>\r\n        <h2>Acervo cadastrado</h2>\r\n        <p>Pesquise e consulte os livros dispon\u00EDveis.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"barra-filtros\">\r\n      <input\r\n        type=\"search\"\r\n        placeholder=\"Buscar por t\u00EDtulo, autor, ISBN ou editora...\"\r\n        [(ngModel)]=\"busca\"\r\n        (ngModelChange)=\"aplicarFiltros()\"\r\n        aria-label=\"Buscar livros\" />\r\n\r\n      <select\r\n        [(ngModel)]=\"generoSelecionado\"\r\n        (ngModelChange)=\"aplicarFiltros()\"\r\n        aria-label=\"Filtrar por g\u00EAnero\">\r\n\r\n        <option value=\"Todos os g\u00EAneros\">\r\n          Todos os g\u00EAneros\r\n        </option>\r\n\r\n        <option\r\n          *ngFor=\"let categoria of categorias.slice(1)\"\r\n          [value]=\"categoria\">\r\n          {{ categoria }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"resumo-livros\">\r\n      <span>\r\n        {{ livrosFiltrados.length }}\r\n        livro(s) encontrado(s)\r\n      </span>\r\n\r\n      <span>\r\n        {{ totalGeneros }} g\u00EAnero(s)\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"estado-carregamento\" *ngIf=\"carregando\">\r\n      Carregando livros...\r\n    </div>\r\n\r\n    <!-- Tabela -->\r\n    <div\r\n      class=\"tabela-container\"\r\n      *ngIf=\"!carregando && !erro\">\r\n\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Livro</th>\r\n            <th>Autor</th>\r\n            <th>G\u00EAneros</th>\r\n            <th>Ano</th>\r\n            <th>Exemplares</th>\r\n            <th>Dispon\u00EDveis</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let livro of livrosFiltrados\">\r\n            <td class=\"id-livro\">#{{ livro.id }}</td>\r\n            <td>\r\n              <div\r\n                class=\"livro-info livro-clicavel\"\r\n                role=\"link\"\r\n                tabindex=\"0\"\r\n                [attr.aria-label]=\"'Abrir detalhes do livro ' + livro.titulo\"\r\n                (click)=\"abrirDetalhes(livro)\"\r\n                (keydown.enter)=\"abrirDetalhes(livro)\"\r\n                (keydown.space)=\"abrirDetalhes(livro); $event.preventDefault()\">\r\n                <div\r\n                  class=\"livro-capa\"\r\n                  [ngClass]=\"livro.cor\">\r\n                  {{ livro.simbolo }}\r\n                </div>\r\n\r\n                <div class=\"livro-detalhes\">\r\n                  <strong>{{ livro.titulo }}</strong>\r\n                  <small>\r\n                    ISBN: {{ livro.isbn || 'N\u00E3o informado' }}\r\n                  </small>\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n            <td>{{ livro.autor }}</td>\r\n\r\n            <td>\r\n              <div class=\"livro-genero\">\r\n                {{ getGeneros(livro) }}\r\n              </div>\r\n            </td>\r\n\r\n            <td>\r\n              {{ livro.anoPublicacao || 'N\u00E3o informado' }}\r\n            </td>\r\n\r\n            <td>{{ livro.totalExemplares }}</td>\r\n\r\n            <td>\r\n              <span class=\"disponibilidade\">\r\n                {{ livro.exemplaresDisponiveis }}\r\n              </span>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"livrosFiltrados.length === 0\">\r\n            <td colspan=\"7\" class=\"sem-resultados\">\r\n              Nenhum livro encontrado.\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n<!-- Modal de cadastro -->\r\n<div\r\n  class=\"modal-overlay\"\r\n  *ngIf=\"modalCadastroAberto\"\r\n  (click)=\"fecharCadastro()\">\r\n\r\n  <section\r\n    class=\"modal-cadastro\"\r\n    role=\"dialog\"\r\n    aria-modal=\"true\"\r\n    aria-labelledby=\"titulo-modal\"\r\n    (click)=\"$event.stopPropagation()\">\r\n\r\n    <header class=\"modal-cabecalho\">\r\n      <div>\r\n        <span class=\"subtitulo\">NOVO REGISTRO</span>\r\n        <h2 id=\"titulo-modal\">Cadastrar livro</h2>\r\n        <p>Preencha os dados para adicionar ao acervo.</p>\r\n      </div>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-fechar\"\r\n        aria-label=\"Fechar formul\u00E1rio\"\r\n        (click)=\"fecharCadastro()\">\r\n        &times;\r\n      </button>\r\n    </header>\r\n\r\n    <form\r\n      #formLivro=\"ngForm\"\r\n      (ngSubmit)=\"salvarLivro()\">\r\n\r\n      <div class=\"formulario-conteudo\">\r\n        <div class=\"campo campo-completo\">\r\n          <label for=\"titulo\">T\u00EDtulo <span>*</span></label>\r\n          <input\r\n            id=\"titulo\"\r\n            name=\"titulo\"\r\n            [(ngModel)]=\"novoLivro.titulo\"\r\n            placeholder=\"Digite o t\u00EDtulo do livro\"\r\n            required />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"autor\">Autor <span>*</span></label>\r\n          <input\r\n            id=\"autor\"\r\n            name=\"autor\"\r\n            [(ngModel)]=\"novoLivro.autor\"\r\n            placeholder=\"Nome do autor\"\r\n            required />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"isbn\">ISBN</label>\r\n          <input\r\n            id=\"isbn\"\r\n            name=\"isbn\"\r\n            [(ngModel)]=\"novoLivro.isbn\"\r\n            placeholder=\"C\u00F3digo ISBN\" />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"editora\">Editora</label>\r\n          <input\r\n            id=\"editora\"\r\n            name=\"editora\"\r\n            [(ngModel)]=\"novoLivro.editora\"\r\n            placeholder=\"Nome da editora\" />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"grafica\">Gr\u00E1fica</label>\r\n          <input\r\n            id=\"grafica\"\r\n            name=\"grafica\"\r\n            [(ngModel)]=\"novoLivro.grafica\"\r\n            placeholder=\"Nome da gr\u00E1fica\" />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"edicao\">Edi\u00E7\u00E3o</label>\r\n          <input\r\n            id=\"edicao\"\r\n            name=\"edicao\"\r\n            [(ngModel)]=\"novoLivro.edicao\"\r\n            placeholder=\"Ex.: 2\u00AA edi\u00E7\u00E3o\" />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"ano\">Ano de publica\u00E7\u00E3o</label>\r\n          <input\r\n            id=\"ano\"\r\n            name=\"anoPublicacao\"\r\n            type=\"number\"\r\n            min=\"0\"\r\n            [(ngModel)]=\"novoLivro.anoPublicacao\" />\r\n        </div>\r\n\r\n        <div class=\"campo\">\r\n          <label for=\"idade\">Classifica\u00E7\u00E3o et\u00E1ria</label>\r\n          <input\r\n            id=\"idade\"\r\n            name=\"idade\"\r\n            type=\"number\"\r\n            min=\"0\"\r\n            [(ngModel)]=\"novoLivro.idade\" />\r\n        </div>\r\n\r\n        <div class=\"campo campo-completo\">\r\n          <label for=\"sinopse\">Sinopse</label>\r\n          <textarea\r\n            id=\"sinopse\"\r\n            name=\"sinopse\"\r\n            rows=\"4\"\r\n            [(ngModel)]=\"novoLivro.sinopse\"\r\n            placeholder=\"Descreva brevemente o livro...\">\r\n          </textarea>\r\n        </div>\r\n\r\n        <p\r\n          class=\"mensagem-formulario\"\r\n          *ngIf=\"mensagem\"\r\n          role=\"status\">\r\n          {{ mensagem }}\r\n        </p>\r\n      </div>\r\n\r\n      <footer class=\"modal-acoes\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-cancelar\"\r\n          (click)=\"fecharCadastro()\">\r\n          Cancelar\r\n        </button>\r\n\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn-salvar\"\r\n          [disabled]=\"salvando || formLivro.invalid\">\r\n          {{ salvando ? 'Salvando...' : 'Cadastrar livro' }}\r\n        </button>\r\n      </footer>\r\n    </form>\r\n  </section>\r\n</div>\r\n", styles: ["\r\n:host {\r\n  display: block;\r\n  min-height: 100%;\r\n  color: #25283b;\r\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\r\n  background: #f6f7fb;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Barra superior */\r\n\r\n.topbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  min-height: 72px;\r\n  padding: 0 34px;\r\n  background: #fff;\r\n  border-bottom: 1px solid #eaebf2;\r\n}\r\n\r\n.breadcrumb {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #9297a8;\r\n  font-size: 12px;\r\n}\r\n\r\n.breadcrumb strong {\r\n  color: #373b50;\r\n  font-weight: 650;\r\n}\r\n\r\n.breadcrumb-separator {\r\n  color: #c8cad5;\r\n}\r\n\r\n.topbar-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n}\r\n\r\n.system-status {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: #777d91;\r\n  font-size: 11px;\r\n}\r\n\r\n.status-dot {\r\n  width: 8px;\r\n  height: 8px;\r\n  flex-shrink: 0;\r\n  border-radius: 50%;\r\n  background: #22c55e;\r\n  box-shadow: 0 0 8px #22c55e66;\r\n}\r\n\r\n.avatar {\r\n  display: grid;\r\n  width: 37px;\r\n  height: 37px;\r\n  place-items: center;\r\n  border: 1px solid #ded8ff;\r\n  border-radius: 12px;\r\n  background: #f0edff;\r\n  color: #6956df;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n}\r\n\r\n/* P\u00E1gina */\r\n\r\n.pagina-livros {\r\n  min-height: calc(100vh - 72px);\r\n  padding: 32px;\r\n  background: #f6f7fb;\r\n}\r\n\r\n.cabecalho-pagina {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n  animation: fade-in 0.4s ease both;\r\n}\r\n\r\n.cabecalho-pagina .breadcrumb {\r\n  display: inline-block;\r\n  margin-bottom: 9px;\r\n}\r\n\r\n.cabecalho-pagina h1 {\r\n  margin: 0;\r\n  color: #25283b;\r\n  font-size: 28px;\r\n  font-weight: 750;\r\n  letter-spacing: -0.7px;\r\n}\r\n\r\n.cabecalho-pagina p {\r\n  margin: 9px 0 0;\r\n  color: #85899b;\r\n  font-size: 13px;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* Bot\u00F5es */\r\n\r\n.botao-atualizar,\r\n.botao-limpar,\r\n.estado-tabela button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  min-height: 40px;\r\n  padding: 0 15px;\r\n  border: 1px solid #e3e5ee;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  color: #555b70;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  font-weight: 650;\r\n  cursor: pointer;\r\n  transition: background 0.2s, border-color 0.2s,\r\n    transform 0.2s;\r\n}\r\n\r\n.botao-atualizar:hover,\r\n.botao-limpar:hover,\r\n.estado-tabela button:hover {\r\n  border-color: #c9bdf7;\r\n  background: #f7f4ff;\r\n}\r\n\r\n.botao-atualizar:active,\r\n.botao-limpar:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.botao-atualizar:disabled {\r\n  cursor: wait;\r\n  opacity: 0.65;\r\n}\r\n\r\n/* Cart\u00F5es de estat\u00EDsticas */\r\n\r\n.estatisticas {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 18px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.card-estatistica {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  min-width: 0;\r\n  padding: 22px;\r\n  border: 1px solid #e9ebf2;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px #20294d05;\r\n  animation: rise-in 0.45s ease both;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.card-estatistica:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 9px 24px #20294d0c;\r\n}\r\n\r\n.estatistica-icone {\r\n  display: grid;\r\n  width: 48px;\r\n  height: 48px;\r\n  flex-shrink: 0;\r\n  place-items: center;\r\n  border-radius: 12px;\r\n  background: #eee9ff;\r\n  color: #7558d8;\r\n  font-size: 23px;\r\n}\r\n\r\n.card-estatistica:nth-child(2) .estatistica-icone {\r\n  background: #e7f1ff;\r\n  color: #397ad3;\r\n}\r\n\r\n.card-estatistica:nth-child(3) .estatistica-icone {\r\n  background: #e4f7ed;\r\n  color: #269765;\r\n}\r\n\r\n.card-estatistica p {\r\n  margin: 0 0 7px;\r\n  color: #85899b;\r\n  font-size: 12px;\r\n}\r\n\r\n.card-estatistica h2 {\r\n  margin: 0;\r\n  color: #292d40;\r\n  font-size: 27px;\r\n  font-weight: 750;\r\n}\r\n\r\n/* Painel do acervo */\r\n\r\n.painel-acervo {\r\n  overflow: hidden;\r\n  border: 1px solid #e8eaf1;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  box-shadow: 0 4px 15px #20294d05;\r\n  animation: fade-in 0.5s ease both;\r\n}\r\n\r\n.painel-cabecalho {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  padding: 24px 25px;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\n.painel-cabecalho h2 {\r\n  margin: 0;\r\n  color: #303448;\r\n  font-size: 17px;\r\n  font-weight: 750;\r\n}\r\n\r\n.painel-cabecalho p {\r\n  margin: 8px 0 0;\r\n  color: #85899b;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Pesquisa e filtros */\r\n\r\n.filtros-livros {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding: 20px 25px;\r\n  border-bottom: 1px solid #eef0f5;\r\n}\r\n\r\n.campo-busca {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-width: 180px;\r\n  min-height: 43px;\r\n  padding: 0 13px;\r\n  border: 1px solid #e4e6ef;\r\n  border-radius: 8px;\r\n  background: #fff;\r\n  color: #9196a8;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo-busca:focus-within {\r\n  border-color: #9d8ae8;\r\n  box-shadow: 0 0 0 3px #7358d512;\r\n}\r\n\r\n.campo-busca > span {\r\n  font-size: 21px;\r\n  line-height: 1;\r\n}\r\n\r\n.campo-busca input {\r\n  width: 100%;\r\n  min-width: 0;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  color: #35394c;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n}\r\n\r\n.campo-busca input::placeholder {\r\n  color: #a0a4b3;\r\n}\r\n\r\n.filtros-livros select {\r\n  width: 190px;\r\n  min-height: 43px;\r\n  padding: 0 12px;\r\n  border: 1px solid #e4e6ef;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  background: #fff;\r\n  color: #606579;\r\n  font-family: inherit;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filtros-livros select:focus {\r\n  border-color: #9d8ae8;\r\n}\r\n\r\n/* Tabela */\r\n\r\n.tabela-responsiva {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n}\r\n\r\n.tabela-responsiva table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-responsiva thead {\r\n  background: #f8f9fc;\r\n}\r\n\r\n.tabela-responsiva th {\r\n  padding: 15px 18px;\r\n  border-bottom: 1px solid #eef0f5;\r\n  color: #85899b;\r\n  font-size: 10px;\r\n  font-weight: 750;\r\n  letter-spacing: 0.45px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-responsiva td {\r\n  padding: 16px 18px;\r\n  border-bottom: 1px solid #f0f1f6;\r\n  color: #62677b;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tabela-responsiva tbody tr {\r\n  animation: rise-in 0.35s ease both;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.tabela-responsiva tbody tr:hover {\r\n  background: #faf9ff;\r\n}\r\n\r\n.tabela-responsiva tbody tr:last-child td {\r\n  border-bottom: none;\r\n}\r\n\r\n/* Identifica\u00E7\u00E3o do livro */\r\n\r\n.livro-identificacao {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 230px;\r\n}\r\n\r\n.livro-capa {\r\n  display: grid;\r\n  width: 42px;\r\n  height: 49px;\r\n  flex-shrink: 0;\r\n  place-items: center;\r\n  border: 1px solid #fff;\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 5px #20294d0b;\r\n  font-size: 20px;\r\n  transition: transform 0.2s;\r\n}\r\n\r\ntr:hover .livro-capa {\r\n  transform: rotate(-4deg);\r\n}\r\n\r\n.livro-capa.capa-roxa {\r\n  background: #eee8ff;\r\n  color: #7558c8;\r\n}\r\n\r\n.livro-capa.capa-azul {\r\n  background: #e5f0ff;\r\n  color: #3975bd;\r\n}\r\n\r\n.livro-capa.capa-verde {\r\n  background: #e3f6e9;\r\n  color: #31895b;\r\n}\r\n\r\n.livro-capa.capa-laranja {\r\n  background: #fff0e2;\r\n  color: #b76a32;\r\n}\r\n\r\n.livro-informacoes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  min-width: 0;\r\n}\r\n\r\n.livro-informacoes strong {\r\n  color: #33374a;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.livro-informacoes small {\r\n  color: #999daf;\r\n  font-size: 10px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.livro-informacoes .descricao-livro {\r\n  display: -webkit-box;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  line-clamp: 2;\r\n}\r\n\r\n/* G\u00EAneros */\r\n\r\n.etiqueta-genero {\r\n  display: inline-block;\r\n  max-width: 230px;\r\n  padding: 6px 9px;\r\n  border-radius: 6px;\r\n  background: #eee9ff;\r\n  color: #7558c8;\r\n  font-size: 10px;\r\n  font-weight: 650;\r\n  line-height: 1.5;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n/* Carregamento e erros */\r\n\r\n.estado-tabela {\r\n  padding: 30px 24px;\r\n  color: #777d91;\r\n  font-size: 13px;\r\n  text-align: center;\r\n}\r\n\r\n.estado-tabela.erro {\r\n  color: #b54755;\r\n}\r\n\r\n.estado-tabela button {\r\n  margin-top: 8px;\r\n}\r\n\r\n.estado-vazio {\r\n  padding: 52px 20px;\r\n  color: #898da0;\r\n  text-align: center;\r\n}\r\n\r\n.estado-vazio > span {\r\n  display: inline-grid;\r\n  width: 54px;\r\n  height: 54px;\r\n  place-items: center;\r\n  margin-bottom: 12px;\r\n  border-radius: 15px;\r\n  background: #f0edff;\r\n  color: #7558d8;\r\n  font-size: 27px;\r\n}\r\n\r\n.estado-vazio h3 {\r\n  margin: 0 0 8px;\r\n  color: #3c4054;\r\n  font-size: 16px;\r\n}\r\n\r\n.estado-vazio p {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* Rodap\u00E9 da tabela */\r\n\r\n.rodape-tabela {\r\n  padding: 17px 25px;\r\n  border-top: 1px solid #eef0f5;\r\n  color: #85899b;\r\n  font-size: 11px;\r\n}\r\n\r\n/* Anima\u00E7\u00F5es */\r\n\r\n@keyframes fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rise-in {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/* Responsividade */\r\n\r\n@media (max-width: 1000px) {\r\n  .pagina-livros {\r\n    padding: 24px;\r\n  }\r\n\r\n  .estatisticas {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  }\r\n\r\n  .filtros-livros {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .campo-busca {\r\n    flex-basis: 100%;\r\n  }\r\n\r\n  .filtros-livros select {\r\n    flex: 1;\r\n    min-width: 150px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .topbar {\r\n    min-height: 62px;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .topbar-right {\r\n    gap: 12px;\r\n  }\r\n\r\n  .system-status {\r\n    font-size: 0;\r\n  }\r\n\r\n  .pagina-livros {\r\n    padding: 20px 12px;\r\n  }\r\n\r\n  .cabecalho-pagina {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n\r\n  .cabecalho-pagina h1 {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .cabecalho-pagina p {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .estatisticas {\r\n    grid-template-columns: 1fr;\r\n    gap: 10px;\r\n  }\r\n\r\n  .card-estatistica {\r\n    padding: 16px;\r\n  }\r\n\r\n  .estatistica-icone {\r\n    width: 43px;\r\n    height: 43px;\r\n  }\r\n\r\n  .card-estatistica h2 {\r\n    font-size: 23px;\r\n  }\r\n\r\n  .painel-cabecalho {\r\n    padding: 19px 15px;\r\n  }\r\n\r\n  .painel-cabecalho h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .filtros-livros {\r\n    padding: 15px;\r\n  }\r\n\r\n  .botao-limpar {\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .tabela-responsiva table {\r\n    min-width: 760px;\r\n  }\r\n\r\n  .rodape-tabela {\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n:host {\r\n  display: block;\r\n  color: #202938;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.pagina-livros {\r\n  width: 100%;\r\n  padding: 28px;\r\n  box-sizing: border-box;\r\n  background: #f7f8fc;\r\n  min-height: 100%;\r\n}\r\n\r\n/* Cabe\u00E7alho */\r\n\r\n.cabecalho-livros {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.subtitulo {\r\n  display: block;\r\n  color: #6754c8;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 1.5px;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.cabecalho-livros h1,\r\n.modal-cabecalho h2 {\r\n  margin: 0;\r\n  color: #202938;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n}\r\n\r\n.cabecalho-livros p,\r\n.modal-cabecalho p {\r\n  margin: 8px 0 0;\r\n  color: #788195;\r\n  font-size: 14px;\r\n}\r\n\r\n/* Bot\u00F5es */\r\n\r\n.btn-cadastrar,\r\n.btn-salvar {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 9px;\r\n  border: 0;\r\n  border-radius: 9px;\r\n  background: #6754c8;\r\n  color: #fff;\r\n  padding: 12px 18px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.2s, transform 0.2s;\r\n}\r\n\r\n.btn-cadastrar:hover,\r\n.btn-salvar:hover:not(:disabled) {\r\n  background: #5140ac;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.icone-botao {\r\n  font-size: 22px;\r\n  line-height: 16px;\r\n}\r\n\r\n.btn-atualizar,\r\n.btn-cancelar {\r\n  border: 1px solid #dfe3ec;\r\n  border-radius: 8px;\r\n  padding: 11px 15px;\r\n  background: #fff;\r\n  color: #414b5d;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-atualizar:hover,\r\n.btn-cancelar:hover {\r\n  background: #f0f1f7;\r\n}\r\n\r\nbutton:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Busca e filtros */\r\n\r\n.barra-filtros {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.barra-filtros input,\r\n.barra-filtros select {\r\n  min-width: 0;\r\n  box-sizing: border-box;\r\n  border: 1px solid #e0e4ed;\r\n  border-radius: 9px;\r\n  padding: 12px 14px;\r\n  background: #fff;\r\n  color: #30394b;\r\n  font-size: 13px;\r\n  outline: none;\r\n}\r\n\r\n.barra-filtros input {\r\n  flex: 1;\r\n}\r\n\r\n.barra-filtros select {\r\n  min-width: 180px;\r\n}\r\n\r\n.barra-filtros input:focus,\r\n.barra-filtros select:focus,\r\n.campo input:focus,\r\n.campo textarea:focus {\r\n  border-color: #8373dc;\r\n  box-shadow: 0 0 0 3px rgb(103 84 200 / 10%);\r\n}\r\n\r\n/* Resumo */\r\n\r\n.resumo-livros {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  margin-bottom: 14px;\r\n  color: #778094;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Tabela */\r\n\r\n.tabela-container {\r\n  overflow-x: auto;\r\n  background: #fff;\r\n  border: 1px solid #e8eaf1;\r\n  border-radius: 12px;\r\n  box-shadow: 0 3px 12px rgb(35 42 65 / 3%);\r\n}\r\n\r\n.tabela-container table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: left;\r\n}\r\n\r\n.tabela-container th {\r\n  padding: 16px;\r\n  background: #fafbfe;\r\n  border-bottom: 1px solid #e8eaf1;\r\n  color: #778094;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  white-space: nowrap;\r\n}\r\n\r\n.tabela-container td {\r\n  padding: 15px 16px;\r\n  border-bottom: 1px solid #eef0f5;\r\n  color: #424b5d;\r\n  font-size: 13px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tabela-container tbody tr:last-child td {\r\n  border-bottom: 0;\r\n}\r\n\r\n.tabela-container tbody tr:hover {\r\n  background: #fafaff;\r\n}\r\n\r\n.id-livro {\r\n  color: #667085;\r\n  font-family: \"Courier New\", monospace;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  white-space: nowrap;\r\n}\r\n\r\n.livro-info {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  min-width: 180px;\r\n}\r\n\r\n.livro-capa {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 38px;\r\n  height: 48px;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n}\r\n\r\n.capa-roxa {\r\n  background: #eee9ff;\r\n  color: #6754c8;\r\n}\r\n\r\n.capa-azul {\r\n  background: #e2efff;\r\n  color: #3574bf;\r\n}\r\n\r\n.capa-verde {\r\n  background: #e1f6eb;\r\n  color: #23895b;\r\n}\r\n\r\n.capa-laranja {\r\n  background: #fff0df;\r\n  color: #c8792c;\r\n}\r\n\r\n.livro-detalhes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.livro-detalhes strong {\r\n  color: #283144;\r\n  font-size: 13px;\r\n}\r\n\r\n.livro-detalhes small {\r\n  color: #9098a8;\r\n  font-size: 11px;\r\n}\r\n\r\n.livro-genero {\r\n  color: #6253b1;\r\n  line-height: 1.5;\r\n}\r\n\r\n.disponibilidade {\r\n  display: inline-block;\r\n  min-width: 25px;\r\n  padding: 5px 8px;\r\n  border-radius: 6px;\r\n  background: #e6f7ee;\r\n  color: #238456;\r\n  text-align: center;\r\n  font-weight: 700;\r\n}\r\n\r\n.sem-resultados,\r\n.estado-carregamento {\r\n  padding: 35px !important;\r\n  text-align: center;\r\n  color: #858da0 !important;\r\n}\r\n\r\n.mensagem-erro {\r\n  margin-bottom: 16px;\r\n  padding: 12px 14px;\r\n  border: 1px solid #f2cccc;\r\n  border-radius: 8px;\r\n  background: #fff0f0;\r\n  color: #a52d2d;\r\n  font-size: 13px;\r\n}\r\n\r\n/* Fundo e janela modal */\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 1000;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  background: rgb(20 25 42 / 55%);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-cadastro {\r\n  width: 100%;\r\n  max-width: 680px;\r\n  max-height: calc(100vh - 40px);\r\n  overflow-y: auto;\r\n  border-radius: 16px;\r\n  background: #fff;\r\n  box-shadow: 0 20px 70px rgb(0 0 0 / 20%);\r\n  animation: modal-entrada 0.2s ease-out;\r\n}\r\n\r\n@keyframes modal-entrada {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.modal-cabecalho {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  padding: 25px 28px;\r\n  border-bottom: 1px solid #eceef4;\r\n}\r\n\r\n.modal-cabecalho h2 {\r\n  font-size: 23px;\r\n}\r\n\r\n.btn-fechar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 34px;\r\n  height: 34px;\r\n  flex-shrink: 0;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  background: #f1f2f7;\r\n  color: #626b7c;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-fechar:hover {\r\n  background: #e5e6ef;\r\n}\r\n\r\n/* Formul\u00E1rio */\r\n\r\n.formulario-conteudo {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 19px 16px;\r\n  padding: 25px 28px;\r\n}\r\n\r\n.campo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  min-width: 0;\r\n}\r\n\r\n.campo-completo {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.campo label {\r\n  color: #414a5c;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.campo label span {\r\n  color: #d64b58;\r\n}\r\n\r\n.campo input,\r\n.campo textarea {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: 1px solid #dfe3ec;\r\n  border-radius: 8px;\r\n  padding: 12px;\r\n  background: #fff;\r\n  color: #293246;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  outline: none;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.campo input::placeholder,\r\n.campo textarea::placeholder {\r\n  color: #a0a7b5;\r\n}\r\n\r\n.campo textarea {\r\n  resize: vertical;\r\n  min-height: 100px;\r\n}\r\n\r\n.mensagem-formulario {\r\n  grid-column: 1 / -1;\r\n  margin: 0;\r\n  color: #6754c8;\r\n  font-size: 13px;\r\n}\r\n\r\n/* Rodap\u00E9 do modal */\r\n\r\n.modal-acoes {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n  padding: 18px 28px 24px;\r\n  border-top: 1px solid #eceef4;\r\n}\r\n\r\n.btn-salvar {\r\n  min-width: 145px;\r\n}\r\n\r\n.btn-salvar:disabled {\r\n  transform: none;\r\n}\r\n\r\n/* Responsividade */\r\n\r\n@media (max-width: 700px) {\r\n  .pagina-livros {\r\n    padding: 18px 12px;\r\n  }\r\n\r\n  .cabecalho-livros {\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .cabecalho-livros h1 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .btn-cadastrar {\r\n    padding: 10px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .barra-filtros {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .barra-filtros select {\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-overlay {\r\n    align-items: flex-start;\r\n    padding: 10px;\r\n  }\r\n\r\n  .modal-cadastro {\r\n    max-height: calc(100vh - 20px);\r\n  }\r\n\r\n  .modal-cabecalho,\r\n  .formulario-conteudo {\r\n    padding: 20px;\r\n  }\r\n\r\n  .formulario-conteudo {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .campo-completo {\r\n    grid-column: auto;\r\n  }\r\n\r\n  .modal-acoes {\r\n    padding: 16px 20px 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .cabecalho-livros {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .modal-acoes {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .modal-acoes button {\r\n    width: 100%;\r\n  }\r\n}\r\n.livro-clicavel {\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.livro-clicavel:hover,\r\n.livro-clicavel:focus-visible {\r\n  background: #edf2ff;\r\n}\r\n"] }]
    }], null, { atalhosTeclado: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LivrosComponent, { className: "LivrosComponent", filePath: "src/app/component/livros-component/livros-component.ts", lineNumber: 23 }); })();
