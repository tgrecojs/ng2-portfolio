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
var blogroll_component_1 = require('./blogroll.component');
var index_1 = require('./index');
var index_2 = require('../shared/name-list/index');
var blog_routes_1 = require('./blog.routes');
var index_3 = require('../shared/blog/index');
var BlogModule = (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, blog_routes_1.default],
            declarations: [blogroll_component_1.BlogrollComponent, index_1.PostComponent],
            exports: [blogroll_component_1.BlogrollComponent, index_1.PostComponent],
            providers: [index_2.NameListService, index_3.BlogService]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogModule);
    return BlogModule;
}());
exports.BlogModule = BlogModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ncm9sbC9ibG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3pELHNCQUE4QixTQUFTLENBQUMsQ0FBQTtBQUN4QyxzQkFBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCw0QkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFTbkQ7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw0QkFBWSxFQUFFLHFCQUFVLENBQUM7WUFDakQsWUFBWSxFQUFFLENBQUMsc0NBQWlCLEVBQUUscUJBQWEsQ0FBQztZQUNoRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxxQkFBYSxDQUFDO1lBQzNDLFNBQVMsRUFBRSxDQUFDLHVCQUFlLEVBQUUsbUJBQVcsQ0FBQztTQUMxQyxDQUFDOztrQkFBQTtJQUN3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Jsb2dyb2xsL2Jsb2cubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBCbG9ncm9sbENvbXBvbmVudCB9IGZyb20gJy4vYmxvZ3JvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvaW5kZXgnO1xuaW1wb3J0IGJsb2dSb3V0ZXMgZnJvbSAnLi9ibG9nLnJvdXRlcyc7XG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9ibG9nL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIGJsb2dSb3V0ZXNdLFxuICBkZWNsYXJhdGlvbnM6IFtCbG9ncm9sbENvbXBvbmVudCwgUG9zdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCbG9ncm9sbENvbXBvbmVudCwgUG9zdENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05hbWVMaXN0U2VydmljZSwgQmxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dNb2R1bGUgeyB9XG4iXX0=
