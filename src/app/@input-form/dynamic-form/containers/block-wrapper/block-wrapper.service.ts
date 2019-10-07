import { Injectable } from '@angular/core';
import { AbstractDataService } from '../../../../@shared/abstract-data-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlockWrapperService extends AbstractDataService<any> {

    constructor(http: HttpClient) {
        super(http, 'input_json');
    }
}
