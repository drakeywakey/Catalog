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
var KittiesComponent = (function () {
    function KittiesComponent(kittyService) {
        this.kittyService = kittyService;
    }
    KittiesComponent.prototype.ngOnInit = function () {
        this.getKitties();
    };
    KittiesComponent.prototype.getKitties = function () {
        var _this = this;
        this.kittyService.getKitties().then(function (kitties) { return _this.kitties = kitties; });
    };
    KittiesComponent.prototype.onSelect = function (kitty) {
        this.selectedKitty = kitty;
    };
    KittiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-kitties',
            templateUrl: './kitties.component.html',
            styleUrls: ['./kitties.component.css']
        }), 
        __metadata('design:paramtypes', [kitty_service_1.KittyService])
    ], KittiesComponent);
    return KittiesComponent;
}());
exports.KittiesComponent = KittiesComponent;
//# sourceMappingURL=kitties.component.js.map