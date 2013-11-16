
'use strict';

var swig = require('swig');
var beautify = require('js-beautify').js_beautify;
var htmlMinify = require('html-minifier').minify;

module.exports = function(grunt) {

    grunt.registerMultiTask('swig-browser', 'Compiles swig templates', function() {
        var lf = grunt.util.linefeed;
        var helpers = require('grunt-lib-contrib').init(grunt);
        var filter = function(){};

        var options = this.options({
            namespace: 'SWIG',            
            templateSettings: {},
            htmlMinifySettings: {
                collapseWhitespace: true
            },
            separator: lf + lf,
            amd: false,
            layout: false,
            prettify: false,
            processor: 'window.swig',
            processContent: function(src) { return src; },
            processName: function(name) { return name; },
            filters: []
        });
        
        var parser = new swig.Swig(options.templateSettings);
        var nsInfo = helpers.getNamespaceDeclaration(options.namespace);

        for(var i = 0; i < options.filters.length; i++){
            swig.setFilter(options.filters[i], filter);
        }

        this.files.forEach(function(f) {
            
            var output = f.src.filter(function(filepath) {
        
                if(!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file"' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            
            }).map(function(filepath) {
            
                var src = htmlMinify(grunt.file.read(filepath), options.htmlMinifySettings);
                var compiled, filename, run;

                filename = options.processName(filepath);
                compiled = parser.precompile(src).tpl.toString().replace('anonymous', '');
                compiled = options.processContent(compiled);
                
                if(options.layout && options.processor){
                    return options.processor + '.run(' + compiled + ',{}, "' + filename + '");';
                }else{
                    if(options.processor){
                        compiled = 'function(data){ return ' + options.processor + '.run(' + compiled + ', data); }';    
                    }

                    return nsInfo.namespace + '[' + JSON.stringify(filename) + '] = ' + compiled + ';';
                }

            });

            if (output.length < 1) {
                grunt.log.warn('Destination not written because compiled files were empty.');
            } else {
                output.unshift(nsInfo.declaration);
                if (options.amd) {
                    output.unshift("define(function(){");
                    output.push("  return " + nsInfo.namespace + ";" + lf + "});");
                }

                var template = output.join(grunt.util.normalizelf(options.separator));
                if(options.prettify) {
                    template = beautify(template, {indent_size:4});
                }

                grunt.file.write(f.dest, template);
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });
    });
};
