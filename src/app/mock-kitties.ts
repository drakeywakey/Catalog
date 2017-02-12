import { Kitty } from './kitty';

let KITTIES: Kitty[] = [];

for (let i = 1; i < 15; i++) {
	KITTIES.push(new Kitty(i, `kitty ${i}`, 'cat-tastic', `/app/assets/kitty${i}.jpg`, i % 2 === 0));
}

KITTIES.push(new Kitty(15, 'kitty 15', 'a cartoon', '/app/assets/kitty15.png', true));

export { KITTIES };
