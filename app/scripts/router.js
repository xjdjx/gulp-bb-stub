define (
	['jquery','underscore','backbone','models/defaultModel','views/defaultView'],
	function($,_,Backbone,DefaultModel,DefaultView){
		'use strict';
		var $container = $('#container');

		var Router = Backbone.Router.extend({
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