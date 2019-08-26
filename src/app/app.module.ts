import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, forwardRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppComponent } from './app.component';
import { WcAdapterDirective } from './wc-adapter.directive';
import { OrigamiModule } from '@codebakery/origami';
import { AppRoutingModule } from './app-routing.module';
import { NgformComponent } from './ngform/ngform.component';

const DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef((() => CustomElementDefaultValueAccessor)),
  multi: true
};

@Directive({
  selector: 'new-input',
  // template: '',
  host: {
      '(input)': '$any(this)._handleInput($event.target.value)',
      '(blur)': 'onTouched()',
      '(compositionstart)': '$any(this)._compositionStart()',
      '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
  },
  providers: [DEFAULT_VALUE_ACCESSOR]
}) 
class CustomElementDefaultValueAccessor extends DefaultValueAccessor {

}

@NgModule({
  declarations: [
    AppComponent,
    CustomElementDefaultValueAccessor,
    WcAdapterDirective,
    NgformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrigamiModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
