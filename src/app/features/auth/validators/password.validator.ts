import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function allowedPasswordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = !nameRe.test(control.value);
        return forbidden ? {forbiddenValue: {value: control.value}} : null;
    };
}

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.get('name').pristine || control.get('email').pristine) {
        return null;
    }

    const name = control.get('name')?.value;
    const email = control.get('email')?.value;
    const password = control.get('password')?.value;
    const [emailBeforeAt] = email?.split('@');
    const isContainName = password?.includes(name);
    const isContainEmail = emailBeforeAt && password?.includes(emailBeforeAt);

    return isContainName || isContainEmail ? { identityRevealed: true } : null;
};
