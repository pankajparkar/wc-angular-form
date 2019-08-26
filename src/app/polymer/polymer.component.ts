import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'waf-polymer',
  templateUrl: './polymer.component.html',
  styleUrls: ['./polymer.component.css']
})
export class PolymerComponent implements OnInit {

  form = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit () {
  }
  
}
