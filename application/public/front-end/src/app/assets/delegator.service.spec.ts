import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

import { DelegatorService } from './delegator.service';

describe('DelegatorService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot() ]
	}));

  it('should be created', () => {
    const service: DelegatorService = TestBed.get(DelegatorService);
    expect(service).toBeTruthy();
  });
});
