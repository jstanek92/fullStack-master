// Vendors
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

// Models
import { User } from 'app/shared/models';
// Services
import { UserService, AuthenticationService } from 'app/shared/services';

@Component({
  templateUrl: 'all-users.component.html'
})

export class AllUsersComponent implements OnInit {
  public currentUser: User;
  public users: User[] = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  public deleteUser(id: string): void {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    }, (err) => {
      console.log(err);
    });
  }

  private loadAllUsers(): void {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    }, (err) => {
      console.log(err);
    });
  }
}
