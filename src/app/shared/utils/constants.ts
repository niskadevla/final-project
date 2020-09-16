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



