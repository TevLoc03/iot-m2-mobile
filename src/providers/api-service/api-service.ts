import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  public data;
  url: string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
		if (!options) {
			options = new RequestOptions();
		}

		// Support des paramËtres GET
		if (params) {
			let p = new URLSearchParams();
			for (let k in params) {
				p.set(k, params[k]);
			}

			options.search = !options.search && p || options.search;
		}

		return this.http.get(this.url + '/' + endpoint, options);
  }
  

}
