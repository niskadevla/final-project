import { AbstractControl, ValidatorFn } from '@angular/forms';

export function allowedEmailValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = !nameRe.test(control.value);
        return forbidden ? {forbiddenValue: {value: control.value}} : null;
    };
}
