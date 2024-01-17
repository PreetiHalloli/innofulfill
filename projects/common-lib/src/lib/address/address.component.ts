import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonLibService } from '../common-lib.service';
import { NgbActiveModal, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from '../toast/toaster.service';
@Component({
  selector: 'lib-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, public service: CommonLibService,
    public activeModal: NgbActiveModal, private toaster: ToasterService) {
    this.addressForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', [Validators.required]],
      country_code: '+91',
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]+")]],
      address1: ['',[Validators.required, Validators.maxLength(50)]],
      address2: ['', [Validators.maxLength(50)]],
      pin: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern("[0-9]+")]],
      landmark: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  addAddress(){
    debugger
    let values = this.addressForm.value;
    values.dist = values.city;
    values.pin = +values.pin;
    this.service.addAddress(values).subscribe((data)=>{
      console.log("ababa", values);
      this.toaster.show('success', 'dc', 'Address added successfully', 3000);
      this.activeModal.close();
    },
    (err)=>{
      debugger
      this.toaster.show('error', 'dc', 'Got error', 3000);
    })
    
  }


}
