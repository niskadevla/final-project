import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattlesHistoryComponent } from './battles-history.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      BattlesHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        BattlesHistoryComponent
    ]
})
export class BattlesHistoryModule { }
