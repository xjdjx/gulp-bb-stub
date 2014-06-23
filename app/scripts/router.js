define (
	['jquery','underscore','backbone'],
	function($,_,Backbone){
		'use strict';

		var AppRouter = Backbone.Router.extend({
			routes: {
				'*path' : 'showDefault'
			},
			showDefault: function(){
				console.log('routing default');
			}
		});

		var init = function(){
			var router = new AppRouter;
			Backbone.history.start({'pushState': true});
		};

		return {
			init : init
		};
});