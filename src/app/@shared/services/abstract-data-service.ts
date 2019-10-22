import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

export abstract class AbstractDataService<T> {
  constructor(protected http: HttpClient, protected endpointName: string) {}

  /**
   * Makes an Http GET request to fetch all entities from the REST API backend
   */
  getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(`${environment.apiURL}/${this.endpointName}`)
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http GET request to obtain 1 item
   * @param id Item id
   */
  getOne(id: string): Observable<T> {
    return this.http
      .get<T>(`${environment.apiURL}/${this.endpointName}/${id}`)
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http POST request to persist an entity to the REST API backend
   * @param entity Entity data
   */
  add(entity: T): Observable<T> {
    return this.http
      .post<T>(`${environment.apiURL}/${this.endpointName}`, entity)
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http POST request as multipart-formdata to persist an entity to the REST API backend
   * @param entity Entity Data
   * @param file [Optional] File to send in request
   * @param filePropName [Optional] Request property name to send file under
   */
  addAsFormData(entity: T) {
    let formData: FormData = new FormData();
    let props = Object.keys(entity);
    props.forEach(prop => formData.append(prop, entity[prop]));

    return this.http
      .post<T>(`${environment.apiURL}/${this.endpointName}`, formData)
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http PUT request to update an entity in the REST API backend
   * @param entity Entity data
   */
  update(entity: T): Observable<T> {
    return this.http
      .put<T>(
        `${environment.apiURL}/${this.endpointName}/${(entity as any).id}`,
        entity
      )
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http PUT request as multipart-formdata to update an entity on the REST API backend
   * @param entity Entity Data
   * @param file [Optional] File to send in request
   * @param filePropName [Optional] Request property name to send file under
   */
  updateAsFormData(entity: T) {
    let formData: FormData = new FormData();
    let props = Object.keys(entity);
    props.forEach(prop => formData.append(prop, entity[prop]));

    return this.http
      .put<T>(`${environment.apiURL}/${this.endpointName}`, formData)
      .pipe(catchError(error => observableThrowError(error)));
  }

  /**
   * Makes an Http DELETE request to delete an entity from the REST API backend
   * @param entity Entity to delete
   */
  delete(entity: T): Observable<Response> {
    return this.http
      .delete<any>(
        `${environment.apiURL}/${this.endpointName}/${(entity as any).id}`
      )
      .pipe(catchError(error => observableThrowError(error)));
  }
}
