import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from 'src/app/core/base/form-provider';
import { ControlErrorStateMatcher } from 'src/app/core/error-matchers/control-error-state-matcher';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  public form: FormGroup;
  public matcher = new ControlErrorStateMatcher();

  public get firstNameFormControl(): FormControl {
    return this.form.get('firstName') as FormControl;;
  }

  public get lastNameFormControl(): FormControl {
    return this.form.get('lastName') as FormControl;;
  }

  constructor(private formProvider: FormProvider,
              private router: Router) { }

  public ngOnInit(): void {
    this.form = this.formProvider?.getForm().get('contact') as FormGroup;
  }

  public next(): void {
    if (this.form.valid) {
      this.router.navigateByUrl('/register/account');
    }
  }
}
