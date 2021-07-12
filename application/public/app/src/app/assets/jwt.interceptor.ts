import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthenticationService } from '../assets/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let val = window.localStorage.getItem('token');
		let headers = request.headers;
		if (val != undefined && val != null)
			headers = headers.append('x-access-token', val);

		return next.handle(request.clone({ headers: headers }));

	}
}