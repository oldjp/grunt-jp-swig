'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: {
        options:{
          jshintrc: '.jshintrc'
        },
        src:[
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
        ],
      },
      tmp: {
        options:{
          browser: true,
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: false,
          boss: true,
          eqnull: true
        },
        src: ['tmp/*.js'],
      }
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
        options:{ 
          layout: true, 
          processor: false 
        },
        files:{ 'tmp/layout_incorrect.js': ['test/fixtures/*.swig'] }
      },
      opts_layout_correct: {
        options:{
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
      },
      opts_filters: {
        options:{
          filters: ['simple']
        },
        files:{ 'tmp/filters_simple.js': ['test/fixtures/filters/simple.swig'] }
      },
      opts_inheritance: {
        options:{

        },
        files:{ 'tmp/inheritance.js': ['test/fixtures/inheritance/*.swig', '!test/fixtures/inheritance/base.swig'] }
      },
      opts_wrap_attributes: { 
        options:{
          htmlMinifySettings:{
            customAttrOpen:  /\{\%[^\}]+\%\}/,
            customAttrClose: /\{\%[^\}]+\%\}/
          }
        },
        files:{ 
          'tmp/wrap_attributes.js': ['test/fixtures/wrap_attributes.html'] 
        } 
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

  grunt.registerTask('test', ['clean', 'jshint:all' , 'swig-browser', 'jshint:tmp' , 'nodeunit']);
  grunt.registerTask('default', ['clean', 'swig-browser']);
};
