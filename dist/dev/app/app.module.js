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
    apiKey: "AIzaSyDHQ3eNg7a9deTlKVXn5CYoyBXNL334rFA",
    authDomain: "angular2-a66d7.firebaseapp.com",
    databaseURL: "https://angular2-a66d7.firebaseio.com",
    storageBucket: "angular2-a66d7.appspot.com",
    messagingSenderId: "659317321966"
};
var authConfig = {
    provider: angularfire2_1.AuthProviders.Password,
    method: angularfire2_1.AuthMethods.Password
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUl0Qyw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCw0QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUVwRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCw0QkFBbUMsa0JBQWtCLENBQUMsQ0FBQTtBQUd0RCw2QkFBOEQsY0FBYyxDQUFDLENBQUE7QUFLN0UsSUFBTSxjQUFjLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcEQsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyxpQkFBaUIsRUFBRSxjQUFjO0NBQ3BDLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRztJQUNmLFFBQVEsRUFBRSw0QkFBYSxDQUFDLFFBQVE7SUFDaEMsTUFBTSxFQUFFLDBCQUFXLENBQUMsUUFBUTtDQUMvQixDQUFDO0FBdUJGO0lBQUE7SUFBeUIsQ0FBQztJQWpCMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVO2dCQUNuQyxnQ0FBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO2dCQUMvQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2dCQUM1Qix3QkFBVTtnQkFDViw4QkFBYTtnQkFDYixnQ0FBa0I7Z0JBQ2xCLDRCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tICcuL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQmxvZ01vZHVsZSB9IGZyb20gJy4vYmxvZ3JvbGwvYmxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250YWN0TW9kdWxlIH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZE1vZHVsZSB9IGZyb20gJy4vNDA0LzQwNC5tb2R1bGUnO1xuXG5cbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlLCBBdXRoTWV0aG9kcywgQXV0aFByb3ZpZGVycyB9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XG5cbi8qKlxuICogRmlyZWJhc2UgY29uZmlnLiBOZWVkIHRvIG1vdmUgaW50byBleHRlcm5hbCBmaWxlLiBcbiAqL1xuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeURIUTNlTmc3YTlkZVRsS1ZYbjVDWW95QlhOTDMzNHJGQVwiLFxuICAgIGF1dGhEb21haW46IFwiYW5ndWxhcjItYTY2ZDcuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9hbmd1bGFyMi1hNjZkNy5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYW5ndWxhcjItYTY2ZDcuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NTkzMTczMjE5NjZcIlxufTtcblxuY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgICBwcm92aWRlcjogQXV0aFByb3ZpZGVycy5QYXNzd29yZCxcbiAgICBtZXRob2Q6IEF1dGhNZXRob2RzLlBhc3N3b3JkXG59O1xuXG5cbi8qKlxuICogTWFpbiBhcHBsaWNhdGlvbiBtb2R1bGUgbG9hZGluZyBtb2R1bGVzLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSxcbiAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXG4gIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIEJsb2dNb2R1bGUsXG4gIENvbnRhY3RNb2R1bGUsXG4gIFBhZ2VOb3RGb3VuZE1vZHVsZSxcbiAgU2hhcmVkTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
