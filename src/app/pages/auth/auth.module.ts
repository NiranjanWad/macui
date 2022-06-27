import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./components/login/login.component";
import { AuthEffects } from "./state/auth.effects";
import { authReducer } from "./state/auth.reducer";
import { EffectsModule} from "@ngrx/effects";

import { AUTH_STATE_NAME } from "./state/auth.selector";

const routes: Routes = [
    {path:'', children: [
        {path: '', redirectTo: 'login'},
        {path: 'login', component: LoginComponent}
    ]}
]

@NgModule({
    declarations:[LoginComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
        RouterModule.forChild(routes)]
})
export class AuthModule{

}