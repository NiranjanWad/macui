import { createReducer, on } from "@ngrx/store";
import { shutDestination, unshutDestination } from "./mprouting.actions";
import { initialState } from "./mprouting.state";

const _mpRoutingReducer = createReducer(initialState, 
    on(shutDestination, (state) => {
        return {
            ...state,
            destinations: {
                "destination01": {
                "comments": "testing NJ",
                "connection": false,
                "id": "destination01",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD1",
                "updatedBy": "Niranjan"
                },
                "destination02": {
                "comments": "testing NJ",
                "connection": false,
                "id": "destination02",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD2",
                "updatedBy": "Niranjan"
                },
                "destination03": {
                "comments": "testing NJ",
                "connection": false,
                "id": "destination03",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD3",
                "updatedBy": "Niranjan"
                },
                "destination04": {
                "comments": "test MSCO",
                "connection": true,
                "id": "destination04",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD4",
                "updatedBy": ""
                },
                "destination05": {
                "comments": "test Lydia",
                "connection": true,
                "id": "destination05",
                "isAvailable": true,
                "name": "LYDIA",
                "product": "Equity",
                "sessions": "LYDIA1",
                "updatedBy": ""
                },
                "destination06": {
                "comments": "test Lydia",
                "connection": true,
                "id": "destination06",
                "isAvailable": true,
                "name": "LYDIA",
                "product": "Equity",
                "sessions": "LYDIA2",
                "updatedBy": ""
                },
                "destination07": {
                "comments": "test Spiderman",
                "connection": true,
                "id": "destination07",
                "isAvailable": true,
                "name": "SPIDERMAN",
                "product": "Equity",
                "sessions": "SPD1",
                "updatedBy": ""
                }
            }
        };
    }), 
    on(unshutDestination, (state) => {
        return {
            ...state,
            destinations: {
                "destination01": {
                "comments": "testing NJ",
                "connection": true,
                "id": "destination01",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD1",
                "updatedBy": "Niranjan"
                },
                "destination02": {
                "comments": "testing NJ",
                "connection": false,
                "id": "destination02",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD2",
                "updatedBy": "Niranjan"
                },
                "destination03": {
                "comments": "testing NJ",
                "connection": false,
                "id": "destination03",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD3",
                "updatedBy": "Niranjan"
                },
                "destination04": {
                "comments": "test MSCO",
                "connection": true,
                "id": "destination04",
                "isAvailable": true,
                "name": "MSCO",
                "product": "Equity",
                "sessions": "EQSPD4",
                "updatedBy": ""
                },
                "destination05": {
                "comments": "test Lydia",
                "connection": true,
                "id": "destination05",
                "isAvailable": true,
                "name": "LYDIA",
                "product": "Equity",
                "sessions": "LYDIA1",
                "updatedBy": ""
                },
                "destination06": {
                "comments": "test Lydia",
                "connection": true,
                "id": "destination06",
                "isAvailable": true,
                "name": "LYDIA",
                "product": "Equity",
                "sessions": "LYDIA2",
                "updatedBy": ""
                },
                "destination07": {
                "comments": "test Spiderman",
                "connection": true,
                "id": "destination07",
                "isAvailable": true,
                "name": "SPIDERMAN",
                "product": "Equity",
                "sessions": "SPD1",
                "updatedBy": ""
                }
            }
        };
    })
);

export function mpRoutingReducer(state:any, action:any){
    return _mpRoutingReducer(state,action);
}