define(
  ['jquery','underscore','backbone','models/defaultModel','text!/templates/defaultViewTemplate.html'], 
  function($, _, Backbone, DefaultModel,defaultViewTemplate){
    'use strict';

    var DefaultView = Backbone.View.extend({
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