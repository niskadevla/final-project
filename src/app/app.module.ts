import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/components/header.component';
import {UserInfoModule} from './features/header/components/user-info/user-info.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
