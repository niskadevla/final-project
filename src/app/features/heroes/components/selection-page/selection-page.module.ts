import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPageComponent } from './selection-page.component';
import { HeroesSearchModule } from './components/heroes-search/heroes-search.module';
import { AlphabetModule } from './components/alphabet/alphabet.module';
import { HeroesListModule } from './components/heroes-list/heroes-list.module';

@NgModule({
    declarations: [
        SelectionPageComponent
    ],
    imports: [
        CommonModule,
        HeroesSearchModule,
        AlphabetModule,
        HeroesListModule
    ],
    exports: [
        SelectionPageComponent
    ]
})
export class SelectionPageModule {
}
