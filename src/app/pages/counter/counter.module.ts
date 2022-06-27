import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./components/counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./components/counter-output/counter-output.component";
import { CounterComponent } from "./components/counter/counter.component";
import { CustomCounterComponent } from "./components/custom-counter/custom-counter.component";
import { counterReducer } from "./state/counter.reducer";

const routes: Routes = [
    {path: '', component: CounterComponent}
]

@NgModule({
    declarations:[
        CounterComponent,
        CounterButtonsComponent,
        CounterOutputComponent,
        CustomCounterComponent,
    ],
    imports: [CommonModule, FormsModule,RouterModule.forChild(routes),StoreModule.forFeature('counter', counterReducer)]
})
export class CounterModule{

}