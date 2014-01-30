this["SWIG"] = this["SWIG"] || {};

this["SWIG"]["test/fixtures/inheritance/index.swig"] = function(data){ return window.swig.run(function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<html>\n	<head>\n		<title>";
_output += "Test";

_output += " :: Index";
_output += "</title>\n	</head>\n	<body>\n		";
_output += "Block content";
_output += "\n	</body>\n</html>";

  return _output;

}, data); };

this["SWIG"]["test/fixtures/inheritance/page.swig"] = function(data){ return window.swig.run(function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<html>\n	<head>\n		<title>";
_output += "Test";

_output += " :: Page";
_output += "</title>\n	</head>\n	<body>\n		";
_output += "\n	<div>Some HTML...</div>\n";
_output += "\n	</body>\n</html>";

  return _output;

}, data); };