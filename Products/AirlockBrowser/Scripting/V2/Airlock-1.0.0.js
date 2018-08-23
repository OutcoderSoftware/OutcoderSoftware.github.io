var airlock = airlock || {};

/* Scanning */

/**
 * @description Provides various functions for working with the hardware
 * barcode scanner.
 */
airlock.scanning = {};

/**
 * @description Simulates pressing hardware trigger for the barcode reader.
 */
airlock.scanning.beginScan = function () {
	pageHost.ii.getResult("scanning.beginScan");
}

/**
 * @description Ends the simulated pressing of the hardware trigger.
 * @see {@link airlock.scanning.beginScan}
 */
airlock.scanning.endScan = function () {
	pageHost.ii.getResult("scanning.endScan");
}

/**
 * @description Retrieves the decoder with the specified name.
 * Device makers use different names for decoders. If you are uncertain
 * of the name, use getDecoderWithNativeId instead.
 * @see {@link airlock.scanning.getDecoderWithNativeId}
 * @param {string} decoderName The name of the decoder. Cannot be null.
 * @returns {object} The decoder object that may allow you to modify its state.
 * @see {@link airlock.scanning.setDecoder}
 */
airlock.scanning.getDecoderWithName = function (decoderName) {
	pageHost.ii.assertArgNotNull(decoderName, "decoderName");
	return pageHost.ii.getResult("scanning.getDecoderWithName", decoderName);
}

/**
 * @description Retrieves the decoder with the specified native identifier,
 * corresponding to the ID within the device SDK.
 * @param {int} id The id of the decoder. Cannot be null.
 * @returns {object} The decoder object that may allow you to modify its state.
 * @see {@link airlock.scanning.setDecoder}
 */
airlock.scanning.getDecoderWithNativeId = function (id) {
	pageHost.ii.assertArgNotNull(id, "id");
	return pageHost.ii.getResult("scanning.getDecoderWithNativeId", id);
}

/**
 * @description Sets the values of a decoder.
 * @param {object} decoder The decoder object. Cannot be null.
 * @throws {Exception} If the device SDK is not supported. 
 */
airlock.scanning.setDecoder = function (decoder) {
	pageHost.ii.assertArgNotNull(decoder, "decoder");
	pageHost.ii.getResult("scanning.setDecoder", decoder);
}

/**
 * @description Returns the scanner configuration as an object.
 * Fields can be set, and the configuration can be applied using setConfiguration.
 * @see {link airlock.scanning.setConfiguration}
 * @return {object} The reader configuration.
 */
airlock.scanning.getConfiguration = function () {
	return pageHost.ii.getResult("scanning.getScannerConfiguration");
}

/**
 * @description Applies the specified scanner configuration to the device.
 * @param {object} config The barcode reader configuration.
 * @exception {ScriptCallException} Thrown if the device SDK is not supported.
 */
airlock.scanning.setConfiguration = function (config) {
	pageHost.ii.assertArgNotNull(config, "config");
	pageHost.ii.getResult("scanning.setScannerConfiguration", config);
}

/**
 * @description Gets a value indicating whether the scanner is ready.
 * @returns {boolean} true if the scanner is started and usable; false otherwise.
 */
airlock.scanning.isScannerActive = function () {
	return pageHost.ii.getResult("scanning.isScannerActive");
}

/**
 * @description Starts or stops the scanner.
 * @param {boolean} active If true the scanner is placed in a started state.
 * If false, the scanner is stopped.
 */
airlock.scanning.setScannerActive = function (active) {
	pageHost.ii.getResult("scanning.setScannerActive", active);
}

/**
 * Gets the reader type as reported by the device SDK.
 * @returns {string} The reader type as reported by the device SDK.
 */
airlock.scanning.getReaderType = function () {
	return pageHost.ii.getResult("scanning.getReaderType");
}

/**
 * Gets the reader firmware version as reported by the device SDK.
 * @returns {string} The reader firmware version as reported by the device SDK.
 */
airlock.scanning.getFirmwareVersion = function () {
	return pageHost.ii.getResult("scanning.getFirmwareVersion", active);
}

/**
 * Gets the API version of the device SDK. This value is retrieved
 * from the device SDK itself.
 * @returns {string} The API version reported by the device SDK.
 */
airlock.scanning.getApiVersion = function () {
	return pageHost.ii.getResult("scanning.getApiVersion");
}

/**
 * onScan event. Is raised when the barcode reader receives scan data.
 * To subscribe to the event use:
 *		airlock.device.onScan.addHandler(aFunction)
 * To unsubscribe to the event use:
 *		airlock.device.onScan.removeHandler(aFunction)
 * The event arg delivered to the event handler contains the following fields:
 * * rawDataInBase64 - The raw barcode data in Base64 format (if available).
 * * text - The processed barcode data.
 * * sourceScanner - The reader ID (if available).
 * * symbologyName - The symbology name, such as 'Code11'.
 * * timestamp - A datetime string indicating when the scan occured.
 * * barcodeLength - The length of the text.
 * * keyboardWedgeEnabled - If true, it indicates that the app may attempt to populate the current field with the barcode text.
 * * moveToNextField - If true, after the scan, the browser will attempt to move to the next field on the page.
 * * insertMode - Replace = 0, Append = 1, Prepend = 2. Determines the behaviour of the barcode wedge and whether it overwrites, appends, or prepends a text field with the scanned text.
 * * nativeSymbologyId - The identifier used in the device manufacturer's SDK for a symbology.
 */
airlock.scanning.onScan = pageHost.ii.registerEvent('barcodeReader.onScan');

/* Device */

/**
 * @description Provides functions for interacting with the device at the OS.
 */
airlock.device = {};

/**
 * Sends the user to the Android home screen while minimizing the browser.
 */
airlock.device.minimizeApp = function () {
	pageHost.ii.getResult("device.minimizeApp", open);
}

/**
 * Obtains the screen brightness, which is a float value
 * between 0 and 1.
 * @returns {float} brightness between 0 and 1.
 */
airlock.device.getBrightness = function () {
	return pageHost.ii.getResult("device.getBrightness");
}

/**
 * Sets the screen brightness to a value between 0 and 1.
 * The specified value is clamped between 0.1 and 1
 * to prevent the device being unusable.
 * @param {Number} brightness A value between 0 and 1.
 */
airlock.device.setBrightness = function (brightness) {
	pageHost.ii.getResult("device.setBrightness", brightness);
}

/**
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @returns {Number} 2 (normal), 0 (silent), or 1 (vibrate)
 */
airlock.device.getRingerMode = function () {
	return pageHost.ii.getResult("device.getRingerMode");
}

/**
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @param {Number} mode Allowed values are 2 (normal), 0 (silent), or 1 (vibrate)
 */
airlock.device.setRingerMode = function (mode) {
	pageHost.ii.getResult("device.setRingerMode", mode);
}

/**
 * Gets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {Number} streamType Indicates the source of the volume
 * and can be one of the following values:
 * NotificationDefault = -1
 * VoiceCall = 0
 * System = 1
 * Ring = 2
 * Music = 3
 * Alarm = 4
 * Notification = 5
 * Dtmf = 8.
 * @returns {Number} A number between zero and getMaxVolume()
 * @see {@link airlock.device.getMaxVolume}
 */
airlock.device.getVolume = function (streamType) {
	return pageHost.ii.getResult("device.getVolume", streamType);
}

/**
 * Sets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {Number} streamType Indicates the source of the volume
 * and can be one of the following values:
 * NotificationDefault = -1
 * VoiceCall = 0
 * System = 1
 * Ring = 2
 * Music = 3
 * Alarm = 4
 * Notification = 5
 * Dtmf = 8.
 * @param {Number} volume A value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 */
airlock.device.setVolume = function (streamType, volume) {
	pageHost.ii.getResult("device.setVolume", streamType, volume);
}

/**
 * Gets the highest volume value that can be applied using
 * the setVolume() function.
 * @see {@link airlock.device.setVolume}
 * @param {Number} streamType Indicates the source of the volume
 * and can be one of the following values:
 * NotificationDefault = -1
 * VoiceCall = 0
 * System = 1
 * Ring = 2
 * Music = 3
 * Alarm = 4
 * Notification = 5
 * Dtmf = 8.
 * @returns {Number} The maximum volume.
 */
airlock.device.getMaxVolume = function (streamType) {
	return pageHost.ii.getResult("device.getMaxVolume", streamType);
}

/**
 * Causes the device to play its notification sound clip.
 */
airlock.device.beep = function () {
	pageHost.ii.getResult("device.beep");
}

/**
 * Causes the device to vibrate for the specified duration.  
 * @param {Number} durationMS The duration for which to vibrate, in milliseconds.
 * If not specified, a value of 100 MS is used.
 */
airlock.device.vibrate = function (durationMS) {
	pageHost.ii.getResult("device.vibrate", durationMS);
}

/**
 * Gets the length of time in milliseconds following user inactivity
 * where the OS deems the user to be inactive, and locks the screen.
 * @returns {Number} The length of time in milliseconds.
 */
airlock.device.getScreenTimeoutMS = function () {
	return pageHost.ii.getResult("device.getScreenTimeoutMS");
}

/**
 * Sets the length of time in milliseconds following user inactivity
 * where the OS deems the user to be inactive, and locks the screen.
 * @param {Number} timeoutMS The length of time in milliseconds.
 */
airlock.device.setScreenTimeoutMS = function (timeoutMS) {
	pageHost.ii.getResult("device.setScreenTimeoutMS", timeoutMS);
}

/**
 * Gets a Object containing various OS properties, as described in the following list:
 * * manufacturer - The manufacturer of the device.
 * * brand - The brand of the device.
 * * model - The model of the device.
 * * board - The name of the underlying board, like 'goldfish'.
 * * hardware - The name of the hardware (from the kernal command line or /proc).
 * * serial - A hardware serial, if available.
 * * deviceId - A unique identifier for the device. This value may change with a factory reset.
 * * apiLevel - The Android build level (the SdkInt).
 * * sdk - The Android build name. For example 'kitkat'.
 * * buildId - Either a changelist number or a number like "M4-rc20"
 * * buildTime - A long value that is a Unix epoch timestamp (in milliseconds) indicating when the device's ROM was built
 * * buildVersion - The OS's user-visible version string. E.g., "1.0" or "3.4b5".
 * * displayInfo:
 * *	widthPixels - Width of the screen in pixels.
 * *	heightPixels - Height of the screen in pixels.
 * *	density - The logical density of the display.
 * *	scaledDensity - A scaling factor for fonts on the display.
 * *	widthDpi - The physical pixels per inch of the screen in the X dimension.
 * *	heightDpi - The physical pixels per inch of the screen in the Y dimension.
 * *	densityDpi - The screen density expressed as dots per inch.
		}
 * @returns {Object} Containing various OS properties.
 */
airlock.device.getSystemInfo = function () {
	return pageHost.ii.getResult("device.getSystemInfo");
}

/**
 * Causes the app to exit, and the user to be returned to the home screen.
 * @param {boolean} showNotification If true, a notification is displayed
 * to the user prior to exit. This helps to prevent the user from assuming
 * the app crashed.
 */
airlock.device.exitApp = function (showNotification) {
	pageHost.ii.getResult("device.exitApp", showNotification);
}

/**
 * Launches the app specified by its package name.
 * A valid package name might be, for example, 'com.google.android.apps.photos'.
 * @param {string} packageName The Android package name of the app to open.
 */
airlock.device.launchApp = function (packageName) {
	pageHost.ii.getResult("device.launchApp", packageName);
}

/* Requires device administration priviledges. See https://developer.android.com/guide/topics/admin/device-admin */


/**
 * Gets a value indicating whether the display is currently locked.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @exception {Exception} Occurs if Airlock Browser has not been assigned device administration privileges.
 * @returns {Boolean} true if the screen is locked; false otherwise.
 */
airlock.device.isScreenLocked = function () {
	return pageHost.ii.getResult("device.isScreenLocked");
}

/**
 * Engages the devices screen lock.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @exception {Exception} Occurs if Airlock Browser has not been assigned device administration privileges.
 */
airlock.device.lockScreen = function() {
	pageHost.ii.getResult("device.lockScreen");
}

/**
 * Disengages the devices screen lock.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @exception {Exception} Occurs if Airlock Browser has not been assigned device administration privileges.
 */
airlock.device.unlockScreen = function() {
	pageHost.ii.getResult("device.unlockScreen");
}

/**
 * Gets an object reprenting the device's power source and charging state,
 * with the following properties:
 * * powerSource: 0 is battery, 1 is external (mains power)
 * * remainingBatteryMinutes: An estimate of the number of minutes of remaining battery charge.
 * * remainingBatteryPercent: A value between 0 and 100 indicating the battery charge remaining.
 *							Note that this value may not be indicative of the time until
 *							the device runs out of charge, as the device may be connected
 *							to mains power and charging. See the batteryState value.
 * * batteryState: An integer indicating the charging state of battery.
 *	* Unknown = 0,
 *	* Charging = 1,
 *	* Discharging = 2,
 *	* Full = 4,
 *	* Not Charging = 8
 * @returns {Object} With fields representing the device's power source.
 */
airlock.device.getPower = function () {
	return pageHost.ii.getResult("device.getPower");
}

/**
 * onPowerChanged event. Is raised when the devices power source is changed;
 * the device is plugged-in to mains power for example.
 * It is also raised when the battery level changes.
 * To subscribe to the event use:
 *		airlock.device.onPowerChanged.addHandler(aFunction)
 * To unsubscribe to the event use:
 *		airlock.device.onPowerChanged.removeHandler(aFunction)
 * The argument delivered to the onPowerChanged event is an object reprenting
 * the device's power source and charging state,
 * with the following properties:
 * * powerSource: 0 is battery, 1 is external (mains power)
 * * remainingBatteryMinutes: An estimate of the number of minutes of remaining battery charge.
 * * remainingBatteryPercent: A value between 0 and 100 indicating the battery charge remaining.
 *							Note that this value may not be indicative of the time until
 *							the device runs out of charge, as the device may be connected
 *							to mains power and charging. See the batteryState value.
 * * batteryState: An integer indicating the charging state of battery.
 *	* Unknown = 0,
 *	* Charging = 1,
 *	* Discharging = 2,
 *	* Full = 4,
 *	* Not Charging = 8
 */
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