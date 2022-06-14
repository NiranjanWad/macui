import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/components/counter/counter.component';
import { MpRoutingComponent } from './pages/mp-routing/components/mp-routing/mp-routing.component';

const routes: Routes = [
  {path: '', component: MpRoutingComponent},
  {path: 'redm', component: MpRoutingComponent},
  {path: 'counter', component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
