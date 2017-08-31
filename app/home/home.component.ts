import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { User }  from '../user';
import { UserService }  from '../service/user.service';
import { genderPipe } from './genderFilter.pipe';



@Component({
	selector:'home-component',
	providers:[UserService],
	templateUrl:'./app/home/home.component.html'

})
export class homeComponent {
	userLists:User[];
	modalTitle:string;
	closeResult: string;
	modalRef: NgbModalRef;

	userID:number;
	firstName:string;
	lastName:string;
	sex:string;
	email:string;
	city:string;
	country:string;
	isSave:boolean;
	isUpdate:boolean;

	itemPerPage:number = 5;
	totalItem:number;

	genderFilterModel:string = 'all';

	
	constructor(private _userService:UserService, private modalService: NgbModal) {
		this._userService
			.getUsers()
			.subscribe(
				data => this.userLists = data,
				err => console.log(err),
				() => console.log('finished')
			);

		// this.pagination(userLists);	
	}

	pagination() {
		// userLists = userLists.slice(0,3);
	}

	/* Options for Modal */
	modalOptions : NgbModalOptions = {
		size:'lg'
	};

	addNew(content) {

		this.isUpdate = false;
	    this.isSave = true;

		this.modalTitle = 'Add User';

		/* Trigger Modal */
		this.modalRef = this.modalService.open(content,this.modalOptions);
	    this.modalRef.result.then((result) => {
	      this.closeResult = `Closed with: ${result}`;
	    }, (reason) => {
	      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	    });


	}

	
	// save() {

	// 	var data = 
	// 	{	
	// 		"user_id":1,
	// 		"first_name":this.firstName,
	// 		"last_name":this.lastName,
	// 		"sex":this.sex,
	// 		"email":this.email,
	// 		"city":this.city,
	// 		"country":this.country
	// 	}

	// 	this.userLists.push(data);

	// 	/* Close Modal */
	// 	this.modalRef.close();
	// }

	submitForm(form: any): void{
	    console.log('Form Data: ');
	    console.log(form);
	    this.isUpdate = false;
	    this.isSave = true;
	    this.userLists.push(form);

	    // Close Modal 
		this.modalRef.close();
	
	  }

	 save() {
	
	    var object : User = {
			userID : this.userID,
			firstName : this.firstName,
			lastName : this.lastName,
			sex : this.sex,
			email : this.email,
			city : this.city,
			country : this.country
		};

	    this.userLists.push(object);

		/* Close Modal */
		this.modalRef.close();
	}


	editUser(content, data) {
		// alert(index);
		/* Trigger Modal */
		this.isSave = false;
		this.isUpdate = true;
		this.modalRef = this.modalService.open(content,this.modalOptions);
	    this.modalRef.result.then((result) => {
	      this.closeResult = `Closed with: ${result}`;
	    }, (reason) => {
	      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	    });

		this.userID = data.userID;
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.sex = data.sex;
		this.email = data.email;
		this.city = data.city;
		this.country = data.country;
	}

	update () {

		this.userLists.forEach((key, index) => {
		    if(key.userID === this.userID) {
		    	this.userLists[index].userID = this.userID;
		    	this.userLists[index].firstName = this.firstName;
		    	this.userLists[index].lastName = this.lastName;
		    	this.userLists[index].sex = this.sex;
		    	this.userLists[index].email = this.email;
		    	this.userLists[index].city = this.city;
		    	this.userLists[index].country = this.country;
		    }
		});

		/* Close Modal */
		this.modalRef.close();

	}

	deleteUser(index) {
		this.userLists.splice(index,1);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

}