import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CodigoBarrasFormato,
  CodigoBarrasService
} from '../../Service/codigo-barras-service';

@Component({
  standalone: true,
  selector: 'app-codigo-barras',
  imports: [CommonModule],
  templateUrl: './codigo-barras-component.html',
  styleUrl: './codigo-barras-component.css'
})
export class CodigoBarrasComponent implements AfterViewInit, OnChanges {
  private readonly codigoBarrasService = inject(CodigoBarrasService);

  @ViewChild('codigoSvg')
  private codigoSvg?: ElementRef<SVGSVGElement>;

  @Input({ required: true }) codigo = '';
  @Input() titulo = '';
  @Input() formato: Partial<CodigoBarrasFormato> = {};
  @Input() nomeArquivo = 'codigo-barras';

  valido = true;
  private inicializado = false;

  ngAfterViewInit(): void {
    this.inicializado = true;
    this.renderizar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.inicializado &&
      (changes['codigo'] || changes['formato'])
    ) {
      this.renderizar();
    }
  }

  baixar(): void {
    if (this.codigoSvg) {
      this.codigoBarrasService.baixarSvg(
        this.codigoSvg.nativeElement,
        this.nomeArquivo
      );
    }
  }

  imprimir(): void {
    if (this.codigoSvg) {
      this.codigoBarrasService.imprimir(
        this.codigoSvg.nativeElement,
        this.titulo
      );
    }
  }

  private renderizar(): void {
    if (!this.codigoSvg) {
      return;
    }

    this.valido = this.codigoBarrasService.gerar(
      this.codigoSvg.nativeElement,
      this.codigo,
      this.formato
    );
  }
}
