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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var shared_module_1 = require('./shared/shared.module');
var blog_module_1 = require('./blogroll/blog.module');
var contact_module_1 = require('./contact/contact.module');
var _404_module_1 = require('./404/404.module');
var angularfire2_1 = require('angularfire2');
var firebaseConfig = {
    apiKey: 'AIzaSyDHQ3eNg7a9deTlKVXn5CYoyBXNL334rFA',
    authDomain: 'angular2-a66d7.firebaseapp.com',
    databaseURL: 'https://angular2-a66d7.firebaseio.com',
    storageBucket: 'angular2-a66d7.appspot.com',
    messagingSenderId: '659317321966'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig),
                router_1.RouterModule.forRoot(app_routes_1.routes),
                blog_module_1.BlogModule,
                contact_module_1.ContactModule,
                _404_module_1.PageNotFoundModule,
                shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
