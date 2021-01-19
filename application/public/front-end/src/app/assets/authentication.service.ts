import { Injectable, Injector } from '@angular/core';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService, AuthService } from './resources.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	/*
	* Variables
	*/

	public newUser = new ReplaySubject<any>(1)
	user: any = { email: '', password: '' };
	isLoggedIn: any;


	/*
	* Constructor and Init
	*/

	constructor(private router: Router, private userService: UserService, private authService: AuthService) {

	}

	/*
	* Helper Functions inside Scope
	*/

	getToken(): Observable<any> {
		const obs = new Observable(observer => {
			let token = window.localStorage.getItem('token');
			this.isLoggedIn = true;
			observer.next(token);
		});
		return obs;
	}

	isAuth(): Observable<any> {
		const obs = new Observable(observer => {
			let val = window.localStorage.getItem('token');
			if (val != undefined)
				if (val.length > 1)
					observer.next(true)
				else observer.next(false)
			else observer.next(false)
		});
		return obs;
	}


	setToken(token): Boolean {
		window.localStorage.setItem('token', token);
		return true;
	}



	/*
	* Filters
	*/

	deepEqual(object1, object2) {
		if (object1 == undefined || object2 == undefined) return false;
		const keys1 = Object.keys(object1);
		const keys2 = Object.keys(object2);

		if (keys1.length !== keys2.length) {
			return false;
		}

		for (const key of keys1) {
			if (key != 'lastTransaction') {
				const val1 = object1[key];
				const val2 = object2[key];
				const areObjects = this.isObject(val1) && this.isObject(val2);
				if (
					areObjects && !this.deepEqual(val1, val2) ||
					!areObjects && val1 !== val2
				) {
					return false;
				}

			}
		}

		return true;
	}

	isObject(object) {
		return object != null && typeof object === 'object';
	}

	// SERVER COMMUNICATION

	/*
	* Getter
	*/

	getUserIntern() {
		this.userService.getAll({}).subscribe(data => {
			this.user = data;
			if (this.deepEqual(this.user, data) != true) {
				this.newUser.next(data);
				this.newUser.subscribe(user => this.user = user)
			}
		})
	}

	/*
	* Create
	*/

	register(): Observable<any> {
		const obs = new Observable(observer => {
			this.userService.create(this.user).subscribe(data => {
				observer.next({ success: true })
			}, error => {
				observer.next({ success: false })
			})
		});
		return obs;

	}

	login(): void {
		this.authService.create(this.user).subscribe((data) => {
			window.localStorage.setItem('token', data.token);
			this.getUserIntern()
			this.router.navigateByUrl('/dashboard')
		}, error => {
			console.log(error);
		})
	}

	/*
	* Updates
	*/


	saveUser() {
		this.userService.update(this.user, {}).subscribe(data => {
			this.user = data;
			this.newUser.next(this.user);
		})
	}


	/*
	* Deletes
	*/

	logout() {
		window.localStorage.removeItem('token');
		this.isLoggedIn = false;
		this.newUser = new ReplaySubject<any>(1)
		this.user = { email: '', password: '' };
		this.router.navigateByUrl('/')
		console.log("logout")
	}








}
