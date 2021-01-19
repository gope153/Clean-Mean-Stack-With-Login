// EXTRA DEFINTION TO CALL EVERY FUNCTION
(function () {
	var exLog = console.info;
	console.info = function (msg) {
		let color = '\x1b[36m%s\x1b[0m'
		arguments["0"] = color
		// Array.prototype.unshift.call(arguments, color);
		console.log();
		exLog.apply(this, arguments);
	}
})();