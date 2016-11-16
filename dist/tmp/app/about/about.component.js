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
var AboutComponent = (function () {
    function AboutComponent() {
        this.signal = 'go';
        this.heading = 'About Thomas Greco';
        this.message = 'This is open!';
    }
    AboutComponent.prototype.onGoClick = function () {
        this.signal = 'go';
        this.heading = 'Friends and Family';
        this.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolores itaque, molestiae iusto maiores neque eveniet minima soluta tempore repudiandae fugiat assumenda expedita maxime facere totam corporis excepturi suscipit. Dignissimos.';
        this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dallas_Cowboys_old_logo.svg/2000px-Dallas_Cowboys_old_logo.svg.png';
    };
    AboutComponent.prototype.onStopClick = function () {
        this.signal = 'stop';
        this.heading = 'Friends and Family';
        this.message = "It was through NYCShowguide that I realized I had an affinity for programming. It was deemed a viable internship at Fordham, granted that I completed a term paper on the knew insights I had learned throughout the semester. To kick start the semester, I enrolled in a discounted web developer's certification course on Udemy.com. If nothing else, the certification would show that I had dedicated hours towards attaining new knowlegde durng the semester. That being said, I quickly knew that I had tapped into subject matter that I found incredibly interesting. Better yet, I knew that I had found something I was good at! After assessing my past success in graphic design and social media, I wondered why it took so long for me to find programming!";
        this.img = 'http://www.carlabraham.com/Scranton%20pa%207.jpg';
    };
    AboutComponent.prototype.onClickThree = function () {
        this.signal = 'three';
        this.heading = 'Friends and Family';
        this.message = "\n        When I am not logging hours on the computer I like to spend time doing all sorts of fun things! I was born and raised in Scranton, PA. Scranton is a unique place. It's filled with large families, so, I, along with my four older siblings, had no shortage of friends growing up. Many of the same people who I ran around (and sometimes terrorized) my neighborhood with are still among my closest friends today and this is something that I believe to be extremely special. \n        ";
        this.img = 'https://udemy-images.udemy.com/course/750x422/500628_a962.jpg';
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            animations: [
                core_1.trigger('accordion', [
                    core_1.state('open', core_1.style({
                        height: 'auto'
                    }))
                ]),
                core_1.trigger('signal', [
                    core_1.state('go', core_1.style({
                        'background-color': 'green',
                        'height': '500px',
                        'border': '2px solid black',
                        'border-radius': '3px'
                    })),
                    core_1.state('stop', core_1.style({
                        'background-color': 'red',
                        'height': '600px'
                    })),
                    core_1.state('three', core_1.style({
                        'background-color': 'blue',
                        'height': '550px',
                        'border': '2px dashed #00fd22',
                        'border-radius': '30px'
                    })),
                    core_1.transition('* => *', core_1.animate('.5s ease-in'))
                ])
            ],
            styles: [":host{background-color:#ebe8e4;color:#222;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:600;font-size:15px}#am-wrapper{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;min-height:700px;width:100%}#am-content,#am-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#am-content{width:600px;margin:16px}#am-content,#am-sidebar{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#am-sidebar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;height:350px}img{max-width:300px;max-height:200px}"],
            template: "\n<div id=\"am-wrapper\">\n<div id=\"am-sidebar\"> \n<button (click)=\"onGoClick()\">About Me</button>\n<button (click)=\"onStopClick()\">Football</button>\n<button (click)=\"onClickThree()\">Friends and Family</button>\n</div>\n<div [@signal]=\"signal\" id=\"am-content\">\n<div class=\"am-text\">\n    <h2> {{ heading }}</h2>\n   <p> {{ message }}  </p>\n   <img [src]=\"img\" />\n</div>\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
