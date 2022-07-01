import { createAction, props } from "@ngrx/store";
import { IMpRouting } from "../model/IMpRouting";

export const SHUT_UNSHUT = '[mprouting page] shutunsut destinations'
export const SHUT_UNSHUT_SUCCESS = '[mprouting page] shutunsut destinations'
export const LOAD_DESTINATIONS = '[mprouting page] load destinations';
export const LOAD_DESTINATIONS_SUCESS = '[mprouting page] load destinations success';

export const shutUnshutDestination = createAction(SHUT_UNSHUT, props<{data: IMpRouting}>());
export const updateSuccessful = createAction(SHUT_UNSHUT_SUCCESS,props<{data: IMpRouting}>());
export const loadDestinations = createAction(LOAD_DESTINATIONS);
export const loadDestinationsSuccess = createAction(LOAD_DESTINATIONS_SUCESS, props<{data: IMpRouting[]}>());