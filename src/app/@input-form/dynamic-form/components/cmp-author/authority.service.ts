import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../../../../@shared/base-service';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class AuthorityService extends BaseService {

    private baseUrl = environment.auctoritasUrl;

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    findAuthority(term: string): Observable<HttpResponse<any>> {
        return this.http.get<any>(`${this.baseUrl}/authorities`, { observe: 'response'})
            .pipe(
              map(res => this.convertArrayResponse(res))
            );
    }

}
