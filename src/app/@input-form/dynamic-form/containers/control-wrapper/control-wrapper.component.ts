import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'esfacil-control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.css']
})
export class ControlWrapperComponent implements OnInit {

    @Input() config;
    @Input() data;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Get the specific data values for
     * a specific component
     * This fn check if the key {cslfield} of the config
     * is in the data body, if exist, return this.
     * else create this field en the config with empty value
     * @param {string} field
     * @returns {string}
     */
    getFieldData(field: any): any {
        let pieceOfData;

        // If exist the data, store this
        if (this.data[field.cslfield]) {
            pieceOfData = this.data[field.cslfield];
        } else {
            // If not exist, check field, if is repeatable, create and empty array
            // else create an empty value
            if (field.repeatable) {
                this.data[field.cslfield] = new Array();
                pieceOfData = this.data[field.cslfield];
            } else {
                this.data[field.cslfield] = '';
                pieceOfData = this.data[field.cslfield];
            }
        }
        return pieceOfData;
    }

}
