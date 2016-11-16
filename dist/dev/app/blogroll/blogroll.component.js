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
var http_1 = require('@angular/http');
var blog_service_1 = require('../shared/blog/blog.service');
var BlogrollComponent = (function () {
    function BlogrollComponent(http, wpService) {
        this.http = http;
        this.wpService = wpService;
        this.blogUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
        this.focusedPost = false;
        this.randomPostUrl = this.blogUrl + "?filter[orderby]=rand&filter[posts_per_page]=1";
        this.posts$ = this.wpService.getAll();
    }
    BlogrollComponent.prototype.ngOnInit = function () {
        console.log('hello `Blog` component');
    };
    BlogrollComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-blog',
            styleUrls: ['blogroll.component.css'],
            templateUrl: 'blogroll.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, blog_service_1.BlogService])
    ], BlogrollComponent);
    return BlogrollComponent;
}());
exports.BlogrollComponent = BlogrollComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ncm9sbC9ibG9ncm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFVMUQ7SUFNRSwyQkFBb0IsSUFBVSxFQUFVLFNBQXNCO1FBQTFDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBSDlELFlBQU8sR0FBRywwQ0FBMEMsQ0FBQztRQUNyRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUFNLElBQUksQ0FBQyxPQUFPLG1EQUFnRCxDQUFDO1FBRTVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBR0Qsb0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBckJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUcsQ0FBQyx3QkFBd0IsQ0FBQztZQUN0QyxXQUFXLEVBQUcseUJBQXlCO1NBQ3hDLENBQUM7O3lCQUFBO0lBbUJGLHdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx5QkFBaUIsb0JBZ0I3QixDQUFBIiwiZmlsZSI6ImFwcC9ibG9ncm9sbC9ibG9ncm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9ibG9nL2Jsb2cuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWJsb2cnLFxuICBzdHlsZVVybHMgOiBbJ2Jsb2dyb2xsLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGVVcmwgOiAnYmxvZ3JvbGwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBCbG9ncm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gcG9zdHMkOiBhbnk7XG4gIHJhbmRvbVBvc3QkOiBhbnk7XG4gIGJsb2dVcmwgPSAnaHR0cDovLzU0LjIwOS4xMTMuNDYvd3AtanNvbi93cC92Mi9wb3N0cyc7XG4gIGZvY3VzZWRQb3N0ID0gZmFsc2U7XG5yYW5kb21Qb3N0VXJsID0gYCR7dGhpcy5ibG9nVXJsfT9maWx0ZXJbb3JkZXJieV09cmFuZCZmaWx0ZXJbcG9zdHNfcGVyX3BhZ2VdPTFgO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgd3BTZXJ2aWNlOiBCbG9nU2VydmljZSkge1xuICAgIHRoaXMucG9zdHMkID0gdGhpcy53cFNlcnZpY2UuZ2V0QWxsKCk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbyBgQmxvZ2AgY29tcG9uZW50Jyk7XG4gIH1cblxuXG59XG4iXX0=
