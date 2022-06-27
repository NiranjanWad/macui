import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { IMpRouting } from '../../model/IMpRouting';
import { MpRoutingService } from '../../services/mp-routing.service';
import { shutUnshutDestination} from '../../state/mprouting.actions';

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
  @Input() ids:any;
  destinaion!: IMpRouting;
  constructor(private mpRoutingService: MpRoutingService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  shutUnshutDestination(){
    let updatedRowDetails = {
      comments: 'testing NJ',
      connection: !this.rowData[0].id,
      id: this.rowData[0].id,
      isAvailable: this.rowData[0].isAvailable,
      name: this.rowData[0].name,
      product: this.rowData[0].product,
      sessions: this.rowData[0].sessions,
      updatedBy: 'Niranjan'
      };

    let shutDestinationDetails:IMpRouting = {
      ...updatedRowDetails,
      id: updatedRowDetails.id
    }
    //this.mpRoutingService.shutUnshutDestinations(shutDestinationDetails)
    this.store.dispatch(shutUnshutDestination({data:shutDestinationDetails}));
    //console.log(this.rowData);
    
  }

}
