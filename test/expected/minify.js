this["SWIG"] = this["SWIG"] || {};

this["SWIG"]["test/fixtures/minify/minify.swig"] = function(data){ return window.swig.run(function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<html><head><title>Minify</title></head><body><a href=\"#\" ";
if (((typeof level !== "undefined" && level.selected !== undefined) ? ((typeof level !== "undefined" && level.selected !== undefined) ? level.selected : "") : ((typeof _ctx.level !== "undefined" && _ctx.level.selected !== undefined) ? _ctx.level.selected : ""))) { 
_output += "class=\"selected\"";

}_output += "></a></body></html>";

  return _output;

}, data); };