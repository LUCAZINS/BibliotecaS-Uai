import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Aluguel, AlugueisService } from '../../Service/alugueis-service';
import { Exemplar, ExemplaresService } from '../../Service/ExemplaresService';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhes-aluguel',
  styleUrl: './detalhes-aluguel.css',
  templateUrl: './detalhes-aluguel.html'
})
export class DetalhesAluguelComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly alugueisService = inject(AlugueisService);
  private readonly exemplaresService = inject(ExemplaresService);
  private readonly cdr = inject(ChangeDetectorRef);

  aluguel?: Aluguel;
  exemplar?: Exemplar;
  carregando = true;
  erro = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id <= 0) {
      this.erro = 'Empréstimo inválido.';
      this.carregando = false;
      return;
    }

    this.alugueisService.buscarPorId(id).subscribe({
      next: aluguel => {
        this.aluguel = aluguel;
        this.carregarExemplar(aluguel);
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

  private carregarExemplar(aluguel: Aluguel): void {
    this.exemplaresService.listar().subscribe({
      next: exemplares => {
        this.exemplar = exemplares.find(item =>
          item.id === aluguel.exemplarId ||
          item.codigoBarras === aluguel.codigoBarras
        );
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: erro => this.mostrarErro(erro)
    });
  }

  private mostrarErro(erro: {
    error?: { mensagem?: string; message?: string } | string;
  }): void {
    console.error('Erro ao carregar detalhes do empréstimo:', erro);
    const resposta = erro?.error;
    this.erro = typeof resposta === 'string'
      ? resposta
      : resposta?.mensagem ||
        resposta?.message ||
        'Não foi possível carregar os detalhes do empréstimo.';
    this.carregando = false;
    this.cdr.detectChanges();
  }
}
