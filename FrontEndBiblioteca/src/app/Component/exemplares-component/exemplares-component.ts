import {
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {
  ExemplaresService,
  Exemplar,
  CriarExemplarDto
} from '../../Service/ExemplaresService';

import {
  LivrosService,
  LivrosModels
} from '../../Service/livros-service';

@Component({
  selector: 'app-exemplares-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exemplares-component.html',
  styleUrl: './exemplares-component.css'
})
export class ExemplaresComponent implements OnInit, OnDestroy {

  private exemplaresService = inject(ExemplaresService);
  private livrosService = inject(LivrosService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private subscriptions = new Subscription();

  exemplaresAtuais: Exemplar[] = [];
  exemplaresFiltrados: Exemplar[] = [];
  livros: LivrosModels[] = [];

  busca = '';
  filtroStatus = '';
  formaBuscaLivro: 'id' | 'nome' = 'id';

  modalAberto = false;
  modoEdicao = false;
  salvando = false;
  excluindo = false;

  exemplarParaExcluir: Exemplar | null = null;
  exemplarEditandoId: number | null = null;

  formExemplarDados: CriarExemplarDto = {
    livroId: undefined,
    endereçavel: '',
    diasAluguel: 7,
    status: 0
  };

  ngOnInit(): void {
    // Recebe atualizações do estado compartilhado.
    this.subscriptions.add(
      this.exemplaresService.exemplares$.subscribe(exemplares => {
        this.exemplaresAtuais = exemplares;
        this.filtrarExemplares();
        this.cdr.detectChanges();
      })
    );

    // Busca inicial dos exemplares.
    this.subscriptions.add(
      this.exemplaresService.listar().subscribe({
        next: () => this.cdr.detectChanges(),
        error: erro =>
          this.tratarErroCarregamento(
            'Erro ao carregar exemplares:',
            erro
          )
      })
    );

    this.carregarLivros();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  carregarLivros(): void {
    this.subscriptions.add(
      this.livrosService.buscarTodos().subscribe({
        next: livros => {
          this.livros = livros;
          this.filtrarExemplares();
          this.cdr.detectChanges();
        },
        error: erro =>
          this.tratarErroCarregamento(
            'Erro ao carregar livros:',
            erro
          )
      })
    );
  }

  filtrarExemplares(): void {
    const termo = this.busca.trim().toLowerCase();

    this.exemplaresFiltrados = this.exemplaresAtuais.filter(exemplar => {
      const titulo = (
        exemplar.nomeLivro || this.nomeLivroPorId(exemplar.livroId)
      ).toLowerCase();

      const codigo = (exemplar.codigoBarras || '').toLowerCase();
      const localizacao = this.getLocalizacao(exemplar).toLowerCase();

      const correspondeBusca =
        !termo ||
        titulo.includes(termo) ||
        codigo.includes(termo) ||
        localizacao.includes(termo) ||
        String(exemplar.id).includes(termo);

      const correspondeStatus =
        !this.filtroStatus ||
        exemplar.status === Number(this.filtroStatus);

      return correspondeBusca && correspondeStatus;
    });
  }

  nomeLivroPorId(livroId: number): string {
    const livro = this.livros.find(item => item.id === livroId);
    return livro?.titulo || `Livro #${livroId}`;
  }

  abrirDetalhes(exemplar: Exemplar): void {
    this.router.navigate(['/Barra/exemplares', exemplar.id]);
  }

  // Métodos auxiliares para usar "endereçavel" no template
  // sem provocar erro no parser do Angular.
  getLocalizacao(exemplar: Exemplar): string {
    return exemplar.endereçavel || '';
  }

  getLocalizacaoFormulario(): string {
    return this.formExemplarDados['endereçavel'] || '';
  }

  setLocalizacao(valor: string): void {
    this.formExemplarDados['endereçavel'] = valor;
  }

  textoStatus(status: number): string {
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

  classeStatus(status: number): string {
    switch (status) {
      case 0:
        return 'status-disponivel';
      case 1:
        return 'status-alugado';
      default:
        return 'status-indisponivel';
    }
  }

  contarStatus(status: number): number {
    return this.exemplaresAtuais.filter(
      exemplar => exemplar.status === status
    ).length;
  }

  contarIndisponiveis(): number {
    return this.exemplaresAtuais.filter(
      exemplar => exemplar.status !== 0 && exemplar.status !== 1
    ).length;
  }

  limparFiltros(): void {
    this.busca = '';
    this.filtroStatus = '';
    this.filtrarExemplares();
  }

  abrirCadastro(): void {
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

  editarExemplar(exemplar: Exemplar): void {
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

  fecharModal(): void {
    if (this.salvando) {
      return;
    }

    this.modalAberto = false;
  }

  salvarExemplar(): void {
    const livroInformado = this.formaBuscaLivro === 'id'
      ? !!this.formExemplarDados.livroId
      : !!this.formExemplarDados.nomeLivro?.trim();

    if (
      this.salvando ||
      (!this.modoEdicao && !livroInformado) ||
      !this.getLocalizacaoFormulario().trim() ||
      !this.formExemplarDados.diasAluguel
    ) {
      return;
    }

    this.salvando = true;

    const dados: CriarExemplarDto = {
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
      const operacao =
        this.modoEdicao && this.exemplarEditandoId !== null
          ? this.exemplaresService.atualizar(
              this.exemplarEditandoId,
              {
                Endereçavel: this.getLocalizacaoFormulario().trim(),
                DiasAluguel: this.formExemplarDados.diasAluguel,
                Status: this.formExemplarDados.status ?? 0
              }
            )
          : this.exemplaresService.criar(dados);

      this.subscriptions.add(
        operacao.pipe(
          finalize(() => {
            this.salvando = false;
            this.cdr.detectChanges();
          })
        ).subscribe({
          next: () => {
            this.modalAberto = false;
          },
          error: erro => {
            console.error('Erro ao salvar exemplar:', erro);
            alert(
              erro?.error?.detail ||
              erro?.error?.message ||
              erro?.error?.mensagem ||
              'Não foi possível salvar o exemplar.'
            );
          }
        })
      );
    } catch (erro) {
      console.error('Erro ao iniciar salvamento do exemplar:', erro);
      this.salvando = false;
      this.cdr.detectChanges();
      alert('Não foi possível iniciar o salvamento do exemplar.');
    }
  }

  confirmarExclusao(exemplar: Exemplar): void {
    if (exemplar.status === 1) {
      return;
    }

    this.exemplarParaExcluir = exemplar;
  }

  cancelarExclusao(): void {
    if (this.excluindo) {
      return;
    }

    this.exemplarParaExcluir = null;
  }

  excluirExemplar(): void {
    if (!this.exemplarParaExcluir || this.excluindo) {
      return;
    }

    const id = this.exemplarParaExcluir.id;
    this.excluindo = true;

    this.subscriptions.add(
      this.exemplaresService.excluir(id).subscribe({
        next: () => {
          this.exemplarParaExcluir = null;
          this.excluindo = false;
          this.cdr.detectChanges();
        },
        error: erro => {
          console.error('Erro ao excluir exemplar:', erro);
          alert(
            erro?.error?.detail ||
            erro?.error?.message ||
            erro?.error?.mensagem ||
            'Não foi possível excluir o exemplar.'
          );
          this.excluindo = false;
          this.cdr.detectChanges();
        }
      })
    );
  }

  recarregarExemplares(): void {
    this.subscriptions.add(
      this.exemplaresService.recarregar().subscribe({
        next: () => this.cdr.detectChanges(),
        error: erro =>
          this.tratarErroCarregamento(
            'Erro ao atualizar exemplares:',
            erro
          )
      })
    );
  }

  private tratarErroCarregamento(
    mensagem: string,
    erro: unknown
  ): void {
    console.error(mensagem, erro);
    this.cdr.detectChanges();
  }
}
