grunt-jp-swig
=============

Swig templates compilation


Sample configuration:
swig: {
	options: {
		processContent: function(src) {
			return src;
		},
		processName: function(name) {
			return name.replace(/^templates\//g,'')
				   .replace(/\//g,'-')
				   .replace(/.twig$/g,'');
			},
			namespace: 'App.tmpl'
		},
		compile: {
			files: {
				'project/www/js/templates.js': [
					'templates/**/*.twig'
				]
			}
		}
	}

On browser site:

swig.run(App.tmpl['example-template'], { var1: value, var2: value2});
