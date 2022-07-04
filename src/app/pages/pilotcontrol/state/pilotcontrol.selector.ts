import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PilotControlState } from "./pilotcontrol.state";

export const PILOTCONTROL_STATE_NAME = 'symbols';

const getPilotControlState = createFeatureSelector<PilotControlState>(PILOTCONTROL_STATE_NAME,)
export const getSymbols = createSelector(getPilotControlState, state => {
    return state.symbols;
})