// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { BooksService, AuthorsService } from 'app/shared/services';
// Models
import { Book, Author } from 'app/shared/models';

@Component({
  selector: 'app-add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent implements OnInit {
  public bookForm: FormGroup;
  public submitted: Boolean = false;
  public loading: Boolean = false;
  public formCtrl: any;
  public book: Book;
  public authors: Author[];
  public dropdownList: Author[] = [];
  public selectedItems: Author[] = [];
  public dropdownSettings: Object = {};
  public bookId: string;

  public control: FormControl = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private authorsService: AuthorsService
  ) {
    this.authorsService.getAllAuthors().subscribe((response) => {
      this.authors = response;
    }, (err) => {
      console.log(err);
    });

    this.bookId = this.route.snapshot.params.id;

    if (this.bookId !== '-1') {
      this.bookService.getBook(this.bookId).subscribe((res) => {
        this.book = res[0];

        this.bookForm.setValue({
          name: this.book.name,
          description: this.book.description,
          authors: this.book.authors,
          outOfLibrary: this.book.outOfLibrary,
          type: this.book.type
        });
      }, (err) => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      authors: [[], Validators.required],
      outOfLibrary: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.formCtrl = this.bookForm.controls;

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      placeholder: 'Select authors'
    };
  }

  public onSubmit(): void {
    this.submitted = true;

    this.router.navigate(['library/all-books']);
  }

  public submitBook(): any { // TODO
    if (this.bookId !== '-1') {
      this.updateBook(this.book._id, this.bookForm.value);
    } else {
      this.createBook();
    }
  }

  public updateBook(id: string, updatedBook: any): void { // TODO
    this.bookService.updateBook(id, updatedBook).subscribe(() => {});
  }

  public createBook(): void {
    this.bookService.createBook(this.bookForm.value).subscribe(() => {});
  }

  public cancel(): void {
    this.location.back();
  }

  public onItemSelect(item: any): void {
    console.log(item);
  }

  public onSelectAll(items: any): void {
    console.log(items);
  }

}
