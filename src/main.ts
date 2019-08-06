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
    const element = `
    <div>
      <input type="text" placeholder="test" />
    </div>
    `
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});
    var div = document.createElement('div');
    div.innerHTML = element;
    shadow.appendChild(div);
  }
}

window.customElements.define('new-input', NewInput);