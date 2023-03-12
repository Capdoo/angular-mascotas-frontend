import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthreloadService {

  private messageSrcIsAdmin = new Subject<boolean>();
  messageSrcIsAdmin$ = this.messageSrcIsAdmin.asObservable();


  private messageSrcIsLogged = new Subject<boolean>();
  messageSrcIsLogged$ = this.messageSrcIsLogged.asObservable();


  constructor() { }

  sendMessageIsAdmin(messageAdmin:boolean){
    this.messageSrcIsAdmin.next(messageAdmin);
  }

  sendMessageIsLogged(messageLogged:boolean){
    this.messageSrcIsLogged.next(messageLogged);
  }

}
