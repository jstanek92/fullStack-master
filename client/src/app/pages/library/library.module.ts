// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

// Routings
import { LibraryRoutingModule } from './library-routing.module';
// Components
import { LibraryComponent } from 'app/pages/library/library.component';
import { AllBooksComponent } from 'app/pages/library/all-books/all-books.component';
import { AllAuthorsComponent } from 'app/pages/library/all-authors/all-authors.component';
import { BookDetailsComponent } from 'app/pages/library/book-details/book-details.component';

@NgModule({
  declarations: [
    LibraryComponent,
    AllBooksComponent,
    AllAuthorsComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NgxPaginationModule
  ],
  providers: [

  ]
})

export class LibraryModule { }
