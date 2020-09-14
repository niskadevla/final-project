import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routes } from '../../../../core/routes/app-routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    route = '/' + routes.REGISTRATION.routerPath;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

    initForm(): void {
        this.form = this.fb.group(
            {
                email: this.fb.control('', [Validators.required]),
                password: this.fb.control('', [Validators.required])
            }
        );
    }

}
