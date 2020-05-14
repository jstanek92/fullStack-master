// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// Routings
import { AdminRoutingModule } from 'app/pages/admin/admin-routing.module';
// Components
import { AdminComponent } from 'app/pages/admin/admin.component';
import { AllUsersComponent } from 'app/pages/admin/all-users/all-users.component';
import { AddBookComponent } from 'app/pages/admin/add-book/add-book.component';
import { AddAuthorComponent } from 'app/pages/admin/add-author/add-author.component';

@NgModule({
  declarations: [
    AdminComponent,
    AllUsersComponent,
    AddBookComponent,
    AddAuthorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  providers: [  ]
})

export class AdminModule { }
