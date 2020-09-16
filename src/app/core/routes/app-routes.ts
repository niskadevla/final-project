import { IAppRotes } from './route.model';

export const routes: IAppRotes = {
    LOGIN: { routerPath: 'login' },
    REGISTRATION: { routerPath: 'registration', fullPath: '/registration' },
    HEROES: { routerPath: 'heroes' },
    SELECTION_PAGE: { routerPath: 'selection-page' },
    USER_INFO: { routerPath: 'user-info' },
};

