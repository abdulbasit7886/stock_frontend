import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { StockModule } from './stock/stock.module';

const routes: Routes = [{
  path:'dashboard' , component:DashboardComponent
}];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoginModule,
    StockModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
