import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService, MeuUsuario, UsuarioSistema } from '../../Service/login-service';

export interface UsuarioPerfil {
  id: string;
  nome: string;
  email: string;
  emailConfirmado: boolean;
  funcoes: string[];
}

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil implements OnInit {
  private readonly loginService = inject(LoginService);
  private readonly cdr = inject(ChangeDetectorRef);

  usuario: UsuarioPerfil = {
    id: '',
    nome: '',
    email: '',
    emailConfirmado: false,
    funcoes: []
  };
  carregando = true;
  editando = false;
  salvando = false;
  nomeEdicao = '';
  erro = '';
  mensagem = '';
  criandoPerfil = false;
  erroCriacao = '';
  mensagemCriacao = '';
  novoPerfil = {
    nome: '',
    email: '',
    senha: ''
  };
  usuarios: UsuarioSistema[] = [];
  carregandoUsuarios = false;
  erroUsuarios = '';

  ngOnInit(): void {
    this.carregarPerfil();
  }

  carregarPerfil(): void {
    this.carregando = true;
    this.erro = '';
    this.cdr.detectChanges();

    this.loginService.getMeuUsuario().subscribe({
      next: (dados) => {
        this.usuario = this.normalizarUsuario(dados);
        this.nomeEdicao = this.usuario.nome;
        this.carregando = false;
        if (this.isAdmin) {
          this.carregarUsuarios();
        }
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar perfil:', erro);
        this.carregando = false;
        this.erro = 'Não foi possível carregar os dados do perfil.';
        this.cdr.detectChanges();
      }
    });
  }

  iniciarEdicao(): void {
    this.nomeEdicao = this.usuario.nome;
    this.erro = '';
    this.mensagem = '';
    this.editando = true;
    this.cdr.detectChanges();
  }

  cancelarEdicao(): void {
    this.nomeEdicao = this.usuario.nome;
    this.editando = false;
    this.erro = '';
    this.mensagem = '';
    this.cdr.detectChanges();
  }

  salvarNome(): void {
    const nome = this.nomeEdicao.trim();

    if (!nome) {
      this.erro = 'Informe um nome válido.';
      this.cdr.detectChanges();
      return;
    }

    this.salvando = true;
    this.erro = '';
    this.mensagem = '';
    this.cdr.detectChanges();

    this.loginService.atualizarMeuUsuario({ nome }).subscribe({
      next: (dados) => {
        this.usuario = {
          ...this.usuario,
          nome: dados.nome || nome
        };
        this.nomeEdicao = this.usuario.nome;
        this.editando = false;
        this.salvando = false;
        this.mensagem = 'Nome atualizado com sucesso.';
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao atualizar perfil:', erro);
        this.salvando = false;
        this.erro = 'Não foi possível atualizar o nome.';
        this.cdr.detectChanges();
      }
    });
  }

  get inicial(): string {
    return this.usuario.nome.trim().charAt(0).toUpperCase() || 'U';
  }

  get isAdmin(): boolean {
    return this.usuario.funcoes.some(funcao =>
      funcao.trim().toLowerCase() === 'admin'
    );
  }

  criarPerfil(): void {
    const nome = this.novoPerfil.nome.trim();
    const email = this.novoPerfil.email.trim();
    const senha = this.novoPerfil.senha;

    this.erroCriacao = '';
    this.mensagemCriacao = '';

    if (!nome || !email || !senha) {
      this.erroCriacao = 'Preencha nome, e-mail e senha.';
      this.cdr.detectChanges();
      return;
    }

    this.criandoPerfil = true;
    this.cdr.detectChanges();

    this.loginService.criarUsuario({ nome, email, senha }).subscribe({
      next: () => {
        this.novoPerfil = { nome: '', email: '', senha: '' };
        this.criandoPerfil = false;
        this.mensagemCriacao = 'Perfil criado com sucesso.';
        this.carregarUsuarios();
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao criar perfil:', erro);
        this.criandoPerfil = false;
        this.erroCriacao =
          erro?.error?.mensagem ||
          'Não foi possível criar o perfil.';
        this.cdr.detectChanges();
      }
    });
  }

  carregarUsuarios(): void {
    this.carregandoUsuarios = true;
    this.erroUsuarios = '';
    this.cdr.detectChanges();

    this.loginService.getTodosUsuarios().subscribe({
      next: usuarios => {
        this.usuarios = usuarios;
        this.carregandoUsuarios = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar usuários:', erro);
        this.carregandoUsuarios = false;
        this.erroUsuarios =
          erro?.status === 403
            ? 'Você não possui permissão para visualizar os usuários.'
            : 'Não foi possível carregar os usuários.';
        this.cdr.detectChanges();
      }
    });
  }

  private normalizarUsuario(dados: MeuUsuario): UsuarioPerfil {
    return {
      id: dados.id || 'Não informado',
      nome: dados.nome?.trim() || 'Usuário da biblioteca',
      email: dados.email || 'Não informado',
      emailConfirmado: dados.emailConfirmado,
      funcoes: dados.funcoes?.filter(funcao => funcao.trim()) || ['Usuário']
    };
  }
}
