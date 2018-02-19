

$.addListener($.index, 'open', function(e){
	Ti.API.info('Is package es.jormagar.packageManager installed: ' + PackageManager.isPackageInstalled('es.jormagar.packageManager'));
	Ti.API.info('Is package es.jormagar.lottie installed: ' + PackageManager.isPackageInstalled('es.jormagar.lottie'));
	Ti.API.info('Is package com.facebook.katana installed: ' + PackageManager.isPackageInstalled('com.facebook.katana'));
	Ti.API.info('Open package es.upv.asic.upvlogin result: ' + PackageManager.openPackage('es.upv.asic.to'));
	Ti.API.info('Check geo:// scheme result: ' + PackageManager.isIntentURIAvailable('teko'));
});

$.index.open();
