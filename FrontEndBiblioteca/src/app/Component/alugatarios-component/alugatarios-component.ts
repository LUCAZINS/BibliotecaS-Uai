import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { Alugatario, AlugatarioService } from '../../Service/alugatarioService';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  standalone: true,
  selector: 'app-alugatarios-component',
  styleUrl: './alugatarios-component.css',
  templateUrl: './alugatarios-component.html',
})
export class AlugatariosComponent implements OnInit {

  private service = inject(AlugatarioService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  locatarios: Alugatario[] = [];
  busca = '';
  cadastroAberto = false;
  salvando = false;
  mensagem = '';
  formulario = {
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cpf: '',
    dataNascimento: ''
  };

  ngOnInit(): void {
    this.carregarLocatarios();
  }

  carregarLocatarios(): void {
    this.service.listar().subscribe({
      next: (dados) => {
        this.locatarios = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar locatários:', erro);
        this.cdr.detectChanges();
      }
    });
  }

  get locatariosFiltrados(): Alugatario[] {
    const termo = this.busca.trim().toLowerCase();

    if (!termo) {
      return this.locatarios;
    }

    return this.locatarios.filter(locatario =>
      locatario.nome?.toLowerCase().includes(termo) ||
      locatario.cpf?.toLowerCase().includes(termo) ||
      locatario.telefone?.toLowerCase().includes(termo)
    );
  }

  abrirDetalhes(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate(['/Barra/locatarios', id]);
  }

  novoLocatario(): void {
    this.formulario = {
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      cpf: '',
      dataNascimento: ''
    };
    this.mensagem = '';
    this.cadastroAberto = true;
  }

  fecharCadastro(): void {
    if (!this.salvando) {
      this.cadastroAberto = false;
      this.mensagem = '';
    }
  }

  salvarLocatario(): void {
    this.mensagem = '';

    if (!this.formulario.nome.trim()) {
      this.mensagem = 'Informe o nome do locatário.';
      return;
    }

    if (!this.emailValido(this.formulario.email)) {
      this.mensagem = 'Informe um e-mail válido ou deixe o campo vazio.';
      return;
    }

    if (this.formulario.cpf && !this.cpfValido(this.formulario.cpf)) {
      this.mensagem = 'Informe um CPF válido.';
      return;
    }

    this.salvando = true;
    this.service.criar({
      nome: this.formulario.nome.trim(),
      email: this.formulario.email.trim(),
      telefone: this.formulario.telefone,
      endereco: this.formulario.endereco,
      cpf: this.formulario.cpf ? this.formatarCpf(this.formulario.cpf) : '',
      dataNascimento: this.formulario.dataNascimento
    }).subscribe({
      next: () => {
        this.cadastroAberto = false;
        this.salvando = false;
        this.carregarLocatarios();
      },
      error: erro => {
        console.error('Erro ao cadastrar locatário:', erro);
        this.mensagem =
          erro?.error?.mensagem ||
          erro?.error?.message ||
          'Não foi possível cadastrar o locatário.';
        this.salvando = false;
        this.cdr.detectChanges();
      }
    });
  }

  emailValido(email: string): boolean {
    const valor = email.trim();
    return !valor || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  cpfValido(cpf: string): boolean {
    const numeros = cpf.replace(/\D/g, '');
    if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
      return false;
    }

    const calcularDigito = (tamanho: number): number => {
      let soma = 0;
      for (let indice = 0; indice < tamanho; indice++) {
        soma += Number(numeros[indice]) * (tamanho + 1 - indice);
      }
      const resto = (soma * 10) % 11;
      return resto === 10 ? 0 : resto;
    };

    return calcularDigito(9) === Number(numeros[9]) &&
      calcularDigito(10) === Number(numeros[10]);
  }

  formatarCpf(cpf: string): string {
    const numeros = cpf.replace(/\D/g, '').slice(0, 11);
    return numeros
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
  }

  atualizarCpf(valor: string): void {
    this.formulario.cpf = this.formatarCpf(valor);
  }

  atualizarTelefone(valor: string): void {
    this.formulario.telefone = valor.replace(/\D/g, '');
  }
}
