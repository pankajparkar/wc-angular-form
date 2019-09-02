import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'waf-stencil',
  templateUrl: './stencil.component.html',
  styleUrls: ['./stencil.component.css']
})
export class StencilComponent implements OnInit {

  form = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('4', [Validators.required]),
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit () {
  }

}
