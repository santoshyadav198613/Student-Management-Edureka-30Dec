import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('test', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      pan: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', []),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required]),
      }),
      cards: this.fb.array([
        this.buildForm()
      ])
    }
    );
  }

  buildForm() {
    return this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      expMonth: new FormControl('', [Validators.required]),
      expYear: new FormControl('', [Validators.required]),
    })
  }



  addCard(): void {
    let card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }

  removeCard(i: number): void {
    let card = this.customerForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }


  save() {
      console.log(this.customerForm.value);
      this.customerForm.reset();
  }

}
