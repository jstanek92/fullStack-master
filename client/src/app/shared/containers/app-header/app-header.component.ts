// Vendors
import { Component, OnInit } from '@angular/core';

// Models
import { User } from 'app/shared/models';
import { AuthenticationService } from 'app/shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  public currentUser: User;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
  }

}
