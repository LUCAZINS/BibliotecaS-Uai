import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../Service/login-service';
import { CommonModule } from '@angular/common';

@Component({
  imports: 
  [
    CommonModule, 
    FormsModule, 
    RouterLink
  ],
  standalone: true,
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);

  email = '';
  senha = '';
  twoFactorCode = '';
  twoFactorRecoveryCode = '';
  erro = '';
  carregando = false;
  lembrarDeMim = false;

  entrar(): void {
    this.erro = '';

    if (!this.email.trim() || !this.senha) {
      this.erro = 'Informe o e-mail e a senha.';
      return;
    }

    this.carregando = true;

    this.loginService.login({
      email: this.email.trim(),
      password: this.senha,
      lembrarDeMim: this.lembrarDeMim
    }).subscribe({
      next: () => {
        this.carregando = false;
        this.router.navigate(['/Barra/home']);
      },
      error: (err) => {
        this.carregando = false;

        console.error('Erro no login:', err);

        if (err.status === 401) {
          this.erro = 'E-mail ou senha inválidos.';
        } else if (err.status === 400) {
          this.erro = 'Dados inválidos. Confira as informações.';
        } else if (err.status === 0) {
          this.erro =
            'Não foi possível conectar à API. Verifique o backend e o CORS.';
        } else {
          this.erro = 'Não foi possível realizar o login.';
        }
      }
    });
  }

  
}