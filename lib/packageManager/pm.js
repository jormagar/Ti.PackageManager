/**
 * Hyperloop Android Module
 * @module PackageManager
 */

'use strict';

if (Ti.Platform.osname !== 'android') {
  throw new Error('Error: es.jormagar.packageManager is only suported on Android');
}

if (!_) {
  throw new Error('Error: Underscore dependency not found');
}

if (!Backbone) {
  throw new Error('Error: Backbone dependency not found');
}

module.exports = (function packageManager() {
  const Activity = require('android.app.Activity');
  const Intent = require('android.content.Intent');
  const Uri = require('android.net.Uri');
  const PackageManager = require('android.content.pm.PackageManager');

  const activity = new Activity(Ti.Android.currentActivity);
  const pm = activity.getPackageManager();

  /*import android.app.Activity;
  import android.content.Intent;
  import android.content.pm.PackageInfo;
  import android.content.pm.PackageManager;
  import android.net.Uri;*/

  return {
    isPackageInstalled: function (packageName) {
      let isInstalled = true;

      try {
        const packageInfo = pm.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
      } catch (e) {
        Ti.API.info(`PackageManager_Error: Package name ${packageName} not found`);
        isInstalled = false;
      }

      return isInstalled;
    },
    openPackage: function (packageName, act) {
      let isLaunched = false;
      const launcherActivity = (act && new Activity(act)) || activity;
      const launchIntent = pm.getLaunchIntentForPackage(packageName);

      if (launchIntent !== null) {
        isLaunched = true;
        launcherActivity.startActivity(launchIntent);
      }

      return isLaunched;
    },
    isIntentURIAvailable: function (scheme) {
      const uri = scheme + ":///find";

      const intent = new Intent(Intent.ACTION_VIEW, Uri.parse(uri));

      return pm.resolveActivity(intent, 0) !== null;
    }
  };
})();
