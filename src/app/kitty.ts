export class Kitty {
	id: number;
	name: string;
	description: string;
	src: string;
	fave: boolean;

	constructor(id: number, name: string, description: string, src: string, fave: boolean) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.src = src;
		this.fave = fave;
	}
}
