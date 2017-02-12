import { Component, OnInit } from '@angular/core';

import { Kitty } from './kitty';

import { KittyService } from './kitty.service';

@Component({
	moduleId: module.id,
	selector: 'my-faves',
	templateUrl: './faves.component.html',
	styleUrls: [ './faves.component.css' ]
})

export class FavesComponent implements OnInit {
	kitties: Kitty[] = [];

	constructor(private kittyService: KittyService) {}

	ngOnInit(): void {
		this.kittyService.getKitties()
			.then(kitties => this.kitties = kitties.slice(0, 4));
	}
}
