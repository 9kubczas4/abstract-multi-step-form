import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { materialModules } from './material';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
