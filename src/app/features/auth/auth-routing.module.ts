import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { routes } from '../../core/routes/app-routes';

const route: Routes = [
    {
        path: '', component: AuthComponent, children: [
            { path: routes.LOGIN.routerPath, component: LoginComponent },
            { path: routes.REGISTRATION.routerPath, component: RegistrationComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(route) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule {
}
