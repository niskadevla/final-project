import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroInfoComponent } from './hero-info.component';

@NgModule({
    declarations: [
        HeroInfoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroInfoComponent
    ]
})
export class HeroInfoModule {
}
