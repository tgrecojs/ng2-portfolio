"use strict";
var index_1 = require('./index');
var router_1 = require('@angular/router');
exports.WildcardRoutes = [
    {
        path: '**',
        component: index_1.PageNotFoundComponent
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(exports.WildcardRoutes);
