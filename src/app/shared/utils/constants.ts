import { Message } from '../models/message.model';
import { QueryParamsMapKeysEnum, SortDirectionsEnum } from './enums';
import { IPowerup } from '../models/powerup.model';

export const tokenLifeTime: number = 60 * 60 * 1000;

export const QUERY_PARAMS: { [key in QueryParamsMapKeysEnum]: Message } = {
    [QueryParamsMapKeysEnum.ACCESS_ALLOWED]: {
        text: 'Now we might login to system',
        type: 'success'
    },
    [QueryParamsMapKeysEnum.ACCESS_DENIED]: {
        text: 'You should login to system',
        type: 'danger'
    },
    [QueryParamsMapKeysEnum.SESSION_HAS_EXPIRED]: {
        text: 'Your current session has expired. Please login again to continue using this app!',
        type: 'danger'
    }
};

export const ENGLISH_ALPHABET: string[] = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                                            'P',
                                            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

export const battleHistoryFields: object = {
    heroName: 'Hero name',
    opponentName: 'Opponent name',
    battleResult: 'Battle result',
    date: 'Battle date',
};

export const POWERUPS: IPowerup[] = [
    {
        title: 'Captain America shield',
        usesLeft: 0,
        img: '../../../assets/images/captain_shield.jpg',
        powerstat: { durability: '10' }
    },
    {
        title: 'Mjolnir',
        usesLeft: 0,
        img: '../../../assets/images/mjolnir.jpeg',
        powerstat: { power: '10' }
    },
    {
        title: 'Ironman nano armor',
        usesLeft: 0,
        img: '../../../assets/images/ironman_armor.png',
        powerstat: { combat: '10' }
    },
    {
        title: 'Dr. Strange\'s cloak',
        usesLeft: 0,
        img: '../../../assets/images/dr_strange_cloak.jpg',
        powerstat: { intelligence: '10' }
    },
    {
        title: 'Green lantern\'s ring',
        usesLeft: 0,
        img: '../../../assets/images/lantern_ring.jpg',
        powerstat: { strength: '10' }
    },
    {
        title: 'Flash boots',
        usesLeft: 0,
        img: '../../../assets/images/flash_boots.jpg',
        powerstat: { speed: '10' }
    }
];

export const sortFn = (sortName: string, direction: SortDirectionsEnum) => (a, b) => {
    const firstStr = a[sortName];
    const secondStr = b[sortName];

    if (direction === SortDirectionsEnum.ASCEND) {
        return firstStr < secondStr ? 1 : -1;
    }
    if (direction === SortDirectionsEnum.DESC) {
        return firstStr > secondStr ? 1 : -1;
    }
};

export const MAX_HEROES_AMOUNT = 731;
export const DROP_CHANCE = 0.2;
export const timeForCountdown = 5000;
