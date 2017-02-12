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
var kitty_service_1 = require('./kitty.service');
var FavesComponent = (function () {
    function FavesComponent(kittyService) {
        this.kittyService = kittyService;
        this.kitties = [];
    }
    FavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kittyService.getKitties()
            .then(function (kitties) { return _this.kitties = kitties.slice(0, 4); });
    };
    FavesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-faves',
            templateUrl: './faves.component.html',
            styleUrls: ['./faves.component.css']
        }), 
        __metadata('design:paramtypes', [kitty_service_1.KittyService])
    ], FavesComponent);
    return FavesComponent;
}());
exports.FavesComponent = FavesComponent;
//# sourceMappingURL=faves.component.js.map