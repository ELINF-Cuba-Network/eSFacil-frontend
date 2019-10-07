import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Author } from './author';
import { MatDialog } from '@angular/material';
import { AuthorityCheckerComponent } from './authority-checker.component';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'esfacil-cmp-author',
  templateUrl: './cmp-author.component.html',
  styleUrls: ['./cmp-author.component.sass'],
})
export class CmpAuthorComponent implements OnInit {

  config;
  data;
  isUpdating = false;

  currentAuthor: Author = new Author();
  currentIndex;

  matcher; // <-- Matcher to validate if the author list is empty

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.matcher = new IsListEmptyStateMatcher(this.data[this.config.cslfield]);
  }

  addAuthor() {

    if (this.inputIsEmpty()) {
      return;
    }

    // Check for duplicated when adding
    const match = this.data[this.config.cslfield].filter(author =>
      author.given === this.currentAuthor.given &&
      author.family === this.currentAuthor.family &&
      author.uri === this.currentAuthor.uri
    );

    if (match.length === 0) {
      this.data[this.config.cslfield].push(this.currentAuthor);
      this.clearSelectedAuthor();
    }

    if (this.isUpdating) {
      this.stopUpdating();
    }
  }

  openAuthorityDialog(): void {

    if (this.inputIsEmpty()) {
      return;
    }

    const dialogRef = this.dialog.open(AuthorityCheckerComponent, {
      width: 'auto',
      height: 'auto',
      data: {term: this.currentAuthor}
    });

    // Subscribe when user select a authority
    dialogRef.componentInstance.selectedValueChange.subscribe((author: Author) => {
      // Delete unchecked author and add new authority
      if (this.currentIndex >= 0) {
        this.data[this.config.cslfield].splice(this.currentIndex, 1);
      }
      this.currentAuthor = Object.assign({}, author);

      this.addAuthor();
      this.clearSelectedAuthor();
    });
  }

  updateCurrentAuthor(data: any) {
    this.currentAuthor = data.author;
    this.currentIndex = data.index;
    this.isUpdating = true;
  }

  stopUpdating() {
    this.currentAuthor = new Author();
    this.isUpdating = false;
  }

  clearSelectedAuthor() {
    this.currentAuthor = new Author();
    this.currentIndex = undefined;
  }

  /**
   * Check if inputs are empty
   */
  inputIsEmpty(): boolean {
    return (!this.currentAuthor.given && !this.currentAuthor.family);
  }

  isValid(): boolean {
    if (this.config.required) {
      return !(this.data[this.config.cslfield].length === 0);
    }
    return true;
  }

}

export class IsListEmptyStateMatcher implements ErrorStateMatcher {

  constructor(public authors: Array<any>) {
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return this.authors.length === 0;
  }
}
