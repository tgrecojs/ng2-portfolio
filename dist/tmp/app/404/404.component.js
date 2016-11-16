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
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-not-found',
            styles: ["\n            :host {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                }\n              * {\n                font-weight: 600;\n                }\n    "],
            template: "\n        <h2>Page not found!</h2>\n        <iframe src=\"//giphy.com/embed/xT1XGWbE0XiBDX2T8Q\" width=\"480\" \n        height=\"270\" frameBorder=\"0\"></iframe>\n        <p>Looks like you've navigated to an incorrect route. \n        Try clicking one of the links above.</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
