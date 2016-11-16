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
var index_1 = require('../shared/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.rightTurn = false;
        this.newName = '';
        this.names = [];
        this.visibility = 'shown';
        this.buddyImg = '/assets/jb-timfo-tg.jpg';
        this.picOne = 'http://lorempixel.com/400/200/sports/1/';
    }
    HomeComponent.prototype.turn = function () {
        this.rightTurn = true;
    };
    HomeComponent.prototype.getLabel = function () {
        return this.visibility === 'shown' ? 'Hide' : 'Show';
    };
    HomeComponent.prototype.toggleVisibility = function () {
        this.visibility =
            this.visibility === 'shown'
                ? 'hidden' : 'shown';
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            animations: [
                core_1.trigger('visibility', [
                    core_1.state('shown', core_1.style({
                        opacity: 1
                    })),
                    core_1.state('hidden', core_1.style({
                        opacity: 0
                    })),
                    core_1.transition('* => *', core_1.animate('.5s ease-in'))
                ]),
                core_1.trigger('moveCube', [
                    core_1.state('rightTurn', core_1.style({
                        transform: 'rotateY(180deg)'
                    })),
                    core_1.transition('* => *', core_1.animate(3000))
                ])
            ],
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYsc0JBQWdDLGlCQUFpQixDQUFDLENBQUE7QUE2QmxEO0lBa0JFLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQm5ELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFDN0IsYUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBQ3JDLFdBQU0sR0FBRyx5Q0FBeUMsQ0FBQztJQVdHLENBQUM7SUFUdkQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFTQSxnQ0FBUSxHQUFSO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVO1lBQ1gsSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPO2tCQUN6QixRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFJRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTthQUN2QixTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FDekMsQ0FBQztJQUNOLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBaEZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUU7Z0JBQ1YsY0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDbkIsWUFBSyxDQUFDLE9BQU8sRUFBRSxZQUFLLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDO3FCQUNiLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsUUFBUSxFQUFFLFlBQUssQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUM7cUJBQ2IsQ0FBQyxDQUFDO29CQUNILGlCQUFVLENBQUMsUUFBUSxFQUFFLGNBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDL0MsQ0FBQztnQkFDRixjQUFPLENBQUMsVUFBVSxFQUFFO29CQUNwQixZQUFLLENBQUMsV0FBVyxFQUFFLFlBQUssQ0FBQzt3QkFDdkIsU0FBUyxFQUFFLGlCQUFpQjtxQkFDN0IsQ0FBQyxDQUFDO29CQUNGLGlCQUFVLENBQUMsUUFBUSxFQUFFLGNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkMsQ0FBQzthQUNIO1lBQ0QsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQTRERixvQkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFkscUJBQWEsZ0JBMER6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIHRyaWdnZXIsIHN0eWxlLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigndmlzaWJpbGl0eScsIFtcbiAgICAgICBzdGF0ZSgnc2hvd24nLCBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pKSxcbiAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCcuNXMgZWFzZS1pbicpKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ21vdmVDdWJlJywgW1xuICAgIHN0YXRlKCdyaWdodFR1cm4nLCBzdHlsZSh7XG4gICAgIFx0dHJhbnNmb3JtOiAncm90YXRlWSgxODBkZWcpJ1xuICAgIH0pKSxcbiAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgzMDAwKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJpZ2h0VHVybiA9IGZhbHNlO1xuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIG5hbWVzOiBhbnlbXSA9IFtdO1xuICB2aXNpYmlsaXR5OiBzdHJpbmcgPSAnc2hvd24nO1xuICBidWRkeUltZyA9ICcvYXNzZXRzL2piLXRpbWZvLXRnLmpwZyc7XG4gIHBpY09uZSA9ICdodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzIwMC9zcG9ydHMvMS8nO1xuXG4gIHR1cm4oKSB7XG4gICAgdGhpcy5yaWdodFR1cm4gPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHt9XG4gIFxuICAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJpbGl0eSA9PT0gJ3Nob3duJyA/ICdIaWRlJyA6ICdTaG93JztcbiAgfVxuXG4gIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy52aXNpYmlsaXR5ID1cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID09PSAnc2hvd24nXG4gICAgICAgID8gJ2hpZGRlbicgOiAnc2hvd24nO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzIE9uSW5pdFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXROYW1lcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgbmFtZUxpc3RTZXJ2aWNlIG9ic2VydmFibGVcbiAgICovXG4gIGdldE5hbWVzKCkge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmdldCgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsXG4gICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHVzaGVzIGEgbmV3IG5hbWUgb250byB0aGUgbmFtZXMgYXJyYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IGltcGxlbWVudCBuYW1lTGlzdFNlcnZpY2UucG9zdFxuICAgIHRoaXMubmFtZXMucHVzaCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=
