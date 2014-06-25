define(function(require){
	'use strict';
	var _ = require('underscore'),
		Backbone = require('backbone'),

		DefaultModel = Backbone.Model.extend({
			initialize: function(){
				this.content = 'Hello World!';
			}
		});

	return DefaultModel;
});