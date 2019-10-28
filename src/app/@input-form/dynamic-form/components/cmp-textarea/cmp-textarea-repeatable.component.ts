import { Component, OnInit } from '@angular/core';
import { CmpBaseComponent } from '../cmp-base/cmp-base.component';

@Component({
  selector: 'esf-cmp-textarea-repeatable',
  templateUrl: './cmp-textarea-repeatable.component.html',
  styleUrls: ['./cmp-textarea-repeatable.component.sass']
})
export class CmpTextareaRepeatableComponent extends CmpBaseComponent implements OnInit {

  config;
  data;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initParams(this.config, this.data);
  }
}
