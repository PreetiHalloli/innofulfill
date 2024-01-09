import { NgModule } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { AddressComponent } from './address/address.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddressListComponent } from './address-list/address-list.component';

@NgModule({
  declarations: [
    CommonLibComponent,
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    CommonLibComponent,
    AddressComponent,
    AddressListComponent
  ]
})
export class CommonLibModule { }
