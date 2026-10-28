
import { Routes } from '@angular/router';

import { LoginComponent } from './Component/login-component/login-component';
import { HomeComponent } from './Component/home-component/home-component';
import { TelaInicialComponent } from './Component/tela-inicial-component/tela-inicial-component';
import { authGuard } from './guards/auth-guard';
import { LivrosComponent } from './Component/livros-component/livros-component';
import { ExemplaresComponent } from './Component/exemplares-component/exemplares-component';
import { AlugueisComponent } from './Component/alugueis-component/alugueis-component';
import { AlugatariosComponent } from './Component/alugatarios-component/alugatarios-component';
import { AlugatarioDetalhesComponent } from './Component/alugatario-detalhes/alugatario-detalhes';
import { Detalheslivros } from './Component/detalheslivros/detalheslivros';
import { DetalhesExemplarComponent } from './Component/detalhes-exemplar/detalhes-exemplar';
import { DetalhesAluguelComponent } from './Component/detalhes-aluguel/detalhes-aluguel';

// Importe também os componentes reais de Livros,
// Exemplares, Empréstimos e Leitores.

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Barra',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
    { path: 'home', component: TelaInicialComponent },
    { path: 'livros', component: LivrosComponent },
    { path: 'exemplares', component: ExemplaresComponent },
    { path: 'alugueis', component: AlugueisComponent },
    { path: 'alugatarios', component: AlugatariosComponent },
    { path: 'locatarios/:id', component: AlugatarioDetalhesComponent },
    { path: 'Livros/:id', component: Detalheslivros },
    { path: 'exemplares/:id', component: DetalhesExemplarComponent },
    { path: 'alugueis/:id', component: DetalhesAluguelComponent },
    
      // Adicione as demais páginas aqui,
      // usando seus componentes reais.

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'Barra/home'
  }
];
