import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { CRUDAction } from '../model/CRUDAction';
import { IMpRouting } from '../model/IMpRouting';

@Injectable({
  providedIn: 'root'
})
export class MpRoutingService {

  destinationsCRUDSubject = new Subject<CRUDAction<IMpRouting>>();
  destinationsCRUDAction$ = this.destinationsCRUDSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  handleError(errors: Error){
    return throwError(() => {
      return "Unknown error occured. Please try again";
    })
  }


  getDestinations(){
    return this.http.get<IMpRouting>("https://macui-4158c-default-rtdb.firebaseio.com/destinations.json").pipe(map((res:any) => {
      let destinationsData: IMpRouting[] = [];
      for(let destination in res){
        destinationsData.push( { ...res[destination]});
      }
      return destinationsData;     
    }),catchError(this.handleError));
  }

  updateDestinationDetailsOnServer(destinationData: IMpRouting): Observable<IMpRouting>{
    return this.http.patch<IMpRouting>(`https://macui-4158c-default-rtdb.firebaseio.com/destinations/${destinationData.id}.json`, destinationData);
  }

  

}

