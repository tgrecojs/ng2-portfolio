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
var FooterComponent = (function () {
    function FooterComponent() {
        this.logoImg = '/assets/tg-logo.png';
    }
    FooterComponent.prototype.ngOnInit = function () {
        console.log('This footer has arrived!');
    };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-footer',
            styles: ["footer{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#2873d0}#logo{max-width:50px}"],
            template: "<footer>     <p>Created by Thomas Greco.</p>       <img id=\"logo\" src=\"assets/img/tg-icon.png\" alt=\"\"> </footer>"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
