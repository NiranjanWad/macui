import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { IPilotControlSymbols } from '../../model/IPilotControlSymbols';
import { bulkenabledisable } from '../../state/pilotcontrol.actions';

@Component({
  selector: 'app-pilotcontrol-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() count!:number;
  @Input() selectedSymbols!: IPilotControlSymbols[];

  isLydiaD!: boolean;
  isUma!: boolean;
  isSma!: boolean;
  isPdp!: boolean;
  isMso!: boolean;
  isDisabled: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  getDetails(event: Event){
    let ele = event.target as HTMLInputElement;
    this.isLydiaD = ele.value === 'isLydiaD' && ele.checked ? !this.isLydiaD : false; 
    this.isUma = ele.value === 'isUma' && ele.checked ? !this.isUma : false;
    this.isSma = ele.value === 'isSma' && ele.checked ? !this.isSma : false;
    this.isPdp = ele.value === 'isPdp' && ele.checked ? !this.isPdp : false;
    this.isMso = ele.value === 'isMso' && ele.checked ? !this.isMso : false;
    
    this.isDisabled = (this.isLydiaD || this.isMso || this.isPdp || this.isSma || this.isUma) ? false : true; 
  }

  bulkEnable(){
    console.log(this.selectedSymbols);
    let updatedSymbol!: IPilotControlSymbols;
    for(let data of this.selectedSymbols){
      updatedSymbol = {
        symbol:data.symbol,
        cusip: data.cusip,
        description: data.description,
        id: data.id,
        isLydiaD: this.isLydiaD ? true : data.isLydiaD,
        isUma: this.isUma ? true : data.isUma,
        isSma: this.isSma ? true : data.isSma,
        isPdp: this.isPdp ? true : data.isPdp,
        isMso: this.isMso ? true : data.isMso,
        updatedDateTime: data.updatedDateTime,
        updateReason: data.updateReason,
        updatedBy: 'Mandar',
        activeSecurity: data.activeSecurity
      }     
    }
    this.store.dispatch(bulkenabledisable({data: updatedSymbol}));
  }

  bulkDisable(){
    console.log(this.selectedSymbols);
    let updatedSymbol!: IPilotControlSymbols;
    for(let data of this.selectedSymbols){
      updatedSymbol = {
        symbol:data.symbol,
        cusip: data.cusip,
        description: data.description,
        id: data.id,
        isLydiaD: this.isLydiaD ? false : data.isLydiaD,
        isUma: this.isUma ? false : data.isUma,
        isSma: this.isSma ? false : data.isSma,
        isPdp: this.isPdp ? false : data.isPdp,
        isMso: this.isMso ? false : data.isMso,
        updatedDateTime: data.updatedDateTime,
        updateReason: 'Testing Niranjan',
        updatedBy: 'Niranjan',
        activeSecurity: data.activeSecurity
      }
    }
    this.store.dispatch(bulkenabledisable({data: updatedSymbol}))
  }

}
