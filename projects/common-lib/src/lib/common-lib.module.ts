import { NgModule } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { AddressComponent } from './address/address.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AddressListComponent } from './address-list/address-list.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ToasterComponent } from './toast/toaster.component';
import { ToasterContainerComponent } from './toast/toaster-container.component';
// import { HttpTransferCacheOptions } from '@angular/common/http'
@NgModule({
  declarations: [
    CommonLibComponent,
    AddressComponent,
    AddressListComponent,
    PaymentOptionsComponent,
    BookingFormComponent,
    ToasterComponent,
    ToasterContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // CommonModule,
    HttpClientModule,
    // MatFormFieldModule,
    // MatInputModule, 
    // MatButtonModule,
    // MatDatepickerModule,
    // MatRadioModule,
    // MatOptionModule,
    // MatSelectModule,
  ],
  exports: [
    CommonLibComponent,
    AddressComponent,
    AddressListComponent,
    PaymentOptionsComponent,
    BookingFormComponent,
    ToasterComponent,
    ToasterContainerComponent,
    // HttpTransferCacheOptions
  ]
})
export class CommonLibModule { }
