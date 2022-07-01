import { IMpRouting } from "../model/IMpRouting"

export interface MpRoutingState{
  destinations: IMpRouting[];
}


export const initialState: MpRoutingState = {
    destinations: []
}