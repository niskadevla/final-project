import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginModule} from './components/login/login.module';
import {RegistrationModule} from './components/registration/registration.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegistrationModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
