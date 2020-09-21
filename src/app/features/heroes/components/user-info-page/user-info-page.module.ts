import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoPageComponent } from './user-info-page.component';
import { UserHeroesListModule } from './components/user-heroes-list/user-heroes-list.module';
import { RouterModule } from '@angular/router';
import { PowerupsModule } from './components/powerups/powerups.module';
import { BattlesHistoryModule } from './components/battles-history/battles-history.module';

@NgModule({
    declarations: [
        UserInfoPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserHeroesListModule,
        BattlesHistoryModule,
        PowerupsModule
    ],
    exports: [
        UserInfoPageComponent
    ]
})
export class UserInfoPageModule {}
