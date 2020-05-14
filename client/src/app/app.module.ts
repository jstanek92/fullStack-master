// Vendors
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// Routings
import { AppRoutingModule } from './app-routing.module';
// Directives
import { AlertComponent } from 'app/shared/directives/alert/alert.component';
// Guards
import { AuthGuard } from 'app/shared/guards';
// Helpers
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from 'app/shared/helpers';
// Services
import { AlertService, AuthenticationService, UserService, BooksService, AuthorsService } from 'app/shared/services';
// Components
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';
// Containers
import { AppHeaderComponent, AppFooterComponent, FullLayoutComponent } from 'app/shared/containers';

const APP_CONTAINERS = [ FullLayoutComponent ];

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppFooterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ...APP_COMPONENTS,
    ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    BooksService,
    AuthorsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
