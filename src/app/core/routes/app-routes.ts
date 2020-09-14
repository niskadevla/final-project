interface AppRotes  {
    LOGIN: {routerPath: string};
    REGISTRATION: {routerPath: string};
}
export const routes: AppRotes = {
    LOGIN: { routerPath: 'login' },
    REGISTRATION: { routerPath: 'registration' }
};

