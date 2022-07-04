
import { PilotcontrolService } from "../services/pilotcontrol.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { bulkenabledisable, bulkenablesuccess, loadsymbols, loadsymbolssuccess } from "./pilotcontrol.actions";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs";

@Injectable()
export class PilotControlEffects{

    constructor(private pilotcontrolservice: PilotcontrolService, private actions$: Actions){}

    symbols$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadsymbols),
            mergeMap(() => {
                return this.pilotcontrolservice.getSymbol().pipe(map((symbols) => {
                    console.log(symbols);
                    return loadsymbolssuccess({data: symbols});
                }))
            })
        )
    });

    bulkenablesymbols$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(bulkenabledisable),
            concatMap((action) => {
                console.log(action);
                return this.pilotcontrolservice.bulkenabledisable(action.data).pipe(map((row) => {
                    console.log(row);
                    return bulkenablesuccess({data: row});
                    
                }))
            })
        )
    })

}