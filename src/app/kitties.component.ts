import { Component, OnInit } from '@angular/core';

import { KittyService } from './kitty.service';
import { KittyDetailComponent } from './kitty-detail.component';
import { Kitty } from './kitty';

@Component({
  moduleId: module.id,
  selector: 'my-kitties',
  templateUrl: './kitties.component.html',
  styleUrls: ['./kitties.component.css']
})

export class KittiesComponent implements OnInit  {
	constructor(private kittyService: KittyService) {}

	ngOnInit(): void {
		this.getKitties();
	}

	fave: false;
	kitties: Kitty[];
	selectedKitty: Kitty;

	getKitties(): void {
		this.kittyService.getKitties().then(kitties => this.kitties = kitties);
	}

	onSelect(kitty: Kitty): void {
		this.selectedKitty = kitty;
	}
}