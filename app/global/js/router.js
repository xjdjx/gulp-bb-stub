define (function(require){
	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		DefaultModel = require('models/defaultModel'),
		DefaultView = require('views/defaultView'),
		$container = $('#container'),
		Router = Backbone.Router.extend({
			routes: {
				'*path' : 'showDefault'
			},
			showDefault: function(){
				var defaultView = new DefaultView();
				defaultView.el = $container;
				defaultView.render();
			}
		});

	return Router;
});