import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { getLoading } from './state/shared.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'macui';
  showLoading!: Observable<boolean>;

  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading)
  }
}
