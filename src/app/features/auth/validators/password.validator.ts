import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function allowedPasswordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = !nameRe.test(control.value);
        return forbidden ? {forbiddenValue: {value: control.value}} : null;
    };
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name')?.value;
    const email = control.get('email')?.value;
    const password = control.get('password')?.value;
    const emailBeforeAt = email?.split('@')[0];
    let isContainName;
    let isContainEmail;

    isContainName = password?.includes(name);
    isContainEmail = emailBeforeAt && password?.includes(emailBeforeAt);

    return isContainName || isContainEmail ? { identityRevealed: true } : null;
};
