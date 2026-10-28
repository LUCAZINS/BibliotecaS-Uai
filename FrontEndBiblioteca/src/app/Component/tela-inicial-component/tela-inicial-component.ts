
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../Service/livros-service';
import { ExemplaresService } from '../../Service/ExemplaresService';
import { Router, RouterLink } from '@angular/router';
import { AlugatarioService } from '../../Service/alugatarioService';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-tela-inicial-component',
  styleUrl: './tela-inicial-component.css',
  templateUrl: './tela-inicial-component.html',
})
export class TelaInicialComponent implements OnInit {

  private livroService = inject(LivrosService);
  private exemplaresService = inject(ExemplaresService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private alugatarioService = inject(AlugatarioService);
  emprestimosAtivos = 0;
  totalLeitores = 0;
  totalLivros = 0;
  totalExemplares = 0;
  exemplaresDisponiveis = 0;

  ngOnInit(): void 
  {
    this.livroService.buscarTodos().subscribe({
      next: livros => {
        this.totalLivros = livros.length;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar os dados dos livros:', erro);
        this.cdr.detectChanges();
      }
    });

    this.exemplaresService.listar().subscribe({
      next: exemplares => {
        this.totalExemplares = exemplares.length;
        this.exemplaresDisponiveis = exemplares.filter(
          exemplar => Number(exemplar.status) === 0
        ).length;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar os exemplares:', erro);
        this.cdr.detectChanges();
      }
    });

      this.alugatarioService.listar().subscribe
      (
        {
          next: locatarios => 
          {
            this.totalLeitores = locatarios.length;
            this.cdr.detectChanges();
          },
          error: erro => 
            {
              console.error('Erro ao carregar os locatários:', erro);
              this.cdr.detectChanges();
            }
        }
      );
}



  cadastrarLivros(): void {
    this.router.navigate(['/Barra/livros'], {
      queryParams: {
        cadastrarLivros: 'true'
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  atalhosTeclado(event: KeyboardEvent): void {
    if (event.key === 'F2') {
      event.preventDefault();
      this.cadastrarLivros();
    }
  }
}
