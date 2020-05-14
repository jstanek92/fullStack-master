// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { AuthorsService } from 'app/shared/services';
// Models
import { Author } from 'app/shared/models';

@Component({
  selector: 'app-add-author',
  templateUrl: 'add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})

export class AddAuthorComponent implements OnInit {
  public authorForm: FormGroup;
  public submitted: Boolean = false;
  public loading: Boolean = false;
  public formCtrl: any;
  public author: Author;
  public control: FormControl = new FormControl();
  public authorId: string;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) {
    // this.authorsService.getAllAuthors().then((response) => {
    //   this.authors = response.authors;
    //   console.log(response);
    // }).catch(function (e) {
    // console.log(e);
    // });

    this.authorId = this.route.snapshot.params.id;

    if (this.authorId !== '-1') {
      this.authorsService.getAuthor(this.authorId).subscribe((res) => {
        this.author = res[0];

        this.authorForm.setValue({
          firstName: this.author.firstName,
          lastName: this.author.lastName,
          // authors: this.book.authors,
          // outOfLibrary: this.book.outOfLibrary,
          // type: this.book.type
        });
      }, (err) => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.formCtrl = this.authorForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    this.router.navigate(['library/all-authors']);
  }

  public cancel(): void {
    this.location.back();
  }

  public submitAuthor(): any { // TODO
    if (this.authorId !== '-1') {
      this.updateAuthor(this.author._id, this.authorForm.value);
    } else {
      this.createAuthor();
    }
  }

  public updateAuthor(id: string, updatedAuthor: any): void {
    this.authorsService.updateAuthor(id, updatedAuthor).subscribe(() => {});
  }

  public createAuthor(): void {
    this.authorsService.createAuthor(this.authorForm.value).subscribe(() => {});
  }
}
