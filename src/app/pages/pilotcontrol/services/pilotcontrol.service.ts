import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPilotControlSymbols } from '../model/IPilotControlSymbols';


@Injectable({
  providedIn: 'root'
})
export class PilotcontrolService {
  updatedRow!: Observable<IPilotControlSymbols>;

  constructor(private http: HttpClient) { }

  getSymbol(){
    return this.http.get<IPilotControlSymbols>('https://macui-4158c-default-rtdb.firebaseio.com/symbols.json').pipe(map((res: any) => {
      let symbols: IPilotControlSymbols[] = [];
      for(let symbol in res){
        symbols.push({...res[symbol]});
      }
      return symbols;
    }))
  }

  bulkenabledisable(data: IPilotControlSymbols){
      return this.http.patch<IPilotControlSymbols>(`https://macui-4158c-default-rtdb.firebaseio.com/symbols/${data.id}.json`, data);
  }
}
