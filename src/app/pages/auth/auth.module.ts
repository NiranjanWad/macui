import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AuthEffects } from "./state/auth.effects";
import { EffectsModule} from "@ngrx/effects";


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
        RouterModule.forChild(routes)]
})
export class AuthModule{

}