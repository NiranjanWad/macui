import { AUTH_STATE_NAME } from "../pages/auth/state/auth.selector";
import { sharedReducer } from "./shared.reducer";
import { SHARED_STATE_NAME } from "./shared.selector";
import { SharedState } from "./shared.state";
import { AuthState } from "../pages/auth/state/auth.state";
import { authReducer } from "../pages/auth/state/auth.reducer";

export interface AppState{
[SHARED_STATE_NAME]: SharedState;
[AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
    [SHARED_STATE_NAME]: sharedReducer,
    [AUTH_STATE_NAME]: authReducer
}
