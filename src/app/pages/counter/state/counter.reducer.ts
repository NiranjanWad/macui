import { createReducer, on } from "@ngrx/store";
import { addToCounter, changeName, decrement, increment, reset } from "./counter.actions";
import { counterInitialState} from "./counter.state";

const _counterReducer = createReducer(
    counterInitialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(addToCounter, (state, action) => {
        console.log(action)
        return {
            ...state,
            counter: state.counter + action.data,
        }
    }),
    on(changeName, (state) => {
        return {
            ...state,
            name: 'Niranjan Wad'
        }
    })
    );

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}