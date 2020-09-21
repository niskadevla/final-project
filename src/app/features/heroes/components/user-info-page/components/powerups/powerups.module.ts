import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerupsComponent } from './powerups.component';



@NgModule({
  declarations: [
      PowerupsComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        PowerupsComponent
    ]
})
export class PowerupsModule { }
