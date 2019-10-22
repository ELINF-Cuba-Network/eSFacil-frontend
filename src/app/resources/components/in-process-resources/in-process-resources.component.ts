import { Component, OnInit } from '@angular/core';
import { Resource } from '../../model/resource.model';
import { Observable } from 'rxjs';
import { InformationService } from '../../../information.service';
import { ResourceSelectionDispatcherService } from '../../services/resource-selection-dispatcher.service';
import { finalize, take } from 'rxjs/operators';
import { ShareDataService } from '../../../@shared/services/share-data.service';
import { Router } from '@angular/router';

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
    private rSelectionDispatcher: ResourceSelectionDispatcherService,
    private shareDataService: ShareDataService,
    private router: Router
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

  onFileSelected(files) {

    if (files.length > 0) {

      this.resourceService
        .uploadFile(files[0])
        .pipe(
          take(1)
        )
        .subscribe((resp) => {
          // Send response to edit metadata view
          this.shareDataService.setData(resp);

          // Navigate
          this.router.navigate(['/app/input-form/metadata']);
        });
    }
  }
}
