import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetComponent } from './alphabet.component';



@NgModule({
  declarations: [
      AlphabetComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        AlphabetComponent
    ]
})
export class AlphabetModule { }
