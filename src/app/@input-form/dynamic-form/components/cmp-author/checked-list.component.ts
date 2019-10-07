import {Component, Input, OnInit} from '@angular/core';
import {Author} from './author';

@Component({
  selector: 'esfacil-checked-list',
  templateUrl: './checked-list.component.html',
  styles: [`
      div.check-authors { margin-bottom: 1%; }
      div.check-authors > div { margin: 1% 0 .6% 0; }
      div.check-authors .link-icon { opacity: .4;  }
      div.check-authors mat-chip { cursor: pointer; margin: .1% .3%; padding-bottom: 5px; padding-top: 5px; }
  `]
})

/**
 * This component take the author data JSON
 * Iterate over items and list the checked list
 * (Author with uri - checked with AUCTORITAS)
 */
export class CheckedListComponent implements OnInit {

    @Input() authorsData;

    constructor() { }

    ngOnInit() {
    }

    remove(index: number) {
        if (this.authorsData.length >= 0 && this.authorsData.length > index ) {
            this.authorsData.splice(index, 1);
        }
    }

    countAuthors(): number {
        let count = 0;
        this.authorsData
            .filter(author => author.uri)
            .map( () =>  count++ );

        return count;
    }

    openUri(author: Author) {
        const win = window.open(author.uri, '_blank');
        win.focus();
    }

}
