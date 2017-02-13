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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var kitty_1 = require('./kitty');
var kitty_service_1 = require('./kitty.service');
var KittyDetailComponent = (function () {
    function KittyDetailComponent(kittyService, route) {
        this.kittyService = kittyService;
        this.route = route;
    }
    KittyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.kittyService.getKitty(+params['id']); })
            .subscribe(function (kitty) { return _this.kitty = kitty; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', kitty_1.Kitty)
    ], KittyDetailComponent.prototype, "kitty", void 0);
    KittyDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-kitty-detail',
            templateUrl: './kitty-detail.component.html',
            styleUrls: ['./kitty-detail.component.css']
        }), 
        __metadata('design:paramtypes', [kitty_service_1.KittyService, router_1.ActivatedRoute])
    ], KittyDetailComponent);
    return KittyDetailComponent;
}());
exports.KittyDetailComponent = KittyDetailComponent;
//# sourceMappingURL=kitty-detail.component.js.map