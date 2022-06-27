import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { getCounter } from '../../state/counter.selectors';
import { CounterState } from '../../state/counter.state';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{

  counter!: number;
  counterSubscription!: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {  
    this.counterSubscription = this.store.select(getCounter).subscribe(data => {
      this.counter = data;
      console.log("Counter observable");
    }); 
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
