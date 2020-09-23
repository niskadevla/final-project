import { IHero } from './hero.model';
import { IBattleHistory } from './battle-history.model';
import { IPowerup } from './powerup.model';

export interface IUserInfo {
    searchQuery: string;
    selectedHeroes: IHero[];
    selectedLetter: string;
    battlesHistory?: IBattleHistory[];
    powerups?: IPowerup[];
}

export class UserInfo implements IUserInfo {
    constructor(
        public searchQuery: string,
        public selectedHeroes: IHero[],
        public selectedLetter: string = 'A',
        public battlesHistory?: IBattleHistory[],
        public powerups?: IPowerup[]
    )
}
