define(function(){

this["SWIG"] = this["SWIG"] || {};

this["SWIG"]["test/fixtures/loops.swig"] = function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<ul>\n	";
(function () {
  var __l = ((typeof array !== "undefined") ? ((typeof array !== "undefined") ? array : "") : ((typeof _ctx.array !== "undefined") ? _ctx.array : ""));
  if (!__l) { return; }
  var loop = { first: false, index: 1, index0: 0, revindex: __l.length, revindex0: __l.length - 1, length: __l.length, last: false };
  _utils.each(__l, function (val, key) {
    loop.key = key;
    loop.first = (loop.index0 === 0);
    loop.last = (loop.revindex0 === 0);
    _output += "\n		<li>";
_output += _filters["e"](((typeof key !== "undefined") ? ((typeof key !== "undefined") ? key : "") : ((typeof _ctx.key !== "undefined") ? _ctx.key : "")));
_output += ": ";
_output += _filters["e"](((typeof val !== "undefined") ? ((typeof val !== "undefined") ? val : "") : ((typeof _ctx.val !== "undefined") ? _ctx.val : "")));
_output += "</li>\n	";
    loop.index += 1; loop.index0 += 1; loop.revindex -= 1; loop.revindex0 -= 1;
  });
})();
_output += "\n</ul>";

  return _output;

};

this["SWIG"]["test/fixtures/simple.swig"] = function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<div>";
_output += _filters["e"](((typeof var_name !== "undefined") ? ((typeof var_name !== "undefined") ? var_name : "") : ((typeof _ctx.var_name !== "undefined") ? _ctx.var_name : "")));
_output += "</div>";

  return _output;

};

  return this["SWIG"];
});