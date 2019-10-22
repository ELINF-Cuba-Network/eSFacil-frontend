import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Resource,
  ResourceConditions
} from './resources/model/resource.model';
import { map } from 'rxjs/operators';

import { AbstractDataService } from './@shared/services/abstract-data-service';
import { environment } from '../environments/environment';
import { OptionType } from '@angular/cli/models/interface';

@Injectable()
export class InformationService extends AbstractDataService<Resource> {
  constructor(public http: HttpClient) {
    super(http, 'document');
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

  uploadFile(file: File) {

    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http
      .post(`${environment.apiURL}/file/create-document-from-file`, formData);
  }
}
