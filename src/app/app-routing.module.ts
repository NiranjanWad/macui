import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpRoutingComponent } from './pages/mp-routing/components/mp-routing/mp-routing.component';

const routes: Routes = [
  {path: 'mprouting', loadChildren: () => import('./pages/mp-routing/mprouting.module').then((m) => m.MpRoutingModule)},
  {path: 'counter', loadChildren: () => import('./pages/counter/counter.module').then((m) => m.CounterModule)},
  {path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'pilotcontrol', loadChildren: () => import('./pages/pilotcontrol/pilotcontrol.module').then((m) => m.PilotcontrolModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
