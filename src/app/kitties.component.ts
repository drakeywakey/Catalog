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

	add(src: string): void {
		src = src.trim();
		if (!src) { return; }
		this.kittyService.createKitty(src)
			.then(kitty => {
				this.kitties.push(kitty);
				this.selectedKitty = null;
				//////groooosssss workaround, I'm positive this can be done differently
				this.kitties = this.kitties.slice();
			});
	}

	ngOnInit(): void {
		this.getKitties();
	}

	fave: boolean = false;
	kitties: Kitty[];
	search: string = '';
	selectedKitty: Kitty;
	title: 'CATalog';

	getKitties(): void {
		this.kittyService.getKitties().then(kitties => this.kitties = kitties);
	}

	onSelect(kitty: Kitty): void {
		if (this.selectedKitty === kitty) {
			this.selectedKitty = null;
		}
		else {
			this.selectedKitty = kitty;
		}
	}
}
