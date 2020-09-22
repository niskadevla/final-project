export interface IPowerup {
    title: string;
    usesLeft: number;
    img?: string;
    powerstat?: object;
}

export class Powerup implements IPowerup {

    constructor(public title: string,
                public usesLeft: number = 0,
                public img?: string,
                public powerstat?: object) {}
}
