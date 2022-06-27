import { createReducer, on } from "@ngrx/store";
import { shutUnshutDestination} from "./mprouting.actions";
import { initialState } from "./mprouting.state";

const _mpRoutingReducer = createReducer(initialState, 
    on(shutUnshutDestination, (state: any, action: any) => {
        const updatedDestination = state.destinations.map((destination:any) => {
            return action.data.id === destination.id ? action.data : destination
        })
        console.log(updatedDestination);
        
        return {
            ...state,
            destinations: updatedDestination
        }
    }));

export function mpRoutingReducer(state:any, action:any){
    return _mpRoutingReducer(state,action);
}