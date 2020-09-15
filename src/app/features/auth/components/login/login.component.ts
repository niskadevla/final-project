import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Message } from '../../../../shared/models/message.model';
import { UsersService } from '../../../../shared/services/users.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { routes } from '../../../../core/routes/app-routes';
import { IUserToken } from '../../../../shared/models/user-token.model';
import { IUser } from '../../../../shared/models/user.model';
import { QUERY_PARAMS } from '../../../../shared/utils/constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, OnDestroy {

    message: Message;
    form: FormGroup;
    link = '/' + routes.REGISTRATION.routerPath;

    // componentDestroyed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    componentDestroyed: ReplaySubject<any> = new ReplaySubject<any>(1);

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private usersService: UsersService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.setMessage();
        this.initForm();
        this.queryParamsSubscribe();
    }

    ngOnDestroy(): void {
        this.componentDestroyed.next(null);
        this.componentDestroyed.complete();
    }

    initForm(): void {
        this.form = this.fb.group(
            {
                email: this.fb.control('', [ Validators.required, Validators.email ]),
                password: this.fb.control('', [ Validators.required, Validators.minLength(5) ])
            }
        );
    }

    setMessage(): void {
        this.message = new Message('', 'danger');
    }

    queryParamsSubscribe(): void {
        this.route.queryParams
            .pipe(takeUntil(this.componentDestroyed))
            .subscribe((params: Params) => {
                for (const [key, value] of Object.entries(QUERY_PARAMS)) {
                    if (params[key]) {
                        this.showMessage(value);
                    }
                }
            });
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

    public isFieldHasError(fieldName: string, error: string): boolean {
        return this.form.get(fieldName)
                   .hasError(error);
    }

    private showMessage(message: Message): void {
        this.message = message;
    }

    getTimeStamp(): number {
        return Date.now();
    }

    private createUserToken({ name, email }: IUser): IUserToken {
        return {
            name,
            email,
            token: this.getTimeStamp(),
            timeStamp: this.getTimeStamp()
        };
    }

    onSubmit(): void {
        const data = {...this.form.value};
        const user: IUser = this.usersService.getUserByEmail(data.email);

        if (!user) {
            this.showMessage({
                text: 'User didn\'t find',
                type: 'danger'
            });

            return;
        }

        if (user.password === data.password) {
            this.loginUser(user);
        } else {
            this.showMessage({
                text: 'Password is incorrect',
                type: 'danger'
            });
        }
    }

    private loginUser(user: IUser): void {
        const userToken: IUserToken = this.createUserToken(user);

        this.message.text = '';
        this.authService.login(userToken);
        this.router.navigate([ routes.HEROES.routerPath ]);
    }

}
