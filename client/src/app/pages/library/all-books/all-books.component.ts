// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService, AuthenticationService } from 'app/shared/services';
// Enums
import { UserType } from 'app/shared/enums';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {
  public books: Book[] = [] as Book[];
  public booksTotalCount: number;
  public currentUser: User;
  public page: number = 1;

  constructor(
    public booksService: BooksService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  async ngOnInit() {
    const booksResponseData = await this.booksService.getAllBooks();
    if (booksResponseData.error) {
      return;
    }
    this.books = booksResponseData.data;
    console.log(this.books);
    this.booksTotalCount = booksResponseData.data.length;
  }

  public addNewBook(): void {
    this.router.navigate(['/admin/add-book', -1]);
  }

  public addNewAuthor(): void {
    this.router.navigate(['/admin/add-author', -1]);
  }

  public showBookDetails(id: number): void {
    this.router.navigate(['/library/book-details', id]);
  }

  public pageChange($event: number): void {
    this.page = $event;
  }

}
