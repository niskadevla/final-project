import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './core/routes/app-routes';
import { HeroesComponent } from './features/heroes/heroes.component';

const route: Routes = [
    {path: '', redirectTo: routes.LOGIN.routerPath, pathMatch: 'full'},
    { path: '', loadChildren: () => import('./features/auth/auth.module').then(mod => mod.AuthModule)},
    { path: 'heroes',  component: HeroesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
