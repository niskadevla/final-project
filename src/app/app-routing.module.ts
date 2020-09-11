import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN } from './shared/utils/constants';

const routes: Routes = [
    {path: '', redirectTo: LOGIN, pathMatch: 'full'},
    { path: '', loadChildren: () => import('./features/auth/auth.module').then(mod => mod.AuthModule)}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
