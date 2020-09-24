export interface IBattleHistory {
    heroName: string;
    opponentName: string;
    battleResult: string;
    date: number;
}

export class BattleHistory implements IBattleHistory {

    constructor(public heroName: string,
                public opponentName: string,
                public battleResult: string,
                public date: number =  Date.now()) {}
}
