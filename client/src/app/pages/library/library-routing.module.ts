// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LibraryComponent } from 'app/pages/library/library.component';
import { AllBooksComponent } from 'app/pages/library/all-books/all-books.component';
import { AllAuthorsComponent } from 'app/pages/library/all-authors/all-authors.component';
import { BookDetailsComponent } from 'app/pages/library/book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-books', pathMatch: 'full' },
  { path: '', component: LibraryComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id', component: BookDetailsComponent },
      { path: 'all-authors', component: AllAuthorsComponent },
      // { path: 'author-details/:id', component: AuthorDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LibraryRoutingModule { }
