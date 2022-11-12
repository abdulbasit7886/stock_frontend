import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SupadmindashboardComponent } from './supadmindashboard/supadmindashboard.component';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import {ActivateGuard} from "../activate.guard";
const routes: Routes = [

  {
    path: 'supadminlogin',
    component: SuperadminloginComponent,
  },
  {
    path:"supadmindashboard",
    component:SupadmindashboardComponent,
    // canActivate:[ActivateGuard],
  },
 {
  path:"changepassword",
  component:ChangepasswordComponent,
  // canActivate:[ActivateGuard],
 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
