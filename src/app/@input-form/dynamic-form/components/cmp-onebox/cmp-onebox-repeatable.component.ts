import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { CmpBaseComponent } from '../cmp-base/cmp-base.component';

@Component({
  selector: 'esfacil-cmp-onebox-repeatable',
  templateUrl: './cmp-onebox-repeatable.component.html',
  styleUrls: ['./cmp-onebox-repeatable.component.sass']
})
export class CmpOneboxRepeatableComponent extends CmpBaseComponent implements OnInit {

  config;
  data;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initParams(this.config, this.data);
  }
}
