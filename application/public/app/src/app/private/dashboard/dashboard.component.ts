import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/assets/authentication.service';
import { UsersService } from 'src/app/assets/resources.service';
import { map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.pug',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


	users: any;
	users$: Observable<any>;
	usersFiltered: any;
	onlyAs: any;
	onlyBs: any;
	raw: Observable<any>;

	constructor(
		public authenticationService: AuthenticationService,
		private usersService: UsersService
	) { }

	ngOnInit(): void {
		// this.usersService.getList({}).subscribe(data => {
		// 	this.users = data;
		// 	console.log(this.users);
		// })
		// this.usersService.getAll({}).subscribe(data => this.users = data.list)
		// this.users$ = this.usersService.getAll({}).pipe(map(obj => obj.list))


		// REUSABILITY


		//- p("*ngFor"="let item of (raw | async).list") {{item.email}}
		this.users$ = this.usersService.getAll({});


		// READABILITY

		// BACKLOGCODE

		this.raw = this.usersService.getAll({});

		this.onlyAs = this.raw.pipe(map((obj: any) => obj.list))
		// this.onlyBs = this.raw.pipe(map((obj: any) => obj.list))

		console.log(this.onlyAs);

		// this.users$ = this.usersService.getAll({})
		// this.onlyAs = this.users$.pipe(map(obj => obj.list.filter(obj => obj.email == 'a')))
		// this.onlyBs = this.users$.pipe(map(obj => obj.list.filter(obj => obj.email == 'b')))


		// this.users = this.usersService.getAll({}).subscribe(obj => {
		// 	this.onlyAs = obj.list.filter(obj.email == 'a')
		// 	this.onlyBs = obj.list.filter(obj.email == 'b')
		// })
		// console.log(this.users$);


	}



}
