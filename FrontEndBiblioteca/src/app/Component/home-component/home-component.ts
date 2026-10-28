
import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { LivrosService } from '../../Service/livros-service';
import { LivrosModels } from '../../Service/livros-service';
import { ExemplaresService } from '../../Service/ExemplaresService';
import { AlugatarioService } from '../../Service/alugatarioService';
import { AlugueisService } from '../../Service/alugueis-service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})

export class HomeComponent implements OnInit {

  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly livrosService = inject(LivrosService);
  private readonly exemplaresService = inject(ExemplaresService);
  private readonly alugatarioService = inject(AlugatarioService);
  private readonly alugueisService = inject(AlugueisService);

  livros: LivrosModels[] = [];
  erro = '';
  carregando = false;

  ngOnInit(): void {
  this.preCarregarDados();
}

private preCarregarDados(): void {
  this.livrosService.buscarTodos().subscribe({
    next: livros => {
      console.log(
        `[HOME] Cache de livros preparado: ${livros.length} livros`
      );
    },
    error: erro => {
      console.error('[HOME] Falha ao carregar livros:', erro);
    }
  });

  this.exemplaresService.listar().subscribe({
    next: exemplares => {
      console.log(
        `[HOME] Cache de exemplares preparado: ${exemplares.length} exemplares`
      );
    },
    error: erro => {
      console.error('[HOME] Falha ao carregar exemplares:', erro);
    }
  });

  this.alugatarioService.listar().subscribe({
    next: locatarios => {
      console.log(
        `[HOME] Cache de locatários preparado: ${locatarios.length} locatários`
      );
    },
    error: erro => {
      console.error('[HOME] Falha ao carregar locatários:', erro);
    }
  });

  this.alugueisService.listar().subscribe({
    next: alugueis => {
      console.log(
        `[HOME] Cache de empréstimos preparado: ${alugueis.length} empréstimos`
      );
    },
    error: erro => {
      console.error('[HOME] Falha ao carregar empréstimos:', erro);
    }
  });
}



  carregarLivros(): void {
    this.carregando = true;
    this.erro = '';

    this.livrosService.buscarTodos().subscribe({
      next: (dados) => {
        this.livros = dados;
        console.log('Livros carregados:', this.livros);
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao buscar livros:', err);
        this.erro = 'Não foi possível carregar os livros.';
        this.carregando = false;
      }
    });
  }

  Logout(): void {
    this.loginService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no logout:', err);
        this.erro = 'Não foi possível realizar o logout.';
      }
    });
  }
}
