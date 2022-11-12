import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { HireTechnicianRoutingModule } from './hire-technician-routing.module';
import { QuickserviceComponent } from './quickservice/quickservice.component';
import { NormalserviceComponent } from './normalservice/normalservice.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    QuickserviceComponent,
    NormalserviceComponent,
  ],
  imports: [
    CommonModule,
    HireTechnicianRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatIconModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class HireTechnicianModule { }
