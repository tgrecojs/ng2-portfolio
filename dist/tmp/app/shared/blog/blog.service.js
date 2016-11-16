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
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.apiUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
        this.commentUrl = 'http://54.209.113.46/wp-json/wp/v2/comments';
    }
    BlogService.prototype.get = function (id) {
        var post$ = this.http
            .get(this.apiUrl + "/" + id)
            .map(mapPost);
        return post$;
    };
    BlogService.prototype.getComments = function (id) {
        var comments$ = this.http
            .get(this.commentUrl + "?post=" + id)
            .map(mapComments);
        return comments$;
    };
    BlogService.prototype.getAll = function () {
        var posts$ = this.http
            .get("" + this.apiUrl)
            .map(mapPosts);
        return posts$;
    };
    BlogService.prototype.addComment = function (comment) {
        var body = ({
            postId: this.postId,
            user: comment.author_name,
            email: comment.author_email,
            content: comment.content,
            date: comment.date
        });
        var headers = new http_1.Headers({ 'enctype': 'multipart/form-data' });
        var options = new http_1.RequestOptions({ headers: headers });
        var newComment$ = this.http.post(this.commentUrl, body, options)
            .map(mapComments);
        return newComment$;
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
function mapComments(response) {
    return response.json().map(toComment);
}
function mapPosts(response) {
    return response.json().map(toPost);
}
function toComment(r) {
    var comment = ({
        id: r.id,
        user: r.author_name,
        email: r.author_email,
        content: r.content,
        date: r.date
    });
    console.log('Parsed comments:', comment);
    return comment;
}
;
function toPost(r) {
    var post = ({
        id: r.id,
        slug: r.slug,
        title: r.title,
        excerpt: r.excerpt,
        content: r.content,
        date: r.date,
        img: r.better_featured_image
    });
    console.log('Parsed Post:', post);
    return post;
}
function mapPost(response) {
    return toPost(response.json());
}
