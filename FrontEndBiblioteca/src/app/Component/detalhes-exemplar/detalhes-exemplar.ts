import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Exemplar, ExemplaresService } from '../../Service/ExemplaresService';
import { Aluguel, AlugueisService } from '../../Service/alugueis-service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhes-exemplar',
  styleUrl: './detalhes-exemplar.css',
  templateUrl: './detalhes-exemplar.html'
})
export class DetalhesExemplarComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly exemplaresService = inject(ExemplaresService);
  private readonly alugueisService = inject(AlugueisService);
  private readonly cdr = inject(ChangeDetectorRef);

  exemplar?: Exemplar;
  emprestimos: Aluguel[] = [];
  carregando = true;
  erro = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id <= 0) {
      this.erro = 'Exemplar inválido.';
      this.carregando = false;
      return;
    }

    this.exemplaresService.listar().subscribe({
      next: exemplares => {
        this.exemplar = exemplares.find(item => item.id === id);
        if (!this.exemplar) {
          this.erro = 'Exemplar não encontrado.';
          this.carregando = false;
          this.cdr.detectChanges();
          return;
        }

        this.alugueisService.listar().subscribe({
          next: alugueis => {
            this.emprestimos = alugueis.filter(
              aluguel => aluguel.exemplarId === id
            );
            this.carregando = false;
            this.cdr.detectChanges();
          },
          error: erro => this.mostrarErro(erro)
        });
      },
      error: erro => this.mostrarErro(erro)
    });
  }

  statusExemplar(status: number): string {
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

  private mostrarErro(erro: {
    error?: { mensagem?: string; message?: string } | string;
  }): void {
    console.error('Erro ao carregar detalhes do exemplar:', erro);
    const resposta = erro?.error;
    this.erro = typeof resposta === 'string'
      ? resposta
      : resposta?.mensagem ||
        resposta?.message ||
        'Não foi possível carregar os detalhes do exemplar.';
    this.carregando = false;
    this.cdr.detectChanges();
  }
}
