import { createReducer, on } from "@ngrx/store";
import { setErrorMEssage, setLoadingSpinner } from "./shared.action";
import { initialSharedState } from "./shared.state";


const _sharedReducer = createReducer(initialSharedState, 
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }),
    on(setErrorMEssage, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMessage
        }
    }));

export function sharedReducer(state:any, action:any){
    return _sharedReducer(state,action);
}