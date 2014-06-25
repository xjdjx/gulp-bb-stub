define (function(require){
	'use strict';

	var Backbone = require('backbone'),
		Router = require('router');

	return {
		init : function (){
			var router = new Router();
			Backbone.history.start({'pushState': true});
		}
	};
});

