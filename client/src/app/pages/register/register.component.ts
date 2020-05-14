// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { first } from 'rxjs/operators';

// Services
import { AlertService, UserService } from 'app/shared/services';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public loading: Boolean = false;
  public submitted: Boolean = false;
  public formCtrl: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      userRole: ['', Validators.required]
    });

    this.formCtrl = this.registerForm.controls;
    console.log(this.formCtrl);
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  public onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.repeatPassword) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
        (data) => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
