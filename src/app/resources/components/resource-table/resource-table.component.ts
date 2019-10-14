import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  OnChanges,
  EventEmitter
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Resource, IssuedDate } from '../../model/resource.model';

import { formatDisplayDate } from '../../shared/date-formatter';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'esf-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.scss']
})
export class ResourceTableComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() resources: Resource[];
  @Output() resourceSelected = new EventEmitter<Resource>();

  _formatDisplayDate = formatDisplayDate;

  displayedColumns = ['id', 'title', 'author', 'date'];
  dataSource: MatTableDataSource<Resource>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
    return resource.data.author;
  }
  titleNames(resource: Resource) {
    return resource.data.title;
  }
}
