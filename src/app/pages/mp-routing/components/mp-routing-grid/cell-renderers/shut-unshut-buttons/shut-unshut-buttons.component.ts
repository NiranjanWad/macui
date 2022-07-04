import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IMpRouting } from 'src/app/pages/mp-routing/model/IMpRouting';
import { shutUnshutDestination } from 'src/app/pages/mp-routing/state/mprouting.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-shut-unshut-buttons',
  templateUrl: './shut-unshut-buttons.component.html',
  styleUrls: ['./shut-unshut-buttons.component.css']
})
export class ShutUnshutButtonsComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams;

  constructor(private store: Store<AppState>) { }

  agInit(params: ICellRendererParams): void {
    //console.log(params.data.connection);
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  shutOrUnshutDestination(){
    const destination: IMpRouting = {
      comments: this.params.data.comments,
      connection: !this.params.data.connection,
      id: this.params.data.id,
      isAvailable: this.params.data.isAvailable,
      name: this.params.data.name,
      product: this.params.data.product,
      sessions: this.params.data.sessions,
      updatedBy: this.params.data.updatedBy
    }
    console.log(destination);
    
    this.store.dispatch(shutUnshutDestination({data: destination}))
  }

}
