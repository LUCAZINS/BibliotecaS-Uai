import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LivrosModels,
  LivrosService,
  Exemplar,
  StatusExemplar
} from '../../Service/livros-service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
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

    if (!Number.isInteger(id) || id <= 0) {
      this.erro = 'Livro inválido.';
      this.carregando = false;
      return;
    }

    this.livrosService.buscarTodos().subscribe({
      next: livros => {
        this.livro = livros.find(item => item.id === id);
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
