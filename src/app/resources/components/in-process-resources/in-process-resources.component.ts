import { Component, OnInit } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Observable } from 'rxjs';
import { InformationService } from '../../../information.service';
import { ResourceSelectionDispatcherService } from '../../services/resource-selection-dispatcher.service';

@Component({
  selector: 'esf-in-process-resources',
  templateUrl: './in-process-resources.component.html',
  styleUrls: ['./in-process-resources.component.scss']
})
export class InProcessResourcesComponent implements OnInit {

  resources$: Observable<Resource[]>;
  selectedResource$: Observable<Resource>;

  detailsShown$: Observable<boolean>;

  constructor(
    private resourceService: InformationService,
    private rSelectionDispatcher: ResourceSelectionDispatcherService
  ) {}
  ngOnInit() {
    this.resources$ = this.resourceService.getInProgress();
    this.detailsShown$ = this.rSelectionDispatcher.getDetailsShown();
    this.selectedResource$ = this.rSelectionDispatcher.getSelectedResource();
  }
  closeDetails() {
    this.rSelectionDispatcher.setSelectedResource({});
  }

  onResourceSelected(res: Resource) {
    this.rSelectionDispatcher.setSelectedResource(res);
  }

  onFileSelected(file) {
    console.log('FILE SELECTED:', file);
  }
}
