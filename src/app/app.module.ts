import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HeaderModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
