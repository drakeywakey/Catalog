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
        this.fave = false;
        this.search = '';
    }
    KittiesComponent.prototype.add = function (src) {
        var _this = this;
        src = src.trim();
        if (!src) {
            return;
        }
        this.kittyService.createKitty(src)
            .then(function (kitty) {
            _this.kitties.push(kitty);
            _this.selectedKitty = null;
            //////groooosssss workaround, I'm positive this can be done differently
            _this.kitties = _this.kitties.slice();
        });
    };
    KittiesComponent.prototype.ngOnInit = function () {
        this.getKitties();
    };
    KittiesComponent.prototype.getKitties = function () {
        var _this = this;
        this.kittyService.getKitties().then(function (kitties) { return _this.kitties = kitties; });
    };
    KittiesComponent.prototype.onSelect = function (kitty) {
        if (this.selectedKitty === kitty) {
            this.selectedKitty = null;
        }
        else {
            this.selectedKitty = kitty;
        }
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