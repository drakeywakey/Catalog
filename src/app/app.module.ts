import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { FavesComponent } from './faves.component';
import { KittyDetailComponent } from './kitty-detail.component';

import { KittyService } from './kitty.service';

import { FavePipe } from './fave.pipe';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  ],
  declarations: [
  	AppComponent,
  	FavePipe,
  	FavesComponent,
  	KittyDetailComponent
  ],
  providers: [ KittyService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
