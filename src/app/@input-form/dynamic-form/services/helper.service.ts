import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getNameAndExtension(filename: string) {
    const split = filename.split('.');

    return {name: split[0], ext: split[1]};
  }
}
