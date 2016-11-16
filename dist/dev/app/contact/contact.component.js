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
        this.username = "John";
        this.items = af.database.list('/entries');
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
        this.items.push(formValue);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0Qsc0JBQTRFLGdCQUFnQixDQUFDLENBQUE7QUFDN0YsNkJBQWtELGNBQWMsQ0FBQyxDQUFBO0FBRWpFLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFRdEI7SUFvQkksMEJBQW9CLEVBQWUsRUFBRSxFQUFlO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFuQm5DLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFTcEIsWUFBTyxHQUFHO1lBQ04sZ0JBQWdCO1lBQ2hCLDRCQUE0QjtZQUM1Qix3QkFBd0I7WUFDeEIsbUJBQW1CO1NBQ2xCLENBQUM7UUFFTixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUVDLG1DQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFsREw7UUFBQyxnQkFBUyxDQUFDO1lBQ0wsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzs7d0JBQUE7SUErQ0YsdUJBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBOUNZLHdCQUFnQixtQkE4QzVCLENBQUEiLCJmaWxlIjoiYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QW5ndWxhckZpcmUsIEZpcmViYXNlTGlzdE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXJmaXJlMic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAnLi4vb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnY29udGFjdC1tZScsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC5jb21wb25lbnQuY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xuICAgIGZvcm1WaWV3ID0gdHJ1ZTtcbiAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIGNvbnRhY3RGb3JtOiBGb3JtR3JvdXA7XG4gICAgbmFtZTogQWJzdHJhY3RDb250cm9sO1xuICAgIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgICAgIHJlYXNvbjogQWJzdHJhY3RDb250cm9sO1xuICAgIHBob25lTnVtYmVyOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgbWVzc2FnZTogQWJzdHJhY3RDb250cm9sO1xuXG5cbiAgICByZWFzb25zID0gW1xuICAgICAgICAnR3JhcGhpYyBEZXNpZ24nLFxuICAgICAgICAnV2ViIGFuZCBNb2JpbGUgRGV2ZWxvcG1lbnQnLFxuICAgICAgICAnVGVhY2hpbmcgYW5kIEVkdWNhdGlvbicsXG4gICAgICAgICdKdXN0IFNheWluZyBIZWxsbydcbiAgICAgICAgXTtcblxuICAgIHVzZXJuYW1lID0gXCJKb2huXCI7XG4gICAgaXRlbXM6YW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWY6IEFuZ3VsYXJGaXJlLCBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLml0ZW1zID0gYWYuZGF0YWJhc2UubGlzdCgnL2VudHJpZXMnKTtcbiAgICAvLyBGb3JtYnVpbGQgZm9yIHZhbGlkYXRpb25zXG4gICAgLy8gVmFsaWRhdG9ycyBhcmUganVzdCBwbGFpbiBmdW5jdGlvbnMhXG4gICAgdGhpcy5jb250YWN0Rm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAnZW1haWwnOlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICdyZWFzb24nOiBbJyddLFxuICAgICAgICAncGhvbmVOdW1iZXInOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAnbWVzc2FnZSc6IFsnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMzApXVxufSk7XG50aGlzLm5hbWUgPSB0aGlzLmNvbnRhY3RGb3JtLmNvbnRyb2xzWyduYW1lJ107XG50aGlzLmVtYWlsID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1snZW1haWwnXTtcbnRoaXMucmVhc29uID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1sncmVhc29uJ107XG50aGlzLnBob25lTnVtYmVyID0gdGhpcy5jb250YWN0Rm9ybS5jb250cm9sc1sncGhvbmVOdW1iZXInXTtcbnRoaXMubWVzc2FnZSA9IHRoaXMuY29udGFjdEZvcm0uY29udHJvbHNbJ21lc3NhZ2UnXTtcblxuICB9XG5cbiAgICBvblN1Ym1pdChmb3JtVmFsdWU6IE9iamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWUpO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goZm9ybVZhbHVlKTtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9ybVZpZXcgPSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==
