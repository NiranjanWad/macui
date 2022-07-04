import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPilotControlSymbols } from '../../model/IPilotControlSymbols';

@Component({
  selector: 'app-pilot-control',
  templateUrl: './pilot-control.component.html',
  styleUrls: ['./pilot-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PilotControlComponent implements OnInit {

  selectedRowCount: number = 0;
  selectedSymbols!: IPilotControlSymbols[];

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedRowCount(data: number){
    this.selectedRowCount = data;
  }

  getSelectedSymbols(data: IPilotControlSymbols[]){
    this.selectedSymbols = data;
  }

}
