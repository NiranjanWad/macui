import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect} from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs";
import { MpRoutingService } from "../services/mp-routing.service";
import { loadDestinations, loadDestinationsSuccess, shutUnshutDestination, updateSuccessful } from "./mprouting.actions";

@Injectable()
export class MpRoutingEffects{

    constructor(private actions$: Actions, private mproutingService: MpRoutingService){}

    destinations$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadDestinations),
            mergeMap((action) => {
                return this.mproutingService.getDestinations().pipe(map((destinations) => {
                    console.log(destinations);
                    return loadDestinationsSuccess({data: destinations})
                }))
            })
        )
    });

    shutUnshut$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(shutUnshutDestination),
            exhaustMap((action) => {
                //console.log(action);
                return this.mproutingService.updateDestinationDetailsOnServer(action.data).pipe(
                    map((res) => {
                        return updateSuccessful({data: res});
                    })
                )
            })
        )
    })
}