import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, forwardRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppComponent } from './app.component';

const DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef((() => CustomElementDefaultValueAccessor)),
  multi: true
};

@Directive({
  selector: 'new-input[formControlName] input,new-input',
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
    CustomElementDefaultValueAccessor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
