import { Component } from '@angular/core';
import { AuthenticationService } from './assets/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'my-app';

	constructor(private authenticationService: AuthenticationService) {
		authenticationService.getUserIntern();
	}
}
