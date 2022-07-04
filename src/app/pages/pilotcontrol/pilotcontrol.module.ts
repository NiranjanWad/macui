import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotControlComponent } from './components/pilot-control/pilot-control.component';
import { HeaderComponent } from './components/header/header.component';
import { PilotControlGridComponent } from './components/pilot-control-grid/pilot-control-grid.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { PILOTCONTROL_STATE_NAME } from './state/pilotcontrol.selector';
import { pilotcontrolReducer } from './state/pilotcontrol.reducer';
import { EffectsModule } from "@ngrx/effects";
import { PilotControlEffects } from './state/pilotcontrol.effects';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component: PilotControlComponent}
]

@NgModule({
  declarations: [
    PilotControlComponent,
    HeaderComponent,
    PilotControlGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    StoreModule.forFeature(PILOTCONTROL_STATE_NAME, pilotcontrolReducer),
    EffectsModule.forFeature([PilotControlEffects]),
    RouterModule.forChild(routes)
  ]
})
export class PilotcontrolModule { }
