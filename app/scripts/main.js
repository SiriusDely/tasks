requirejs.config({
  baseUrl: 'scripts',

  paths: {
    text: 'lib/text'
  },

  shim: {
    'lib/underscore-min': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/underscore-min']
    , exports: 'Backbone'
    },
    'app': {
      deps: ['lib/underscore-min', 'lib/backbone', 'lib/jquery.sortable']
    }
  }
});

/*

requirejs.config({

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    app: {
      deps: [
        'underscore',
        'backbone',
        'jquerySortable'
      ],
      exports: 'app'
    }
  },

  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone-amd/backbone',
    underscore: '../bower_components/underscore-amd/underscore',
    text: '../bower_components/requirejs-text/text',
    jquerySortable: '../bower_components/jquery-sortable/source/js/jquery-sortable',
    bootstrap: 'vendor/bootstrap'
  }

});

*/

require([
  'app'
],

function(App) {
  window.bTask = new App();
});
