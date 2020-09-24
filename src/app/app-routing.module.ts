import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './core/routes/app-routes';
import { AuthGuard } from './shared/services/auth.guard';

const route: Routes = [
    { path: '', redirectTo: routes.LOGIN.routerPath, pathMatch: 'full' },
    { path: '', loadChildren: () => import('./features/auth/auth.module').then(mod => mod.AuthModule) },
    {
        path: routes.HEROES.routerPath,
        loadChildren: () => import('./features/heroes/heroes.module').then(mod => mod.HeroesModule),
        canActivate: [ AuthGuard ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
