import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../@shared/services/abstract-data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends AbstractDataService<Document> {

  constructor(http: HttpClient) {
    super(http, 'document');
  }
}
