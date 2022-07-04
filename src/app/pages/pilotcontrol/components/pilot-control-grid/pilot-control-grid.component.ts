import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IPilotControlSymbols } from '../../model/IPilotControlSymbols';
import { loadsymbols } from '../../state/pilotcontrol.actions';
import { getSymbols } from '../../state/pilotcontrol.selector';

@Component({
  selector: 'app-pilot-control-grid',
  templateUrl: './pilot-control-grid.component.html',
  styleUrls: ['./pilot-control-grid.component.css']
})
export class PilotControlGridComponent implements OnInit {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  columnDefs: ColDef[] = [
    { headerName: 'SYMBOL', field: 'symbol', checkboxSelection: true, headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true},
    { headerName: 'CUSIP', field: 'cusip'},
    { headerName: 'DESCRIPTION', field: 'description'},
    { headerName: 'LYDIA D', field: 'isLydiaD'},
    { headerName: 'UMA', field: 'isUma'},
    { headerName: 'SMA', field: 'isSma'},
    { headerName: 'PDP', field: 'isPdp'},
    { headerName: 'MSO', field: 'isMso'},
    { headerName: 'LAST UPDATED DATE TIME', field: 'updatedDateTime'},
    { headerName: 'UPDATE REASON', field: 'updateReason'},
    { headerName: 'UPDATED BY', field: 'updatedBy'},
    { headerName: 'ACTIVE SECURITY', field: 'activeSecurity'}
  ]

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  
  gridApi: any;
  rowData$!: Observable<IPilotControlSymbols[]>;

  @Output() selectedRowCount = new EventEmitter<number>();
  @Output() selectedSymbols = new EventEmitter<IPilotControlSymbols[]>();

  constructor(private store: Store) { }

  onGridReady(params: any){
    this.gridApi = params.api;
  }

  onSelectionChange(){
    let rowData = this.gridApi.getSelectedRows();
    let rowCount = rowData.length;

    this.selectedRowCount.emit(rowCount);
    
    let symbols: IPilotControlSymbols[] = []; 
    for(let data of rowData){
      symbols.push(data);
    }

    this.selectedSymbols.emit(symbols);
  //console.log(symbols);
  }

  ngOnInit(): void {
    this.store.dispatch(loadsymbols());
    this.rowData$ = this.store.select(getSymbols);
  }

}
