define(
	['underscore','backbone'],
	function(_, Backbone){
		'use strict';

		var DefaultModel = Backbone.Model.extend({
			initialize: function(){
				this.content = 'Hello World!';
			}
		});

		return DefaultModel;
});