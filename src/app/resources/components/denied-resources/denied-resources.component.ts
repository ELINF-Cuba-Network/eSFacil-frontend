import { Component, OnInit } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Observable } from 'rxjs';
import { InformationService } from '../../../information.service';
import { ResourceSelectionDispatcherService } from '../../services/resource-selection-dispatcher.service';

@Component({
  selector: 'esf-denied-resources',
  templateUrl: './denied-resources.component.html',
  styleUrls: ['./denied-resources.component.scss']
})
export class DeniedResourcesComponent implements OnInit {
  resources$: Observable<Resource[]>;
  selectedResource$: Observable<Resource>;

  detailsShown$: Observable<boolean>;

  constructor(
    private resourceService: InformationService,
    private rSelectionDispatcher: ResourceSelectionDispatcherService
  ) {}

  ngOnInit() {
    this.resources$ = this.resourceService.getDenied();
    this.detailsShown$ = this.rSelectionDispatcher.getDetailsShown();
    this.selectedResource$ = this.rSelectionDispatcher.getSelectedResource();
  }
  closeDetails() {
    this.rSelectionDispatcher.setSelectedResource({});
  }

  onResourceSelected(res: Resource) {
    this.rSelectionDispatcher.setSelectedResource(res);
  }
}
