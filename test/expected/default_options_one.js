this["SWIG"] = this["SWIG"] || {};

this["SWIG"]["test/fixtures/simple.swig"] = function(data){ return window.swig.run(function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<div>";
_output += _filters["e"](((typeof var_name !== "undefined") ? ((typeof var_name !== "undefined") ? var_name : "") : ((typeof _ctx.var_name !== "undefined") ? _ctx.var_name : "")));
_output += "</div>";

  return _output;

}, data); };