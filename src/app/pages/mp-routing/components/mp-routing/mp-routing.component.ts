import { ChangeDetectionStrategy, Component, OnInit, Output, ViewChild } from '@angular/core';
import { DisableButtonService } from '../../services/disable-button.service';
import { Store } from '@ngrx/store';
import { IMpRouting } from '../../model/IMpRouting';

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
  constructor(private disableButtonsService: DisableButtonService,private store: Store<{destinations: IMpRouting}>) {
  }

  ngOnInit(): void {
    this.store.select('destinations').subscribe(data => {
      console.log(data);
    });
  }

  getSelectedRows(data: any){
    this.rows = data;
  }

  getSelectedRowIds(ids:[]){
    this.selectedIds = ids;
  }

}
