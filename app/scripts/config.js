requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../bower_components/requirejs-text/text',
        enquire: '../bower_components/enquire/dist/enquire',
        matchMedia: '../bower_components/matchmedia/matchMedia'

    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['main'],function(main){
    'use strict';
    main.init();
});