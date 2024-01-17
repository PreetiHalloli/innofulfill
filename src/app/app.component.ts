import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent, AddressListComponent, BookingFormComponent, PaymentOptionsComponent } from 'common-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innofulfillLib';

  constructor(private modalService: NgbModal){
  }

  open() {
    const modalRef = this.modalService.open(AddressComponent);
  }

  openList() {
    const modalRef = this.modalService.open(AddressListComponent);
  }

  payment(){
    const modalRef = this.modalService.open(PaymentOptionsComponent);
  }

  bookingForm(){
    const modalRef = this.modalService.open(BookingFormComponent);
  }

  // openMap() {
  //   const modalRef = this.modalService.open(AddAddressComponent);
  // }

}
