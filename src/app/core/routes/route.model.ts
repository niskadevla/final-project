export interface IAppRotes  {
    [key: string]: IAppRouteData;
}

export interface IAppRouteData {
    routerPath: string;
    fullPath?: string;
}
