import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/assets/authentication.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.pug',
	styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

	constructor(
		public authenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
	}

}
