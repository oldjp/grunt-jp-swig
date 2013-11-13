grunt-jp-swig [![Build Status](https://travis-ci.org/johnpitcher/grunt-jp-swig.png?branch=master)](https://travis-ci.org/johnpitcher/grunt-jp-swig)
=============

Swig templates compilation


Sample configuration:

```JavaScript
"swig-browser": {
  frontTemplates:{
    options:{

      // window.<namespace>
      namespace: 'SWIG',

      // @todo
      templateSettings: {},

      amd: false,
      
      // init as a parent template
      layout: false,

      prettify: false,

      // attach swig browser env to a template function
      processor: false, 

      // modify template function source code 
      processContent: function(src) { return src; },

      // modify template name
      processName: function(name) { return name; },

      // additional filter list 
      filters:[]
    },

    files:{ 'dest.js': ['templates/**/*.swig'] }
  }	
}
```

In browser:
----------------

```JavaScript
  var html = window.SWIG[<template name>]({});
```