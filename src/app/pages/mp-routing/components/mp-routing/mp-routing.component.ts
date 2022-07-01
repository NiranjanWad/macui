import { ChangeDetectionStrategy, Component, OnInit, Output, ViewChild } from '@angular/core';
import { DisableButtonService } from '../../services/disable-button.service';

@Component({
  selector: 'app-mp-routing',
  templateUrl: './mp-routing.component.html',
  styleUrls: ['./mp-routing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MpRoutingComponent implements OnInit {

  disableShutFlag$ = this.disableButtonsService.disableShutButtonAction$;
  disableUnShutFlag$ = this.disableButtonsService.disableUnshutButtonAction$;
  rows: any;
  selectedIds: any;
  constructor(private disableButtonsService: DisableButtonService) {
  }

  ngOnInit(): void {
  }

  getSelectedRows(data: any){
    this.rows = data;
  }

  getSelectedRowIds(ids:[]){
    this.selectedIds = ids;
  }

}
