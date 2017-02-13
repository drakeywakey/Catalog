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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var kitties_component_1 = require('./kitties.component');
var kitty_detail_component_1 = require('./kitty-detail.component');
var kitty_service_1 = require('./kitty.service');
var fave_pipe_1 = require('./fave.pipe');
var search_pipe_1 = require('./search.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'detail/:id',
                        component: kitty_detail_component_1.KittyDetailComponent
                    },
                    {
                        path: 'kitties',
                        component: kitties_component_1.KittiesComponent
                    },
                    {
                        path: '',
                        redirectTo: '/kitties',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                fave_pipe_1.FavePipe,
                kitties_component_1.KittiesComponent,
                kitty_detail_component_1.KittyDetailComponent,
                search_pipe_1.SearchPipe
            ],
            providers: [kitty_service_1.KittyService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map