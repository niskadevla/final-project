interface IMessage {
    text: string;
    type: string;
}

export class Message implements IMessage {
    constructor(
        public text: string,
        public type: string
    ) {}
}
