import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { allowedIfOnlyOneValidator } from '../../validators/user-name.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent {

    form = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            allowedIfOnlyOneValidator([
                /^[a-z]+[A-Z]{1}[a-z]+$/,
                /^[a-z]+-{1}[a-z]+$/,
                /^[A-Z]{1}[a-z]+[A-Z]{1}[a-z]+$/
            ])
        ]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    get userName(): AbstractControl {
        return this.form.get('name');
    }
}
