// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Author } from 'app/shared/models';
// import { AuthorsResponse } from 'app/shared/models/responseModels';
// Environments
import { environment } from 'environments/environment';

@Injectable()
export class AuthorsService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllAuthors(): Observable<any> {
    return this.http.get(environment.apiUrl + '/authors/getAll');
  }

  public getAuthor(authorId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/authors/getById/` + authorId);
  }

  public deleteAuthor(authorId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/authors/deleteById/` + authorId);
  }

  public createAuthor(newAuthor: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authors/create`, newAuthor);
  }

  public updateAuthor(authorId: string, newAuthor: Author): Observable<any> {
    return this.http.put(`${environment.apiUrl}/authors/updateById/` + authorId, newAuthor);
  }
}
