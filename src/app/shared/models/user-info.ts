import { IHero } from './hero.model';
import { IBattleHistory } from './battle-history.model';

export interface IUserInfo {
    searchQuery: string;
    selectedHeroes: IHero[];
    selectedLetter: string;
    battlesHistory?: IBattleHistory[];
}

export class UserInfo implements IUserInfo {
    constructor(
        public searchQuery: string,
        public selectedHeroes: IHero[],
        public selectedLetter: string = 'A',
        public battlesHistory?: IBattleHistory[],
    ) {
    }
}
