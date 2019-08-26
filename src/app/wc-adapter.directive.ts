import { Directive, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[wafWcAdapter][formControl],[wafWcAdapter][formControlName]'
})
export class WcAdapterDirective implements ControlValueAccessor {
  _elementRef: any;

  constructor(private el: ElementRef) { }

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.onChange(obj);
  }
  registerOnChange(fn: any): void {
    this.onTouched = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  ngOnInit () {
    const element = this.el.nativeElement;
    const input = element.localName;
    const shadow = element.shadowRoot;
    const elRef = input === 'input' ? 
      element:
      shadow.querySelector('input');
    this._elementRef = elRef;
  }
}