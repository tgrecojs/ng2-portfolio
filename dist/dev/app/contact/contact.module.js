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
var common_1 = require('@angular/common');
var contact_component_1 = require('./contact.component');
var contact_routes_1 = require('./contact.routes');
var forms_1 = require('@angular/forms');
var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, contact_routes_1.default],
            declarations: [contact_component_1.ContactComponent],
            exports: [contact_component_1.ContactComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsK0JBQTBCLGtCQUFrQixDQUFDLENBQUE7QUFDN0Msc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFTcEU7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLDJCQUFtQixFQUFFLHdCQUFhLENBQUM7WUFDeEUsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOztxQkFBQTtJQUMyQixvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvY29udGFjdC9jb250YWN0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IGNvbnRhY3RSb3V0ZXMgZnJvbSAnLi9jb250YWN0LnJvdXRlcyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBjb250YWN0Um91dGVzXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFjdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb250YWN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TW9kdWxlIHsgfVxuIl19
