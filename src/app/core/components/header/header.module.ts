import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserInfoModule } from './components/user-info/user-info.module';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        UserInfoModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
