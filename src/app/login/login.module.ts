import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreatenewpasswordComponent } from './createnewpassword/createnewpassword.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    CreatenewpasswordComponent,
    ThankYouComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule ],
  exports: [SignUpComponent, SignInComponent, ForgotPasswordComponent, CreatenewpasswordComponent],
})
export class LoginModule {}
