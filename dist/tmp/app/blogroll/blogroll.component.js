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
            styles: [":host{font-size:16px}#blog-card-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.post-container{max-width:600px;padding:1em;border:2px solid #000;margin:16px}.post-container img{max-width:100%;position:relative;z-index:100;padding:16px;min-height:300px}.post-container{-webkit-perspective:700px;perspective:700px}.button{color:#fff;width:75%;font-weight:700;display:block;text-decoration:none;text-transform:uppercase;padding:20px 0;border-radius:.5em;background:rgba(74,137,202,.8);margin:.3em 0 0}.post{position:relative;line-height:0}.post-desc{color:#fff;position:absolute;top:0;right:0;bottom:0;left:0;padding-left:20px;padding-right:20px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#345d88;line-height:0}.button{transition:background .3s}.button:hover{background:#4a89ca}.content{-webkit-perspective:700px;perspective:700px}.post{transition:-webkit-transform 1s cubic-bezier(.55,-.62,.27,1.2);transition:transform 1s cubic-bezier(.55,-.62,.27,1.2);transition:transform 1s cubic-bezier(.55,-.62,.27,1.2),-webkit-transform 1s cubic-bezier(.55,-.62,.27,1.2);-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.post:hover{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}.side-a,.side-b{-webkit-backface-visibility:hidden;backface-visibility:hidden}.side-b{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}#header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#header p{width:60%}"],
            template: "<div id=\"header\"> \t<h3>Thomas Joseph Greco a.k.a. SassmasterTG</h3> \t<p> \t\tWelcome to my web application! Below is a list of articles detailing my experiences with different technologies that I am fond of. By hovering over each post, you will see an excerpt for the post and decide whether you would like to read it or not! \t</p> \t<h4>Have a question for me? Contact me <a routerLink=\"/contact-me\">here</a>!</h4> </div> <div id=\"full-page\"> <div id=\"blog-card-wrapper\" class=\"content\"> \t\t\t<div class=\"post-container\" *ngFor=\"let post of posts$ | async\" (click)=\"focused(post)\"> \t\t\t\t<div class=\"post\"> \t\t\t\t  <img class=\"side-a\" [src]=\"post.img.source_url\" [alt]=\"post.img.alt_text\">\t \t\t\t\t  <div class=\"post-desc side-b\"> \t\t\t\t\t                       <h3 [innerHtml]=\"post.title.rendered\"></h3>                       <p [innerHtml]=\"post.excerpt.rendered\">                      </p>                        <button><a [routerLink]=\"post.id\">       Read More     </a></button>     \t\t\t\t\t</div> \t\t\t\t</div> \t\t\t</div>\t </div> </div>"
        }), 
        __metadata('design:paramtypes', [http_1.Http, blog_service_1.BlogService])
    ], BlogrollComponent);
    return BlogrollComponent;
}());
exports.BlogrollComponent = BlogrollComponent;
