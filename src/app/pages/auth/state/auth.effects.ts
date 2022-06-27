import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { setLoadingSpinner } from "src/app/state/shared.action";
import { AuthService } from "../services/auth.service";
import { loginstart, loginsuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>){}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginstart),
            exhaustMap((action) => {
                //console.log(action);
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        const user = this.authService.formatUser(data);
                        return loginsuccess({user});
                    })
                );
            })
        );
    });
}