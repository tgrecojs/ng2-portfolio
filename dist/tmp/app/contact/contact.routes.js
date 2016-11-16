"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./index');
exports.ContactRoutes = [
    {
        path: 'contact-me',
        component: index_1.ContactComponent
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(exports.ContactRoutes);
