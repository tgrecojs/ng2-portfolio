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
            styles: [":host{color:#fff}.form-container{padding-top:32px;background:#4a89ca;margin:20px;border:2px solid #345d88;border-radius:30px}.container *{box-sizing:border-box}.flex-inner,.flex-outer{list-style-type:none;padding:0}.flex-outer{max-width:800px;margin:0 auto}.flex-inner,.flex-outer li{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex-inner{padding:0 8px;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex-outer>li:not(:last-child){margin-bottom:20px}.flex-outer li label,.flex-outer li p{padding:8px;font-weight:300;letter-spacing:.09em;text-transform:uppercase}.flex-outer>li>label,.flex-outer li p{-webkit-flex:1 0 120px;-ms-flex:1 0 120px;flex:1 0 120px;max-width:220px}.flex-inner,.flex-outer>li>label+*{-webkit-flex:1 0 220px;-ms-flex:1 0 220px;flex:1 0 220px}.flex-outer li p{margin:0}.flex-outer li input:not([type=checkbox]),.flex-outer li textarea{padding:15px;border:none}.flex-outer li button{margin-left:auto;padding:8px 16px;border:none;background:#333;color:#f2f2f2;text-transform:uppercase;letter-spacing:.09em;border-radius:2px}.flex-inner li{width:100px}input{font-family:jaf-domus,sans-serif}#submit-btn{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;padding:20px}#submit-btn,#success{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#success{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:250px}#success p{width:60%;font-weight:600}.ng-invalid p{color:#900;font-weight:600}"],
            template: "<div class=\"form-container\">     <div *ngIf=\"isSubmitted\" id=\"success\">         <h2>You're submission has been processed.</h2>         <p>I will be sure to get back to you ASAP. In the meantime, check out some of the sweet articles I have over in my application's <a routerLink=\"/blog\">         blog section</a>.</p>     </div>     <form *ngIf=\"formView\"     [formGroup]=\"contactForm\"      (ngSubmit)=\"onSubmit(contactForm.value)\"     >     <ul class=\"flex-outer\">     <li>     <label for=\"name\">         Your Name:     </label>         <input              name=\"name\"             type=\"text\"             [formControl]=\"contactForm.controls['name']\"         >          <p *ngIf=\"!name.valid && name.touched\">             Name is required.         </p>     </li>     <li>         <label for=\"email\">Email Address:</label>         <input name=\"email\" type=\"email\" [formControl]=\"contactForm.controls['email']\">         <p *ngIf=\"!email.valid && email.touched\">             E-mail is required.         </p>    </li>       <li>         <label for=\"phoneNumber\">Phone Number:</label>         <input name=\"phoneNumber\" type=\"tel\" [formControl]=\"contactForm.controls['phoneNumber']\">    </li>     <li>         <label for=\"reason\">Reason for contact:</label>         <select name=\"reason\" id=\"reason\">             <option *ngFor=\"let reason of reasons\" [value]=\"reason\">                 {{reason}}             </option>         </select>       </li>     <li>         <label for=\"message\">             Additional Info:         </label>         <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"10\"          [formControl]=\"contactForm.controls['message']\"         placeholder=\"Please provide a little bit more information regarding to why you're contact me today....'\"></textarea>          <p *ngIf=\"!message.valid && message.touched\">             Message must be great than 30 characters. Elaborate a little bit more about the topic :)         </p>     </li>     </ul>     <div id=\"submit-btn\">             <button type=\"submit\">Submit</button>             </div> </form>  </div>"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, forms_1.FormBuilder])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
