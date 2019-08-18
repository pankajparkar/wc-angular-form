import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

class NewInput extends HTMLElement {
  constructor () {
    super();
    this.render();
  }

  render () {
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});
    var input = document.createElement('input');
    input.placeholder = 'Please enter value';
    input.type = 'text';
    shadow.appendChild(input);
  }
}

window.customElements.define('new-input', NewInput);