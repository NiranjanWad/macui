import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { setErrorMEssage, setLoadingSpinner } from "src/app/state/shared.action";
import { AuthService } from "../services/auth.service";
import { loginstart, loginsuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,private router: Router, private authService: AuthService, private store: Store<AppState>){}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginstart),
            exhaustMap((action) => {
                //console.log(action);
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        this.store.dispatch(setErrorMEssage({errorMessage: ''}));
                        const user = this.authService.formatUser(data);
                        return loginsuccess({user});
                    }),catchError(errorRes => {
                        const erroMessage = this.authService.getErrorMessage(errorRes.error.error.message);
                        this.store.dispatch(setLoadingSpinner({status: false}));
                        return of(setErrorMEssage({errorMessage: erroMessage}));
                    })
                )
            })
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginsuccess),
            tap((action) => {
                this.router.navigate(['/mprouting']);
            })
        )
    },{dispatch: false})
}