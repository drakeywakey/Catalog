import { Component, Input, OnInit } from '@angular/core';

import { Kitty } from './kitty';

@Component({
	moduleId: module.id,
	selector: 'my-kitty-detail',
	templateUrl: './kitty-detail.component.html',
	styleUrls: [ './kitty-detail.component.css' ]
})

export class KittyDetailComponent{
	@Input()
	kitty: Kitty;
}
