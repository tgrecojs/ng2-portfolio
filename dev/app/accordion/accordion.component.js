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
var angularfire2_1 = require('angularfire2');
var AccordionComponent = (function () {
    function AccordionComponent(af) {
        this.af = af;
        this.signal = 'go';
        this.heading = 'About Thomas Greco';
        this.message = 'This is open!';
        this.bioData = af.database.list('/web-data');
        console.log(this.bioData);
        this.about = af.database.list('/web-data/about');
        console.log(this.about);
    }
    AccordionComponent.prototype.onGoClick = function () {
        this.signal = 'go';
        this.heading = 'Friends and Family';
        this.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolores itaque, molestiae iusto maiores neque eveniet minima soluta tempore repudiandae fugiat assumenda expedita maxime facere totam corporis excepturi suscipit. Dignissimos.';
        this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dallas_Cowboys_old_logo.svg/2000px-Dallas_Cowboys_old_logo.svg.png';
    };
    AccordionComponent.prototype.onStopClick = function () {
        this.signal = 'stop';
        this.heading = 'Friends and Family';
        this.message = "It was through NYCShowguide that I realized I had an affinity for programming. It was deemed a viable internship at Fordham, granted that I completed a term paper on the knew insights I had learned throughout the semester. To kick start the semester, I enrolled in a discounted web developer's certification course on Udemy.com. If nothing else, the certification would show that I had dedicated hours towards attaining new knowlegde durng the semester. That being said, I quickly knew that I had tapped into subject matter that I found incredibly interesting. Better yet, I knew that I had found something I was good at! After assessing my past success in graphic design and social media, I wondered why it took so long for me to find programming!";
        this.img = 'http://www.carlabraham.com/Scranton%20pa%207.jpg';
    };
    AccordionComponent.prototype.onClickThree = function () {
        this.signal = 'three';
        this.heading = 'Friends and Family';
        this.message = "\n        When I am not logging hours on the computer I like to spend time doing all sorts of fun things! I was born and raised in Scranton, PA. Scranton is a unique place. It's filled with large families, so, I, along with my four older siblings, had no shortage of friends growing up. Many of the same people who I ran around (and sometimes terrorized) my neighborhood with are still among my closest friends today and this is something that I believe to be extremely special. \n        ";
        this.img = 'https://udemy-images.udemy.com/course/750x422/500628_a962.jpg';
    };
    AccordionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-accordion',
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
            styleUrls: ['accordion.component.css'],
            template: "\n<div id=\"am-wrapper\">\n<div id=\"am-sidebar\"> \n<button (click)=\"onGoClick()\">About Me</button>\n<button (click)=\"onStopClick()\">Football</button>\n<button (click)=\"onClickThree()\">Friends and Family</button>\n</div>\n<div [@signal]=\"signal\" id=\"am-content\">\n<div class=\"am-text\">\n    <h2> {{ heading }}</h2>\n   <p> {{ message }}  </p>\n   <img [src]=\"img\" />\n</div>\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlGLGVBQWUsQ0FBQyxDQUFBO0FBQ2pHLDZCQUFrRCxjQUFjLENBQUMsQ0FBQTtBQWlEakU7SUFRSSw0QkFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFQbkMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU8sR0FBWSxvQkFBb0IsQ0FBQztRQUN4QyxZQUFPLEdBQVcsZUFBZSxDQUFDO1FBTTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLHdQQUF3UCxDQUFBO1FBQ3ZRLElBQUksQ0FBQyxHQUFHLEdBQUcsOEhBQThILENBQUE7SUFDN0ksQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyw4dUJBQTh1QixDQUFDO1FBQzl2QixJQUFJLENBQUMsR0FBRyxHQUFHLGtEQUFrRCxDQUFDO0lBQ25FLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLDJlQUVkLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLCtEQUErRCxDQUFDO0lBQy9FLENBQUM7SUFsRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRTtnQkFDUixjQUFPLENBQUMsV0FBVyxFQUFFO29CQUNqQixZQUFLLENBQUMsTUFBTSxFQUFFLFlBQUssQ0FBQzt3QkFDZCxNQUFNLEVBQUUsTUFBTTtxQkFDbkIsQ0FBQyxDQUFDO2lCQUNOLENBQUM7Z0JBQ0YsY0FBTyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxZQUFLLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQzt3QkFDZCxrQkFBa0IsRUFBQyxPQUFPO3dCQUMxQixRQUFRLEVBQUMsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsZUFBZSxFQUFHLEtBQUs7cUJBQzFCLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsTUFBTSxFQUFFLFlBQUssQ0FBQzt3QkFDaEIsa0JBQWtCLEVBQUMsS0FBSzt3QkFDeEIsUUFBUSxFQUFDLE9BQU87cUJBQ25CLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsT0FBTyxFQUFFLFlBQUssQ0FBQzt3QkFDakIsa0JBQWtCLEVBQUMsTUFBTTt3QkFDekIsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLGVBQWUsRUFBRSxNQUFNO3FCQUMxQixDQUFDLENBQUM7b0JBQ0gsaUJBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMvQyxDQUFDO2FBQ0w7WUFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUscVpBY1Q7U0FDSixDQUFDOzswQkFBQTtJQXVDRix5QkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksMEJBQWtCLHFCQXNDOUIsQ0FBQSIsImZpbGUiOiJhcHAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHRyaWdnZXIsIHN0eWxlLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlLCBGaXJlYmFzZUxpc3RPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyZmlyZTInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hY2NvcmRpb24nLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYWNjb3JkaW9uJywgW1xuICAgICAgICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdzaWduYWwnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnZ28nLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOidncmVlbicsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6JzUwMHB4JyxcbiAgICAgICAgICAgICAgICAnYm9yZGVyJzogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnIDogJzNweCdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdzdG9wJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzoncmVkJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzonNjAwcHgnXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgndGhyZWUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOidibHVlJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzonNTUwcHgnLFxuICAgICAgICAgICAgICAgICdib3JkZXInOiAnMnB4IGRhc2hlZCAjMDBmZDIyJyxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICczMHB4J1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnLjVzIGVhc2UtaW4nKSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHN0eWxlVXJsczogWydhY2NvcmRpb24uY29tcG9uZW50LmNzcyddLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGlkPVwiYW0td3JhcHBlclwiPlxuPGRpdiBpZD1cImFtLXNpZGViYXJcIj4gXG48YnV0dG9uIChjbGljayk9XCJvbkdvQ2xpY2soKVwiPkFib3V0IE1lPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJvblN0b3BDbGljaygpXCI+Rm9vdGJhbGw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tUaHJlZSgpXCI+RnJpZW5kcyBhbmQgRmFtaWx5PC9idXR0b24+XG48L2Rpdj5cbjxkaXYgW0BzaWduYWxdPVwic2lnbmFsXCIgaWQ9XCJhbS1jb250ZW50XCI+XG48ZGl2IGNsYXNzPVwiYW0tdGV4dFwiPlxuICAgIDxoMj4ge3sgaGVhZGluZyB9fTwvaDI+XG4gICA8cD4ge3sgbWVzc2FnZSB9fSAgPC9wPlxuICAgPGltZyBbc3JjXT1cImltZ1wiIC8+XG48L2Rpdj5cbjwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgICBzaWduYWwgPSAnZ28nO1xuICAgIGhlYWRpbmcgOiBzdHJpbmcgPSAnQWJvdXQgVGhvbWFzIEdyZWNvJztcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnVGhpcyBpcyBvcGVuISc7XG4gICAgaW1nIDogc3RyaW5nO1xuICAgIGJpb0RhdGE6IE9ic2VydmFibGU8YW55PjtcbiAgICBhYm91dDogRmlyZWJhc2VMaXN0T2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhZjogQW5ndWxhckZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMuYmlvRGF0YSA9IGFmLmRhdGFiYXNlLmxpc3QoJy93ZWItZGF0YScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5iaW9EYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQgPSBhZi5kYXRhYmFzZS5saXN0KCcvd2ViLWRhdGEvYWJvdXQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWJvdXQpO1xuICAgIH1cblxuICAgIG9uR29DbGljaygpe1xuICAgICAgICB0aGlzLnNpZ25hbCA9ICdnbyc7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9ICdGcmllbmRzIGFuZCBGYW1pbHknO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcnNwaWNpYXRpcyBkb2xvcmVzIGl0YXF1ZSwgbW9sZXN0aWFlIGl1c3RvIG1haW9yZXMgbmVxdWUgZXZlbmlldCBtaW5pbWEgc29sdXRhIHRlbXBvcmUgcmVwdWRpYW5kYWUgZnVnaWF0IGFzc3VtZW5kYSBleHBlZGl0YSBtYXhpbWUgZmFjZXJlIHRvdGFtIGNvcnBvcmlzIGV4Y2VwdHVyaSBzdXNjaXBpdC4gRGlnbmlzc2ltb3MuJ1xuICAgICAgICB0aGlzLmltZyA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzgvODUvRGFsbGFzX0Nvd2JveXNfb2xkX2xvZ28uc3ZnLzIwMDBweC1EYWxsYXNfQ293Ym95c19vbGRfbG9nby5zdmcucG5nJ1xuICAgIH1cblxuICAgIG9uU3RvcENsaWNrKCkge1xuICAgICAgICB0aGlzLnNpZ25hbCA9ICdzdG9wJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRpbmcgPSAnRnJpZW5kcyBhbmQgRmFtaWx5JztcbiAgICAgICAgIHRoaXMubWVzc2FnZSA9IGBJdCB3YXMgdGhyb3VnaCBOWUNTaG93Z3VpZGUgdGhhdCBJIHJlYWxpemVkIEkgaGFkIGFuIGFmZmluaXR5IGZvciBwcm9ncmFtbWluZy4gSXQgd2FzIGRlZW1lZCBhIHZpYWJsZSBpbnRlcm5zaGlwIGF0IEZvcmRoYW0sIGdyYW50ZWQgdGhhdCBJIGNvbXBsZXRlZCBhIHRlcm0gcGFwZXIgb24gdGhlIGtuZXcgaW5zaWdodHMgSSBoYWQgbGVhcm5lZCB0aHJvdWdob3V0IHRoZSBzZW1lc3Rlci4gVG8ga2ljayBzdGFydCB0aGUgc2VtZXN0ZXIsIEkgZW5yb2xsZWQgaW4gYSBkaXNjb3VudGVkIHdlYiBkZXZlbG9wZXIncyBjZXJ0aWZpY2F0aW9uIGNvdXJzZSBvbiBVZGVteS5jb20uIElmIG5vdGhpbmcgZWxzZSwgdGhlIGNlcnRpZmljYXRpb24gd291bGQgc2hvdyB0aGF0IEkgaGFkIGRlZGljYXRlZCBob3VycyB0b3dhcmRzIGF0dGFpbmluZyBuZXcga25vd2xlZ2RlIGR1cm5nIHRoZSBzZW1lc3Rlci4gVGhhdCBiZWluZyBzYWlkLCBJIHF1aWNrbHkga25ldyB0aGF0IEkgaGFkIHRhcHBlZCBpbnRvIHN1YmplY3QgbWF0dGVyIHRoYXQgSSBmb3VuZCBpbmNyZWRpYmx5IGludGVyZXN0aW5nLiBCZXR0ZXIgeWV0LCBJIGtuZXcgdGhhdCBJIGhhZCBmb3VuZCBzb21ldGhpbmcgSSB3YXMgZ29vZCBhdCEgQWZ0ZXIgYXNzZXNzaW5nIG15IHBhc3Qgc3VjY2VzcyBpbiBncmFwaGljIGRlc2lnbiBhbmQgc29jaWFsIG1lZGlhLCBJIHdvbmRlcmVkIHdoeSBpdCB0b29rIHNvIGxvbmcgZm9yIG1lIHRvIGZpbmQgcHJvZ3JhbW1pbmchYDtcbiAgICAgICAgIHRoaXMuaW1nID0gJ2h0dHA6Ly93d3cuY2FybGFicmFoYW0uY29tL1NjcmFudG9uJTIwcGElMjA3LmpwZyc7XG4gICAgfVxuXG4gICAgb25DbGlja1RocmVlKCkge1xuICAgICAgICB0aGlzLnNpZ25hbCA9ICd0aHJlZSc7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9ICdGcmllbmRzIGFuZCBGYW1pbHknO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgXG4gICAgICAgIFdoZW4gSSBhbSBub3QgbG9nZ2luZyBob3VycyBvbiB0aGUgY29tcHV0ZXIgSSBsaWtlIHRvIHNwZW5kIHRpbWUgZG9pbmcgYWxsIHNvcnRzIG9mIGZ1biB0aGluZ3MhIEkgd2FzIGJvcm4gYW5kIHJhaXNlZCBpbiBTY3JhbnRvbiwgUEEuIFNjcmFudG9uIGlzIGEgdW5pcXVlIHBsYWNlLiBJdCdzIGZpbGxlZCB3aXRoIGxhcmdlIGZhbWlsaWVzLCBzbywgSSwgYWxvbmcgd2l0aCBteSBmb3VyIG9sZGVyIHNpYmxpbmdzLCBoYWQgbm8gc2hvcnRhZ2Ugb2YgZnJpZW5kcyBncm93aW5nIHVwLiBNYW55IG9mIHRoZSBzYW1lIHBlb3BsZSB3aG8gSSByYW4gYXJvdW5kIChhbmQgc29tZXRpbWVzIHRlcnJvcml6ZWQpIG15IG5laWdoYm9yaG9vZCB3aXRoIGFyZSBzdGlsbCBhbW9uZyBteSBjbG9zZXN0IGZyaWVuZHMgdG9kYXkgYW5kIHRoaXMgaXMgc29tZXRoaW5nIHRoYXQgSSBiZWxpZXZlIHRvIGJlIGV4dHJlbWVseSBzcGVjaWFsLiBcbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5pbWcgPSAnaHR0cHM6Ly91ZGVteS1pbWFnZXMudWRlbXkuY29tL2NvdXJzZS83NTB4NDIyLzUwMDYyOF9hOTYyLmpwZyc7XG4gICAgfVxuXG59Il19
