import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Toast } from './toast.interface';
import { ToastType } from './toast.type';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  subject: Subject<Toast>;
  toast$: Observable<Toast>;

  constructor() {
    this.subject = new Subject<Toast>();
    this.toast$ = this.subject.asObservable()
      .pipe(filter(toast => toast !== null));
  }

  show(type: ToastType, title?: any, body?: any, delay?: any) {
    this.subject.next({ type, title, body, delay });
  }
}