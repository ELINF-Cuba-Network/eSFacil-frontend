import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'esf-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.sass']
})
export class DropZoneComponent implements OnInit {

  @ViewChild('file', {static: false}) file;
  @Output() fileChange = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() { }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdd() {
    const setFiles: File[] = [];
    const files: { [key: string]: File } = this.file.nativeElement.files;

    for (const key in files) {
      if (!isNaN(parseInt(key))) {
        setFiles.push(files[key]);
      }
    }

    this.fileChange.emit(setFiles);
  }

}
