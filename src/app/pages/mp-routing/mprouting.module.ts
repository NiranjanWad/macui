import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AgGridModule } from "ag-grid-angular";
import { HeaderComponent } from "./components/header/header.component";
import { ShutUnshutButtonsComponent } from "./components/mp-routing-grid/cell-renderers/shut-unshut-buttons/shut-unshut-buttons.component";
import { MpRoutingGridComponent } from "./components/mp-routing-grid/mp-routing-grid.component";
import { MpRoutingComponent } from "./components/mp-routing/mp-routing.component";
import { MpRoutingEffects } from "./state/mprouting.effects";
import { mpRoutingReducer } from "./state/mprouting.reducer";
import { MPROUTING_STATE_NAME } from "./state/mprouting.selector";
import { EffectsModule } from "@ngrx/effects";

const routes: Routes = [
    {path: '', component: MpRoutingComponent}
]

@NgModule({
    declarations:[    
        MpRoutingComponent,
        MpRoutingGridComponent,
        HeaderComponent,
        ShutUnshutButtonsComponent
    ],

    imports: [
        CommonModule,
        AgGridModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([MpRoutingEffects]),
        StoreModule.forFeature(MPROUTING_STATE_NAME,mpRoutingReducer)]
})
export class MpRoutingModule{

}