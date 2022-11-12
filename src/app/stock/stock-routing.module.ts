import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphdataComponent } from './graphdata/graphdata.component';
import { StocktitleComponent } from './stocktitle/stocktitle.component';
GraphdataComponent
const routes: Routes = [

  {
    path: 'stock/:id',
    component: StocktitleComponent,
  },
  {
    path: 'stockgraph/:id',
    component: GraphdataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
