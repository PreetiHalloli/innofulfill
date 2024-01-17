import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from '../address/address.component';
import { CommonLibService } from '../common-lib.service';

@Component({
  selector: 'lib-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {

  addressList: any;
  selectedAddress: string = '';

  constructor(private modalService: NgbModal, public service: CommonLibService){
    this.getListOfAddress()
  }

  selectAddress(event: any){
    this.selectedAddress = event.target.value;
  }

  open() {
    const modalRef = this.modalService.open(AddressComponent);
  }

  getListOfAddress(){
    this.service.addressLists('1234567890').subscribe((data)=>{
      this.addressList = data.data.allSchedule;
    })
  }

}
