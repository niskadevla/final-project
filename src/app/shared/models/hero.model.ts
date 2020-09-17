export interface IHero {
    name?: string;
    powerstats?: {[key: string]: number};
    image?: {url?: string};
    id?: number;
}

export class Hero implements IHero {
    constructor(
        public name?: string,
        public powerstats?: {[key: string]: number},
        public image?: {url?: string},
        public id?: number,
    ) {}
}
