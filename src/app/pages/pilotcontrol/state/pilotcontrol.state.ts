import { IPilotControlSymbols } from "../model/IPilotControlSymbols";

export interface PilotControlState {
    symbols: IPilotControlSymbols[];
}

export const initialpilotcontrolstate: PilotControlState = {
    symbols: []
}