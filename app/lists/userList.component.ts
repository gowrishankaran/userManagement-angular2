import {Component} from '@angular/core';
import {User} from '../user';
import {UserService} from '../service/user.service';


@Component({
	selector:'list-component',
	providers:[UserService],
	templateUrl:'./app/lists/userList.component.html'
	
})
export class listComponent {
	UserList:User[];
	constructor(private _userService:UserService) {
		this._userService.getUsers().subscribe(
			data => this.UserList = data,
			err => console.log(err),
			() => console.log('Finished')
			)
	}

	
};
	
}