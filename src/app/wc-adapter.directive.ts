import { Directive, ElementRef, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[wafWcAdapter]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => WcAdapterDirective),
    }
  ]
})
export class WcAdapterDirective implements ControlValueAccessor {
  _elementRef: any;

  @Input() elementType: string = 'input';

  constructor(private el: ElementRef) { }

  onChange = _ => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.onChange(obj);
    // TODO: make it compatible with all other kinds of variable
    // this._elementRef.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit() {
    const elementType = this.elementType;
    const element = this.el.nativeElement;
    const shadow = element.shadowRoot;
    const elementName = element.localName;

    const tapEvent = tap((e: any) => {
      const value = e.target.value;
      // TODO: Do assign value
      // 1. Check validity
      this.onChange(value);
      this.onTouched();

      // 2. Assign validity
      // if(this.control.valid) {
      //   console.log('validity', this.control.valid)
      // }

      // 3. Assign value if valid
      // Already assigned
    })

    setTimeout(() => {
      let elRef =
        elementName === elementType
          ? element
          : shadow.querySelector(elementType),
        event;
      this._elementRef = elRef;
      // TODO: grab respective element and apply value
      switch (elementType) {
        case 'input':
        case 'textarea':
          // Bind input events and change value attribute
          event = fromEvent(elRef, 'input')
          break;
        case 'select':
          // Bind select events and change value attribute
          event = fromEvent(elRef, 'change')
          break;
        case 'checkbox':
          // Bind select events and change value attribute
          event = fromEvent(elRef, 'change')
          break;
        case 'radio':
          // Bind select events and change value attribute
          event = fromEvent(elRef, 'change')
          break;
        default:
          break;
      }
      event.pipe(tapEvent).subscribe();
    }, 1000); // TODO: Remove timer hack 
  }
}
