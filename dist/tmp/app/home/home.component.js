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
            template: "<div id=\"cuber-outer\">   <div class=\"photo-cube\"> \t\t\t\t\t<img class=\"front\"src=\"assets/cube/Angular2.png\" alt=\"\"> \t\t\t\t\t<div class=\"back photo-desc\"> \t\t\t\t\t  <h3>Earth from Space</h3> \t\t\t\t\t  <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo.</p> \t\t\t\t\t\t<a href=\"#\" class=\"button\">download</a> \t\t\t\t\t</div> \t\t\t\t\t<img class=\"left\" src=\"assets/cube/gruntjs.png\" alt=\"\"> \t\t\t\t\t<img [@moveCube]=\"rightTurn\" class=\"right\" src=\"assets/cube/js.png\" alt=\"\"> \t\t\t\t</div> </div> <div>   <button (click)=\"turn()\">     Turn Right   </button> </div>  <p>Howdy! Here's a list of awesome computer scientists. Do you know any others? Add to the list yourself.</p>  <form (submit)=\"addName()\"> \t<input [(ngModel)]=\"newName\" name=\"newName\" placeholder=\"Awesome Computer Scientist\"> \t<button type=\"submit\">Add</button> </form>  <ul> \t<li *ngFor=\"let name of names\">{{name}}</li> </ul>   <h1>Animations</h1>     <hr>     <button type=\"button\"         class=\"btn btn-primary btn-lg\"         (click)=\"toggleVisibility()\">       {{ getLabel() }}     </button>     <div [@visibility]=\"visibility\" class=\"alert alert-success\">       Animate good times! Come on!     </div>",
            styles: [":host{display:block;padding:0 16px}.fc-centered{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#3d{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@-webkit-keyframes spin{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}}@keyframes spin{0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}to{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}}#buddyImg{max-width:500px;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite;-webkit-backface-visibility:hidden;backface-visibility:hidden}.button{transition:background .3s}.button:hover{background:#4a89ca}.cube-container{box-shadow:0 18px 40px 5px rgba(0,0,0,.4);-webkit-perspective:800px;perspective:800px}.photo-cube{transition:-webkit-transform 2s ease-in-out;transition:transform 2s ease-in-out;transition:transform 2s ease-in-out,-webkit-transform 2s ease-in-out;width:220px;height:200px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.photo-cube:hover{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.back,.front,.left,.right{width:100%;height:100%;display:block;position:absolute}.front{-webkit-transform:translateZ(110px);transform:translateZ(110px)}.back{-webkit-transform:translateZ(-110px) rotateY(270deg);transform:translateZ(-110px) rotateY(270deg);-webkit-transform-origin:center left;transform-origin:center left}.left{-webkit-transform:rotateY(-270deg) translate3d(110px,0,0);transform:rotateY(-270deg) translate3d(110px,0,0);-webkit-transform-origin:top right;transform-origin:top right}.right{-webkit-transform:translateZ(-110px) rotateY(180deg);transform:translateZ(-110px) rotateY(180deg)}ul{list-style-type:none;padding:0 0 0 8px}"],
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
