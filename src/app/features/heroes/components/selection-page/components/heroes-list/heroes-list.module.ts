import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HeroesSearchModule } from '../heroes-search/heroes-search.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeroesListComponent
    ],
    imports: [
        CommonModule,
        HeroesSearchModule,
        RouterModule
    ],
    exports: [
        HeroesListComponent
    ]
})
export class HeroesListModule {
}
