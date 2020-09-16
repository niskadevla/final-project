import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPageComponent } from './selection-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SelectionPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SelectionPageComponent
    ]
})
export class SelectionPageModule {
}
