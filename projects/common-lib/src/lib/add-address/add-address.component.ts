import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { AddressDto, AddressOptions } from '../common-lib.model';
// import {Loader} from '@googlemaps/js-api-loader';

export function patternValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = <string>control.value;
    value = value?.replace(/\s/g, '').replace('+91', '').replace('+', '').replace('-', '');
    const validate = value?.length !== 10 && value?.length >= 1;
    return validate ? {mobileError: {value: control.value}} : null;
  };
}

@Component({
  selector: 'lib-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  // marker: google.maps.Marker|undefined;
  // @ViewChild('mapElement', {static: true}) mapElement: ElementRef|undefined;
  // @ViewChild('searchInput', {static: true}) searchInput: ElementRef|undefined;
  // @ViewChild('zipCode', {static: true}) zipCode: ElementRef|undefined;
  // @ViewChild('address1', {static: true}) address1: ElementRef|undefined;
  // autocomplete: google.maps.places.Autocomplete|undefined;
  // addressForm: FormGroup;
  // private _address: AddressDto = {};
  // @Input() title: string|undefined;
  // @Input() addressOptions: AddressOptions|undefined;
  // @Output() addressUpdated = new EventEmitter<AddressDto>();
  // @Output() formValid = new EventEmitter<boolean>();
  // @Input() hideButtons = false;
  // @Input() hideDisplayName = false;
  // updatedFields:any = {};
  // places: any;
  // latlng: any;
  // public _dropPhone: any;
  // data: any;
  // latitudeCenter: any;
  // longitudeCenter: any;
  // loadMapLatLong = false;
  // validZip = true;
  // currentZip = ""

  // @Input() set dropPointPhone(value:any) {
  //   this._dropPhone = value;
  // }

  // @Input() set address(value: AddressDto) {
  //   this._address = value;
  //   this.SetAddress();
  // }

  // get address(): AddressDto {
  //   this._address = this.addressForm.value;
  //   return {...this._address, ...this.updatedFields};
  // }
  // @Output() pincodeUpdated = new EventEmitter<any>();

  // constructor(private fb: FormBuilder) {
  //   this.addressForm = this.fb.group({
  //     name: ['', Validators.required],
  //     phone: ['', [Validators.required, patternValidator(), Validators.minLength]],
  //     email: ['', Validators.email],
  //     address1: ['',[Validators.required,Validators.maxLength(50)]],
  //     address2: ['',Validators.maxLength(50)],
  //     zip: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
  //     state: [''],
  //     city: [''],
  //     title: [''],
  //     latitude: [''],
  //     longitude: [''],
  //   });
  // }

  // ngOnInit(): void {
  //   this.SetAddress();
  //   this.LoadMap();
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.addressForm.valueChanges.subscribe((changes) => {
  //     this.formValid.emit(this.addressForm.valid);
  //   });
  // }

  // LoadMap() {
  //   const loader = new Loader({
  //     apiKey: "this.environment.GOOGLE_API_KEY",
  //     libraries: ['places'],
  //     version: 'weekly',
  //     region: 'IN',
  //     language: 'EN'
  //   });

  //   loader.load().then(() => {

  //     let location;
  //     if (this.loadMapLatLong) {
  //       location = {lat: this.updatedFields['latitude'] , lng: this.updatedFields['longitude']};
  //     } else {
  //       if (this.latlng.length > 0) {
  //         this.loadMapLatLong = true;
  //         location = {lat: this.latlng[1], lng: this.latlng[0]};
  //       } else {
  //         location = {lat: 23.0204975, lng: 72.4393108};
  //       }
  //     }

  //     const element = this.mapElement?.nativeElement;
  //     // document.getElementsByName('map')[0];
  //     const map = new google.maps.Map(element, {
  //       center: location,
  //       zoom: 17,
  //     });

  //     this.marker = new google.maps.Marker({
  //       position: location,
  //       map: map,
  //       draggable: true,
  //     });

  //     if (this.loadMapLatLong) {
  //       new google.maps.Circle({
  //         strokeColor: "#FF0000",
  //         strokeOpacity: 0.8,
  //         strokeWeight: 2,
  //         fillColor: "#FF0000",
  //         fillOpacity: 0.35,
  //         map: map,
  //         center: location,
  //         radius: 200,
  //       });
  //     }

  //     const searchBox = new google.maps.places.SearchBox(this.searchInput?.nativeElement);

  //     this.marker.addListener('dragend', () => {

  //       this.updatedFields['latitude'] = this.marker?.getPosition()?.lat();
  //       this.updatedFields['longitude'] = this.marker?.getPosition()?.lng();

  //       let from;
  //       if (this.latitudeCenter) {
  //         from = new google.maps.LatLng(this.latitudeCenter, this.longitudeCenter);
  //       } else {
  //         from = new google.maps.LatLng(this.latlng[1], this.latlng[0]);
  //       }

  //       const to = new google.maps.LatLng(this.updatedFields['latitude'], this.updatedFields['longitude']);
  //       if (google.maps.geometry.spherical.computeDistanceBetween(from, to) <= 200) {
          
  //       } else {

  //         if (this.latitudeCenter) {
  //           this.updatedFields['latitude'] = this.latitudeCenter;
  //           this.updatedFields['longitude'] = this.longitudeCenter;
  //         } else {
  //           this.updatedFields['latitude'] = this.latlng[1];
  //           this.updatedFields['longitude'] = this.latlng[0];
  //         }

  //         // this.utilService.displayToastMessage("Marker not move out of 200 meter radius", "ERROR");
  //         this.loadMapLatLong = true;
  //         this.LoadMap();
  //       }
  //       ///////////////////////
  //       map.setCenter({lat: this.marker?.getPosition()?.lat()!, lng: this.marker?.getPosition()?.lng()!});
  //     });

  //     searchBox.addListener('places_changed', () => {
  //       this.validZip = true;

  //       if (!this._address) {
  //         this._address = {};
  //       }

  //        this.places = searchBox?.getPlaces();

  //       const place = this.places[0].address_components;
  //       if (place) {
  //         this.updatedFields['latitude'] = this.places[0]?.geometry?.location?.lat()!;
  //         this.updatedFields['longitude'] = this.places[0]?.geometry?.location?.lng();
  //         map.setCenter({lat: this.places[0]?.geometry?.location?.lat()!, lng: this.places[0].geometry.location.lng()});
  //         if (!this.marker) {
  //           this.marker = new google.maps.Marker({
  //             position: {lat: this.places[0].geometry.location.lat(), lng: this.places[0].geometry.location.lng()},
  //             map: map,
  //             draggable: true,
  //           });
  //         } else {
  //           this.marker.setPosition({lat: this.places[0].geometry.location.lat(), lng: this.places[0].geometry.location.lng()});
  //         }

  //         // console.log('place obj', place);

  //         // Arrays of required place types in address1 and address2 fields.
  //         const addressOneTypesArr: string[] = ['floor', 'premise', 'room', 'street_number', 'subpremise'];
  //         const addressTwoTypesArr: string[] = ['sublocality_level_4', 'sublocality_level_5', 'landmark', 'neighborhood', 'locality', 'postal_town', 'route', 'street_address', 'sublocality'];

  //         //Arrays of addressOne and addressTwo.
  //         const addressOne: string[] = [];
  //         const addressTwo: string[] = [];

  //         for (const plcObj of place) {
  //           //If place object includes required place-type then push that type's long_name into address array.
  //           const isAddressOneTypeFounded = plcObj.types.some((placeType: any) => addressOneTypesArr.includes(placeType));
  //           if (isAddressOneTypeFounded && !addressOne.includes(plcObj.long_name)) {
  //             addressOne.push(plcObj.long_name);
  //           }

  //           const isAddressTwoTypeFounded = plcObj.types.some((placeType: any) => addressTwoTypesArr.includes(placeType));
  //           if (isAddressTwoTypeFounded && !addressTwo.includes(plcObj.long_name)) {
  //             addressTwo.push(plcObj.long_name);
  //           }

  //           if (plcObj.types[0] === 'postal_code') {
  //             this.data['zip'] = plcObj.long_name;
  //             // this.data['zip'] = plcObj.long_name;
  //             // this.addressForm.controls['zip'].disable({onlySelf: true});
  //             // this.addressForm.controls['city'].disable({onlySelf: true});
  //             // this.addressForm.controls['state'].disable({onlySelf: true});
  //             this.currentZip =   this.data['zip'];
  //           } else {
  //             this.data['zip'] = '';
  //             this.currentZip = '';
  //           }

  //           if (plcObj.types[0] === 'locality') {
  //             this.data['city'] = plcObj.long_name
  //             // this.addressForm.get('city').setValue(plcObj.long_name);
  //           }
  //           if (plcObj.types[0] === 'administrative_area_level_1') {
  //             this.data['state'] = plcObj.long_name
  //             // this.addressForm.get('state').setValue(plcObj.long_name);
  //           }
  //         }

  //         //String of addressOne and addressTwo
  //         const address1: string = addressOne.join(', ');
  //         const address2: string = addressTwo.join(', ');
  //         this.data['address1'] = address1;
  //         this.data['address2'] = address2;
  //         // this.addressForm.get('address1').setValue(address1);
  //         // this.addressForm.get('address2').setValue(address2);
  //       }
  //       setTimeout(() => {
  //         this.mapAddressDetails(this.data);
  //         this.latitudeCenter = this.updatedFields['latitude'];
  //         this.longitudeCenter = this.updatedFields['longitude'];

  //         if (this.updatedFields['latitude'] && this.updatedFields['longitude']) {

  //           const locationLatLog = {lat: this.updatedFields['latitude'], lng: this.updatedFields['longitude']};
  //           const cityCircle = new google.maps.Circle({
  //             strokeColor: "#FF0000",
  //             strokeOpacity: 0.8,
  //             strokeWeight: 2,
  //             fillColor: "#FF0000",
  //             fillOpacity: 0.35,
  //             map: map,
  //             center: locationLatLog,
  //             radius: 200,
  //           });
  //         }
  //         //// END MAP ///

  //         this.address1?.nativeElement.focus();
  //       }, 100);
  //       this.loadMapLatLong = true;
  //       this.LoadMap();

  //     });

      
  //   });
  // }


  // private SetAddress() {
  //   if (this._address) {
  //     this.addressForm.markAllAsTouched();
  //     this.addressForm.controls['name'].setValue(this._address.name);
  //     this.addressForm.controls['phone'].setValue(this._address.phone);
  //     this.addressForm.controls['email'].setValue(this._address.email);
  //     this.addressForm.controls['address1'].setValue(this._address.address1);
  //     this.addressForm.controls['address2'].setValue(this._address.address2);
  //     this.addressForm.controls['zip'].setValue(this._address.zip);
  //     this.addressForm.controls['state'].setValue(this._address.state);
  //     this.addressForm.controls['city'].setValue(this._address.city);
  //     this.addressForm.controls['title'].setValue(this._address.title);
  //     this.addressForm.controls['latitude'].setValue(this._address.latitude);
  //     this.addressForm.controls['longitude'].setValue(this._address.longitude);
  //     if (Object.keys(this._address).length > 0) {
  //       // this.latlng = this._address['geoLocation']['coordinates'];
  //       if (this._address.longitude || this._address.latitude) {
  //         this.latlng = [this._address.longitude, this._address.latitude];
  //         if (!this._address.longitude || (!this._address.latitude && this._address['geoLocation']['coordinates'])) {
  //           this.latlng = this._address['geoLocation']['coordinates'];
  //         }
  //         this.LoadMap();
  //       }
  //     }
  //   }
  //   if (this._dropPhone) {
  //     this.addressForm.controls['phone'].setValue(this._dropPhone);
  //   }
  // }

  // get f() {
  //   return this.addressForm.controls;
  // }

  // onKeyUp(event: KeyboardEvent) {
  //   const pattern = /[0-9\\+\-\\ ]/g;
  //   if (!pattern.test(event.key) && event.key !== 'Backspace') {
  //     event.preventDefault();
  //     return false;
  //   }
  //   return true;
  // }


  // decimalFilter(event: any) {
  //   const reg = /^-?\d*(\.\d{0,2})?$/;
  //   const input = event.target.value + String.fromCharCode(event.charCode);

  //   if (!reg.test(input)) {
  //     event.preventDefault();
  //   }
  // }

  // onKeyUpZip(event: KeyboardEvent) {
  //   const pattern = /[0-9]/g;
  //   if (!pattern.test(event.key) && event.key !== 'Backspace') {
  //     event.preventDefault();
  //     return false;
  //   }
  //   this.validZip = false;
  //   return true;
  // }

  // onRemoveSpace(event: any, type: any) {
  //   console.log("@@@@@@@@", event);
  //   let name = event.target.value.trimStart();
  //   this.addressForm.controls[type].setValue(name);
  // }

  // onSubmit() {
  //   if (this.addressForm.valid) {
  //     Object.keys(this.addressForm.value).forEach((e) => {
  //       // if (!this._address[e] || this._address[e] !== this.addressForm.value[e]) {
  //         this.updatedFields[e] = this.addressForm.value[e];
  //       // }
  //     });
  //     this.addressUpdated.emit(this.updatedFields);
  //   }
  // }

  // getUpdatedFields() {
  //   if (!this.updatedFields) {
  //     this.updatedFields = {};
  //   }

  //   // const dirtyFields = Object.entries(this.addressForm.controls).filter(value => value[1].dirty);
  //   // // this.updatedFields = [...dirtyFields, ...this.updatedFields];

  //   // Object.keys(dirtyFields).forEach(k => {
  //   //   this.updatedFields[k] = dirtyFields[k];
  //   // });

  //   Object.keys(this.addressForm.controls).forEach((c) => {
  //     if (this.addressForm.controls[c].dirty) {
  //       this.updatedFields[c] = this.addressForm.value[c];
  //     }
  //   });

  //   return this.updatedFields;
  // }

  // mapAddressDetails(data:any) {
  //   this.addressForm.controls['address1'].setValue(data['address1'])
  //   this.addressForm.controls['address2'].setValue(data['address2'])
  //   this.addressForm.controls['zip'].setValue(data['zip'])
  //   this.addressForm.controls['city'].setValue(data['city'])
  //   this.addressForm.controls['state'].setValue(data['state'])
  // }

  // reset() {
  //   if (this._address) {
  //     this.SetAddress();
  //   } else {
  //     this.addressForm.reset();
  //   }
  // }

  // pincodeInputChanged(zipValue: any) {
  //   if(zipValue.length){
  //     const pincode = zipValue;
  //     const obj = {
  //       currentAddress : this.data,
  //       pincode : pincode
  //     }
  //     this.pincodeUpdated.emit(obj);
  //   }
  // }

}
