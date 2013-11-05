module.exports = function(grunt) {
 
	grunt.registerMultiTask('swig', 'Compiles swig templates', function() {
		var lf = grunt.util.linefeed;
		var helpers = require('grunt-lib-contrib').init(grunt);
		var swig = require('swig');
		
		var options = this.options({
			namespace: 'TWIG',
			templateSettings: {},
			processContent: function(src) { return src; },
			separator: lf + lf
		});
		var processName = options.processName || defaultProcessName;
		var nsInfo = helpers.getNamespaceDeclaration(options.namespace);
		
		
		this.files.forEach(function(f) {
			var output = f.src.filter(function(filepath) {
				if(!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file"' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				var src = options.processContent(grunt.file.read(filepath));
				var compiled, filename;
				
				src = src.replace(new RegExp('\n', 'g'), '');
				
				filename = processName(filepath);
				
				compiled = swig.precompile(src).tpl.toString().replace('anonymous', '');
				
				return nsInfo.namespace + '[' + JSON.stringify(filename) + '] = ' + compiled + ';';
				
			});
			
			if (output.length < 1) {
        grunt.log.warn('Destination not written because compiled files were empty.');
      } else {
        output.unshift(nsInfo.declaration);
        if (options.amdWrapper) {
          if (options.prettify) {
            output.forEach(function(line, index) {
              output[index] = "  " + line;
            });
          }
          output.unshift("define(function(){");
          output.push("  return " + nsInfo.namespace + ";" + lf + "});");
        }
        grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
        grunt.log.writeln('File "' + f.dest + '" created.');
      }
			
		});
		
	});
};