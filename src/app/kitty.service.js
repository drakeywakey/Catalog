"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_kitties_1 = require('./mock-kitties');
var KittyService = (function () {
    function KittyService() {
    }
    KittyService.prototype.getKitties = function () {
        return Promise.resolve(mock_kitties_1.KITTIES);
    };
    KittyService.prototype.getKitty = function (id) {
        ///It's possible that the kitties won't be in id order
        ///so KITTIES[id] might not return the right kitty
        ///that's why we use the 'find' method
        return this.getKitties()
            .then(function (kitties) { return kitties.find(function (kitty) { return kitty.id === id; }); });
    };
    KittyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], KittyService);
    return KittyService;
}());
exports.KittyService = KittyService;
//# sourceMappingURL=kitty.service.js.map