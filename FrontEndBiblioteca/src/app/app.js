import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
export class App {
    title = signal('FrontEndBiblioteca', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterOutlet], styles: [".Back[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  background: linear-gradient(135deg, #7f7f80, #a6a7aa, #ffffff);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet], template: "<!-- <app-login-component></app-login-component> -->\r\n<!-- app.component.html -->\r\n<router-outlet></router-outlet>\r\n", styles: [".Back {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 24px;\r\n  background: linear-gradient(135deg, #7f7f80, #a6a7aa, #ffffff);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 }); })();
