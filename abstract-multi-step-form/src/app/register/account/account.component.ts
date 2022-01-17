import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from 'src/app/core/base/form-provider';
import { ControlErrorStateMatcher } from 'src/app/core/error-matchers/control-error-state-matcher';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public form: FormGroup;
  public matcher = new ControlErrorStateMatcher();

  public get emailFormControl(): FormControl {
    return this.form.get('email') as FormControl;;
  }

  public get passwordFormControl(): FormControl {
    return this.passwordFormGroup.get('password') as FormControl;
  }

  public get confirmPasswordFormControl(): FormControl {
    return this.passwordFormGroup.get('confirmPassword') as FormControl;
  }

  public get passwordFormGroup(): FormGroup {
    return this.form.get('password') as FormGroup;
  }

  constructor(private formProvider: FormProvider,
              private location: Location) {}

  public ngOnInit(): void {
    this.form = this.formProvider?.getForm().get('account') as FormGroup;
  }

  public onSubmit(): void {
    console.log('Submit:');
    console.log(JSON.stringify(this.formProvider.getForm().value));
  }

  public previous(): void {
    this.location.back();
  }
}
