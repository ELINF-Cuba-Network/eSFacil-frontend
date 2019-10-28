import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'esf-cmp-textarea',
  templateUrl: './cmp-textarea.component.html',
  styleUrls: ['./cmp-textarea.component.sass']
})
export class CmpTextareaComponent implements OnInit {

  @ViewChild('field', {static: false}) field;
  config;
  data;

  constructor() { }

  ngOnInit() {
  }

}
