import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  url: any;

  constructor(private http: HttpClient) {
  }

  addressLists(mobileNo: any): Observable<any>{
    const url= `https://devapis.delcaper.com/meta-api/meta/user/${mobileNo}?page=1&limit=10`;
    return this.http.get<any>(url);
  }

  addAddress(data: any): Observable<any>{
    const url= `https://devapis.delcaper.com/meta-api/meta/address-details`;
    return this.http.post<any>(url, data);
  }

  // https://devapis.delcaper.com/meta-api/api

}
