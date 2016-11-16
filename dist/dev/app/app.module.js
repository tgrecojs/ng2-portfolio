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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUV0Qyw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCw0QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCw0QkFBbUMsa0JBQWtCLENBQUMsQ0FBQTtBQUd0RCw2QkFBOEQsY0FBYyxDQUFDLENBQUE7QUFVN0UsSUFBTSxjQUFjLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcEQsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyxpQkFBaUIsRUFBRSxjQUFjO0NBQ3BDLENBQUM7QUF3QkY7SUFBQTtJQUF5QixDQUFDO0lBakIxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsaUJBQVU7Z0JBQ25DLGdDQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7Z0JBQy9DLHFCQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFNLENBQUM7Z0JBQzVCLHdCQUFVO2dCQUNWLDhCQUFhO2dCQUNiLGdDQUFrQjtnQkFDbEIsNEJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7aUJBQUE7SUFFdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEJsb2dNb2R1bGUgfSBmcm9tICcuL2Jsb2dyb2xsL2Jsb2cubW9kdWxlJztcbmltcG9ydCB7IENvbnRhY3RNb2R1bGUgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kTW9kdWxlIH0gZnJvbSAnLi80MDQvNDA0Lm1vZHVsZSc7XG5cblxuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUsIEF1dGhNZXRob2RzLCBBdXRoUHJvdmlkZXJzIH0gZnJvbSAnYW5ndWxhcmZpcmUyJztcblxuLyoqXG4gKiBGaXJlYmFzZSBjb25maWcuIE5lZWQgdG8gbW92ZSBpbnRvIGV4dGVybmFsIGZpbGUuIFxuY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgICBwcm92aWRlcjogQXV0aFByb3ZpZGVycy5QYXNzd29yZCxcbiAgICBtZXRob2Q6IEF1dGhNZXRob2RzLlBhc3N3b3JkXG59O1xuXG4gKi9cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogJ0FJemFTeURIUTNlTmc3YTlkZVRsS1ZYbjVDWW95QlhOTDMzNHJGQScsXG4gICAgYXV0aERvbWFpbjogJ2FuZ3VsYXIyLWE2NmQ3LmZpcmViYXNlYXBwLmNvbScsXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL2FuZ3VsYXIyLWE2NmQ3LmZpcmViYXNlaW8uY29tJyxcbiAgICBzdG9yYWdlQnVja2V0OiAnYW5ndWxhcjItYTY2ZDcuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNjU5MzE3MzIxOTY2J1xufTtcblxuXG5cbi8qKlxuICogTWFpbiBhcHBsaWNhdGlvbiBtb2R1bGUgbG9hZGluZyBtb2R1bGVzLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSxcbiAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXG4gIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIEJsb2dNb2R1bGUsXG4gIENvbnRhY3RNb2R1bGUsXG4gIFBhZ2VOb3RGb3VuZE1vZHVsZSxcbiAgU2hhcmVkTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
