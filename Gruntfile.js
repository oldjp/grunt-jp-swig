'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    "swig-browser": {
      opts_default_one:{ files:{ 'tmp/default_options_one.js': ['test/fixtures/simple.swig'] } },
      opts_default_all:{ files:{ 'tmp/default_options_all.js': ['test/fixtures/*.swig'] } },
      opts_amd:{
        options:{ amd: true },
        files:{ 'tmp/amd.js': ['test/fixtures/*.swig'] }
      },
      opts_namespace:{
        options:{ namespace:'APP.Templates' },
        files:{ 'tmp/namespace.js': ['test/fixtures/*.swig'] }
      },
      opts_processor:{
        options:{ processor:'window.swig' },
        files:{ 'tmp/processor.js': ['test/fixtures/*.swig'] }
      },
      opts_amd_processor_prettify:{
        options:{
          amd: true,
          processor: 'window.swig',
          prettify: true
        },
        files:{ 'tmp/amd_processor_prettify.js': ['test/fixtures/*.swig'] }
      },
      opts_layout_incorrect: {
        options:{ layout: true },
        files:{ 'tmp/layout_incorrect.js': ['test/fixtures/*.swig'] }
      },
      opts_layout_correct: {
        options:{
          processor: 'window.swig',
          layout: true
        },
        files:{ 'tmp/layout_correct.js': ['test/fixtures/*.swig'] }
      },
      opts_processContent: {
        options:{
          processContent: function(content){
            return content.replace('_output = ""','_output = "", addons = window.Addons');
          }
        },
        files:{ 'tmp/process_content.js': ['test/fixtures/*.swig'] }
      },
      opts_processName: {
        options:{
          processName: function(name){
            return name.replace('test/fixtures/','').replace('.swig', '');
          }
        },
        files:{ 'tmp/process_name.js': ['test/fixtures/*.swig'] }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'swig-browser', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
