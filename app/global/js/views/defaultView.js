define (function(require){
  'use strict';

  var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      DefaultModel = require('models/defaultModel'),
      defaultViewTemplate = require('text!/templates/defaultViewTemplate.html'),

      DefaultView = Backbone.View.extend({
        initialize: function(){
          this.model = new DefaultModel();
        },
        render: function(){
          var compiledTemplate = _.template( defaultViewTemplate, this.model );
          this.el.append( compiledTemplate );
        }
      });

  return DefaultView;
});