import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { HeroesComponent } from './features/heroes/heroes.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HeaderModule,
        AppRoutingModule
    ],
    providers: [
        UsersService,
        AuthService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
