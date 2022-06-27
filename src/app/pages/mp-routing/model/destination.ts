export class Destination {

    constructor(private comments: string,
        private connection: boolean,
        private id: string,
        private isAvailable: boolean,
        private name: string,
        private product: string,
        private sessions: string,
        private updatedBy: string){}
    
}