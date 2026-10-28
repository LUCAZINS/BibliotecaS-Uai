import { ChangeDetectorRef, Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LivrosService,
  LivrosModels
} from '../../Service/livros-service';
import { finalize } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

interface LivroVisual extends LivrosModels {
  cor: string;
  simbolo: string;
}

@Component({
  selector: 'app-livros-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './livros-component.css',
  templateUrl: './livros-component.html',
})
export class LivrosComponent implements OnInit {

  private livrosService = inject(LivrosService);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);


  livros: LivroVisual[] = [];
  livrosFiltrados: LivroVisual[] = [];

  categorias: string[] = ['Todos os gêneros'];
  busca = '';
  generoSelecionado = 'Todos os gêneros';


  modalCadastroAberto = false;

  carregando = false;
  erro = '';

  private cores = [
    'capa-roxa',
    'capa-azul',
    'capa-verde',
    'capa-laranja'
  ];

  private simbolos = ['✦', '◈', '❋', '◎'];


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
  generos: [] as { id: number; nome: string }[]
};

salvando = false;
mensagem = '';




  ngOnInit(): void {
  this.carregarLivros();

  this.route.queryParamMap.subscribe(params => {
    const cadastrar = params.get('cadastrarLivros');

    if (cadastrar?.toLowerCase() === 'true') {
      this.abrirCadastro();
    }
  });
}

 
carregarLivros(): void {
  this.carregando = true;
  this.erro = '';

  this.livrosService.buscarTodos()
    .pipe(
      finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      })
    )
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


atualizarCategorias(): void {
  const generos = this.livros.flatMap(livro =>
    (livro.generos ?? [])
      .map(genero => genero.nome?.trim())
      .filter((nome): nome is string => !!nome)
  );

  this.categorias = [
    'Todos os gêneros',
    ...Array.from(new Set(generos)).sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    )
  ];

  if (
    this.generoSelecionado !== 'Todos os gêneros' &&
    !this.categorias.includes(this.generoSelecionado)
  ) {
    this.generoSelecionado = 'Todos os gêneros';
  }
}

  aplicarFiltros(): void {
    const termo = this.busca.trim().toLocaleLowerCase('pt-BR');

    this.livrosFiltrados = this.livros.filter(livro => {
      const generos = (livro.generos ?? [])
        .map(genero => genero.nome)
        .filter((nome): nome is string => !!nome);

      const correspondeBusca =
        !termo ||
        (livro.titulo ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
        (livro.autor ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
        (livro.isbn ?? '').toLocaleLowerCase('pt-BR').includes(termo) ||
        (livro.editora ?? '').toLocaleLowerCase('pt-BR').includes(termo);

      const correspondeGenero =
        this.generoSelecionado === 'Todos os gêneros' ||
        generos.includes(this.generoSelecionado);

      return correspondeBusca && correspondeGenero;
    });
  }
  

  get totalGeneros(): number {
    return this.categorias.length - 1;
  }

  getDescricao(livro: LivroVisual): string {
    return livro.sinopse || 'Nenhuma descrição cadastrada.';
  }

    getGeneros(livro: LivroVisual): string {
  const generos = (livro.generos ?? [])
    .map(genero => genero.nome?.trim())
    .filter((Nome): Nome is string => !!Nome);

  return [...new Set(generos)].join(', ') || 'Não informado';
}


salvarLivro(): void {
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


abrirCadastro(): void {
  this.mensagem = '';
  this.modalCadastroAberto = true;
}

fecharCadastro(): void {
  if (this.salvando) return;

  this.modalCadastroAberto = false;
  this.mensagem = '';

  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: { cadastrarLivros: null },
    queryParamsHandling: 'merge',
    replaceUrl: true
  });
}

abrirDetalhes(livro: LivroVisual): void {
  this.router.navigate(['/Barra/Livros', livro.id]);
}


@HostListener('window:keydown', ['$event'])
atalhosTeclado(event: KeyboardEvent): void {
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

    const campoBusca = document.querySelector(
      'input[aria-label="Buscar livros"]'
    ) as HTMLInputElement | null;

    campoBusca?.focus();
  }
}


}
