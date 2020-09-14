import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Message } from '../../../../shared/models/message.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../../../../shared/services/users.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { routes } from '../../../../core/routes/app-routes';
import { IUserToken } from '../../../../shared/models/user-token.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    message: Message;
    form: FormGroup;
    link = '/' + routes.REGISTRATION.routerPath;

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private usersService: UsersService,
                private authService: AuthService) {}

    ngOnInit(): void {
        this.message = new Message('', 'danger');


        this.initForm();

        this.route.queryParams
            .subscribe( (params: Params) => {
                if (params.accessAllowed) {
                    this.showMessage({
                        text: 'Now we migth login to system',
                        type: 'success'
                    });
                } else if (params.accessDenied) {
                    this.showMessage({
                        text: 'You should login to system',
                        type: 'danger'
                    });
                }
            });
    }

    initForm(): void {
        this.form = this.fb.group(
            {
                email: this.fb.control('', [Validators.required, Validators.email]),
                password: this.fb.control('', [Validators.required, Validators.minLength(5)])
            }
        );
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

    getFieldErrors(fieldName: string): ValidationErrors {
        return this.form.get(fieldName).errors;
    }

    private showMessage(message: Message): void {
        this.message = message;

        window.setTimeout(() => this.message.text = '', 5000);
    }

    private getToken(): number {
        return Date.now();
    }

    private getTimeStamp(): number {
        return Date.now();
    }

    private createUserToken(user): IUserToken {
        return {
            name: user.name,
            email: user.email,
            token: this.getToken(),
            timeStamp: this.getTimeStamp()
        };
    }

    onSubmit(): void {
        const data = this.form.value;
        const user = this.usersService.getUserByEmail(data.email);

        if (user) {
            if (user.password === data.password) {
                const userToken = this.createUserToken(user);

                this.message.text = '';
                window.localStorage.setItem('user', JSON.stringify(userToken));
                this.authService.login();
                this.router.navigate([routes.HEROES.routerPath]);
            } else {
                this.showMessage({
                    text: 'Password is incorrect',
                    type: 'danger'
                });
            }
        } else {
            this.showMessage({
                text: 'User didn\'t find',
                type: 'danger'
            });
        }
    }

}
