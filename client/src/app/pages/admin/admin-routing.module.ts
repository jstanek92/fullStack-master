// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdminComponent } from 'app/pages/admin/admin.component';
import { AllUsersComponent } from 'app/pages/admin/all-users/all-users.component';
import { AddBookComponent } from 'app/pages/admin/add-book/add-book.component';
import { AddAuthorComponent } from 'app/pages/admin/add-author/add-author.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'all-users', component: AllUsersComponent },
      { path: 'add-book/:id', component: AddBookComponent },
      { path: 'add-author/:id', component: AddAuthorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
