import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Component({
  selector: 'esf-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() fileSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onFileSelected(file) {
    this.fileSelected.emit(file);
  }
}
