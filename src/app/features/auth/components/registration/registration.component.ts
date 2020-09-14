import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allowedNameValidator } from '../../validators/user-name.validator';
import { allowedEmailValidator } from '../../validators/email.validator';
import { allowedPasswordValidator, identityRevealedValidator } from '../../validators/password.validator';
import { allowedEmail, allowedPassword, camelCase, kebabCase, spaceCase } from '../../../../shared/utils/constants';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group({
            name: this.fb.control('', [
                Validators.required,
                Validators.minLength(8),
                allowedNameValidator([
                    camelCase,
                    kebabCase,
                    spaceCase
                ])
            ]),
            email: this.fb.control('', [
                Validators.required,
                Validators.email,
                allowedEmailValidator(allowedEmail)
            ]),
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(5),
                allowedPasswordValidator(allowedPassword)
            ])
        }, { validators: identityRevealedValidator });
    }

    public getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

    public isFieldHasError(fieldName: string, error: string): boolean {
        return this.form.get(fieldName).hasError(error);
    }
}
