import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {LoginModule} from './components/login/login.module';
import {RegistrationModule} from './components/registration/registration.module';



@NgModule({
  declarations: [
    AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule,
    RegistrationModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
