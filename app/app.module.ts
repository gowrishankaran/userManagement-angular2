import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import {AppComponent} from './app.component';
import {homeComponent} from './home/home.component';
import {listComponent} from './lists/userlist.component';

import { genderPipe } from './home/genderFilter.pipe';

import { UserService }  from './service/user.service';

const appRoutes: Routes = [
	{ 
		path: 'home', 
		component: homeComponent 
	},
	{ 
		path: 'lists', 
		component: listComponent 
	},
	{ 
		path: '',
    	redirectTo: '/home',
    	pathMatch: 'full'
  	}
];


@NgModule({
	imports : [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes), NgbModule.forRoot()],
	providers: [UserService],
	declarations :[AppComponent, homeComponent, listComponent, genderPipe],
	bootstrap:[AppComponent]
})

export class AppModule {

	
}