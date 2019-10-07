import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'esfacil-cmp-onebox-repeatable',
  templateUrl: './cmp-onebox-repeatable.component.html',
  styleUrls: ['./cmp-onebox-repeatable.component.sass']
})
export class CmpOneboxRepeatableComponent  implements OnInit {

    config;
    data;

    // Var for store the data in {key:value}
    // binding to current value
    map = [];

    isUpdating = false;
    currentValue = new Data();

    constructor() { }

    ngOnInit() {
        // Create a local map for mirroring the data
        this.syncDataToMap();
    }

    addValue() {

        if (this.inputIsEmpty()) { return; }

        // Check for duplicated when adding
        const match = this.map.filter( it =>
            it.value === this.currentValue.value
        );

        if (match.length === 0) {
            this.map.push({index: this.data.length, value: this.currentValue.value});
            this.data[this.config.cslfield].push(this.currentValue.value);
            this.clearField();
        }

        if (this.isUpdating) {
            // Sync Map value to data value
            this.data[this.config.cslfield].splice(this.currentValue.index, 1, this.currentValue.value);
            this.stopUpdating();
        }
    }

    clearField() {
        this.currentValue = new Data();
    }

    selectValue(index: number, value: any) {
        this.currentValue = this.map[index];
        this.currentValue.index = index;
        this.isUpdating = true;
    }

    stopUpdating() {
        this.clearField();
        this.isUpdating = false;
    }

    remove(index: number){
        if (this.map.length >= 0 && this.map.length > index ) {
            this.map.splice(index, 1);
            this.data[this.config.cslfield].splice(index, 1);
        }
    }

    /**
     * Check if inputs are empty
     */
    inputIsEmpty(): boolean {
        return this.currentValue.value === undefined;
    }

    /**
     * Sync data to the map because is imposible
     * do binding with array of primitives values
     */
    syncDataToMap() {
        this.map = [];
        this.data[this.config.cslfield].forEach( (value, index) => {
            this.map.push({index, value});
        });
    }

    /**
     * Sync map to original data
     */
    syncMapToData() {
        this.data = [];
        this.map.forEach(it => {
            this.data.push(it.value);
        });
    }
}
