import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allowedLettersRegExp } from '../../../../../../shared/utils/regexps';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.scss']
})
export class HeroesSearchComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group(
            {
                search: this.fb.control('', [ Validators.pattern(allowedLettersRegExp), Validators.required])
            }
        );
    }

    onSubmit(): void {
        console.log(this.form.value);
        console.log(this.form);
        // console.log(this.form.get('search').errors);
        this.form.reset();
    }

    isFieldHasError(fieldName: string, error: string): boolean {
        return this.form.get(fieldName)
                   .hasError(error);
    }

    isSearchIncorrect(): boolean {
        return this.getField('search').invalid && this.getField('search').touched;
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }


}
