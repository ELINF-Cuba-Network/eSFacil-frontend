import { Component, Input, OnInit } from '@angular/core';
import { Bitstream } from './bitstream';

@Component({
  selector: 'esfacil-cmp-dropbox',
  templateUrl: './cmp-dropbox.component.html',
  styleUrls: ['./cmp-dropbox.component.sass']
})
export class CmpDropboxComponent implements OnInit {

    @Input() data;
    loading = false; // <-- Control when files are loading
    uploadingValue = 0; // <-- Control Uploading value

    constructor(
    ) { }

    ngOnInit() {
    }

    log($event) {
      console.log('log:', $event);
    }

    success($event) {
        // Get bitstream of response
        const bitstream = $event[1].bitstream;

        // Add the new uploaded bitstream to the list
        this.data.bitstreams.push(bitstream);

        // Stop loading
        this.finishLoading();
    }

    error($event) {
        // Log error in a specific way

        // Stop loading
        this.finishLoading();
    }

    progress(bytes) {
        // Get percent
        const p = bytes[1];
        this.uploadingValue = p;
    }

    startSending($event) {
        this.loading = true;
    }

    finishLoading() {
        this.loading = false;
        this.uploadingValue = 0;
    }

    /**
     * Delete bitstream when bitstream item
     * emit the delete action
     * @param {Bitstream} bitstream
     */
    delete(bitstream: Bitstream) {
        const index = this.data.bitstreams
            .map(bs => bs.id) // Convert to an array of ids [1,2,3...4]
            .indexOf(bitstream.id); // Find the index of the element that we want remove
        console.log(index, bitstream, this.data.bitstreams);
        if (index >= 0) {
            this.data.bitstreams.splice(index, 1);
        }
    }
}
