import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
	createDb() {
		let kitties = <any>[];

		for (let i = 1; i < 15; i++) {
			kitties.push({
				id: i,
				name: `kitty ${i}`,
				description: 'cat-tastic',
				src: `/app/assets/kitty${i}.jpg`,
				fave: i % 2 === 0
			});
		}

		kitties.push({
			id: 15,
			name: 'kitty 15',
			description: 'a cartoon',
			src: '/app/assets/kitty15.png',
			fave: true
		});

		return {kitties};
	}
}
