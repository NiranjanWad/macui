import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MpRoutingService } from '../../services/mp-routing.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DisableButtonService } from '../../services/disable-button.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mp-routing',
  templateUrl: './mp-routing.component.html',
  styleUrls: ['./mp-routing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MpRoutingComponent implements OnInit {

  columnDefs: ColDef[] = [
    { headerName: 'Product', field: 'product', checkboxSelection: true, headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true},
    { field: 'name'},
    { field: 'sessions'},
    { headerName: 'Connection Status', field: 'connection'},
    { headerName: 'Availability', field: 'isAvailable'},
    { field: 'comments'},
    { field: 'updatedBy'},

  ]

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  rowData$ = this.mpRoutingService.destinations$;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  gridApi: any;
  gridColumnApi: any;
  disableShutFlag$ = this.disableButtonsService.disableShutButtonAction$;
  disableUnShutFlag$ = this.disableButtonsService.disableUnshutButtonAction$;
  rows:any;
  
  constructor(private mpRoutingService: MpRoutingService, private disableButtonsService: DisableButtonService) {
  }

  ngOnInit(): void {
  }

  onGridReady(params: any){
    this.gridApi = params.api;
  }

  onSelectionChange(){
    //console.log(this.gridApi.getSelectedRows());
    this.rows = this.gridApi.getSelectedRows();
    this.disableButtonsService.disableButtons(this.rows);
  }

}
