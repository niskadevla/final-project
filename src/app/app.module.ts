import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './core/components/header/header.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
