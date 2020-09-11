import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LOGIN, REGISTRATION } from '../../shared/utils/constants';


const routes: Routes = [
    {
        path: '', component: AuthComponent, children: [
            { path: LOGIN, component: LoginComponent },
            { path: REGISTRATION, component: RegistrationComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule {
}
