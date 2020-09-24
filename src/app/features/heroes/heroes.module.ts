import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SelectionPageModule } from './components/selection-page/selection-page.module';
import { UserInfoPageModule } from './components/user-info-page/user-info-page.module';
import { HeroesBattlePageModule } from './components/heroes-battle-page/heroes-battle-page.module';

@NgModule({
  declarations: [
      HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SelectionPageModule,
    UserInfoPageModule,
    HeroesBattlePageModule
  ],
    exports: [
        HeroesComponent
    ]
})
export class HeroesModule { }
