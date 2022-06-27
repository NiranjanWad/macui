import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MpRoutingState } from "./mprouting.state";

export const MPROUTING_STATE_NAME = 'destinations';
const getMpRoutingState = createFeatureSelector<MpRoutingState>(MPROUTING_STATE_NAME);

export const getDestinations = createSelector(getMpRoutingState, state => {
    return state.destinations;
});