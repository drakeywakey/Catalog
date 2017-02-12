import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import { KittyDetailComponent } from './kitty-detail.component';

import { KittyService } from './kitty.service';

import { FavePipe } from './fave.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  ],
  declarations: [
  	AppComponent,
  	FavePipe,
  	KittyDetailComponent,
  	SearchPipe
  ],
  providers: [ KittyService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
