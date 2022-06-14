import { IMpRouting } from "./IMpRouting";

export interface CRUDAction<T>{
    action: 'add' |'update' | 'delete';
    data: T;
}