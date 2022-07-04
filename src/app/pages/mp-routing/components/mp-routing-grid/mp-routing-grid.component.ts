import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { IMpRouting } from '../../model/IMpRouting';
import { DisableButtonService } from '../../services/disable-button.service';
import { MpRoutingService } from '../../services/mp-routing.service';
import { loadDestinations } from '../../state/mprouting.actions';
import { getDestinations } from '../../state/mprouting.selector';
import { ShutUnshutButtonsComponent } from './cell-renderers/shut-unshut-buttons/shut-unshut-buttons.component';

@Component({
  selector: 'app-mp-routing-grid',
  templateUrl: './mp-routing-grid.component.html',
  styleUrls: ['./mp-routing-grid.component.css']
})
export class MpRoutingGridComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  @Output() selectedRows = new EventEmitter<any>();
  @Output() selectedRowIds = new EventEmitter<any>();
  
  columnDefs: ColDef[] = [
    { headerName: 'Product', field: 'product', checkboxSelection: true, headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true},
    { field: 'name'},
    { field: 'sessions'},
    { headerName: 'Connection Status', field: 'connection'},
    { headerName: 'Availability', field: 'isAvailable'},
    { field: 'comments'},
    { field: 'updatedBy'},
    {
      headerName: 'Action',
      cellRenderer: ShutUnshutButtonsComponent
    },
  ]

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  
  gridApi: any;
  rowData$!: Observable<IMpRouting[]>;
  
  constructor(private disableButtonsService: DisableButtonService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadDestinations());
    this.rowData$ = this.store.select(getDestinations)
  }

  onGridReady(params: any){
    this.gridApi = params.api;
  }

  onSelectionChange(){
    //console.log(this.gridApi.getSelectedRows());
    let rows = this.gridApi.getSelectedRows();
    this.disableButtonsService.disableButtons(rows);
    let ids: number[] = [];
    rows.forEach((element: { id: any }) => {
      ids.push(element.id)
    });
    this.selectedRowIds.emit(ids);
    this.selectedRows.emit(rows);
  }

}
