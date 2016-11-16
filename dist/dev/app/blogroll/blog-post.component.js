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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ncm9sbC9ibG9nLXBvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFDckMsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JDLHNCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBeUM5QztJQWdCRSx1QkFBb0IsS0FBcUIsRUFBVSxJQUFVLEVBQ3JELFlBQXlCLEVBQVUsTUFBYztRQWpCM0QsaUJBdUNDO1FBdkJxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDckQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVHZELFlBQU8sR0FBRywwQ0FBMEMsQ0FBQztRQUNyRCxrQkFBYSxHQUFNLElBQUksQ0FBQyxPQUFPLG1EQUFnRCxDQUFDO1FBRXpFLFNBQUksR0FBRyxLQUFLLENBQUM7UUFPbEIsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTthQUNoQixHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQzthQUNyQixTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUssSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUNoRSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsQ0FDckMsQ0FBQztJQUVKLENBQUM7SUFoQkMsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFnQkQsOEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUEzQkw7UUFBQyxZQUFLLENBQUMsTUFBTSxDQUFDOzsrQ0FBQTtJQWpEZDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixNQUFNLEVBQUUsQ0FBQyxpZkF3QlIsQ0FBQztZQUNGLFFBQVEsRUFBRSwyU0FVVDtTQUNGLENBQUM7O3FCQUFBO0lBd0NGLG9CQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSxxQkFBYSxnQkF1Q3pCLENBQUEiLCJmaWxlIjoiYXBwL2Jsb2dyb2xsL2Jsb2ctcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3RhcnRXaXRoJztcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3AtcG9zdCcsXG4gIHN0eWxlczogW2BcbiAgICAjYmxvZy1wb3N0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNibG9nLXBvc3Qge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgY29kZSB7XG4gIHotaW5kZXg6IC0xO1xufVxucHJlIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICAvLy8gYm94LXNoYWRvdzogW2hvcml6b250YWwgb2Zmc2V0XSBbdmVydGljYWwgb2Zmc2V0XSBbYmx1ciByYWRpdXNdIFtvcHRpb25hbCBzcHJlYWQgcmFkaXVzXSBbY29sb3JdO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMCA0cHggJHRleHQtY29sb3I7XG59XG4jYmFja0J0biB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgTGF6eSBibG9nIHBvc3QgLSBhc3luYzogXG4gIDxkaXYgaWQ9J2Jsb2ctcG9zdC13cmFwcGVyJz5cbiAgPGgzPnt7IChwb3N0JCB8IGFzeW5jKT8udGl0bGUucmVuZGVyZWQgfX08L2gzPlxuICA8ZGl2IGlkPSdibG9nLXBvc3QnPlxuICA8cCBpbm5lckh0bWw9J3t7IChwb3N0JCB8IGFzeW5jKT8uY29udGVudC5yZW5kZXJlZCB9fSc+XG4gIDwvcD5cbiA8L2Rpdj5cbiAgICAgIDxidXR0b24gaWQ9J2JhY2tCdG4nIChjbGljayk9J2dvQmFjaygpJz4gQmFjayB0byBibG9nIGhvbWU8L2J1dHRvbj5cbjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQge1xuXG4gICByYW5kb21Qb3N0JDphbnk7XG4gICAgcG9zdCQ6YW55O1xuICAgIGNvbW1lbnRzJDphbnk7XG4gICAgc2x1ZzogYW55O1xuICAgIHBvc3RJZCA6IG51bWJlcjtcbiAgICBhcGk6IHN0cmluZztcbiAgICBibG9nVXJsID0gJ2h0dHA6Ly81NC4yMDkuMTEzLjQ2L3dwLWpzb24vd3AvdjIvcG9zdHMnO1xuICAgIHJhbmRvbVBvc3RVcmwgPSBgJHt0aGlzLmJsb2dVcmx9P2ZpbHRlcltvcmRlcmJ5XT1yYW5kJmZpbHRlcltwb3N0c19wZXJfcGFnZV09MWA7XG5ASW5wdXQoJ29wZW4nKVxuICAgIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICBwcml2YXRlIF9ibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IGFwaSA9ICdodHRwOi8vNTQuMjA5LjExMy40Ni93cC1qc29uL3dwL3YyLyc7XG4gICAgdGhpcy5wb3N0JCA9IHJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLm1hcCgocDogYW55KSA9PiBwLmlkKVxuICAgICAgICAgICAgLnN3aXRjaE1hcChpZCA9PiBfYmxvZ1NlcnZpY2UuZ2V0KGlkKSk7XG5cbiAgICB0aGlzLmNvbW1lbnRzJCA9IHJvdXRlLnBhcmFtcy5tYXAoKHA6YW55KSA9PiBwLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoaWQgPT4gX2Jsb2dTZXJ2aWNlLmdldENvbW1lbnRzKGlkKSk7XG4gICAgIGxldCBwb3N0SWQgPSByb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgcGFyYW1zID0+IHRoaXMucG9zdElkID0gcGFyYW1zWydpZCddXG4gICAgKTtcblxuICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIGxldCBsaW5rID0gWycvYmxvZyddO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICB9XG4gICAgZ29Ub1Bvc3QocmFuZG9tUG9zdDogYW55KSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ibG9nLycgKyByYW5kb21Qb3N0LmlkXSk7XG4gICAgfVxuXG59XG4iXX0=
