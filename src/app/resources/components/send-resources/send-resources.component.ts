import { Component, OnInit } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Observable } from 'rxjs';
import { InformationService } from '../../../information.service';
import { ResourceSelectionDispatcherService } from '../../services/resource-selection-dispatcher.service';

@Component({
  selector: 'esf-send-resources',
  templateUrl: './send-resources.component.html',
  styleUrls: ['./send-resources.component.scss']
})
export class SendResourcesComponent implements OnInit {
  resources$: Observable<Resource[]>;
  selectedResource$: Observable<Resource>;

  detailsShown$: Observable<boolean>;

  constructor(
    private resourceService: InformationService,
    private rSelectionDispatcher: ResourceSelectionDispatcherService
  ) {}

  ngOnInit() {
    this.resources$ = this.resourceService.getSent();
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
