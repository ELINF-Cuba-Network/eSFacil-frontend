import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Bitstream } from './bitstream';
import { Observable } from 'rxjs';
import { BaseService } from '../../../../@shared/base-service';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class DropboxService extends BaseService {

    private baseUrl = environment.esFacilUrl;

    constructor(
      private http: HttpClient
    ) {
        super();
    }

    delete(bitstream: Bitstream): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/bitstream/${bitstream.id}`, {observe: 'response'});
    }

}
