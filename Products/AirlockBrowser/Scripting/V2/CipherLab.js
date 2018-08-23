
var lastScanArgs;

function BarCodeSetCallBack(jsFunctionName) {
	airlock.scanning.onScan.addHandler(function (args) {
		lastScanArgs = args;
		window[jsFunctionName](args);
	});
}

function BarCodeGetReaderData() {
	return lastScanArgs;
}

function BarCodeSoftScanTrigger() {
	airlock.scanning.beginScan();
}

function BarCodeGetActive() {
	return airlock.scanning.isScannerActive();
}

function BarCodeSetActive(active) {
	airlock.scanning.setScannerActive(active);
}

function BarCodeGetReaderType() {
	airlock.scanning.getReaderType();
}

function BarCodeGetScannerVersion() {
	airlock.scanning.getFirmwareVersion();
}

function BarCodeGetReaderOutputConfiguration() {
	airlock.scanning.getConfiguration();
}

function BarCodeSetReaderOutputConfiguration(configuration) {
	airlock.scanning.setConfiguration(configuration);
}

function BarCodeGetReaderServiceVersion() {
	airlock.scanning.getApiVersion();
}

function BarCodeGetDecodersStatus() {
	/* to be done */
}

function BarCodeSetDecodersStatus(decodersStatus) {
	/* to be done */
}

function BarCodeGetSymbology(name) {
	airlock.scanning.getDecoderWithName(name);
}

function BarCodeSetSymbology(symbologyObject) {
	airlock.scanning.setDecoder(symbologyObject);
}

function JSFullScreenMode(fullScreen) {
	if (fullScreen === null) {
		return airlock.device.isFullScreen();
	}
	airlock.device.setFullScreen(fullScreen);
}

function JSMinimizeBrowser() {
	airlock.device.minimizeApp();
}

function JSGetBrightness() {
	return airlock.device.getBrightness();
}

function JSSetBrightness(brightness) {
	airlock.device.setBrightness(brightness);
}

function JSGetTextZoomLevel() {
	return airlock.browsing.getTextZoomLevel();
}

function JSSetTextZoomLevel(level) {
	airlock.browsing.setTextZoomLevel(level);
}

function JSGetRingerMode() {
	return airlock.device.getRingerMode();
}

function JSSetRingerMode(mode) {
	airlock.device.setRingerMode(mode);
}

function JSGetDeviceVolume(stream) {
	return airlock.device.getVolume(stream);
}

function JSSetDeviceVolume(stream, level) {
	airlock.device.setVolume(stream, level);
}

function JSLog(level, message) {
	pageHost.ii.log.writeLog(level, message);
}

/* @return {Promise} promise. */
function JSReadLogFile() {
	return airlock.log.getEntries();
}

/* @return {Promise} promise. */
function JSCleanLogFile() {
	return airlock.log.deleteEntries();
}

function JSBeep(onTime, offTime, freq, count) {
	airlock.device.beep();
}

function JSVibrate(onTime, offTime, count) {
	airlock.device.vibrate();
}

function JSGetDisplaySleep() {
	return airlock.device.isScreenLocked();
}

function JSSetDisplaySleep(enable) {
	if (enable) {
		airlock.device.lockScreen();
	} else {
		airlock.device.unlockScreen();
	}
}

/* returns: 0 is unlocked, 1 is locked portrait, 2 is locked landscape. */
function JSGetAutoRotate() {
	return airlock.device.getOrientationLock();
}

/* mode: 0 is unlocked, 1 is locked portrait, 2 is locked landscape. */
function JSSetAutoRotate(mode) {
	airlock.device.setOrientationLock(mode);
}

/* @return {Promise} promise.
 * The value is obtained from the remainingBatteryPercent field of the result object. */
function JSGetBatteryLevel() {
	return airlock.device.getPower();
}

function JSGetDisplayLanguage() {
	return airlock.device.getUILanguage();
}

/*  @return {Promise} promise. Returns an object providing information about the network.
connected
approachingDataLimit
roaming
networkConnectionType (None = 0, Lan = 1, MobileBroadband = 2)
limitData
ssid
ipAddress */
function JSGetCurrentSsid() {
	return airlock.device.getNetworkInfo();
}

/*  @return {Promise} promise.
 This is may take some time to process, so the function returns a promise. The result is a list of Wireless Network objects that include the following properties:
ssid
bssid
capabilities
isPasspointNetwork
level
operatorFriendlyName

The following demonstrates how you might retrieve networks, and then loop over the results:

var networksPromise = airlock.device.getWirelessNetworks();
networksPromise.then(function (result) {
  var text = '';
  for (var i = 0; i < result.length; i++) {
		 var network = result[i];
		 text += `SSID: ${network.ssid}
Bssid: ${network.bssid}
Level: ${network.level}`;
	 }
	 setText(textElement, 'Done');
	 showDialog(text);
 }).catch(function (error) {
		 setText(textElement, error);
});*/
function JSGetSsidList() {
	return airlock.device.getWirelessNetworks();
}

function JSSetWifiPower(mode) {
	airlock.networking.setWifiEnabled(mode === 1 || mode === "1");
}

function JSGetWifiPower() {
	return airlock.networking.isWifiEnabled() ? 1 : 0;
}

function JSGetSystemInfo() {
	return airlock.device.getSystemInfo();
}

function JSCloseBrowser(appPackageName) {
	airlock.device.exitApp();
}

function JSLaunchApp(appPackageName) {
	airlock.device.launchApp(appPackageName);
}

/* @return {Promise} promise. */
function JSCopyFile(existingFilename, newFileName) {
	return airlock.io.copyFile(existingFilename, newFileName);
}

/* @return {Promise} promise. */
function JSDeleteFile(filename) {
	return airlock.io.deleteFile(filename);
}

/* @return {Promise} promise. */
function JSRenameFile(oldFilename, newFileName) {
	return airlock.io.moveFile(oldFilename, newFileName);
}

function JSFileExists(filename) {
	return airlock.io.fileExists(filename);
}

function JSFileGetCurrentDir() {
	return airlock.io.getAppFilesDirectory();
}

function JSFileGetSDDir() {
	return airlock.io.getExternalStorageDirectory();
}

/* @return {Promise} promise.
  */
function JSFileOpen(filename) {
	/* fileMode: 0 , 1 CreateNew, 2 Create, 3 Open, 4 OpenOrCreate, 5 Truncate, 6 Append
See https://docs.microsoft.com/en-us/dotnet/api/system.io.filemode for more information on fileMode. */
	return airlock.io.openFile(filename, 3);
}

/* @return {Promise} promise.
  */
function JSFileCreate(filename) {
	return airlock.io.openFile(1);
}

function JSFileClose(fileID) {
	return airlock.io.closeFile(fileID);
}

/* @return {Promise} promise.
  */
function JSFileReadBase64(fileID, length) {
	return airlock.io.readBase64(fileID, length);
}

/* @return {Promise} promise.
  */
function JSFileRead(fileID, length) {
	return airlock.io.readText(fileID, length);
}

/* @return {Promise} promise.
  */
function JSFileWriteBase64(fileID, base64string) {
	return airlock.io.writeBase64(fileID, base64string);
}

/* @return {Promise} promise.
  */
function JSFileWriteText(fileID, dataString) {
	return airlock.io.writeText(fileID, dataString);
}

function JSGetFileOffset(fileID) {
	return airlock.io.getFileOffset(fileID);
}

function JSFileSeek(fileID, offset) {
	return airlock.io.seek(fileID, offset);
}

function JSGetFileSize(fileID) {
	return airlock.io.getFileSizeBytes(fileID);
}

/* A value of 0 means RedirectToErrorPage. A value of  1 means PreventNavigation.
 If url is not provided, the action will be applied to all pages, 
 apart from those that are specified individually. 
 URL is not case-sensitive and any querystring present is ignored. */
function JSSetHttpErrorAction(action, url) {
	airlock.browsing.setNavigationErrorAction(action, url);
}