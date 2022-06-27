import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addToCounter, changeName } from '../../state/counter.actions';
import { getName } from '../../state/counter.selectors';
import { CounterState } from '../../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  value!: number;
  name!: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getName).subscribe(data => {
      this.name = data;
      console.log('Name observable');
    })
  }

  addToCounter(){
    this.store.dispatch(addToCounter({data: +this.value}));
  }

  changeName(){
    this.store.dispatch(changeName())
  }

}
