"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var kitties = [];
        for (var i = 1; i < 15; i++) {
            kitties.push({
                id: i,
                name: "kitty " + i,
                description: 'cat-tastic',
                src: "/app/assets/kitty" + i + ".jpg",
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
        return { kitties: kitties };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map