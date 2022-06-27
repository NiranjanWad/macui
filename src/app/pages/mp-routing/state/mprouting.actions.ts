import { createAction, props } from "@ngrx/store";
import { IMpRouting } from "../model/IMpRouting";

export const shutUnshutDestination = createAction('shutUnshut', props<{data: IMpRouting}>());
export const updateSuccessful = createAction('update success');