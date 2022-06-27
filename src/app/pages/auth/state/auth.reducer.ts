import { createReducer, on } from "@ngrx/store";

import { loginsuccess } from "./auth.actions";
import { initialAuthState } from "./auth.state";



const _authReducer = createReducer(initialAuthState, 
    on(loginsuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }))

export function authReducer(state:any, action:any){
    return _authReducer(state,action);
}