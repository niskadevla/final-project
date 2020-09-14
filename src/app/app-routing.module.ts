import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './core/routes/app-routes';

const route: Routes = [
    {path: '', redirectTo: routes.LOGIN.routerPath, pathMatch: 'full'},
    { path: '', loadChildren: () => import('./features/auth/auth.module').then(mod => mod.AuthModule)}
];


@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
