import { TestBed, inject } from '@angular/core/testing';

import { ResourceSelectionDispatcherService } from './resource-selection-dispatcher.service';

describe('ResourceSelectionDispatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceSelectionDispatcherService]
    });
  });

  it('should be created', inject([ResourceSelectionDispatcherService], (service: ResourceSelectionDispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
