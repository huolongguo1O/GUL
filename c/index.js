var Module = require("./main.js");
var result = Module.onRuntimeInitialized = () => {
	int_sqrt=Module.cwrap('int_sqrt', 'number', ['number']);
	console.log(int_sqrt(114514));
}
//console.log(result(114514));