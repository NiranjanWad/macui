import { createAction, props } from "@ngrx/store";
import { IPilotControlSymbols } from "../model/IPilotControlSymbols";

export const LOAD_SYMBOLS = '[pilotcontrol grid page] load symbols';
export const LOAD_SYMBOLS_SUCCESS = '[pilotcontrol grid page] load symbols success';
export const BULK_ENABLE = '[pilotcontrol page] bulk enable';
export const BULK_ENABLE_SUCCESS = '[pilotcontrol page] bulk enable success';

export const loadsymbols = createAction(LOAD_SYMBOLS);
export const loadsymbolssuccess = createAction(LOAD_SYMBOLS_SUCCESS, props<{data: IPilotControlSymbols[]}>());

export const bulkenabledisable = createAction(BULK_ENABLE,props<{data: IPilotControlSymbols}>());
export const bulkenablesuccess = createAction(BULK_ENABLE_SUCCESS, props<{data: IPilotControlSymbols}>());