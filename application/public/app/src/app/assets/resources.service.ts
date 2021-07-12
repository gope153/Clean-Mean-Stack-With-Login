import { Injectable } from '@angular/core';
import { DelegatorService } from '../assets/delegator.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';


@Injectable({
	providedIn: 'root'
})
export class AuthService extends DelegatorService {

	url = 'login'

	constructor(public http: HttpClient) {
		super(http)
	}
}

@Injectable({
	providedIn: 'root'
})
export class UserService extends DelegatorService {

	url = 'api/user'

	constructor(public http: HttpClient) {
		super(http)
	}
}

@Injectable({
	providedIn: 'root'
})
export class UsersService extends DelegatorService {

	url = 'api/users'

	constructor(public http: HttpClient) {
		super(http)
	}
}