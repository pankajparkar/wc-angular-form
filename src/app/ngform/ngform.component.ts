import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'waf-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {

  form = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('4', [Validators.required]),
    test: new FormControl('4', [Validators.required]),
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit () {
  }
  
}
