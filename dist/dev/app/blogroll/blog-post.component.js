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
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
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
    PostComponent.prototype.ngOnInit = function () {
        console.log('hello blog-post component');
        this.randomPost$ = this.http.get(this.randomPostUrl).map(function (res) { return res.json(); });
    };
    PostComponent.prototype.ngOnChanges = function () {
        this.randomPost$ = this.http.get(this.randomPostUrl).map(function (res) { return res.json(); });
    };
    __decorate([
        core_1.Input('open'), 
        __metadata('design:type', Object)
    ], PostComponent.prototype, "open", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'wp-post',
            styles: ["\n    #blog-post-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n  }\n  #blog-post {\n          width: 80%;\n  }\n  code {\n  z-index: -1;\n}\npre {\n    z-index: 1;\n    background: black;\n    padding: 1em;\n    /// box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];\n    box-shadow: 2px 2px 0 4px $text-color;\n}\n#backBtn {\n      margin-bottom: 20px;\n}\n  "],
            template: "\n  Lazy blog post - async: \n  <div id=\"blog-post-wrapper\">\n  <h3>{{ (post$ | async)?.title.rendered }} postId -> {{ postId }} </h3>\n  <div id=\"blog-post\">\n  <p innerHtml=\"{{ (post$ | async)?.content.rendered }}\">\n  </p>\n </div>\n      <button id=\"backBtn\" (click)=\"goBack()\"> Back to blog home</button>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http, index_1.BlogService, router_1.Router])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ibG9ncm9sbC9ibG9nLXBvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFDcEUsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFDckMsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JDLHNCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBeUM5QztJQWdCRSx1QkFBb0IsS0FBcUIsRUFBVSxJQUFVLEVBQ3JELFlBQXlCLEVBQVUsTUFBYztRQWpCM0QsaUJBK0NDO1FBL0JxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDckQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVHZELFlBQU8sR0FBRywwQ0FBMEMsQ0FBQztRQUNyRCxrQkFBYSxHQUFNLElBQUksQ0FBQyxPQUFPLG1EQUFnRCxDQUFDO1FBRXpFLFNBQUksR0FBRyxLQUFLLENBQUM7UUFPbEIsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTthQUNoQixHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQzthQUNyQixTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUssSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUNoRSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsQ0FDckMsQ0FBQztJQUVKLENBQUM7SUFoQkMsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFnQkQsOEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFSCxnQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsbUNBQVcsR0FBWDtRQUNNLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBbkNIO1FBQUMsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7K0NBQUE7SUFqRGQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTSxFQUFFLENBQUMsaWZBd0JSLENBQUM7WUFDRixRQUFRLEVBQUUsNlVBVVQ7U0FDRixDQUFDOztxQkFBQTtJQWdERixvQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1kscUJBQWEsZ0JBK0N6QixDQUFBIiwiZmlsZSI6ImFwcC9ibG9ncm9sbC9ibG9nLXBvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N0YXJ0V2l0aFwiO1xuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cC1wb3N0JyxcbiAgc3R5bGVzOiBbYFxuICAgICNibG9nLXBvc3Qtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2Jsb2ctcG9zdCB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgfVxuICBjb2RlIHtcbiAgei1pbmRleDogLTE7XG59XG5wcmUge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIC8vLyBib3gtc2hhZG93OiBbaG9yaXpvbnRhbCBvZmZzZXRdIFt2ZXJ0aWNhbCBvZmZzZXRdIFtibHVyIHJhZGl1c10gW29wdGlvbmFsIHNwcmVhZCByYWRpdXNdIFtjb2xvcl07XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwIDRweCAkdGV4dC1jb2xvcjtcbn1cbiNiYWNrQnRuIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICBMYXp5IGJsb2cgcG9zdCAtIGFzeW5jOiBcbiAgPGRpdiBpZD1cImJsb2ctcG9zdC13cmFwcGVyXCI+XG4gIDxoMz57eyAocG9zdCQgfCBhc3luYyk/LnRpdGxlLnJlbmRlcmVkIH19IHBvc3RJZCAtPiB7eyBwb3N0SWQgfX0gPC9oMz5cbiAgPGRpdiBpZD1cImJsb2ctcG9zdFwiPlxuICA8cCBpbm5lckh0bWw9XCJ7eyAocG9zdCQgfCBhc3luYyk/LmNvbnRlbnQucmVuZGVyZWQgfX1cIj5cbiAgPC9wPlxuIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBpZD1cImJhY2tCdG5cIiAoY2xpY2spPVwiZ29CYWNrKClcIj4gQmFjayB0byBibG9nIGhvbWU8L2J1dHRvbj5cbjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQge1xuXG4gICByYW5kb21Qb3N0JDphbnk7XG4gICAgcG9zdCQ6YW55O1xuICAgIGNvbW1lbnRzJDphbnk7XG4gICAgc2x1ZzogYW55O1xuICAgIHBvc3RJZCA6IG51bWJlcjtcbiAgICBhcGk6IHN0cmluZztcbiAgICBibG9nVXJsID0gJ2h0dHA6Ly81NC4yMDkuMTEzLjQ2L3dwLWpzb24vd3AvdjIvcG9zdHMnO1xuICAgIHJhbmRvbVBvc3RVcmwgPSBgJHt0aGlzLmJsb2dVcmx9P2ZpbHRlcltvcmRlcmJ5XT1yYW5kJmZpbHRlcltwb3N0c19wZXJfcGFnZV09MWA7XG5ASW5wdXQoJ29wZW4nKVxuICAgIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICBwcml2YXRlIF9ibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IGFwaSA9ICdodHRwOi8vNTQuMjA5LjExMy40Ni93cC1qc29uL3dwL3YyLyc7XG4gICAgdGhpcy5wb3N0JCA9IHJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLm1hcCgocDogYW55KSA9PiBwLmlkKVxuICAgICAgICAgICAgLnN3aXRjaE1hcChpZCA9PiBfYmxvZ1NlcnZpY2UuZ2V0KGlkKSk7XG5cbiAgICB0aGlzLmNvbW1lbnRzJCA9IHJvdXRlLnBhcmFtcy5tYXAoKHA6YW55KSA9PiBwLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoaWQgPT4gX2Jsb2dTZXJ2aWNlLmdldENvbW1lbnRzKGlkKSk7XG4gICAgIGxldCBwb3N0SWQgPSByb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgcGFyYW1zID0+IHRoaXMucG9zdElkID0gcGFyYW1zWydpZCddXG4gICAgKTtcblxuICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIGxldCBsaW5rID0gWycvYmxvZyddO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICB9XG4gICAgZ29Ub1Bvc3QocmFuZG9tUG9zdDogYW55KSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ibG9nLycgKyByYW5kb21Qb3N0LmlkXSk7XG4gICAgfVxuXG4gIG5nT25Jbml0ICgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gYmxvZy1wb3N0IGNvbXBvbmVudCcpO1xuICAgICAgICB0aGlzLnJhbmRvbVBvc3QkID0gdGhpcy5odHRwLmdldCh0aGlzLnJhbmRvbVBvc3RVcmwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbiAgbmdPbkNoYW5nZXMgKCkge1xuICAgICAgICB0aGlzLnJhbmRvbVBvc3QkID0gdGhpcy5odHRwLmdldCh0aGlzLnJhbmRvbVBvc3RVcmwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxufVxuIl19
