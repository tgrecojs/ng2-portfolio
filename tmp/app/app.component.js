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
var index_1 = require('./shared/index');
require('./operators');
var AppComponent = (function () {
    function AppComponent() {
        this.loaded = 'showLogo';
        this.visibility = 'hidden';
        console.log('Environment config', index_1.Config);
    }
    AppComponent.prototype.onRotateLeft = function () {
        this.loaded = 'rotateLeft';
    };
    AppComponent.prototype.onRotateRight = function () {
        this.loaded = 'rotateRight';
    };
    AppComponent.prototype.onCenter = function () {
        this.loaded = 'center';
    };
    AppComponent.prototype.toggleButtons = function () {
        this.visibility =
            this.visibility == 'shown'
                ? 'hidden' : 'shown';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            animations: [
                core_1.trigger('pageLoad', [
                    core_1.state('rotateRight', core_1.style({
                        'transform': 'rotate(120deg)'
                    })),
                    core_1.state('center', core_1.style({
                        'transform': 'rotate(0deg)'
                    })),
                    core_1.state('rotateLeft', core_1.style({
                        'transform': 'rotate(-120deg)'
                    })),
                    core_1.transition('void => *', core_1.animate(2500, core_1.keyframes([
                        core_1.style({ 'transform': 'scale(0) rotate(0deg)' }),
                        core_1.style({ 'transform': 'scale(.2) rotate(80deg)' }),
                        core_1.style({ 'transform': 'scale(.4) rotate(140deg))' }),
                        core_1.style({ 'transform': 'scale(.7) rotate(190deg)' }),
                        core_1.style({ 'transform': 'scale(.9) rotate(240deg)' }),
                        core_1.style({ 'transform': 'scale(1.3) rotate(280deg)' }),
                        core_1.style({ 'transform': 'scale(1) rotate(360deg)' })
                    ]))),
                    core_1.transition('* => *', core_1.animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
                ]),
                core_1.trigger('visibility', [
                    core_1.state('shown', core_1.style({
                        opacity: 1
                    })),
                    core_1.state('hidden', core_1.style({
                        opacity: 0
                    })),
                    core_1.transition('* => *', core_1.animate('.5s ease-in'))
                ])
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    * {\n        font-family: \"jaf-domus\",sans-serif;\n    }\n    #banner {\n      display: flex;\n      flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n    background: #4a89ca;\n    }\n    #banner img {\n      width: 400px;\n      margin-top: 20px;\n    }\n    #btn-row {\n      display: flex;\n      width: 60%;\n      align-items: center;\n      justify-content: space-around;\n      padding: 20px;\n    }\n  "],
            template: "\n  <sd-toolbar></sd-toolbar>\n  <sd-navbar></sd-navbar>\n  <div id=\"banner\">\n    <img [@pageLoad]=\"loaded\"  src=\"assets/img/tg-icon.png\" alt=\"\">\n    <div [@visibility]=\"visibility\" id=\"btn-row\">\n      <button (click)=\"onRotateLeft()\">\n      Fold Left\n    </button>\n     <button (click)=\"onCenter()\">\n    Back to center\n    </button>\n      <button (click)=\"onRotateRight()\">\n      Fold RIght\n    </button>\n  </div>\n     <button *ngIf=\"'visibility === hidden'\" type=\"button\"\n        class=\"btn btn-primary btn-lg\"\n        (click)=\"toggleButtons()\">\n     Rotate the logo \n    </button>\n  </div>\n  <router-outlet class=\"site-content\"></router-outlet>\n  <sd-footer></sd-footer>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
