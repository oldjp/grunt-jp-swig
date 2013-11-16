this["SWIG"] = this["SWIG"] || {};

this["SWIG"]["test/fixtures/filters/simple.swig"] = function(data){ return window.swig.run(function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<div>";
_output += _filters["e"](_filters["simple"]("text", "test"));
_output += "</div>";

  return _output;

}, data); };