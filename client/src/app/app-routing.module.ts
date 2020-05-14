// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from 'app/shared/guards';
// Enums
import { UserType } from 'app/shared/enums';
// Components
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';
import { FullLayoutComponent } from 'app/shared/containers';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'library',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/library/library.module#LibraryModule'
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserType.Admin] },
    loadChildren: 'app/pages/admin/admin.module#AdminModule'
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'library' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
