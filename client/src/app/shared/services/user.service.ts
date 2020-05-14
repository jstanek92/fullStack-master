// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { User } from 'app/shared/models';
// Environments
import { environment } from 'environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/getAll`);
  }

  public getById(id: string): Observable<any> { // TODO
    return this.http.get(`${environment.apiUrl}/users/getById/` + id);
  }

  public register(user: User): Observable<any> { // TODO
    return this.http.post(`${environment.apiUrl}/users/create`, user);
  }

  public update(user: User): Observable<any> { // TODO
    return this.http.put(`${environment.apiUrl}/users/updateById/` + user.id, user);
  }

  public delete(id: string): Observable<any> { // TODO
    return this.http.delete(`${environment.apiUrl}/users/deleteById/` + id);
  }
}
