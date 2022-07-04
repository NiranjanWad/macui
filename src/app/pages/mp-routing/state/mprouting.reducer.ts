import { createReducer, on } from "@ngrx/store";
import { loadDestinationsSuccess, updateSuccessful} from "./mprouting.actions";
import { initialState } from "./mprouting.state";

const _mpRoutingReducer = createReducer(initialState, 
    on(updateSuccessful, (state: any, action: any) => {
        const updatedDestination = state.destinations.map((destination:any) => {
            //console.log(action);
            return action.data.id === destination.id ? action.data : destination
        })
        
        return {
            ...state,
            destinations: updatedDestination
        }
    }),
    on(loadDestinationsSuccess, (state, action) => {
        return {
            ...state,
            destinations: action.data
        }
    }));

export function mpRoutingReducer(state:any, action:any){
    return _mpRoutingReducer(state,action);
}