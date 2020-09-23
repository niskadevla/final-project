import { Message } from '../models/message.model';
import { QueryParamsMapKeysEnum } from './enums';

export const tokenLifeTime: number = 60 * 60 * 1000;

export const QUERY_PARAMS: {[key in QueryParamsMapKeysEnum]: Message} = {
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

export const ENGLISH_ALPHABET: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                                            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const battleHistoryFields: object = {
    date: 'Battle date',
    heroName: 'Hero name',
    opponentName: 'Opponent name',
    battleResult: 'Battle result'
};


