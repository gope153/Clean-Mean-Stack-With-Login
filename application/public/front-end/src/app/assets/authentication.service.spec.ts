import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()]
	}));

	it('should be created', () => {
		const service: AuthenticationService = TestBed.get(AuthenticationService);
		expect(service).toBeTruthy();
	});
});
