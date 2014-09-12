'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', '*.css', 'views/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },

      angulartest: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/angular/**/*test.js'],
        dest: 'test/angular-testbundle.js'
      },
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

  });

  grunt.registerTask('angulartest', ['browserify:angulartest', 'karma:unit']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
};
