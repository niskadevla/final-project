import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoPageComponent } from './user-info-page.component';

@NgModule({
    declarations: [
        UserInfoPageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UserInfoPageComponent
    ]
})
export class UserInfoPageModule {}
