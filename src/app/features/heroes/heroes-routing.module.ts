import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { AuthGuard } from '../../shared/services/auth.guard';
import { routes } from '../../core/routes/app-routes';
import { SelectionPageComponent } from './components/selection-page/selection-page.component';

const route: Routes = [
    { path: '', component: HeroesComponent, canActivate: [ AuthGuard ], children: [
            { path: routes.SELECTION_PAGE.routerPath, component: SelectionPageComponent }
        ] }
];


@NgModule({
    imports: [ RouterModule.forChild(route) ],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
