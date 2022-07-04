import { createReducer, on } from "@ngrx/store";
import { bulkenablesuccess, loadsymbolssuccess } from "./pilotcontrol.actions";
import { initialpilotcontrolstate } from "./pilotcontrol.state";

const _pilotcontrolReducer = createReducer(initialpilotcontrolstate, 
    on(loadsymbolssuccess, (state,action) => {
        return {
            ...state,
            symbols: action.data
        }
    }),
    on(bulkenablesuccess, (state,action) => {
        const updatedSymbol = state.symbols.map((symbols: any) => {
            return action.data.id === symbols.id ? action.data : symbols;
        })
        return {
            ...state,
            symbols: updatedSymbol
        }
    }))

export function pilotcontrolReducer(state: any, action: any){
    return _pilotcontrolReducer(state,action);
}