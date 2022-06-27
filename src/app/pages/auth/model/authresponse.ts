export interface AuthResponse {
    kind: string,
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    regitered: boolean;
}