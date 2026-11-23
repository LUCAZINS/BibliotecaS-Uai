import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../Service/login-service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

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
  private cdr = inject(ChangeDetectorRef);

  email = '';
  senha = '';
  twoFactorCode = '';
  twoFactorRecoveryCode = '';
  erro = '';
  carregando = false;
  lembrarDeMim = false;

  entrar(): void {
    if (this.carregando) {
      return;
    }

    this.erro = '';

    if (!this.email.trim() || !this.senha) {
      this.erro = 'Informe o e-mail e a senha.';
      this.cdr.detectChanges();
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.loginService.login({
      email: this.email.trim(),
      password: this.senha,
      lembrarDeMim: this.lembrarDeMim
    })
      .pipe(
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: () => {
          void this.router.navigate(['/Barra/home']);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro no login:', err);
          this.erro = this.obterMensagemErro(err);
          this.cdr.detectChanges();
        }
      });
  }

  private obterMensagemErro(err: HttpErrorResponse): string {
    if (err.status === 0) {
      return 'Não foi possível conectar à API. Verifique se o backend está online e se o CORS está configurado.';
    }

    if (err.status === 401) {
      return 'E-mail ou senha inválidos.';
    }

    if (err.status === 403) {
      return 'Sua conta não está liberada ou requer confirmação.';
    }

    if (err.status === 429) {
      return 'Muitas tentativas. Aguarde alguns instantes antes de tentar novamente.';
    }

    const corpo = err.error;
    if (typeof corpo === 'string' && corpo.trim()) {
      return corpo;
    }

    if (corpo && typeof corpo === 'object') {
      if (typeof corpo.detail === 'string' && corpo.detail.trim()) {
        return corpo.detail;
      }

      if (typeof corpo.title === 'string' && corpo.title.trim()) {
        return corpo.title;
      }

      if (corpo.errors && typeof corpo.errors === 'object') {
        const mensagens = Object.values(corpo.errors)
          .flat()
          .filter((mensagem): mensagem is string => typeof mensagem === 'string');

        if (mensagens.length) {
          return mensagens.join(' ');
        }
      }
    }

    if (err.status === 400) {
      return 'Dados inválidos. Confira o e-mail e a senha.';
    }

    return 'Não foi possível realizar o login. Tente novamente.';
  }
}