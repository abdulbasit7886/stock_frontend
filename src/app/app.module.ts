import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IntercepService } from './Services/intercep.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { HireTechnicianModule } from './hire-technician/hire-technician.module';
import { StockModule } from './stock/stock.module';



@NgModule({
  declarations: [AppComponent],
  imports: [ 
    AppRoutingModule,
    LoginRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    SuperAdminModule,
    LoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    SharedModule,
    HireTechnicianModule,
    StockModule,


    
  ],
  providers: [
    CookieService,
    ToastrService,
    { provide: HTTP_INTERCEPTORS, useClass: IntercepService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
