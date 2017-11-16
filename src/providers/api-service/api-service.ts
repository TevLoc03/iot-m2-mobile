import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  public data;

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }

}
