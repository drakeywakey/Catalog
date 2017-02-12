import { Component, OnInit } from '@angular/core';

import { KittyService } from './kitty.service';
import { KittyDetailComponent } from './kitty-detail.component';
import { Kitty } from './kitty';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
	constructor(private kittyService: KittyService) {}

	ngOnInit(): void {
		this.getKitties();
	}

	fave: false;
	kitties: Kitty[];
	selectedKitty: Kitty;
	title: 'CATalog';

	getKitties(): void {
		this.kittyService.getKitties().then(kitties => this.kitties = kitties);
	}

	onSelect(kitty: Kitty): void {
		this.selectedKitty = kitty;
	}
}
