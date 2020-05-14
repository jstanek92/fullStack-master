// Vendors
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Environments
import { environment } from "environments/environment.dev";
// Models
import { Book } from 'app/shared/models';
// Helpers
import { call } from 'app/shared/common';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  public getAllBooks(): Promise<any> { // TODO
    return call<Book[]>(
      this.http.get(`${environment.apiUrl}/books/getAll`).toPromise()
    );
  }

  public getBook(bookId: string): Observable<any> { // TODO
    return this.http.get(`${environment.apiUrl}/books/getById/` + bookId);
  }

  public deleteBook(bookId: string): Observable<any> { // TODO
    return this.http.delete(`${environment.apiUrl}/books/deleteById/` + bookId);
  }

  public updateBook(bookId: string, updatedBook: any): Observable<any> { // TODO
    return this.http.put(
      `${environment.apiUrl}/books/updateById/` + bookId,
      updatedBook
    );
  }

  public createBook(newBook): Observable<any> { // TODO
    return this.http.post(`${environment.apiUrl}/books/create`, newBook);
  }
}
