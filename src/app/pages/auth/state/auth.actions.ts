import { createAction, props } from "@ngrx/store"
import { User } from "../model/user.model";

export const LOGIN_START = '[auth page] login start'
export const LOGIN_SUCCESS = '[auth page] login success'
export const LOGIN_FAIL = '[auth page] login fail'

export const loginstart = createAction(LOGIN_START, props<{email:string,password:any}>());

export const loginsuccess = createAction(LOGIN_SUCCESS, props<{user: User}>());