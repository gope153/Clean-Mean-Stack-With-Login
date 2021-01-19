import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/assets/authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.pug',
	styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

	constructor(
		private router: Router,
		public authenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
		this.authenticationService.isAuth().subscribe(loggedIn => loggedIn ? this.router.navigateByUrl('/dashboard') : '')
	}

}
