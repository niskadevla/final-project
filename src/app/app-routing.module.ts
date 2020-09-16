import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './core/routes/app-routes';

const route: Routes = [
    {path: '', redirectTo: routes.LOGIN.routerPath, pathMatch: 'full'},
    { path: '', loadChildren: () => import('./features/auth/auth.module').then(mod => mod.AuthModule)},
    {path: routes.HEROES.routerPath, redirectTo: routes.SELECTION_PAGE.routerPath, pathMatch: 'full'},
    { path: routes.HEROES.routerPath, loadChildren: () => import('./features/heroes/heroes.module').then(mod => mod.HeroesModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
