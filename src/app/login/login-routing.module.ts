import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenewpasswordComponent } from './createnewpassword/createnewpassword.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'newpassword',
    component: CreatenewpasswordComponent
  },
  {
    path: 'thankyou',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
