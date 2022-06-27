import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect} from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { MpRoutingService } from "../services/mp-routing.service";
import { shutUnshutDestination, updateSuccessful } from "./mprouting.actions";

@Injectable()
export class MpRoutingEffects{

    constructor(private actions$: Actions, private mproutingService: MpRoutingService){}

    shutUnshut$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(shutUnshutDestination),
            exhaustMap((action) => {
                console.log(action);
                return this.mproutingService.updateDestinationDetailsOnServer(action.data).pipe(
                    map((data) => {

                        return updateSuccessful();
                    })
                )
            })
        )
    })
}