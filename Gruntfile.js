module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dir: {
      vendor: 'bower_components/', // 第三方套件目錄
      src: 'src/', // 原始碼目錄
      // 發佈目錄
      dist: 'dist/',
      distVendor: '<%= dir.dist %>vendor/'
    },
    clean: {
      // 移除發佈目錄底下的所有資源
      build: ['<%= dir.dist %>/**/*']
    },
    copy: {
      src: {
        expand: true,
        cwd: '<%= dir.src %>',
        src: ['**/*'],
        dest: '<%= dir.dist %>'
      },
      vendor: {
        files: [
          // Underscore
          {src: '<%= dir.vendor %>underscore/underscore-min.js', dest: '<%= dir.distVendor %>underscore-min.js'},
          // Backbone
          {src: '<%= dir.vendor %>backbone/backbone-min.js', dest: '<%= dir.distVendor %>backbone-min.js'},
          // Mustache
          {src: '<%= dir.vendor %>mustache.js/mustache.min.js', dest: '<%= dir.distVendor %>mustache.min.js'},
          // jQuery
          {src: '<%= dir.vendor %>jquery/dist/jquery.min.js', dest: '<%= dir.distVendor %>jquery.min.js'},
          // Bootstrap
          {src: '<%= dir.vendor %>bootstrap/dist/js/bootstrap.min.js', dest: '<%= dir.distVendor %>bootstrap.min.js'},
          // Bootstrap - font
          {expand: true, cwd: '<%= dir.vendor %>bootstrap/dist/fonts/', src: ['*'], dest: '<%= dir.distVendor %>bootstrap/fonts/', filter: 'isFile'},
          // Bootstrap - css
          {expand: true, cwd: '<%= dir.vendor %>bootstrap/dist/css/', src: ['*.min.css'], dest: '<%= dir.distVendor %>bootstrap/css/', filter: 'isFile'},
        ]
      }
    },
    uglify: {
      vendor: {
        files: [
          // requirejs
          {'<%= dir.dist %>require.js': ['<%= dir.vendor %>requirejs/require.js']},
          // requirejs-i18n
          {'<%= dir.distVendor %>require-js/i18n.min.js': ['<%= dir.vendor %>i18n/i18n.js']},
          // requirejs-text
          {'<%= dir.distVendor %>require-js/text.min.js': ['<%= dir.vendor %>text/text.js']},
          // requirejs-css
          {'<%= dir.distVendor %>require-js/css.min.js': ['<%= dir.vendor %>require-css/css.js']}
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 監聽JS變更事件
  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln('');
    grunt.log.writeln(filepath + ' has ' + action);
  });

  grunt.registerTask('default', [
    'clean:build',
    'copy:vendor',
    'uglify:vendor',
    'copy:src'
  ]);
};