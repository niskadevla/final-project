import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from '../../core/routes/app-routes';
import { SelectionPageComponent } from './components/selection-page/selection-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';

const route: Routes = [
    { path: '', redirectTo: routes.SELECTION_PAGE.routerPath, pathMatch: 'full' },
    { path: routes.SELECTION_PAGE.routerPath, component: SelectionPageComponent },
    { path: routes.USER_INFO_PAGE.routerPath, component: UserInfoPageComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(route) ],
    exports: [ RouterModule ]
})
export class HeroesRoutingModule {
}
