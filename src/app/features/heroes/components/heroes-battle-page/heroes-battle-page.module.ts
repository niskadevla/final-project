import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesBattlePageComponent } from './heroes-battle-page.component';
import { ModalWindowModule } from './components/modal-window/modal-window.module';

@NgModule({
  declarations: [
      HeroesBattlePageComponent
  ],
  imports: [
    CommonModule,
    ModalWindowModule
  ],
    exports: [
        HeroesBattlePageComponent
    ]
})
export class HeroesBattlePageModule { }
