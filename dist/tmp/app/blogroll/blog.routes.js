"use strict";
var index_1 = require('./index');
var index_2 = require('./index');
var router_1 = require('@angular/router');
exports.BlogRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/blog' },
    { path: 'blog', component: index_1.BlogrollComponent },
    { path: 'blog/:id', component: index_2.PostComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(exports.BlogRoutes);
