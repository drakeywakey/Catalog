"use strict";
var kitty_1 = require('./kitty');
var KITTIES = [];
exports.KITTIES = KITTIES;
for (var i = 1; i < 15; i++) {
    KITTIES.push(new kitty_1.Kitty(i, "kitty " + i, 'cat-tastic', "/app/assets/kitty" + i + ".jpg", i % 2 === 0));
}
KITTIES.push(new kitty_1.Kitty(15, 'kitty 15', 'a cartoon', '/app/assets/kitty15.png', true));
//# sourceMappingURL=mock-kitties.js.map