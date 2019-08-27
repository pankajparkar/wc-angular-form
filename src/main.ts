import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami/polyfills';
import { defineCustomElements } from '../../stencil-components/loader'

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/// <reference types="@stencil/core" />

if (environment.production) {
  enableProdMode();
}

webcomponentsReady()
  .then(() => {
    // requires "module": "esnext" in tsconfig.json "compilerOptions" and
    // "angularCompilerOptions": {
    //   "entryModule": "app/app.module#AppModule"
    // }
    return import('./app/app.module');
  })
  .then(({ AppModule }) => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch(err => console.error(err));
defineCustomElements(window);

class NewInput extends HTMLElement {
  constructor () {
    super();
    this.render();
  }

  render () {
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'closed'});
    var input = document.createElement('input');
    input.placeholder = 'Please enter value';
    input.type = 'text';
    shadow.appendChild(input);
  }
}

window.customElements.define('new-input', NewInput);