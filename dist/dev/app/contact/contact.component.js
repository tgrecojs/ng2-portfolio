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
var forms_1 = require('@angular/forms');
var angularfire2_1 = require('angularfire2');
require('../operators');
var ContactComponent = (function () {
    function ContactComponent(af, fb) {
        this.af = af;
        this.formView = true;
        this.isSubmitted = false;
        this.reasons = [
            'Graphic Design',
            'Web and Mobile Development',
            'Teaching and Education',
            'Just Saying Hello'
        ];
        this.entries = af.database.list('/entries');
        this.contactForm = fb.group({
            'name': ['', forms_1.Validators.required],
            'email': ['', forms_1.Validators.required],
            'reason': [''],
            'phoneNumber': ['', forms_1.Validators.required],
            'message': ['', forms_1.Validators.minLength(30)]
        });
        this.name = this.contactForm.controls['name'];
        this.email = this.contactForm.controls['email'];
        this.reason = this.contactForm.controls['reason'];
        this.phoneNumber = this.contactForm.controls['phoneNumber'];
        this.message = this.contactForm.controls['message'];
    }
    ContactComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
        this.entries.push(formValue);
        this.isSubmitted = true;
        this.formView = false;
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-me',
            styleUrls: ['./contact.component.css'],
            templateUrl: './contact.component.html'
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, forms_1.FormBuilder])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsc0JBQW9FLGdCQUFnQixDQUFDLENBQUE7QUFDckYsNkJBQTRCLGNBQWMsQ0FBQyxDQUFBO0FBRTNDLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFRdEI7SUFtQkksMEJBQW9CLEVBQWUsRUFBRSxFQUFlO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFsQm5DLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFTcEIsWUFBTyxHQUFHO1lBQ04sZ0JBQWdCO1lBQ2hCLDRCQUE0QjtZQUM1Qix3QkFBd0I7WUFDeEIsbUJBQW1CO1NBQ2xCLENBQUM7UUFJTixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWxELENBQUM7SUFFQyxtQ0FBUSxHQUFSLFVBQVMsU0FBaUI7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBakRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNMLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7O3dCQUFBO0lBOENGLHVCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSx3QkFBZ0IsbUJBNkM1QixDQUFBIiwiZmlsZSI6ImFwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlIH0gZnJvbSAnYW5ndWxhcmZpcmUyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICcuLi9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdjb250YWN0LW1lJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG4gICAgZm9ybVZpZXcgPSB0cnVlO1xuICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgY29udGFjdEZvcm06IEZvcm1Hcm91cDtcbiAgICBuYW1lOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgZW1haWw6IEFic3RyYWN0Q29udHJvbDtcbiAgICByZWFzb246IEFic3RyYWN0Q29udHJvbDtcbiAgICBwaG9uZU51bWJlcjogQWJzdHJhY3RDb250cm9sO1xuICAgIG1lc3NhZ2U6IEFic3RyYWN0Q29udHJvbDtcblxuXG4gICAgcmVhc29ucyA9IFtcbiAgICAgICAgJ0dyYXBoaWMgRGVzaWduJyxcbiAgICAgICAgJ1dlYiBhbmQgTW9iaWxlIERldmVsb3BtZW50JyxcbiAgICAgICAgJ1RlYWNoaW5nIGFuZCBFZHVjYXRpb24nLFxuICAgICAgICAnSnVzdCBTYXlpbmcgSGVsbG8nXG4gICAgICAgIF07XG5cbiAgICBlbnRyaWVzOmFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFmOiBBbmd1bGFyRmlyZSwgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gYWYuZGF0YWJhc2UubGlzdCgnL2VudHJpZXMnKTtcbiAgICAvLyBGb3JtYnVpbGQgZm9yIHZhbGlkYXRpb25zXG4gICAgLy8gVmFsaWRhdG9ycyBhcmUganVzdCBwbGFpbiBmdW5jdGlvbnMhXG4gICAgdGhpcy5jb250YWN0Rm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAnZW1haWwnOlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICdyZWFzb24nOiBbJyddLFxuICAgICAgICAncGhvbmVOdW1iZXInOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAnbWVzc2FnZSc6IFsnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMzApXVxufSk7XG50aGlzLm5hbWUgPSB0aGlzLmNvbnRhY3RGb3JtLmNvbnRyb2xzWyduYW1lJ107XG50aGlzLmVtYWlsID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1snZW1haWwnXTtcbnRoaXMucmVhc29uID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1sncmVhc29uJ107XG50aGlzLnBob25lTnVtYmVyID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1sncGhvbmVOdW1iZXInXTtcbnRoaXMubWVzc2FnZSA9IHRoaXMuY29udGFjdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXTtcblxuICB9XG5cbiAgICBvblN1Ym1pdChmb3JtVmFsdWU6IE9iamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWUpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChmb3JtVmFsdWUpO1xuICAgICAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb3JtVmlldyA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19
