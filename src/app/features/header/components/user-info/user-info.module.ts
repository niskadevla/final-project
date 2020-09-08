import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInfoComponent} from './user-info.component';



@NgModule({
  declarations: [
    UserInfoComponent
  ],
  exports: [
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserInfoModule { }
