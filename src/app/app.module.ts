import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { KittiesComponent } from './kitties.component';
import { KittyDetailComponent } from './kitty-detail.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { KittyService } from './kitty.service';

import { FavePipe } from './fave.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	RouterModule.forRoot([
  		{
  			path: 'detail/:id',
  			component: KittyDetailComponent
  		},
  		{
  			path: 'kitties',
  			component: KittiesComponent
  		},
  		{
  			path: '',
  			redirectTo: '/kitties',
  			pathMatch: 'full'
  		}
  	])
  ],
  declarations: [
  	AppComponent,
  	FavePipe,
  	KittiesComponent,
  	KittyDetailComponent,
  	SearchPipe
  ],
  providers: [ KittyService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
