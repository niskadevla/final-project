import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHeroesListComponent } from './user-heroes-list.component';


@NgModule({
  declarations: [
      UserHeroesListComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        UserHeroesListComponent
    ]
})
export class UserHeroesListModule { }
