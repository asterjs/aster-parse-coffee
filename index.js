'use strict';

var CS = require('coffee-script-redux');
var traverse = require('estraverse').traverse;

function ext2js(fileName) {
	return fileName.replace(/(\.[^.]*)?$/, '.js');
}

module.exports = function (options) {
	options = options || {};

	var loc = options.loc !== false;
	var optimize = !!options.optimize;

	return function (files) {
		return files.map(function (file) {
			var csAST = CS.parse(file.contents, {raw: loc, inputSource: file.path, optimise: optimize});
			var jsAST = CS.compile(csAST, {bare: true});

			if (loc) {
				// Temporary hack until https://github.com/michaelficarra/CoffeeScriptRedux/issues/315 is fixed
				traverse(jsAST, {
					enter: function (node) {
						if (node.loc) {
							node.loc.source = file.path;
						}
					}
				});
			}

			return {
				type: 'File',
				program: CS.compile(csAST, {bare: true}),
				loc: {
					source: ext2js(file.path)
				}
			};
		});
	};
};
