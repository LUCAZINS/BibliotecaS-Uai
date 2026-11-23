import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { LoginService } from '../../Service/login-service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha-component.html',
  styleUrl: './recuperar-senha-component.css'
})
export class RecuperarSenhaComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly loginService = inject(LoginService);
  private readonly cdr = inject(ChangeDetectorRef);

  email = '';
  codigo = '';
  novaSenha = '';
  confirmarSenha = '';
  etapaCodigo = false;
  carregando = false;
  erro = '';
  sucesso = '';

  ngOnInit(): void {
    this.email = String(this.route.snapshot.queryParamMap.get('email') ?? '').trim();
  }

  definirCodigo(valor: string): void {
    this.codigo = valor.replace(/\D/g, '').slice(0, 6);
  }

  enviarCodigo(): void {
    if (this.carregando) {
      return;
    }

    this.erro = '';
    this.sucesso = '';
    this.email = this.email.trim();

    if (!this.email) {
      this.erro = 'Informe o e-mail da sua conta.';
      this.cdr.detectChanges();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.erro = 'Informe um e-mail válido.';
      this.cdr.detectChanges();
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.loginService.esqueciSenha({ email: this.email })
      .pipe(finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: resposta => {
          this.etapaCodigo = true;
          this.sucesso = resposta.mensagem
            ?? 'Se o e-mail estiver cadastrado, você receberá as instruções de recuperação.';
          this.cdr.detectChanges();
        },
        error: (err: HttpErrorResponse) => {
          this.erro = this.obterMensagemErro(err);
          this.cdr.detectChanges();
        }
      });
  }

  redefinirSenha(): void {
    if (this.carregando) {
      return;
    }

    this.erro = '';
    this.sucesso = '';

    this.codigo = this.codigo.trim();
    if (!/^\d{6}$/.test(this.codigo)) {
      this.erro = 'O código deve conter exatamente 6 dígitos.';
      this.cdr.detectChanges();
      return;
    }

    if (!this.novaSenha) {
      this.erro = 'Informe a nova senha.';
      this.cdr.detectChanges();
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      this.erro = 'As senhas informadas não coincidem.';
      this.cdr.detectChanges();
      return;
    }

    this.carregando = true;
    this.cdr.detectChanges();

    this.loginService.redefinirSenha({
      email: this.email,
      codigo: this.codigo,
      novaSenha: this.novaSenha
    })
      .pipe(finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: resposta => {
          this.sucesso = resposta.mensagem ?? 'Senha redefinida com sucesso.';
          this.cdr.detectChanges();
        },
        error: (err: HttpErrorResponse) => {
          this.erro = this.obterMensagemErro(err);
          this.cdr.detectChanges();
        }
      });
  }

  voltarAoLogin(): void {
    void this.router.navigate(['/login']);
  }

  private obterMensagemErro(err: HttpErrorResponse): string {
    if (err.status === 0) {
      return 'Não foi possível conectar à API. Verifique se o backend está online e se o CORS está configurado.';
    }

    const corpo = err.error;
    if (typeof corpo === 'string' && corpo.trim()) {
      return corpo;
    }

    if (corpo && typeof corpo === 'object') {
      if (typeof corpo.mensagem === 'string' && corpo.mensagem.trim()) {
        return corpo.mensagem;
      }

      if (typeof corpo.detail === 'string' && corpo.detail.trim()) {
        return corpo.detail;
      }

      if (typeof corpo.title === 'string' && corpo.title.trim()) {
        return corpo.title;
      }

      if (corpo.erros && Array.isArray(corpo.erros)) {
        const mensagens = corpo.erros
          .filter((mensagem: unknown): mensagem is string => typeof mensagem === 'string');
        if (mensagens.length) {
          return mensagens.join(' ');
        }
      }
    }

    return 'Não foi possível concluir a solicitação. Tente novamente.';
  }
}
