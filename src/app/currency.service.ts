import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Currency } from './currency'; 

@Injectable()
export class CurrencyService {

	private currencyUrl = "http://api.fixer.io/latest"; 

	constructor(private http: Http) { }

	getCurrencies(): Promise<Currency[]> { 
		return this.http.get(this.currencyUrl)
		         .toPromise()
		         .then(response => response.json().data as Currency[] )
		         .then(response => console.log(response))
		         .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error);  
	  return Promise.reject(error.message || error);
	} 

}