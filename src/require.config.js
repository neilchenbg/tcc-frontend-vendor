require.config({
  baseUrl: '/x2b/frontend/',
  paths: {
    'underscore': 'vendor/underscore-min',
    'backbone': 'vendor/backbone-min',
    'mustache': 'vendor/mustache.min',
    // 'jquery': 'vendor/jquery.min',
    // 'bootstrap': 'vendor/bootstrap.min',
    'd3': 'vendor/d3.min',
    'jquery/jstree': 'vendor/jquery/jstree/js/jstree.min',
    'bootstrap/notify': 'vendor/bootstrap/bootstrap-notify/js/bootstrap-notify.min',
    'd3/radar': 'vendor/d3/radar-chart/js/radar-chart.min'
  },
  map: {
    '*': {
      'require-css': 'vendor/require-js/css.min',
      'require-i18n': 'vendor/require-js/i18n.min',
      'require-text': 'vendor/require-js/text.min'
    }
  },
  shim : {
    'bootstrap': {'deps': ['jquery']},
    'bootstrap/notify': {'deps': ['bootstrap']},
    'jquery/jstree': {'deps': ['jquery']},
    'd3/radar': {'deps': ['d3'], 'exports': 'RadarChart'}
  }
  // locale: 'zh-TW',
  // urlArgs: "ts=" + (new Date()).getTime()
});