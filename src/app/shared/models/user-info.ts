import { IHero } from './hero.model';

export interface IUserInfo {
    searchQuery: string;
    selectedHeroes: IHero[];
    selectedLetter: string;
}

export class UserInfo implements IUserInfo {
    constructor(
        public searchQuery: string,
        public selectedHeroes: IHero[],
        public selectedLetter: string = 'A'
    ) {
    }
}
