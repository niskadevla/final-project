import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';

@NgModule({
    declarations: [
        HeroesListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroesListComponent
    ]
})
export class HeroesListModule {
}
