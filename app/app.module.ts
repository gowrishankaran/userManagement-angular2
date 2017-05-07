import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {homeComponent} from './home/home.component';
import {listComponent} from './lists/userlist.component';

const appRoutes: Routes = [
	{ path: 'home', component: homeComponent },
	{ path: 'lists', component: listComponent }
];


@NgModule({
	imports : [BrowserModule, RouterModule.forRoot(appRoutes)],
	declarations :[AppComponent, homeComponent, listComponent],
	bootstrap:[AppComponent]
})

export class AppModule {

	
}