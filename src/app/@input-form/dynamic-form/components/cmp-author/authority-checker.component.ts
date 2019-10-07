import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Author } from './author';
import { AuthorityService } from './authority.service';

@Component({
  selector: 'esfacil-authority-checker',
  templateUrl: './authority-checker.component.html',
  styles: [`
      mat-radio-button { display: block; margin: 5px 0; }
      div.actions { text-align: right; margin: 10px; }
      div.actions > button { margin: 10px; }
  `]
})
export class AuthorityCheckerComponent implements OnInit {

    authorities: any[] = [];
    selectedValue;

    selectedValueChange: EventEmitter<Author> = new EventEmitter<Author>();

    constructor(
        private dialogRef: MatDialogRef<AuthorityCheckerComponent>,
        private authorityService: AuthorityService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        this.authorityService.findAuthority('pepe')
            .subscribe( res => {
                this.authorities = res.body;
                console.log('Authorities fetched', res.body);
            });
        console.log(this.data);
    }

    select() {
        // Convert AUCTORITAS response to author
        const author = new Author(
            this.selectedValue.value.lastname,
            this.selectedValue.value.name,
            this.selectedValue.value.uri
        );
        this.selectedValueChange.emit(author);
        this.close();
    }

    close() {
        this.dialogRef.close();
    }

    updateSelectedValue(value) {
        this.selectedValue = value;
    }

}
