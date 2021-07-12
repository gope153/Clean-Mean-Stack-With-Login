import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DelegatorService {

	API_ENDPOINT: any;

	url: string;

	constructor(public http: HttpClient) {
		if (window.location.origin.indexOf('localhost') > -1) this.API_ENDPOINT = 'http://localhost:5050/'
		else this.API_ENDPOINT = window.location.origin + '/'
	}

	getAll(route): Observable<any> {
		let tmp = this.url;
		for (let key in route) {
			tmp = tmp + '/' + route[key];
		}
		console.log('GET', this.API_ENDPOINT + tmp);
		return this.http.get(this.API_ENDPOINT + tmp);
	}

	getList(route): Observable<any> {
		let tmp = this.url;
		for (let key in route) {
			tmp = tmp + '/' + route[key];
		}
		console.log('GET', this.API_ENDPOINT + tmp);
		return this.http.get(this.API_ENDPOINT + tmp).pipe(map((obj: any) => obj.users))
	}


	create(object, route = null): Observable<any> {
		let tmp = this.url;
		if (route != null) {
			for (let key in route) {
				tmp = tmp + '/' + route[key];
			}
		}
		console.log('post to', this.API_ENDPOINT + this.url);
		return this.http.post(this.API_ENDPOINT + tmp, object);
	}

	update(object, route): Observable<any> {
		let tmp = this.url;
		for (let key in route) {
			tmp = tmp + '/' + route[key];
		}
		return this.http.put(this.API_ENDPOINT + tmp, object);
	}

	delete(route): Observable<any> {
		let tmp = this.url;
		for (let key in route) {
			tmp = tmp + '/' + route[key];
		}
		return this.http.delete(this.API_ENDPOINT + tmp);
	}

}
