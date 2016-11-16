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
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.navs = [
            { url: '/blog', content: 'Blog' },
            { url: '/contact-me', content: 'Contact Me' }
        ];
    }
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-navbar',
            template: "<nav id=\"nav\">   <a *ngFor=\"let nav of navs\"   [routerLink]=\"nav.url\"      routerLinkActive=\"active\"     routerLinkActiveOptions=\"{exact:true}\">       {{nav.content}}</a> </nav>",
            styles: [":host{border-color:#e1e1e1;border-style:solid;border-width:0 0 1px;display:block;height:48px;padding:0 16px}nav{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}nav a{color:#8f8f8f;font-size:14px;font-weight:500;line-height:48px;margin-right:20px;text-decoration:none;vertical-align:middle;cursor:pointer}nav a.router-link-active{color:#106cc8}"],
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
