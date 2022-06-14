import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisableButtonService {

  private disableShutButtonSubject = new BehaviorSubject<boolean>(true);
  disableShutButtonAction$ = this.disableShutButtonSubject.asObservable();

  private disableUnshutButtonSubject = new BehaviorSubject<boolean>(true);
  disableUnshutButtonAction$ = this.disableUnshutButtonSubject.asObservable();


  constructor() { }

  disableButtons(rows: any){
    if(rows.length == 0){
      this.disableShutButtonSubject.next(true);
      this.disableUnshutButtonSubject.next(true);
    }
    else if(rows.length == 1 && rows[0].connection == true){
      this.disableShutButtonSubject.next(false);
      this.disableUnshutButtonSubject.next(true);
    }
    else if(rows.length == 1 && rows[0].connection == false){
      this.disableUnshutButtonSubject.next(false);
      this.disableShutButtonSubject.next(true);
    }
    else if(rows.length > 1){
      this.disableShutButtonSubject.next(false);
      this.disableUnshutButtonSubject.next(false);
    }
  }
}
