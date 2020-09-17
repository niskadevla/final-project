import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HeroesSearchModule } from '../heroes-search/heroes-search.module';

@NgModule({
    declarations: [
        HeroesListComponent
    ],
    imports: [
        CommonModule,
        HeroesSearchModule,
    ],
    exports: [
        HeroesListComponent
    ]
})
export class HeroesListModule {
}
