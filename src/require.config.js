require.config({
  paths: {
    'underscore': 'vendor/underscore-min',
    'backbone': 'vendor/backbone-min',
    'mustache': 'vendor/mustache.min',
    // 'jquery': 'vendor/jquery.min',
    // 'bootstrap': 'vendor/bootstrap.min',
    'bootstrap/notify': 'vendor/bootstrap/bootstrap-notify/js/bootstrap-notify.min'
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
    'bootstrap/notify': {'deps': ['bootstrap']}
  }
  // locale: 'zh-TW',
  // urlArgs: "ts=" + (new Date()).getTime()
});