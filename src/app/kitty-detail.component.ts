import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Kitty } from './kitty';

import { KittyService } from './kitty.service';

@Component({
	moduleId: module.id,
	selector: 'my-kitty-detail',
	templateUrl: './kitty-detail.component.html'
})

export class KittyDetailComponent implements OnInit{
	@Input()
	kitty: Kitty;

	constructor(
		private activatedRoute: ActivatedRoute,
		private	kittyService: KittyService,
		private location: Location
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.switchMap((params: Params) => this.kittyService.getKitty(+params['id']))
			.subscribe(kitty => this.kitty = kitty);
	}

	goBack(): void {
		this.location.back();
	}
}
