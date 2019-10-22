import { HttpResponse } from '@angular/common/http';

/**
 * Base service to convert server responses
 * to objects
 */

export class BaseService {

    constructor() { }

    public convertItemFromServer(item) {
        const copy = Object.assign({}, item);
        return copy;
    }

    public convertArrayResponse(res: HttpResponse<any[]>): HttpResponse<any[]> {
        const jsonRes = res.body;
        const body = [];

        jsonRes.forEach( it => {
            body.push(this.convertItemFromServer(it));
        });

        return res.clone({body});
    }

    public convertResponse(res: HttpResponse<any>): HttpResponse<any>{
        const body = this.convertItemFromServer(res.body);
        return res.clone({body});
    }
}