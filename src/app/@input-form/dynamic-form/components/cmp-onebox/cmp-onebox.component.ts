import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'esfacil-cmp-onebox',
  templateUrl: './cmp-onebox.component.html',
  styleUrls: ['./cmp-onebox.component.sass'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class CmpOneboxComponent implements OnInit {

  @ViewChild('field', {static: false}) field;
  config;
  data;

  constructor() {
  }

  ngOnInit() {
  }
}
