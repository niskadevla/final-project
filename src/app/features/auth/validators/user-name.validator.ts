import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
}

export function allowedIfOnlyOneValidator(arrRe): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const value = control.value;
        let forbidden = true;
        const cases = arrRe.map(nameRe => nameRe.test(value))
                           .filter(el => el);

        if (cases?.length === 1) {
            forbidden = false;
        }

        return forbidden ? {forbiddenCase: {value}} : null;
    };
}


