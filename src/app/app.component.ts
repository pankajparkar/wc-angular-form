import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'waf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup

  constructor(private fb: FormBuilder) {

  }

  ngOninit () {
    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }
}
