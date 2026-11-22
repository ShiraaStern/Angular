import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  orderForm = new FormGroup({
    date: new FormControl('', Validators.required),
    customerName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(10)
    ]),
    reason: new FormControl('', Validators.required),
    invoiceNumber: new FormControl(''),
    faultDescription: new FormControl('')
  });

ngOnInit() {
  this.orderForm.controls.reason.valueChanges.subscribe(value => {
    const invoice = this.orderForm.controls.invoiceNumber;
    const fault = this.orderForm.controls.faultDescription;

    if (value === 'newProduct') {
      invoice.setValidators(Validators.required);
      fault.clearValidators();
    } else {
      invoice.clearValidators();
      fault.setValidators(Validators.required);
    }

    invoice.updateValueAndValidity();
    fault.updateValueAndValidity();
  });
}
onSubmit() {
  if (this.orderForm.invalid) {
    this.orderForm.markAllAsTouched();
    return;
  }
  console.log(this.orderForm.value);
}
}
