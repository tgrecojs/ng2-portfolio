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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/startWith');
var index_1 = require('../shared/index');
var PostComponent = (function () {
    function PostComponent(route, http, _blogService, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this._blogService = _blogService;
        this.router = router;
        this.blogUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
        this.randomPostUrl = this.blogUrl + "?filter[orderby]=rand&filter[posts_per_page]=1";
        this.open = false;
        var api = 'http://54.209.113.46/wp-json/wp/v2/';
        this.post$ = route.params
            .map(function (p) { return p.id; })
            .switchMap(function (id) { return _blogService.get(id); });
        this.comments$ = route.params.map(function (p) { return p.id; })
            .switchMap(function (id) { return _blogService.getComments(id); });
        var postId = route.params.subscribe(function (params) { return _this.postId = params['id']; });
    }
    PostComponent.prototype.toggle = function () {
        this.open = !this.open;
    };
    PostComponent.prototype.goBack = function () {
        var link = ['/blog'];
        this.router.navigate(link);
    };
    PostComponent.prototype.goToPost = function (randomPost) {
        this.router.navigate(['/blog/' + randomPost.id]);
    };
    __decorate([
        core_1.Input('open'), 
        __metadata('design:type', Object)
    ], PostComponent.prototype, "open", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'wp-post',
            styles: ["\n    #blog-post-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n  }\n  #blog-post {\n          width: 80%;\n  }\n  code {\n  z-index: -1;\n}\npre {\n    z-index: 1;\n    background: black;\n    padding: 1em;\n    /// box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];\n    box-shadow: 2px 2px 0 4px $text-color;\n}\n#backBtn {\n      margin-bottom: 20px;\n}\n  "],
            template: "\n  Lazy blog post - async: \n  <div id='blog-post-wrapper'>\n  <h3>{{ (post$ | async)?.title.rendered }}</h3>\n  <div id='blog-post'>\n  <p innerHtml='{{ (post$ | async)?.content.rendered }}'>\n  </p>\n </div>\n      <button id='backBtn' (click)='goBack()'> Back to blog home</button>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http, index_1.BlogService, router_1.Router])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
