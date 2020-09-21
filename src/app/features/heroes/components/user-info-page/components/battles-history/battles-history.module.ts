import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattlesHistoryComponent } from './battles-history.component';



@NgModule({
  declarations: [
      BattlesHistoryComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        BattlesHistoryComponent
    ]
})
export class BattlesHistoryModule { }
