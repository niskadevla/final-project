import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';




@NgModule({
  declarations: [
      HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
    exports: [
        HeroesComponent
    ]
})
export class HeroesModule { }
