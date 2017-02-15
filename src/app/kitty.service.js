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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var KittyService = (function () {
    function KittyService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'applicaton/json' });
        this.kittiesUrl = 'api/kitties';
    }
    KittyService.prototype.createKitty = function (src) {
        var kitty = { name: 'new kitty in town', description: 'a new kitty', src: src, fave: false };
        return this.http.post(this.kittiesUrl, JSON.stringify(kitty), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    KittyService.prototype.getKitties = function () {
        return this.http.get(this.kittiesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    KittyService.prototype.getKitty = function (id) {
        var url = this.kittiesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    KittyService.prototype.updateKitty = function (kitty) {
        var url = this.kittiesUrl + "/" + kitty.id;
        return this.http.put(url, JSON.stringify(kitty), { headers: this.headers })
            .toPromise()
            .then(function () { return kitty; })
            .catch(this.handleError);
    };
    KittyService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    KittyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], KittyService);
    return KittyService;
}());
exports.KittyService = KittyService;
//# sourceMappingURL=kitty.service.js.map