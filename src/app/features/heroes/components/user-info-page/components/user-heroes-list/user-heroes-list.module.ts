import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { UserHeroesListComponent } from './user-heroes-list.component';

@NgModule({
  declarations: [
      UserHeroesListComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        UserHeroesListComponent
    ]
})
export class UserHeroesListModule { }
