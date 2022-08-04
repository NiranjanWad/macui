import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'mprouting', loadChildren: () => import('./pages/mp-routing/mprouting.module').then((m) => m.MpRoutingModule), canActivate: [AuthGuard]},
  {path: 'counter', loadChildren: () => import('./pages/counter/counter.module').then((m) => m.CounterModule), canActivate: [AuthGuard]},
  {path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'pilotcontrol', loadChildren: () => import('./pages/pilotcontrol/pilotcontrol.module').then((m) => m.PilotcontrolModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
