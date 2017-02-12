import { Injectable } from '@angular/core';

import { Kitty } from './kitty';
import { KITTIES } from './mock-kitties';

@Injectable()
export class KittyService {
	getKitties(): Promise<Kitty[]> {
		return Promise.resolve(KITTIES);
	}

	getKitty(id: number): Promise<Kitty> {
		///It's possible that the kitties won't be in id order
		///so KITTIES[id] might not return the right kitty
		///that's why we use the 'find' method
		return this.getKitties()
				   .then(kitties => kitties.find(kitty => kitty.id === id));
	}
}
