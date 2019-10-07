import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bitstream } from './bitstream';
import { DropboxService } from './dropbox.service';

@Component({
  selector: 'esfacil-bitstream-item',
  templateUrl: './bitstream-item.component.html',
  styleUrls: ['./bitstream-item.component.css']
})
export class BitstreamItemComponent implements OnInit {

    @Input() bitstream: Bitstream;
    deleting = false; // <-- Control if the bistream is deleting
    @Output() deletingChange = new EventEmitter<Bitstream>();

    constructor(
        private dropboxService: DropboxService
    ) { }

    ngOnInit() {
    }

    delete() {
        // Set deleting indicator to true
        this.deleting = true;

        // Send deleting action to server
        this.dropboxService.delete(this.bitstream)
            .subscribe( () => {
                // Update view if delete is successfully
                this.deletingChange.emit(this.bitstream);
                this.deleting = false;
            }, error => {
                // Do something with the error
                console.log(error);
                this.deleting = false;
            });
    }

}
