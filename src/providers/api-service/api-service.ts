import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  public data;
	url: string = 'http://smartorder.jeremielbaz.fr/api';

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
		
		options = new RequestOptions();
		options.headers = new Headers();

		options.headers.append('Content-Type', 'application/json');
    options.headers.append('Authorization', 'Bearer smartorder_token');

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
  
	post(endpoint: string, valPost?: any, options?: RequestOptions) {
		
		options = new RequestOptions();
		options.headers = new Headers();

		options.headers.append('Content-Type', 'application/json');
		options.headers.append('Authorization', 'Bearer smartorder_token');

		return this.http.post(this.url + '/' + endpoint, valPost, options);
	}

	getArduino(endpoint: string) {
		
		return this.http.get('http://arduino.local/arduino/' + endpoint);
  }

}