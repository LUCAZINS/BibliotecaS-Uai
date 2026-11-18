import { Injectable } from '@angular/core';
import JsBarcode from 'jsbarcode';
import * as i0 from "@angular/core";
export class CodigoBarrasService {
    formatoPadrao = {
        formato: 'CODE128',
        largura: 2,
        altura: 60,
        exibirTexto: true,
        margem: 10,
        corLinhas: '#172033',
        corFundo: '#ffffff'
    };
    gerar(elemento, codigo, formato = {}) {
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
    obterSvg(elemento) {
        return new XMLSerializer().serializeToString(elemento);
    }
    baixarSvg(elemento, nomeArquivo) {
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
    imprimir(elemento, titulo) {
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
    escapeHtml(valor) {
        return valor
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }
    static ɵfac = function CodigoBarrasService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CodigoBarrasService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CodigoBarrasService, factory: CodigoBarrasService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CodigoBarrasService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
