import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Message } from '../../../../shared/models/message.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../../../../shared/services/users.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { HEROES } from '../../../../shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    message: Message;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private usersService: UsersService,
                private authService: AuthService) {}

    ngOnInit(): void {
        this.message = new Message('', 'danger');

        this.form = this.fb.group(
            {
                email: this.fb.control('', [Validators.required, Validators.email]),
                password: this.fb.control('', [Validators.required, Validators.minLength(5)])
            }
        );

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

    onSubmit(): void {
        const data = this.form.value;
        const user = this.usersService.getUserByEmail(data.email);

        if (user) {
            if (user.password === data.password) {
                this.message.text = '';
                window.localStorage.setItem('user', JSON.stringify(user));
                this.authService.login();
                this.router.navigate([HEROES]);
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
