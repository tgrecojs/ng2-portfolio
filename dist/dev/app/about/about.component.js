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
            styleUrls: ['about.component.css'],
            template: "\n<div id=\"am-wrapper\">\n<div id=\"am-sidebar\"> \n<button (click)=\"onGoClick()\">About Me</button>\n<button (click)=\"onStopClick()\">Football</button>\n<button (click)=\"onClickThree()\">Friends and Family</button>\n</div>\n<div [@signal]=\"signal\" id=\"am-content\">\n<div class=\"am-text\">\n    <h2> {{ heading }}</h2>\n   <p> {{ message }}  </p>\n   <img [src]=\"img\" />\n</div>\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRixlQUFlLENBQUMsQ0FBQTtBQWdEakc7SUFBQTtRQUNJLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFPLEdBQVksb0JBQW9CLENBQUM7UUFDeEMsWUFBTyxHQUFXLGVBQWUsQ0FBQztJQTBCdEMsQ0FBQztJQXZCRyxrQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLHdQQUF3UCxDQUFBO1FBQ3ZRLElBQUksQ0FBQyxHQUFHLEdBQUcsOEhBQThILENBQUE7SUFDN0ksQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyw4dUJBQTh1QixDQUFDO1FBQzl2QixJQUFJLENBQUMsR0FBRyxHQUFHLGtEQUFrRCxDQUFDO0lBQ25FLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLDJlQUVkLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLCtEQUErRCxDQUFDO0lBQy9FLENBQUM7SUF6RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRTtnQkFDUixjQUFPLENBQUMsV0FBVyxFQUFFO29CQUNqQixZQUFLLENBQUMsTUFBTSxFQUFFLFlBQUssQ0FBQzt3QkFDZCxNQUFNLEVBQUUsTUFBTTtxQkFDbkIsQ0FBQyxDQUFDO2lCQUNOLENBQUM7Z0JBQ0YsY0FBTyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxZQUFLLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQzt3QkFDZCxrQkFBa0IsRUFBQyxPQUFPO3dCQUMxQixRQUFRLEVBQUMsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsZUFBZSxFQUFHLEtBQUs7cUJBQzFCLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsTUFBTSxFQUFFLFlBQUssQ0FBQzt3QkFDaEIsa0JBQWtCLEVBQUMsS0FBSzt3QkFDeEIsUUFBUSxFQUFDLE9BQU87cUJBQ25CLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsT0FBTyxFQUFFLFlBQUssQ0FBQzt3QkFDakIsa0JBQWtCLEVBQUMsTUFBTTt3QkFDekIsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLGVBQWUsRUFBRSxNQUFNO3FCQUMxQixDQUFDLENBQUM7b0JBQ0gsaUJBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMvQyxDQUFDO2FBQ0w7WUFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxRQUFRLEVBQUUscVpBY1Q7U0FDSixDQUFDOztzQkFBQTtJQThCRixxQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksc0JBQWMsaUJBNkIxQixDQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHRyaWdnZXIsIHN0eWxlLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdhY2NvcmRpb24nLCBbXG4gICAgICAgICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ3NpZ25hbCcsIFtcbiAgICAgICAgICAgIHN0YXRlKCdnbycsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6J2dyZWVuJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzonNTAwcHgnLFxuICAgICAgICAgICAgICAgICdib3JkZXInOiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXJhZGl1cycgOiAnM3B4J1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ3N0b3AnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOidyZWQnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOic2MDBweCdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCd0aHJlZScsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6J2JsdWUnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOic1NTBweCcsXG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcycHggZGFzaGVkICMwMGZkMjInLFxuICAgICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogJzMwcHgnXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCcuNXMgZWFzZS1pbicpKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXSxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBpZD1cImFtLXdyYXBwZXJcIj5cbjxkaXYgaWQ9XCJhbS1zaWRlYmFyXCI+IFxuPGJ1dHRvbiAoY2xpY2spPVwib25Hb0NsaWNrKClcIj5BYm91dCBNZTwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwib25TdG9wQ2xpY2soKVwiPkZvb3RiYWxsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJvbkNsaWNrVGhyZWUoKVwiPkZyaWVuZHMgYW5kIEZhbWlseTwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IFtAc2lnbmFsXT1cInNpZ25hbFwiIGlkPVwiYW0tY29udGVudFwiPlxuPGRpdiBjbGFzcz1cImFtLXRleHRcIj5cbiAgICA8aDI+IHt7IGhlYWRpbmcgfX08L2gyPlxuICAgPHA+IHt7IG1lc3NhZ2UgfX0gIDwvcD5cbiAgIDxpbWcgW3NyY109XCJpbWdcIiAvPlxuPC9kaXY+XG48L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcbiAgICBzaWduYWwgPSAnZ28nO1xuICAgIGhlYWRpbmcgOiBzdHJpbmcgPSAnQWJvdXQgVGhvbWFzIEdyZWNvJztcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnVGhpcyBpcyBvcGVuISc7XG4gICAgaW1nIDogc3RyaW5nO1xuXG4gICAgb25Hb0NsaWNrKCl7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gJ2dvJztcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gJ0ZyaWVuZHMgYW5kIEZhbWlseSc7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyc3BpY2lhdGlzIGRvbG9yZXMgaXRhcXVlLCBtb2xlc3RpYWUgaXVzdG8gbWFpb3JlcyBuZXF1ZSBldmVuaWV0IG1pbmltYSBzb2x1dGEgdGVtcG9yZSByZXB1ZGlhbmRhZSBmdWdpYXQgYXNzdW1lbmRhIGV4cGVkaXRhIG1heGltZSBmYWNlcmUgdG90YW0gY29ycG9yaXMgZXhjZXB0dXJpIHN1c2NpcGl0LiBEaWduaXNzaW1vcy4nXG4gICAgICAgIHRoaXMuaW1nID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOC84NS9EYWxsYXNfQ293Ym95c19vbGRfbG9nby5zdmcvMjAwMHB4LURhbGxhc19Db3dib3lzX29sZF9sb2dvLnN2Zy5wbmcnXG4gICAgfVxuXG4gICAgb25TdG9wQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gJ3N0b3AnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGluZyA9ICdGcmllbmRzIGFuZCBGYW1pbHknO1xuICAgICAgICAgdGhpcy5tZXNzYWdlID0gYEl0IHdhcyB0aHJvdWdoIE5ZQ1Nob3dndWlkZSB0aGF0IEkgcmVhbGl6ZWQgSSBoYWQgYW4gYWZmaW5pdHkgZm9yIHByb2dyYW1taW5nLiBJdCB3YXMgZGVlbWVkIGEgdmlhYmxlIGludGVybnNoaXAgYXQgRm9yZGhhbSwgZ3JhbnRlZCB0aGF0IEkgY29tcGxldGVkIGEgdGVybSBwYXBlciBvbiB0aGUga25ldyBpbnNpZ2h0cyBJIGhhZCBsZWFybmVkIHRocm91Z2hvdXQgdGhlIHNlbWVzdGVyLiBUbyBraWNrIHN0YXJ0IHRoZSBzZW1lc3RlciwgSSBlbnJvbGxlZCBpbiBhIGRpc2NvdW50ZWQgd2ViIGRldmVsb3BlcidzIGNlcnRpZmljYXRpb24gY291cnNlIG9uIFVkZW15LmNvbS4gSWYgbm90aGluZyBlbHNlLCB0aGUgY2VydGlmaWNhdGlvbiB3b3VsZCBzaG93IHRoYXQgSSBoYWQgZGVkaWNhdGVkIGhvdXJzIHRvd2FyZHMgYXR0YWluaW5nIG5ldyBrbm93bGVnZGUgZHVybmcgdGhlIHNlbWVzdGVyLiBUaGF0IGJlaW5nIHNhaWQsIEkgcXVpY2tseSBrbmV3IHRoYXQgSSBoYWQgdGFwcGVkIGludG8gc3ViamVjdCBtYXR0ZXIgdGhhdCBJIGZvdW5kIGluY3JlZGlibHkgaW50ZXJlc3RpbmcuIEJldHRlciB5ZXQsIEkga25ldyB0aGF0IEkgaGFkIGZvdW5kIHNvbWV0aGluZyBJIHdhcyBnb29kIGF0ISBBZnRlciBhc3Nlc3NpbmcgbXkgcGFzdCBzdWNjZXNzIGluIGdyYXBoaWMgZGVzaWduIGFuZCBzb2NpYWwgbWVkaWEsIEkgd29uZGVyZWQgd2h5IGl0IHRvb2sgc28gbG9uZyBmb3IgbWUgdG8gZmluZCBwcm9ncmFtbWluZyFgO1xuICAgICAgICAgdGhpcy5pbWcgPSAnaHR0cDovL3d3dy5jYXJsYWJyYWhhbS5jb20vU2NyYW50b24lMjBwYSUyMDcuanBnJztcbiAgICB9XG5cbiAgICBvbkNsaWNrVGhyZWUoKSB7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gJ3RocmVlJztcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gJ0ZyaWVuZHMgYW5kIEZhbWlseSc7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGBcbiAgICAgICAgV2hlbiBJIGFtIG5vdCBsb2dnaW5nIGhvdXJzIG9uIHRoZSBjb21wdXRlciBJIGxpa2UgdG8gc3BlbmQgdGltZSBkb2luZyBhbGwgc29ydHMgb2YgZnVuIHRoaW5ncyEgSSB3YXMgYm9ybiBhbmQgcmFpc2VkIGluIFNjcmFudG9uLCBQQS4gU2NyYW50b24gaXMgYSB1bmlxdWUgcGxhY2UuIEl0J3MgZmlsbGVkIHdpdGggbGFyZ2UgZmFtaWxpZXMsIHNvLCBJLCBhbG9uZyB3aXRoIG15IGZvdXIgb2xkZXIgc2libGluZ3MsIGhhZCBubyBzaG9ydGFnZSBvZiBmcmllbmRzIGdyb3dpbmcgdXAuIE1hbnkgb2YgdGhlIHNhbWUgcGVvcGxlIHdobyBJIHJhbiBhcm91bmQgKGFuZCBzb21ldGltZXMgdGVycm9yaXplZCkgbXkgbmVpZ2hib3Job29kIHdpdGggYXJlIHN0aWxsIGFtb25nIG15IGNsb3Nlc3QgZnJpZW5kcyB0b2RheSBhbmQgdGhpcyBpcyBzb21ldGhpbmcgdGhhdCBJIGJlbGlldmUgdG8gYmUgZXh0cmVtZWx5IHNwZWNpYWwuIFxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmltZyA9ICdodHRwczovL3VkZW15LWltYWdlcy51ZGVteS5jb20vY291cnNlLzc1MHg0MjIvNTAwNjI4X2E5NjIuanBnJztcbiAgICB9XG5cbn0iXX0=
