import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from '../../core/routes/app-routes';
import { SelectionPageComponent } from './components/selection-page/selection-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';
import { UserHeroesListComponent } from './components/user-info-page/components/user-heroes-list/user-heroes-list.component';
import { BattlesHistoryComponent } from './components/user-info-page/components/battles-history/battles-history.component';
import { PowerupsComponent } from './components/user-info-page/components/powerups/powerups.component';
import { HeroInfoComponent } from './components/user-info-page/components/hero-info/hero-info.component';
import { HeroesBattlePageComponent } from './components/heroes-battle-page/heroes-battle-page.component';

const route: Routes = [
    { path: '', redirectTo: routes.SELECTION_PAGE.routerPath, pathMatch: 'full' },
    { path: routes.SELECTION_PAGE.routerPath, component: SelectionPageComponent },
    { path: routes.USER_INFO_PAGE.routerPath, component: UserInfoPageComponent, children: [
            {path: '', redirectTo: routes.USER_HEROES_LIST.routerPath, pathMatch: 'full'},
            {path: routes.USER_HEROES_LIST.routerPath, component: UserHeroesListComponent},
            {path: routes.BATTLES_HISTORY.routerPath, component: BattlesHistoryComponent},
            {path: routes.POWERUPS.routerPath, component: PowerupsComponent},
            {path: routes.HERO_INFO_PAGE.routerPath, component: HeroInfoComponent},
        ]},
    { path: routes.HEROES_BATTLE_PAGE.routerPath, component: HeroesBattlePageComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(route) ],
    exports: [ RouterModule ]
})
export class HeroesRoutingModule {
}
