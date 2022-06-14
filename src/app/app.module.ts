import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { MpRoutingComponent } from './pages/mp-routing/components/mp-routing/mp-routing.component';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './pages/mp-routing/components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { mpRoutingReducer } from './pages/mp-routing/components/state/mprouting.reducer';
import { CounterComponent } from './pages/counter/components/counter/counter.component';
import { CounterButtonsComponent } from './pages/counter/components/counter-buttons/counter-buttons.component';
import { counterReducer } from './pages/counter/components/state/counter.reducer';
import { CounterOutputComponent } from './pages/counter/components/counter-output/counter-output.component';
import { CustomCounterComponent } from './pages/counter/components/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MpRoutingComponent,
    HeaderComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    StoreModule.forRoot({destinations: mpRoutingReducer, counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
