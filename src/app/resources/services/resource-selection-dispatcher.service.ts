import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Resource } from "../model/resource.model";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ResourceSelectionDispatcherService {
  _detailsShown: Subject<boolean> = new Subject();
  _selectedResource: Subject<Resource> = new Subject();

  constructor() {}

  getDetailsShown(): Observable<boolean> {
    return this._detailsShown.asObservable();
  }

  getSelectedResource(): Observable<Resource> {
    return this._selectedResource.asObservable();
  }

  setSelectedResource(resource: Resource) {
    this._selectedResource.next(resource);
    resource.id
      ? this._detailsShown.next(true)
      : this._detailsShown.next(false);
  }
}
