import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesSearchComponent } from './heroes-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeroesSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        HeroesSearchComponent
    ]
})
export class HeroesSearchModule {
}
