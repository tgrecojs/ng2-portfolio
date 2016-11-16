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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('./index');
var _404_routes_1 = require('./404.routes');
var PageNotFoundModule = (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, _404_routes_1.default],
            declarations: [index_1.PageNotFoundComponent],
            exports: [index_1.PageNotFoundComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());
exports.PageNotFoundModule = PageNotFoundModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC80MDQvNDA0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFzQyxTQUFTLENBQUMsQ0FBQTtBQUNoRCw0QkFBMkIsY0FBYyxDQUFDLENBQUE7QUFTMUM7SUFBQTtJQUFrQyxDQUFDO0lBTm5DO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw0QkFBWSxFQUFFLHFCQUFjLENBQUM7WUFDckQsWUFBWSxFQUFFLENBQUMsNkJBQXFCLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsNkJBQXFCLENBQUM7WUFDaEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOzswQkFBQTtJQUNnQyx5QkFBQztBQUFELENBQWxDLEFBQW1DLElBQUE7QUFBdEIsMEJBQWtCLHFCQUFJLENBQUEiLCJmaWxlIjoiYXBwLzQwNC80MDQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB3aWxkY2FyZFJvdXRlcyBmcm9tICcuLzQwNC5yb3V0ZXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZSwgd2lsZGNhcmRSb3V0ZXNdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdlTm90Rm91bmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZU5vdEZvdW5kQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTm90Rm91bmRNb2R1bGUgeyB9XG4iXX0=
