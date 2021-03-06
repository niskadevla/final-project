import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { allowedNameValidator } from '../../../../shared/validators/user-name.validator';
import { allowedEmailValidator, forbiddenEmails } from '../../../../shared/validators/email.validator';
import { allowedPasswordValidator, identityRevealedValidator } from '../../../../shared/validators/password.validator';
import { UsersService } from '../../../../shared/services/users.service';
import { allowedEmailRegexp, allowedPasswordRegexp, camelCaseRegexp, kebabCaseRegexp, spaceCaseRegexp } from '../../../../shared/utils/regexps';
import { routes } from '../../../../core/routes/app-routes';
import { uniqId } from '../../../../shared/utils/uniqId';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder,
                private usersService: UsersService,
                private router: Router) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group({
            name: this.fb.control('', [
                Validators.required,
                Validators.minLength(8),
                allowedNameValidator([
                    camelCaseRegexp,
                    kebabCaseRegexp,
                    spaceCaseRegexp
                ])
            ]),
            email: this.fb.control('', [
                Validators.required,
                Validators.email,
                allowedEmailValidator(allowedEmailRegexp),
                forbiddenEmails.call(this)
            ]),
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(5),
                allowedPasswordValidator(allowedPasswordRegexp)
            ])
        }, { validators: identityRevealedValidator });
    }

    isPasswordIncorrect(): boolean {
        return (this.form.errors?.identityRevealed && this.getField('password').touched)
            || (this.getField('password').invalid && this.getField('password').touched);
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

    isFieldHasError(fieldName: string, error: string): boolean {
        return this.form.get(fieldName)
                   .hasError(error);
    }

    onSubmit(): void {
        const data = {...this.form.value, id: uniqId()};

        if (this.form.valid) {
            this.usersService.createNewUser(data);
            this.form.reset();
            this.router.navigate([ routes.LOGIN.routerPath ], {
                queryParams: {
                    accessAllowed: true,
                    message: 'accessAllowed'
                }
            });
        }
    }

}
