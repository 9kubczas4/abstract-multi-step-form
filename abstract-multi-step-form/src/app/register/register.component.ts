import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormProvider } from '../core/base/form-provider';
import { PasswordValidator } from '../core/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{ provide: FormProvider, useExisting: RegisterComponent }]
})
export class RegisterComponent extends FormProvider implements OnInit {
  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public getForm(): FormGroup {
    return this.registrationForm;
  }

  private initForm(): void {
    this.registrationForm = this.formBuilder.group({
      'contact': this.formBuilder.group({
        'firstName': this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
        'lastName': this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
      }),
      'account': this.formBuilder.group({
        'email': this.formBuilder.control('', [Validators.required, Validators.email]),
        'password': this.formBuilder.group({
          'password': this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), PasswordValidator.strengthPassword]),
          'confirmPassword': this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
        }, { validators: [PasswordValidator.checkPasswords] })
      })
    })
  }
}
