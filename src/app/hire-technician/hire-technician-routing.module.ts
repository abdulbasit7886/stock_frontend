import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalserviceComponent } from './normalservice/normalservice.component';
import { QuickserviceComponent } from './quickservice/quickservice.component';

const routes: Routes = [
  {
    path: 'stocklist',
    component: QuickserviceComponent,
  },
  {
    path: 'stock_name',
    component: NormalserviceComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireTechnicianRoutingModule { }
