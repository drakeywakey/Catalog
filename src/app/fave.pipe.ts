import { Pipe, PipeTransform } from '@angular/core';

import { Kitty } from './kitty';

@Pipe({
	name: 'FavePipe'
})

export class FavePipe implements PipeTransform {
	transform(items: Kitty[], fave: boolean) {
		if (items == null) { return null; }
		return items.filter(item => !fave || item.fave);
	}
}
