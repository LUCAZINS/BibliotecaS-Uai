import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluguel, AlugueisService } from '../../Service/alugueis-service';
import {
  Alugatario,
  AlugatarioService
} from '../../Service/alugatarioService';
import { Exemplar, ExemplaresService } from '../../Service/ExemplaresService';

type EtapaModal = 'codigo' | 'locatario' | 'devolucao';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  selector: 'app-alugueis-component',
  styleUrl: './alugueis-component.css',
  templateUrl: './alugueis-component.html',
})
export class AlugueisComponent implements OnInit {
  private readonly alugueisService = inject(AlugueisService);
  private readonly exemplaresService = inject(ExemplaresService);
  private readonly alugatarioService = inject(AlugatarioService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  alugueis: Aluguel[] = [];
  locatarios: Alugatario[] = [];
  resultadosLocatarios: Alugatario[] = [];
  busca = '';
  filtroStatus = '';
  filtroData = '';
  paginaAtual = 1;
  readonly itensPorPagina = 10;
  carregando = true;
  carregandoConsulta = false;
  carregandoLocatarios = false;
  erro = '';
  mensagemSucesso = '';
  etapa: EtapaModal | null = null;
  operacao: 'novo' | 'f2' = 'novo';
  codigoBarras = '';
  cpf = '';
  buscaLocatario = '';
  exemplarSelecionado?: Exemplar;
  aluguelSelecionado?: Aluguel;
  locatarioSelecionado?: Alugatario;
  salvando = false;
  mensagem = '';

  ngOnInit(): void {
    this.carregarEmprestimos();
    this.alugatarioService.listar().subscribe({
      next: locatarios => this.locatarios = locatarios,
      error: erro => console.error('Erro ao preparar locatários:', erro)
    });
  }

  get alugueisFiltrados(): Aluguel[] {
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

  get emprestimosAtivos(): number {
    return this.alugueis.filter(item => this.ehStatus(item, 'ativo')).length;
  }

  get emprestimosDevolvidos(): number {
    return this.alugueis.filter(item => this.ehStatus(item, 'devolvido')).length;
  }

  get emprestimosAtrasados(): number {
    const hoje = new Date().toISOString().slice(0, 10);
    return this.alugueis.filter(item =>
      this.ehStatus(item, 'ativo') &&
      !!item.dataDevolucaoPrevista &&
      item.dataDevolucaoPrevista < hoje
    ).length;
  }

  get totalPaginas(): number {
    return Math.max(
      1,
      Math.ceil(this.alugueisFiltrados.length / this.itensPorPagina)
    );
  }

  get paginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, indice) => indice + 1);
  }

  get alugueisDaPagina(): Aluguel[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.alugueisFiltrados.slice(
      inicio,
      inicio + this.itensPorPagina
    );
  }

  get primeiroItemExibido(): number {
    return this.alugueisFiltrados.length === 0
      ? 0
      : (this.paginaAtual - 1) * this.itensPorPagina + 1;
  }

  get ultimoItemExibido(): number {
    return Math.min(
      this.paginaAtual * this.itensPorPagina,
      this.alugueisFiltrados.length
    );
  }

  irParaPagina(pagina: number): void {
    this.paginaAtual = Math.min(
      Math.max(pagina, 1),
      this.totalPaginas
    );
  }

  paginaAnterior(): void {
    this.irParaPagina(this.paginaAtual - 1);
  }

  proximaPagina(): void {
    this.irParaPagina(this.paginaAtual + 1);
  }

  atualizarFiltros(): void {
    this.paginaAtual = 1;
  }

  @HostListener('window:keydown', ['$event'])
  tratarAtalho(event: KeyboardEvent): void {
    if (event.key !== 'F2' && event.key !== 'F3') {
      return;
    }

    event.preventDefault();
    this.abrirFluxo(event.key === 'F2' ? 'f2' : 'novo');
  }

  abrirFluxo(operacao: 'novo' | 'f2'): void {
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

  fecharModal(): void {
    if (!this.salvando && !this.carregandoConsulta) {
      this.etapa = null;
      this.mensagem = '';
    }
  }

  consultarExemplar(): void {
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
              this.aluguelSelecionado = alugueis.find(aluguel =>
                aluguel.exemplarId === exemplar.id &&
                this.ehStatus(aluguel, 'ativo')
              );
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

  buscarPorCpf(): void {
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

  buscarLocatarios(): void {
    const termo = this.buscaLocatario.trim().toLowerCase();
    if (!termo) {
      this.mensagem = 'Informe um nome ou CPF para buscar.';
      return;
    }

    this.carregandoLocatarios = true;
    this.mensagem = '';
    this.alugatarioService.listar().subscribe({
      next: locatarios => {
        this.resultadosLocatarios = locatarios.filter(locatario =>
          locatario.nome?.toLowerCase().includes(termo) ||
          locatario.cpf?.toLowerCase().includes(termo)
        );
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

  selecionarLocatario(locatario: Alugatario): void {
    this.locatarioSelecionado = locatario;
    this.mensagem = '';
    this.resultadosLocatarios = [];
  }

  abrirLivro(aluguel: Aluguel): void {
    this.exemplaresService.buscarPorCodigoBarras(
      aluguel.codigoBarras
    ).subscribe({
      next: exemplar => {
        this.router.navigate(['/Barra/Livros', exemplar.livroId]);
      },
      error: erro => this.mostrarErro(erro)
    });
  }

  abrirDetalhesEmprestimo(aluguel: Aluguel): void {
    this.router.navigate(['/Barra/alugueis', aluguel.id]);
  }

  voltarParaCodigo(): void {
    if (!this.salvando) {
      this.etapa = 'codigo';
      this.mensagem = '';
    }
  }

  confirmarEmprestimo(): void {
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
      next: () => {
        this.salvando = false;
        this.etapa = null;
        this.mensagemSucesso = 'Empréstimo registrado com sucesso.';
        this.carregarEmprestimos();
      },
      error: erro => this.mostrarErro(erro)
    });
  }

  confirmarDevolucao(): void {
    if (!this.exemplarSelecionado) {
      return;
    }

    this.salvando = true;
    this.mensagem = '';
    this.alugueisService.devolver({
      exemplarId: this.exemplarSelecionado.id
    }).subscribe({
      next: () => {
        this.salvando = false;
        this.etapa = null;
        this.mensagemSucesso = 'Devolução registrada com sucesso.';
        this.carregarEmprestimos();
      },
      error: erro => this.mostrarErro(erro)
    });
  }

  formatarCpf(cpf: string): string {
    const numeros = cpf.replace(/\D/g, '').slice(0, 11);
    return numeros
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
  }

  atualizarCpf(valor: string): void {
    this.cpf = this.formatarCpf(valor);
  }

  private cpfValido(cpf: string): boolean {
    const numeros = cpf.replace(/\D/g, '');
    if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
      return false;
    }

    const digito = (tamanho: number): number => {
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

  private carregarEmprestimos(): void {
    this.carregando = true;
    this.alugueisService.listar().subscribe({
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

  private ehStatus(aluguel: Aluguel, status: string): boolean {
    return aluguel.status.trim().toLowerCase() === status;
  }

  private mostrarErro(erro: {
    error?: { mensagem?: string; message?: string } | string;
  }): void {
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
}
