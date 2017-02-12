import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { FavesComponent } from './faves.component';
import { KittiesComponent } from './kitties.component';
import { KittyDetailComponent } from './kitty-detail.component';

import { KittyService } from './kitty.service';

import { FavePipe } from './fave.pipe';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
  		{
  			path: '',
  			redirectTo: '/faves',
  			pathMatch: 'full'
  		},
  		{
  			path: 'detail/:id',
  			component: KittyDetailComponent
  		},
  		{
  			path: 'faves',
  			component: FavesComponent
  		},
		{
			path: 'kitties',
			component: KittiesComponent
		}
	])
  ],
  declarations: [
  	AppComponent,
  	FavePipe,
  	FavesComponent,
  	KittiesComponent,
  	KittyDetailComponent
  ],
  providers: [ KittyService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
