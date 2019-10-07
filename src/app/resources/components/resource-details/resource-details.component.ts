import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Resource, IssuedDate } from "../../model/resource.model";
import { Author } from "../../model/author.model";
import { formatDisplayDate } from "../../shared/date-formatter";
import { SubjectID } from "../../model/subjectID.model";

@Component({
  selector: "esf-resource-details",
  templateUrl: "./resource-details.component.html",
  styleUrls: ["./resource-details.component.scss"]
})
export class ResourceDetailsComponent implements OnInit {
  @Input() resource: Resource[];
  @Input() author: Author[];
  @Output() onClose = new EventEmitter();

  subjectId: SubjectID[];

  _formatDate = formatDisplayDate;

  constructor() {}

  ngOnInit() {}

  close() {
    this.onClose.emit();
  }

  get issnTypes(): { value: string; type: string }[] {
    return this.resource && this.resource["issn-type"];
  }
  get subjectID():{ value: string; key: string, keyAssertedBy: string}[]{
    return this.resource && this.resource["subject-id"];
  }
  get affiliationTypes(): { name: string; url: string }[] {
    return this.author && this.author["affiliation"];
  }
}
