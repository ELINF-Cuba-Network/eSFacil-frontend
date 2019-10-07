import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  OnChanges,
  EventEmitter
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Resource, IssuedDate } from "../../model/resource.model";

import { formatDisplayDate } from "../../shared/date-formatter";
import { AfterViewInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "esf-resource-table",
  templateUrl: "./resource-table.component.html",
  styleUrls: ["./resource-table.component.scss"]
})
export class ResourceTableComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() resources: Resource[];
  @Output() resourceSelected = new EventEmitter<Resource>();

  _formatDisplayDate = formatDisplayDate;

  displayedColumns = ["id", "title", "author", "date"];
  dataSource: MatTableDataSource<Resource>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() {}

  ngOnInit() {
    this.paginator.pageSize = 10;
  }

  ngAfterViewInit(): void {}

  ngOnChanges(changes): void {
    if (this.resources) {
      this.dataSource = new MatTableDataSource(this.resources);
      this.paginator.pageSize = 10;
      this.paginator.pageSizeOptions = [10, 15, 25];
      this.paginator.showFirstLastButtons = true;
      this.dataSource.paginator = this.paginator;
    }
  }

  selectResource(res: Resource) {
    this.resourceSelected.emit(res);
  }

  authorNames(resource: Resource) {
    return resource.author.map(a => `${a.given} ${a.family}`);
  }
  titleNames(resource: Resource) {
    return resource.title;
  }
}
