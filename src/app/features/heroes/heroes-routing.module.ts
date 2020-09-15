import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { AuthGuard } from '../../shared/services/auth.guard';

const route: Routes = [
    { path: '', component: HeroesComponent, canActivate: [ AuthGuard ] }
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(route) ],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
