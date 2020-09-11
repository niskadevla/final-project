import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { allowedNameValidator } from '../../validators/user-name.validator';
import { allowedEmailValidator } from '../../validators/email.validator';
import { allowedPasswordValidator, identityRevealedValidator } from '../../validators/password.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            name: this.fb.control('', [
                Validators.required,
                Validators.minLength(8),
                allowedNameValidator([
                    /^[a-z]+[A-Z]{1}[a-z]+$/,
                    /^[a-z]+-{1}[a-z]+$/,
                    /^[A-Z]{1}[a-z]+[A-Z]{1}[a-z]+$/
                ])
            ]),
            email: this.fb.control('', [
                Validators.required,
                Validators.email,
                allowedEmailValidator(/^(\w+\.?){0,3}@(\w){0,5}(\.com|\.net|\.org|\.co|\.us)$/)
            ]),
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(5),
                allowedPasswordValidator(/\w(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
            ])
        }, { validators: identityRevealedValidator });
    }

    getFieldErrors(fieldName: string): ValidationErrors {
        return this.form.get(fieldName).errors;
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }
}
