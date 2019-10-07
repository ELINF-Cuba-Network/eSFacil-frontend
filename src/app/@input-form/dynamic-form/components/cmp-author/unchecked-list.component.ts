import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from './author';

@Component({
  selector: 'esfacil-unchecked-list',
  templateUrl: './unchecked-list.component.html',
  styles: [`
        div.uncheck-authors mat-chip { cursor: pointer; margin: .1% .3%;}
  `]
})

export class UncheckedListComponent implements OnInit {

    @Input() authorsData;

    @Output()
    authorChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    authorSelected(index: number, author: Author) {
        this.authorChange.emit({index: index, author: author});
    }

    remove(index: number) {
        if (this.authorsData.length >= 0 && this.authorsData.length > index ) {
            this.authorsData.splice(index, 1);
        }
    }

}
