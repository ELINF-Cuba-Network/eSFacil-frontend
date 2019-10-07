import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Resource,
  ResourceConditions
} from "../app/resources/model/resource.model";
import { Observable } from "rxjs";
import { AbstractDataService } from "./@shared/abstract-data-service";
import { map } from "rxjs/operators";

@Injectable()
export class InformationService extends AbstractDataService<Resource> {
  constructor(public http: HttpClient) {
    super(http, "resources");
  }

  getAccepted() {
    return this.getAll().pipe(
      map(resources =>
        resources.filter(r => r.condition === ResourceConditions.Accepted)
      )
    );
  }

  getDenied() {
    return this.getAll().pipe(
      map(resources =>
        resources.filter(r => r.condition === ResourceConditions.Denied)
      )
    );
  }

  getInProgress() {
    return this.getAll().pipe(
      map(resources =>
        resources.filter(r => r.condition === ResourceConditions.InProgress)
      )
    );
  }

  getSent() {
    return this.getAll().pipe(
      map(resources =>
        resources.filter(r => r.condition === ResourceConditions.Sent)
      )
    );
  }
}
