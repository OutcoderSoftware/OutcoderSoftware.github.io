var airlock = airlock || {};

/* Scanning */

airlock.scanning = {};

airlock.scanning.beginScan = function () {
	return pageHost.ii.getResult("scanning.beginScan");
}

airlock.scanning.endScan = function () {
	return pageHost.ii.getResult("scanning.endScan");
}

airlock.scanning.getDecoderWithName = function (decoderName) {
	pageHost.ii.assertArgNotNull(decoderName, "decoderName");
	return pageHost.ii.getResult("scanning.getDecoderWithName", decoderName);
}

airlock.scanning.getDecoderWithNativeId = function (id) {
	pageHost.ii.assertArgNotNull(id, "id");
	return pageHost.ii.getResult("scanning.getDecoderWithNativeId", id);
}

airlock.scanning.setDecoder = function (decoder) {
	pageHost.ii.assertArgNotNull(decoder, "decoder");
	return pageHost.ii.getResult("scanning.setDecoder", decoder);
}

airlock.scanning.getConfiguration = function () {
	return pageHost.ii.getResult("scanning.getScannerConfiguration");
}

airlock.scanning.setConfiguration = function (config) {
	pageHost.ii.assertArgNotNull(config, "config");
	return pageHost.ii.getResult("scanning.setScannerConfiguration", config);
}

airlock.scanning.isScannerActive = function () {
	return pageHost.ii.getResult("scanning.isScannerActive");
}

airlock.scanning.setScannerActive = function (active) {
	return pageHost.ii.getResult("scanning.setScannerActive", active);
}

airlock.scanning.getReaderType = function (active) {
	return pageHost.ii.getResult("scanning.getReaderType", active);
}

airlock.scanning.getScannerVersion = function (active) {
	return pageHost.ii.getResult("scanning.getScannerVersion", active);
}

airlock.scanning.getServiceVersion = function (active) {
	return pageHost.ii.getResult("scanning.getServiceVersion", active);
}

airlock.scanning.onScan = pageHost.ii.registerEvent('barcodeReader.onScan');

/* Device */

airlock.device = {};

airlock.device.minimizeApp = function () {
	return pageHost.ii.getResult("device.MinimizeApp", open);
}

airlock.device.getBrightness = function () {
	return pageHost.ii.getResult("device.getBrightness");
}

airlock.device.setBrightness = function (brightness) {
	return pageHost.ii.getResult("device.setBrightness", brightness);
}

airlock.device.getRingerMode = function () {
	return pageHost.ii.getResult("device.getRingerMode");
}

/* A mode of 0 denotes silent, 1 vibrate, and 2 normal. */
airlock.device.setRingerMode = function (mode) {
	return pageHost.ii.getResult("device.setRingerMode", mode);
}

airlock.device.getVolume = function (streamType) {
	return pageHost.ii.getResult("device.getVolume", streamType);
}

airlock.device.setVolume = function (streamType, volume) {
	return pageHost.ii.getResult("device.setVolume", streamType, volume);
}

airlock.device.getMaxVolume = function (streamType) {
	return pageHost.ii.getResult("device.getMaxVolume", streamType);
}

airlock.device.beep = function () {
	return pageHost.ii.getResult("device.beep");
}

airlock.device.vibrate = function (durationMS) {
	return pageHost.ii.getResult("device.vibrate", durationMS);
}

airlock.device.getScreenTimeoutMS = function () {
	return pageHost.ii.getResult("device.getScreenTimeoutMS");
}

airlock.device.setScreenTimeoutMS = function (timeoutMS) {
	return pageHost.ii.getResult("device.setScreenTimeoutMS", timeoutMS);
}

/* returns an object with the following properties:
 * powerSource: 0 is battery, 1 is external (mains power)
 * remainingBatteryMinutes: An estimate of the number of minutes of remaining battery charge.
 * remainingBatteryPercent: A value between 0 and 100 indicating the battery charge remaining.
 *							Note that this value may not be indicative of the time until
 *							the device runs out of charge, as the device may be connected
 *							to mains power and charging. See the batteryState value.
 * batteryState: An integer indicating the charging state of battery.
 *					Unknown = 0,
 *					Charging = 1,
 *					Discharging = 2,
 *					Full = 4,
 *					Not Charging = 8 */
airlock.device.getPower = function () {
	return pageHost.ii.getResult("device.getPower");
}

airlock.device.getSystemInfo = function () {
	return pageHost.ii.getResult("device.getSystemInfo");
}

airlock.device.closeBrowser = function (showNotification) {
	return pageHost.ii.getResult("device.closeBrowser", showNotification);
}

airlock.device.launchApp = function (packageName) {
	return pageHost.ii.getResult("device.launchApp", packageName);
}

/* Requires device administration priviledges. See https://developer.android.com/guide/topics/admin/device-admin */
airlock.device.isScreenLocked = function () {
	return pageHost.ii.getResult("device.isScreenLocked");
}

/* Requires device administration priviledges. See https://developer.android.com/guide/topics/admin/device-admin */
airlock.device.lockScreen = function() {
	return pageHost.ii.getResult("device.lockScreen");
}

/* Requires device administration priviledges. See https://developer.android.com/guide/topics/admin/device-admin */
airlock.device.unlockScreen = function() {
	return pageHost.ii.getResult("device.unlockScreen");
}

airlock.device.onPowerChanged = pageHost.ii.registerEvent("device.onPowerChanged");

/* Printing */

airlock.printing = {};

airlock.printing.printPage = function () {
	return Instance_HSV12.makePromise("printing.printPage");
};

/* Speech */

airlock.speech = {};

airlock.speech.speakText = function (text) {
	return pageHost.ii.getResult("speech.speakText", text);
};

/* UI */

airlock.ui = {};

/* Returns the name of the app's UI language.
 * The name is a combination of an ISO 639 two-letter lowercase culture code associated
 * with a language and an ISO 3166 two-letter uppercase subculture code associated with a country or region.
 * For example, en-AU denotes Australian english. */
airlock.ui.getUILanguage = function () {
	return pageHost.ii.getResult("ui.getUILanguage");
}

airlock.ui.isFullScreen = function () {
	return pageHost.ii.getResult("ui.isFullScreen");
}

airlock.ui.setFullScreen = function (fullScreen) {
	return pageHost.ii.getResult("ui.setFullScreen", fullScreen);
}

airlock.ui.isLaunchpadOpen = function () {
	return pageHost.ii.getResult("ui.isLaunchpadOpen");
}

airlock.ui.setLaunchpadOpen = function (open) {
	return pageHost.ii.getResult("ui.setLaunchpadOpen", open);
}

/* returns: 0 is unlocked, 1 is locked portrait, 2 is locked landscape. */
airlock.ui.getOrientationLock = function () {
	return pageHost.ii.getResult("ui.getOrientationLock");
}

/* mode: 0 is unlocked, 1 is locked portrait, 2 is locked landscape, 3 is system controlled.
 * When set to 3, the locked or unlocked state is determined by the configuration and/or user settings in the app. */
airlock.ui.setOrientationLock = function (mode) {
	return pageHost.ii.getResult("ui.setOrientationLock", mode);
}

/* Networking */

airlock.networking = {};

airlock.networking.getNetworkInfo = function () {
	return pageHost.ii.getResult("networking.getNetworkInfo");
}

airlock.networking.getWirelessNetworks = function () {
	return Instance_HSV12.makePromise("networking.getWirelessNetworksAsync");
}

airlock.networking.isWifiEnabled = function () {
	return pageHost.ii.getResult("networking.isWifiEnabled");
}

airlock.networking.setWifiEnabled = function (enabled) {
	return pageHost.ii.getResult("networking.setWifiEnabled", enabled);
}

airlock.networking.onConnectionChanged = pageHost.ii.registerEvent("networking.onConnectionChanged");

/* Browsing */

airlock.browsing = {};

airlock.browsing.getNavigationErrorAction = function () {
	return pageHost.ii.getResult("browsing.getNavigationErrorAction");
}

airlock.browsing.setNavigationErrorAction = function (action) {
	return pageHost.ii.getResult("browsing.setNavigationErrorAction", action);
}

airlock.browsing.getTextZoomLevel = function () {
	return pageHost.ii.getResult("browsing.getTextZoomLevel");
}

airlock.browsing.setTextZoomLevel = function (level) {
	return pageHost.ii.getResult("browsing.setTextZoomLevel", level);
}


/* Logging */

airlock.log = {};

airlock.log.setMinLevel = function (level) {
	return pageHost.ii.getResult("log.setMinLevel", level);
}

airlock.log.debug = function (message, error) {
	return pageHost.ii.log.writeLog(2, message, error);
}

airlock.log.info = function (message, error) {
	return pageHost.ii.log.writeLog(4, message, error);
}

airlock.log.warn = function (message, error) {
	pageHost.ii.log.writeLog(8, message, error);
}

airlock.log.error = function (message, error) {
	pageHost.ii.log.writeLog(16, message, error);
}

airlock.log.getEntries = function (startDate, endDate) {
	return Instance_HSV12.makePromise("log.getEntries", startDate, endDate);
}

airlock.log.deleteEntries = function (startDate, endDate) {
	return Instance_HSV12.makePromise("log.deleteEntries", startDate, endDate);
}



/* IO */

airlock.io = {};

airlock.io.copyFile = function (sourcePath, destinationPath) {
	return Instance_HSV12.makePromise("io.copyFile", sourcePath, destinationPath);
}

airlock.io.moveFile = function (sourcePath, destinationPath) {
	return Instance_HSV12.makePromise("io.moveFile", sourcePath, destinationPath);
}

airlock.io.deleteFile = function (path) {
	return Instance_HSV12.makePromise("io.deleteFile", path);
}

airlock.io.fileExists = function (path) {
	return Instance_HSV12.makePromise("io.fileExists", path);
}

airlock.io.directoryExists = function (path) {
	return Instance_HSV12.makePromise("io.directoryExists", path);
}

/* fileMode: 0 , 1 CreateNew, 2 Create, 3 Open, 4 OpenOrCreate, 5 Truncate, 6 Append
 * See https://docs.microsoft.com/en-us/dotnet/api/system.io.filemode for more information on fileMode. */
airlock.io.openFile = function (path, fileMode) {
	return Instance_HSV12.makePromise("io.openFile", path, fileMode);
}

airlock.io.closeFile = function (handle) {
	return Instance_HSV12.makePromise("io.closeFile", handle);
}

/* Create directory has no effect, and does not raise an error,
 * if the directory already exists. */
airlock.io.createDirectory = function (path) {
	return Instance_HSV12.makePromise("io.createDirectory", path);
}

airlock.io.deleteDirectory = function (path, recursive) {
	return Instance_HSV12.makePromise("io.deleteDirectory", path, recursive);
}

airlock.io.getFiles = function (path, pattern, recursive) {
	return Instance_HSV12.makePromise("io.getFiles", path, pattern, recursive);
}

airlock.io.getDirectories = function (path, pattern, recursive) {
	return Instance_HSV12.makePromise("io.getDirectories", path, pattern, recursive);
}

airlock.io.getFileInfo = function (path) {
	return Instance_HSV12.makePromise("io.getFileInfo", path);
}

airlock.io.readText = function (handle, length, offset) {
	return Instance_HSV12.makePromise("io.readText", handle, length, offset);
}

airlock.io.readBase64 = function (handle, length, offset) {
	return Instance_HSV12.makePromise("io.readBase64", handle, length, offset);
}

airlock.io.readAllText = function (filePath) {
	return Instance_HSV12.makePromise("io.readAllText", filePath);
}

airlock.io.readLine = function (handle) {
	return Instance_HSV12.makePromise("io.readLine", handle);
}

airlock.io.writeText = function (handle, text) {
	return Instance_HSV12.makePromise("io.writeText", handle, text);
}

airlock.io.writeBase64 = function (handle, base64String) {
	return Instance_HSV12.makePromise("io.writeBase64", handle, base64String);
}

airlock.io.seek = function (handle, offset) {
	return pageHost.ii.getResult("io.seek", handle, offset);
}

airlock.io.getFileOffset = function (handle) {
	return pageHost.ii.getResult("io.getFileOffset", handle);
}

airlock.io.getFileSizeBytes = function (handle) {
	return pageHost.ii.getResult("io.getFileSizeBytes", handle);
}

airlock.io.touch = function (filePath) {
	return pageHost.ii.getResult("io.touch", filePath);
}

airlock.io.getAppFilesDirectory = function () {
	return pageHost.ii.getResult("io.getAppFilesDirectory");
}

airlock.io.getExternalStorageDirectory = function () {
	return pageHost.ii.getResult("io.getExternalStorageDirectory");
}