import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPageComponent } from './selection-page.component';
import { AlphabetModule } from './components/alphabet/alphabet.module';
import { HeroesListModule } from './components/heroes-list/heroes-list.module';

@NgModule({
    declarations: [
        SelectionPageComponent
    ],
    imports: [
        CommonModule,
        AlphabetModule,
        HeroesListModule
    ],
    exports: [
        SelectionPageComponent
    ]
})
export class SelectionPageModule {}
