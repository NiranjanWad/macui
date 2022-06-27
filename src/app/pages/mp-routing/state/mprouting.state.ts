import { IMpRouting } from "../model/IMpRouting"

export interface MpRoutingState{
  destinations: IMpRouting[];
}


export const initialState: MpRoutingState = {
    destinations: [{
          "comments": "testing NJ",
          "connection": true,
          "id": "destination01",
          "isAvailable": true,
          "name": "MSCO",
          "product": "Equity",
          "sessions": "EQSPD1",
          "updatedBy": "Niranjan"
        },
        {
          "comments": "testing NJ",
          "connection": false,
          "id": "destination02",
          "isAvailable": true,
          "name": "MSCO",
          "product": "Equity",
          "sessions": "EQSPD2",
          "updatedBy": "Niranjan"
        },
        {
          "comments": "testing NJ",
          "connection": false,
          "id": "destination03",
          "isAvailable": true,
          "name": "MSCO",
          "product": "Equity",
          "sessions": "EQSPD3",
          "updatedBy": "Niranjan"
        },
        {
          "comments": "test MSCO",
          "connection": true,
          "id": "destination04",
          "isAvailable": true,
          "name": "MSCO",
          "product": "Equity",
          "sessions": "EQSPD4",
          "updatedBy": ""
        },
        {
          "comments": "test Lydia",
          "connection": true,
          "id": "destination05",
          "isAvailable": true,
          "name": "LYDIA",
          "product": "Equity",
          "sessions": "LYDIA1",
          "updatedBy": ""
        },
        {
          "comments": "test Lydia",
          "connection": true,
          "id": "destination06",
          "isAvailable": true,
          "name": "LYDIA",
          "product": "Equity",
          "sessions": "LYDIA2",
          "updatedBy": ""
        },
        {
          "comments": "test Spiderman",
          "connection": true,
          "id": "destination07",
          "isAvailable": true,
          "name": "SPIDERMAN",
          "product": "Equity",
          "sessions": "SPD1",
          "updatedBy": ""
        }
      ]
}