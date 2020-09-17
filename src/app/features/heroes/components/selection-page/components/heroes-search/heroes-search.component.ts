import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allowedLettersRegExp } from '../../../../../../shared/utils/regexps';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-heroes-search',
    templateUrl: './heroes-search.component.html',
    styleUrls: [ './heroes-search.component.scss' ]
})
export class HeroesSearchComponent implements OnInit {

    userInfo: IUserInfo;
    subscription: Subscription = null;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private userInfoService: UserInfoService) {
        this.subscription = this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
        });
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group(
            {
                search: this.fb.control('', [ Validators.pattern(allowedLettersRegExp), Validators.required ])
            }
        );
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.userInfoService.setUserInfoSearchQuery(this.getField('search').value);
        }
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
