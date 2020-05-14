// Vendors
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService, AuthenticationService } from 'app/shared/services';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})

export class BookDetailsComponent implements OnInit {
  public book: Book;
  public currentUser: User;
  public bookId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private authenticationService: AuthenticationService
  ) {
    this.bookId = this.route.snapshot.params.id;

    this.bookService.getBook(this.bookId).subscribe((res) => {
      this.book = res[0];
    }, (err) => {
        console.log(err);
    });

    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {

  }

  public editBook(): void {
    this.router.navigate(['/admin/add-book', this.book._id]);
  }

  public deleteBook(): void {
    this.bookService.deleteBook(this.bookId).subscribe(() => {});
    this.goToAllBooks();
  }

  public goToAllBooks(): void {
    this.router.navigate(['/all-books']);
  }

}
