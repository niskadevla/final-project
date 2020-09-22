import { IHero } from './hero.model';
import { IPowerup } from './powerup.model';

export interface IUserInfo {
    searchQuery: string;
    selectedHeroes: IHero[];
    selectedLetter: string;
    powerups?: IPowerup[];
}

export class UserInfo implements IUserInfo {
    constructor(
        public searchQuery: string,
        public selectedHeroes: IHero[],
        public selectedLetter: string = 'A',
        public powerups?: IPowerup[]) {
    }
}
