import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { SupadmindashboardComponent } from './supadmindashboard/supadmindashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SuperadminloginComponent,
    SupadmindashboardComponent,
    ChangepasswordComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SuperAdminRoutingModule
  
  ],
  providers: [],
})
export class SuperAdminModule { }
