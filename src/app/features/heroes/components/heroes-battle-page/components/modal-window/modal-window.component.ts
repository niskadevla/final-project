import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: [ './modal-window.component.scss' ]
})
export class ModalWindowComponent {

    @Input() winLose: string;
    @Input() isFinished: boolean;

    closeWindow({ target }: MouseEvent): void {
        if (( target as HTMLElement ).closest('button')) {
            this.isFinished = false;
        }
    }
}
