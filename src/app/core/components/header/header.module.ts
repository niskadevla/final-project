import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInfoModule} from './components/user-info/user-info.module';
import {HeaderComponent} from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserInfoModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
