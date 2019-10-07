import {Component, Input, OnInit} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'esfacil-cmp-generic',
  templateUrl: './cmp-generic.component.html',
  styleUrls: ['./cmp-generic.component.sass']
})

/**
 * Generic component
 * This component act like a pivot between block-wrapper component
 * and the [components] for add the last one: Not needed yet
 */
export class CmpGenericComponent implements OnInit {

    @Input() config;
    @Input() data;

    constructor() {
    }

    ngOnInit() {
    }
}
