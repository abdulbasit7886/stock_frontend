import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StocktitleComponent } from './stocktitle/stocktitle.component';
import { GraphdataComponent } from './graphdata/graphdata.component';


@NgModule({
  declarations: [
    StocktitleComponent,
    GraphdataComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
