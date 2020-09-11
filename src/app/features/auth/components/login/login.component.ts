import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group(
            {
                email: this.fb.control('', [Validators.required]),
                password: this.fb.control('', [Validators.required])
            }
        );
    }

    getField(fieldName: string): AbstractControl {
        return this.form.get(fieldName);
    }

}
