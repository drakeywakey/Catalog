import { Pipe, PipeTransform } from '@angular/core';

import { Kitty } from './kitty';

@Pipe({
	name: 'SearchPipe'
})

export class SearchPipe implements PipeTransform {
	transform(kitties: Kitty[], search: string) {
		if (kitties == null) { return null; }
		if (search === '') { return kitties; }
		return kitties.filter(kitty => {
			return kitty.name.indexOf(search) > -1 ||
				   kitty.description.indexOf(search) > -1;
		});
	}
}
