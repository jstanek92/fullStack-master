// Vendors
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

// Environments
import { environment } from "environments/environment";
// Services
import { AlertService } from '.';
// Models
import { User } from "app/shared/models";

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {

  }

  public login(username: string, password: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options: any = { headers: headers };
    let user = this.http.post(`${environment.apiUrl}/auth/login`, { username, password }, options);

    user.subscribe(
      (data: any) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        let decodedToken = jwt_decode(data.token);
        console.log(decodedToken);
        localStorage.setItem("currentUser", JSON.stringify(decodedToken));
        return data;
      },
      (error) => {
        this.alertService.error(error);
      });

      return user;
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  }

  public getCurrentUser(): User {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    return user;
  }
}
