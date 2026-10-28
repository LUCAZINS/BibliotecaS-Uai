import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  AlugatarioEstatisticas,
  AlugatarioService
} from '../../Service/alugatarioService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-alugatario-detalhes',
  styleUrl: './alugatario-detalhes.css',
  templateUrl: './alugatario-detalhes.html',
})
export class AlugatarioDetalhesComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private service = inject(AlugatarioService);
  private cdr = inject(ChangeDetectorRef);

  locatario?: AlugatarioEstatisticas;
  carregando = true;
  erro = '';
  editando = false;
  salvando = false;
  mensagem = '';
  private locatarioId = 0;

  formulario = {
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cpf: '',
    dataNascimento: '',
    livrosAlugados: ''
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.locatarioId = id;

    if (!Number.isInteger(id) || id <= 0) {
      this.erro = 'Locatário inválido.';
      this.carregando = false;
      this.cdr.detectChanges();
      return;
    }

    this.service.buscarEstatisticas(id).subscribe({
      next: dados => {
        this.locatario = dados;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao buscar estatísticas do locatário:', erro);
        this.erro =
          erro?.error?.mensagem ||
          erro?.error?.message ||
          'Não foi possível carregar os detalhes do locatário.';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  abrirEdicao(): void {
    if (!this.locatario) {
      return;
    }

    this.formulario = {
      nome: this.locatario.nome || '',
      email: this.locatario.email || '',
      telefone: this.locatario.telefone || '',
      endereco: this.locatario.endereco || '',
      cpf: this.locatario.cpf || '',
      dataNascimento: this.locatario.dataNascimento?.slice(0, 10) || '',
      livrosAlugados: this.locatario.livrosAlugados || ''
    };
    this.mensagem = '';
    this.editando = true;
  }

  cancelarEdicao(): void {
    if (!this.salvando) {
      this.editando = false;
      this.mensagem = '';
    }
  }

  salvarEdicao(): void {
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
    const cpf = this.formulario.cpf.trim()
      ? this.formatarCpf(this.formulario.cpf)
      : this.locatario?.cpf || '';

    this.service.atualizar(this.locatarioId, {
      nome: this.formulario.nome.trim(),
      email: this.formulario.email.trim(),
      telefone: this.formulario.telefone,
      endereco: this.formulario.endereco,
      cpf,
      dataNascimento: this.formulario.dataNascimento,
    }).subscribe({
      next: () => {
        this.editando = false;
        this.salvando = false;
        this.carregarDetalhes();
      },
      error: erro => {
        console.error('Erro ao atualizar locatário:', erro);
        this.mensagem =
          erro?.error?.mensagem ||
          erro?.error?.message ||
          'Não foi possível atualizar o locatário.';
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

  formatarData(data?: string): string {
    if (!data) {
      return 'Não informado';
    }

    const valor = new Date(data);
    return Number.isNaN(valor.getTime())
      ? 'Não informado'
      : valor.toLocaleDateString('pt-BR');
  }

  private carregarDetalhes(): void {
    this.carregando = true;
    this.service.buscarEstatisticas(this.locatarioId).subscribe({
      next: dados => {
        this.locatario = dados;
        this.carregando = false;
        this.salvando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao recarregar detalhes do locatário:', erro);
        this.erro = 'Não foi possível atualizar os detalhes do locatário.';
        this.carregando = false;
        this.salvando = false;
        this.cdr.detectChanges();
      }
    });
  }
}