import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LivrosModels,
  LivrosService,
  Exemplar,
  StatusExemplar
} from '../../Service/livros-service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-detalheslivros',
  styleUrl: './detalheslivros.css',
  templateUrl: './detalheslivros.html',
})
export class Detalheslivros implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly livrosService = inject(LivrosService);
  private readonly cdr = inject(ChangeDetectorRef);

  livro?: LivrosModels;
  carregando = true;
  erro = '';
  editando = false;
  salvando = false;
  mensagem = '';
  private livroId = 0;

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

  statusExemplar(status: number): string {
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

  localizacaoExemplar(exemplar: Exemplar): string {
    return exemplar.endereçavel || 'Não informada';
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livroId = id;

    if (!Number.isInteger(id) || id <= 0) {
      this.erro = 'Livro inválido.';
      this.carregando = false;
      return;
    }

    this.carregarDetalhes();
  }

  abrirEdicao(): void {
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
        .filter((nome): nome is string => !!nome)
        .join(', ')
    };
    this.mensagem = '';
    this.editando = true;
  }

  cancelarEdicao(): void {
    if (!this.salvando) {
      this.editando = false;
      this.mensagem = '';
    }
  }

  salvarEdicao(): void {
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
      .filter((nome, indice, lista) =>
        !!nome && lista.findIndex(item => item.toLowerCase() === nome.toLowerCase()) === indice
      );

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

  private carregarDetalhes(): void {
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
}
