import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private data: any;

  getData() {
    console.log('Getting tmp data < ', this.data);
    return this.data;
  }

  setData(data: any) {
    console.log('Store tmp data > ', data);
    this.data = data;
  }
}
