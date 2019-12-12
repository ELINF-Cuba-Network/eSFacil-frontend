import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../@shared/services/abstract-data-service';
import { Bitstream } from '../../../resources/model/resource.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitstreamService extends AbstractDataService<Bitstream> {

  constructor(http: HttpClient) {
    super(http, 'bitstream');
  }
}
