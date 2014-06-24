define (
	['backbone','router'],
	function(Backbone,Router){
		'use strict';

		return {
			init : function (){
				var router = new Router();
				Backbone.history.start({'pushState': true});
			}
		};
});

