export interface IBattleHistory {
    date: number;
    heroName: string;
    opponentName: string;
    battleResult: string;
}

export class BattleHistory implements IBattleHistory {

    constructor(public date: number =  Date.now(),
                public heroName: string,
                public opponentName: string,
                public battleResult: string) {}
}
