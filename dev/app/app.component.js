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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QTtBQXZCWSxvQkFBWSxlQXVCeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIHRyaWdnZXIsIHN0eWxlLCBzdGF0ZSwgdHJhbnNpdGlvbiwga2V5ZnJhbWVzLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcbiAqIGFwcGxpY2F0aW9ucyByb3V0ZXMsIGNvbmZpZ3VyaW5nIHRoZSBwYXRocyBmb3IgdGhlIGxhenkgbG9hZGVkIGNvbXBvbmVudHMgKEhvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50KS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3BhZ2VMb2FkJywgW1xuICAgICAgc3RhdGUoJ3JvdGF0ZVJpZ2h0Jywgc3R5bGUoe1xuICAgICAgICAndHJhbnNmb3JtJzogJ3JvdGF0ZSgxMjBkZWcpJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2NlbnRlcicsIHN0eWxlKHtcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICdyb3RhdGUoMGRlZyknXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgncm90YXRlTGVmdCcsIHN0eWxlKHtcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICdyb3RhdGUoLTEyMGRlZyknXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKDI1MDAsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHsgJ3RyYW5zZm9ybSc6ICdzY2FsZSgwKSByb3RhdGUoMGRlZyknIH0pLFxuICAgICAgICBzdHlsZSh7ICd0cmFuc2Zvcm0nOiAnc2NhbGUoLjIpIHJvdGF0ZSg4MGRlZyknIH0pLFxuICAgICAgICBzdHlsZSh7ICd0cmFuc2Zvcm0nOiAnc2NhbGUoLjQpIHJvdGF0ZSgxNDBkZWcpKScgfSksXG4gICAgICAgIHN0eWxlKHsgJ3RyYW5zZm9ybSc6ICdzY2FsZSguNykgcm90YXRlKDE5MGRlZyknIH0pLFxuICAgICAgICBzdHlsZSh7ICd0cmFuc2Zvcm0nOiAnc2NhbGUoLjkpIHJvdGF0ZSgyNDBkZWcpJyB9KSxcbiAgICAgICAgc3R5bGUoeyAndHJhbnNmb3JtJzogJ3NjYWxlKDEuMykgcm90YXRlKDI4MGRlZyknIH0pLFxuICAgICAgICBzdHlsZSh7ICd0cmFuc2Zvcm0nOiAnc2NhbGUoMSkgcm90YXRlKDM2MGRlZyknIH0pXG4gICAgICBdKSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnMnMgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpJykpXG4gICAgXSksXG4gICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHknLCBbXG4gICAgICAgc3RhdGUoJ3Nob3duJywgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KSksXG4gICAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pKSxcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnLjVzIGVhc2UtaW4nKSlcbiAgICBdKVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtgXG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImphZi1kb211c1wiLHNhbnMtc2VyaWY7XG4gICAgfVxuICAgICNiYW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNGE4OWNhO1xuICAgIH1cbiAgICAjYmFubmVyIGltZyB7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAjYnRuLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPHNkLXRvb2xiYXI+PC9zZC10b29sYmFyPlxuICA8c2QtbmF2YmFyPjwvc2QtbmF2YmFyPlxuICA8ZGl2IGlkPVwiYmFubmVyXCI+XG4gICAgPGltZyBbQHBhZ2VMb2FkXT1cImxvYWRlZFwiICBzcmM9XCJhc3NldHMvaW1nL3RnLWljb24ucG5nXCIgYWx0PVwiXCI+XG4gICAgPGRpdiBbQHZpc2liaWxpdHldPVwidmlzaWJpbGl0eVwiIGlkPVwiYnRuLXJvd1wiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Sb3RhdGVMZWZ0KClcIj5cbiAgICAgIEZvbGQgTGVmdFxuICAgIDwvYnV0dG9uPlxuICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNlbnRlcigpXCI+XG4gICAgQmFjayB0byBjZW50ZXJcbiAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uUm90YXRlUmlnaHQoKVwiPlxuICAgICAgRm9sZCBSSWdodFxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgICAgPGJ1dHRvbiAqbmdJZj1cIid2aXNpYmlsaXR5ID09PSBoaWRkZW4nXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVCdXR0b25zKClcIj5cbiAgICAgUm90YXRlIHRoZSBsb2dvIFxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPHJvdXRlci1vdXRsZXQgY2xhc3M9XCJzaXRlLWNvbnRlbnRcIj48L3JvdXRlci1vdXRsZXQ+XG4gIDxzZC1mb290ZXI+PC9zZC1mb290ZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBsb2FkZWQ6IHN0cmluZyA9ICdzaG93TG9nbyc7XG4gICAgdmlzaWJpbGl0eTogc3RyaW5nID0gJ2hpZGRlbic7XG4gIG9uUm90YXRlTGVmdCAoKSB7XG4gICAgdGhpcy5sb2FkZWQgPSAncm90YXRlTGVmdCc7XG4gIH1cblxuICBvblJvdGF0ZVJpZ2h0ICgpIHtcbiAgICB0aGlzLmxvYWRlZCA9ICdyb3RhdGVSaWdodCc7XG4gIH1cblxuXG4gIG9uQ2VudGVyICgpIHtcbiAgICB0aGlzLmxvYWRlZCA9ICdjZW50ZXInO1xuICB9XG50b2dnbGVCdXR0b25zKCkge1xuICAgIHRoaXMudmlzaWJpbGl0eSA9XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9PSAnc2hvd24nXG4gICAgICAgID8gJ2hpZGRlbicgOiAnc2hvd24nO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICB9XG59XG4iXX0=
