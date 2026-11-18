import { Injectable } from '@angular/core';
import JsBarcode from 'jsbarcode';

export interface CodigoBarrasFormato {
  formato: 'CODE128';
  largura: number;
  altura: number;
  exibirTexto: boolean;
  margem: number;
  corLinhas: string;
  corFundo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodigoBarrasService {
  readonly formatoPadrao: CodigoBarrasFormato = {
    formato: 'CODE128',
    largura: 2,
    altura: 60,
    exibirTexto: true,
    margem: 10,
    corLinhas: '#172033',
    corFundo: '#ffffff'
  };

  gerar(
    elemento: SVGSVGElement,
    codigo: string,
    formato: Partial<CodigoBarrasFormato> = {}
  ): boolean {
    const codigoNormalizado = codigo?.trim();
    if (!codigoNormalizado) {
      return false;
    }

    const configuracao = {
      ...this.formatoPadrao,
      ...formato
    };

    let valido = true;
    JsBarcode(elemento, codigoNormalizado, {
      format: configuracao.formato,
      width: configuracao.largura,
      height: configuracao.altura,
      displayValue: configuracao.exibirTexto,
      margin: configuracao.margem,
      lineColor: configuracao.corLinhas,
      background: configuracao.corFundo,
      fontSize: 14,
      valid: resultado => valido = resultado
    });

    return valido;
  }

  obterSvg(elemento: SVGSVGElement): string {
    return new XMLSerializer().serializeToString(elemento);
  }

  baixarSvg(elemento: SVGSVGElement, nomeArquivo: string): void {
    if (!elemento.querySelector('rect') && !elemento.querySelector('path')) {
      return;
    }

    const conteudo = this.obterSvg(elemento);
    const arquivo = new Blob([conteudo], {
      type: 'image/svg+xml;charset=utf-8'
    });
    const url = URL.createObjectURL(arquivo);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${nomeArquivo || 'codigo-barras'}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  }

  imprimir(elemento: SVGSVGElement, titulo: string): void {
    const conteudo = this.obterSvg(elemento);
    const janela = window.open('', '_blank', 'width=600,height=400');
    if (!janela) {
      return;
    }

    janela.document.write(`
      <!doctype html>
      <html>
        <head>
          <title>${this.escapeHtml(titulo || 'Código de barras')}</title>
          <style>
            body {
              display: grid;
              min-height: 90vh;
              place-items: center;
              font-family: Arial, sans-serif;
              text-align: center;
            }
            svg { max-width: 100%; }
          </style>
        </head>
        <body>
          ${titulo ? `<h2>${this.escapeHtml(titulo)}</h2>` : ''}
          ${conteudo}
        </body>
      </html>
    `);
    janela.document.close();
    janela.onload = () => janela.print();
  }

  private escapeHtml(valor: string): string {
    return valor
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
}
