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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYmxvZy9ibG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFLeEU7SUFJRSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGL0IsV0FBTSxHQUFHLDBDQUEwQyxDQUFDO1FBQ3BELGVBQVUsR0FBRyw2Q0FBNkMsQ0FBQztJQUUxRCxDQUFDO0lBRUQseUJBQUcsR0FBSCxVQUFJLEVBQVU7UUFDWixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTthQUNsQixHQUFHLENBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxFQUFJLENBQUM7YUFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUMsaUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDdEIsR0FBRyxDQUFJLElBQUksQ0FBQyxVQUFVLGNBQVMsRUFBSSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDbkIsR0FBRyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQVEsQ0FBQzthQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFLQSxnQ0FBVSxHQUFWLFVBQVksT0FBWTtRQUN2QixJQUFJLElBQUksR0FBRyxDQUFDO1lBQ1osTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVztZQUN6QixLQUFLLEVBQUUsT0FBTyxDQUFDLFlBQVk7WUFDM0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3hCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQVMsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQzNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUE5Q0g7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlEYixrQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksbUJBQVcsY0FnRHZCLENBQUE7QUFFRCxxQkFBcUIsUUFBa0I7SUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUdELGtCQUFrQixRQUFrQjtJQUdqQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNyQyxDQUFDO0FBRUQsbUJBQW1CLENBQU07SUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQztRQUNiLEVBQUUsRUFBRyxDQUFDLENBQUMsRUFBRTtRQUNULElBQUksRUFBRSxDQUFDLENBQUMsV0FBVztRQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLFlBQVk7UUFDckIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtLQUNiLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBQUEsQ0FBQztBQUdGLGdCQUFnQixDQUFNO0lBQ3BCLElBQUksSUFBSSxHQUFTLENBQUM7UUFDaEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztRQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDZCxHQUFHLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtLQUMzQixDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELGlCQUFpQixRQUFrQjtJQUVoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUMiLCJmaWxlIjoiYXBwL3NoYXJlZC9ibG9nL2Jsb2cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi9jb21tZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcbiAgcG9zdElkOiBudW1iZXI7XG4gYXBpVXJsID0gJ2h0dHA6Ly81NC4yMDkuMTEzLjQ2L3dwLWpzb24vd3AvdjIvcG9zdHMnO1xuIGNvbW1lbnRVcmwgPSAnaHR0cDovLzU0LjIwOS4xMTMuNDYvd3AtanNvbi93cC92Mi9jb21tZW50cyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCApIHtcbiAgfVxuXG4gIGdldChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQb3N0PiB7XG4gICAgbGV0IHBvc3QkID0gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuYXBpVXJsfS8ke2lkfWApXG4gICAgICAubWFwKG1hcFBvc3QpO1xuICAgICAgcmV0dXJuIHBvc3QkO1xuICB9XG5cbiAgICBnZXRDb21tZW50cyhpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb21tZW50W10+IHtcbiAgICBsZXQgY29tbWVudHMkID0gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuY29tbWVudFVybH0/cG9zdD0ke2lkfWApXG4gICAgICAubWFwKG1hcENvbW1lbnRzKTtcbiAgICAgIHJldHVybiBjb21tZW50cyQ7XG4gIH1cblxuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxQb3N0W10+IHtcbiAgICBsZXQgcG9zdHMkID0gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuYXBpVXJsfWApXG4gICAgICAubWFwKG1hcFBvc3RzKTtcbiAgICAgIHJldHVybiBwb3N0cyQ7XG4gIH1cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBhZGRDb21tZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21tZW50XG4gICAqL1xuICAgYWRkQ29tbWVudCAoY29tbWVudDogYW55KTogT2JzZXJ2YWJsZTxDb21tZW50W10+IHtcbiAgICBsZXQgYm9keSA9ICh7XG4gICAgcG9zdElkIDogdGhpcy5wb3N0SWQsXG4gICAgdXNlcjogY29tbWVudC5hdXRob3JfbmFtZSxcbiAgICBlbWFpbDogY29tbWVudC5hdXRob3JfZW1haWwsXG4gICAgY29udGVudDogY29tbWVudC5jb250ZW50LFxuICAgIGRhdGU6IGNvbW1lbnQuZGF0ZVxuICAgIH0pO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnZW5jdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30pO1xuICAgICAgICBsZXQgb3B0aW9ucyAgICAgICA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7IC8vIENyZWF0ZSBhIHJlcXVlc3Qgb3B0aW9uXG5cbiAgICBsZXQgbmV3Q29tbWVudCQgPSB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbW1lbnRVcmwsIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG1hcENvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdDb21tZW50JDtcbiAgfVxuXG5cbn1cblxuZnVuY3Rpb24gbWFwQ29tbWVudHMocmVzcG9uc2U6IFJlc3BvbnNlKTogQ29tbWVudFtdIHtcbiAgIHJldHVybiByZXNwb25zZS5qc29uKCkubWFwKHRvQ29tbWVudCk7XG59XG5cblxuZnVuY3Rpb24gbWFwUG9zdHMocmVzcG9uc2U6IFJlc3BvbnNlKTogUG9zdFtdIHtcbiAgIC8vIFRoZSByZXNwb25zZSBvZiB0aGUgQVBJIGhhcyBhIHJlc3VsdHNcbiAgIC8vIHByb3BlcnR5IHdpdGggdGhlIGFjdHVhbCByZXN1bHRzXG4gICByZXR1cm4gcmVzcG9uc2UuanNvbigpLm1hcCh0b1Bvc3QpXG59XG5cbmZ1bmN0aW9uIHRvQ29tbWVudChyOiBhbnkpIHtcbiAgbGV0IGNvbW1lbnQgPSAoe1xuICAgIGlkIDogci5pZCxcbiAgICB1c2VyOiByLmF1dGhvcl9uYW1lLFxuICAgIGVtYWlsOiByLmF1dGhvcl9lbWFpbCxcbiAgICBjb250ZW50OiByLmNvbnRlbnQsXG4gICAgZGF0ZTogci5kYXRlXG4gIH0pO1xuICBjb25zb2xlLmxvZygnUGFyc2VkIGNvbW1lbnRzOicsIGNvbW1lbnQpO1xuICByZXR1cm4gY29tbWVudDtcbn07XG5cblxuZnVuY3Rpb24gdG9Qb3N0KHI6IGFueSk6IFBvc3Qge1xuICBsZXQgcG9zdCA9IDxQb3N0Pih7XG4gICAgaWQ6IHIuaWQsXG4gICAgc2x1Zzogci5zbHVnLFxuICAgIHRpdGxlOiByLnRpdGxlLFxuICAgIGV4Y2VycHQ6IHIuZXhjZXJwdCxcbiAgICBjb250ZW50OiByLmNvbnRlbnQsXG4gICAgZGF0ZTogci5kYXRlLFxuICBpbWc6IHIuYmV0dGVyX2ZlYXR1cmVkX2ltYWdlXG4gIH0pO1xuICBjb25zb2xlLmxvZygnUGFyc2VkIFBvc3Q6JywgcG9zdCk7XG4gIHJldHVybiBwb3N0O1xufVxuXG5mdW5jdGlvbiBtYXBQb3N0KHJlc3BvbnNlOiBSZXNwb25zZSk6IFBvc3Qge1xuICAgLy8gdG9wb3N0IGxvb2tzIGp1c3QgbGlrZSBpbiB0aGUgcHJldmlvdXMgZXhhbXBsZVxuICAgcmV0dXJuIHRvUG9zdChyZXNwb25zZS5qc29uKCkpO1xufVxuXG5cbiJdfQ==
