import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MpRoutingService } from '../../services/mp-routing.service';
import { shutDestination } from '../state/mprouting.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() shutDisabled: any;
  @Input() unshutDisable: any;
  @Input() rowData:any;
  constructor(private mpRoutingService: MpRoutingService, private store: Store<{destinations:{destinations: Object}}>) { }

  ngOnInit(): void {
  }

  shutDestination(){
    this.store.dispatch(shutDestination());
    //console.log(this.rowData);
    let updatedRowDetails = {
      comments: 'testing NJ',
      connection: false,
      id: this.rowData[0].id,
      isAvailable: this.rowData[0].isAvailable,
      name: this.rowData[0].name,
      product: this.rowData[0].product,
      sessions: this.rowData[0].sessions,
      updatedBy: 'Niranjan'
      };

    let shutDestinationDetails = {
      ...updatedRowDetails,
      id: updatedRowDetails.id
    }
    this.mpRoutingService.shutUnshutDestinations(shutDestinationDetails)
  }

  unshutDestination(){
    let updatedRowDetails = {
      comments: 'testing NJ',
      connection: true,
      id: this.rowData[0].id,
      isAvailable: this.rowData[0].isAvailable,
      name: this.rowData[0].name,
      product: this.rowData[0].product,
      sessions: this.rowData[0].sessions,
      updatedBy: 'Niranjan'
      };

    let unshutDestinationDetails = {
      ...updatedRowDetails,
      id: updatedRowDetails.id
    }
    this.mpRoutingService.shutUnshutDestinations(unshutDestinationDetails)
  }

}
