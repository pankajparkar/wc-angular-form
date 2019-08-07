import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'waf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = this.fb.group({
    firstName: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder) {

  }

  ngOninit () {
  }
}
