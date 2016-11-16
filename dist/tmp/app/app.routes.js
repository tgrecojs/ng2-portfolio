"use strict";
var index_1 = require('./blogroll/index');
var index_2 = require('./contact/index');
exports.routes = index_1.BlogRoutes.concat(index_2.ContactRoutes);
