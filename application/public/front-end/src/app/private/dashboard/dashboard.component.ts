import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/assets/authentication.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.pug',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	constructor(
		public authenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
	}

}
