import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class User{
    constructor(
        private kind: string,
        private localId: string,
        private email: string,
        private displayName: string,
        private idToken: string,
        private regitered: boolean){}
}