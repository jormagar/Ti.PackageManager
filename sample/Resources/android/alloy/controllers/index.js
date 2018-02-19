var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.index = Ti.UI.createWindow(
	{ backgroundColor: "white", layout: "vertical", id: "index" });

	$.__views.index && $.addTopLevelView($.__views.index);
	$.__views.label = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 12 }, text: 'Hello, World', id: "label" });

	$.__views.index.add($.__views.label);
	exports.destroy = function () {};




	_.extend($, $.__views);




	$.addListener($.index, 'open', function (e) {
		Ti.API.info('Is package es.jormagar.packageManager installed: ' + PackageManager.isPackageInstalled('es.jormagar.packageManager'));
		Ti.API.info('Is package es.jormagar.lottie installed: ' + PackageManager.isPackageInstalled('es.jormagar.lottie'));
		Ti.API.info('Is package com.facebook.katana installed: ' + PackageManager.isPackageInstalled('com.facebook.katana'));
		Ti.API.info('Open package es.upv.asic.upvlogin result: ' + PackageManager.openPackage('es.upv.asic.to'));
		Ti.API.info('Check geo:// scheme result: ' + PackageManager.isIntentURIAvailable('teko'));
	});

	$.index.open();









	_.extend($, exports);
}

module.exports = Controller;