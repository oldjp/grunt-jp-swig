'use strict';

var grunt = require('grunt');

exports.swig = {
  compile: function(test) {

    var generated = grunt.file.read('tmp/default_options_one.js');
    var expected = grunt.file.read('test/expected/default_options_one.js');
    test.equal(expected, generated, "should compile one template with default options"); 

    var generated = grunt.file.read('tmp/default_options_all.js');
    var expected = grunt.file.read('test/expected/default_options_all.js');
    test.equal(expected, generated, "should compile all templates with default options");

    var generated = grunt.file.read('tmp/amd.js');
    var expected = grunt.file.read('test/expected/amd.js');
    test.equal(expected, generated, "should compile templates in amd style");

    var generated = grunt.file.read('tmp/amd_processor_prettify.js');
    var expected = grunt.file.read('test/expected/amd_processor_prettify.js');
    test.equal(expected, generated, "should compile prettified templates with swig env attached in amd style");

    var generated = grunt.file.read('tmp/namespace.js');
    var expected = grunt.file.read('test/expected/namespace.js');
    test.equal(expected, generated, "should compile templates with custom namespace");

    var generated = grunt.file.read('tmp/processor.js');
    var expected = grunt.file.read('test/expected/processor.js');
    test.equal(expected, generated, "should compile templates with swig env");

    var generated = grunt.file.read('tmp/layout_incorrect.js');
    var expected = grunt.file.read('test/expected/layout_incorrect.js');
    test.equal(expected, generated, "shouldn't compile layouts without swig env specified");

    var generated = grunt.file.read('tmp/layout_correct.js');
    var expected = grunt.file.read('test/expected/layout_correct.js');
    test.equal(expected, generated, "should compile layouts with swig env attached");

    var generated = grunt.file.read('tmp/process_content.js');
    var expected = grunt.file.read('test/expected/process_content.js');
    test.equal(expected, generated, "should compile templates with additional output code filter");

    var generated = grunt.file.read('tmp/process_name.js');
    var expected = grunt.file.read('test/expected/process_name.js');
    test.equal(expected, generated, "should compile templates with changed name");

    var generated = grunt.file.read('tmp/filters_simple.js');
    var expected = grunt.file.read('test/expected/filters_simple.js');
    test.equal(expected, generated, "should compile template with filter");

    test.done()
  }
};
