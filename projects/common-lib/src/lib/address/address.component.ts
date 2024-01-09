import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]+")]],
      address1: ['',[Validators.required, Validators.maxLength(50)]],
      address2: ['', [Validators.maxLength(50)]],
      pin: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern("[0-9]+")]],
      landmark: ['', [Validators.required]],
      state: ['', [Validators.required]],
      dist: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }


  addAddress(){
    debugger
    let values = this.addressForm.value;
    
  }


}
