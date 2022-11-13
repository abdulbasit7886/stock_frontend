import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ConfirmationDeleteComponent } from './components/confirmation-delete/confirmation-delete.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ConfirmationDeleteComponent,
    NotificationComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatToolbarModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatInputModule
    
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ConfirmationDeleteComponent,
    NotificationComponent,
  ],
})
export class SharedModule {}
