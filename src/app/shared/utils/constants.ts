// import { Message } from '../models/message.model';

export const tokenLifeTime = 60 * 60 * 1000;

export const QUERY_PARAMS = {
    accessAllowed: {
        text: 'Now we might login to system',
        type: 'success'
    },
    accessDenied: {
        text: 'You should login to system',
        type: 'danger'
    },
    sessionHasExpired: {
        text: 'Your current session has expired. Please login again to continue using this app!',
        type: 'danger'
    }
};

// export const QUERY_PARAMS: {[key: QueryParamsMapKeysEnum]: Message} = {
//     accessAllowed: {
//         text: 'Now we migth login to system',
//         type: 'success'
//     },
//     accessDenied: {
//         text: 'You should login to system',
//         type: 'danger'
//     },
//     sessionHasExpired: {
//         text: 'Your current session has expired. Please login again to continue using this app!',
//         type: 'danger'
//     }
// };
//
// export enum QueryParamsMapKeysEnum {
//     ACCESS_ALLOWED = 'accessAllowed',
//     ACCESS_DENIED = 'accessDenied',
//     SESSION_HAS_EXPIRED = 'sessionHasExpired'
// }

