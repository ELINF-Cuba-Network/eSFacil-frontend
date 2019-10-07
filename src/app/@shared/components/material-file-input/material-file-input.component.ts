import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ElementRef,
  ViewChild,
  Output
} from "@angular/core";

@Component({
  selector: "mat-file-input",
  templateUrl: "./material-file-input.component.html",
  styleUrls: ["./material-file-input.component.scss"]
})
export class MaterialFileInputComponent {
  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();

  @ViewChild("inputFile", {static: false}) nativeInputFile: ElementRef;

  private _files: File[];

  get fileCount(): number {
    return (this._files && this._files.length) || 0;
  }

  onNativeInputFileSelect($event) {
    this._files = $event.srcElement.files;
    this.onFileSelect.emit(this._files);
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();
  }
}
