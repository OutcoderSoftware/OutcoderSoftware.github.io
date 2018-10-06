---
layout: UserGuide
title: Airlock Browser Programming Guide
---

# Airlock Browser Programming Guide
#### For Version 2.0, Android

## Table of Contents


## Introduction

Airlock Browser includes a rich set of client-side JavaScript APIs that allow you to control many aspects of the browser and device.
Airlock Browser JavaScript APIs via can be invoked from an on-page script or from a remote web application JavaScript event handler. 

> **NOTE:**
Please note that there exists [comprehensive working examples](../../Scripting/V2/Samples/) for the APIs listed in this document.

In this document you explore the following sets of APIs, which are grouped together in the following JavaScript namespaces:
* `airlock.app` Provides licensing, updates, versioning, and APIs for exiting the app.
* `airlock.browsing` Allows you to control the user's web browsing experience.
* `airlock.device` Provides functions for interacting with the device at the OS level.
* `airlock.io` Provides APIs for reading and writing files.
* `airlock.log` Provides persistent logging capabilities.
* `airlock.networking` Provides functions and events for working with the network capabilities of a device.
* `airlock.printing` Allows for printing of documents.
* `airlock.scanning` Provides various functions for working with the hardware barcode scanner.
* `airlock.speech` Brings text to speech capabilities to your web application.
* `airlock.ui` Allows you to control various user interface elements within the browser.

> **NOTE:** For security reasons, the JavaScript APIs can only be called from a page with a domain that matches one of the domains of a web profile, present on the launchpad. This prevents unauthorized web sites from invoking a function from a web page. The launchpad is the panel that slides in from left to right. More information regarding the launchpad can be found in the [User Guide](../#overview-of-the-user-interface)

## Ensuring Airlock is Ready to Receive Commands

The JavaScript object that you use to call through to Airlock Browser is named `airlock`. The `airlock` object is available after the web page is loaded. The HTML `body.onload` event or other events that indicate that the page has loaded may occur before `airlock` has been properly initialized. To determine when the `airlock` object is initialized, use the `airlock.onReady` function, as shown in the following example:

```html
<html>
<head>
	<script>
		airlock.onReady("handleAirlockReady()");

		function handleAirlockReady() {
			var decoder = airlock.scanning.getDecoderWithNativeId(71);
			decoder.enabled = false;
			airlock.scanning.setDecoder(decoder);
		}
	</script>
</head>
<body>
</body>
</html>
```

The specified function is called immediately following the `window.onload` event. The parameter to the `onReady` function is a string containing JavaScript.

## Enabling Intellisense

During development of your web application, you can include the  [Airlock.js](../../../Scripting/V2/JavaScript/Airlock/Airlock.js) file in your project for intellisense/code completion support. The JSDoc comments within the file include type and parameter information, a long with examples. This aids in increasing the speed of development and reduces errors from typos.

In addition, you can also find JavaScript files with type definitions for various 

> **NOTE:** Airlock Browser includes 80+ APIs for controlling and interacting with the browsers. Only a small subset are covered in this guide. Please see the [Live Samples](../../../Scripting/V2/Samples/) and [API Documentation](../../../Scripting/V2/JSDoc/Airlock/) for more information.

## Exploring the App Namespace

The `airlock.app` namespace contains functions for licensing, updates, versioning, and APIs for exiting the app.

To see the APIs in this namespace in action, please see the [samples for the app namespace](../../../Scripting/V2/Samples/App/).

### Retrieving the Airlock Browser Version Number

To retrieve the version number of the application call the `airlock.app.getVersion()` function. This function returns an `airlock.app.AppVersion` object containing a name property, which is a string with a value resembling `2.0.13`; and a code property, which is a number correlating to the numeric version number of the app; for example 132013. 

Knowing the version number of the application allows you, for example to test whether an API feature is supported, or whether an app update needs to be rolled out to the device.

### Determining if Airlock Browser is Licensed

Managing the licenses for application across your organization can be an arduous task. While the Outcoder Licensing System allows you to pinpoint those devices that have, or have not been, assigned a license, the JavaScript API also allows you to query the browser for its licensed status.

To retrieve the license status of Airlock Browser call its `airlock.app.isLicensed()` function. This function returns a Boolean value indicating whether or not a valid license is in place.

### Minimizing the Browser

Airlock Browser allows you to minimize the app via its `airlock.app.minimize()` function. When this function is called, the browser is deactivated and the user is returned to the Android start screen.

### Exiting the Browser

Sometimes you may wish to close the Airlock Browser app. This is achieve by calling the `airlock.app.exit(showNotification)` function, which causes Airlock Browser to close all of its related activities and return the user to the Android start screen. 

By default a notification is displayed to the user, informing him or her that the app is about to exit. You can override this behavior by specifying the Boolean showNotification parameter.

### Exiting the Browser and Launching Another App

Supplemental to the `airlock.app.exit()` function is the `airlock.app.exitAndLaunchApp(package, showNotifaction)` function, which causes the app to exit, and the specified app package to be launched if present on the system.

As with the `airlock.app.exit` function, you can specify whether the user is notified, using the function's `showNotification` parameter.

### Launching Another App

If you wish Airlock Browser to remain open, but require another app to be launched, use the `airlock.app.launchApp(packageName)` function. This function throws an exception if the specified package name cannot be found. To determine if a package is installed on the device, use the `airlock.device.isPackageInstalled(packageName)` function.

## Controlling the App's Browsing Behavior

The `airlock.browsing` namespace contains functions that allow you to control the user's web browsing experience.

### Defining the Navigation Error Action

Sometimes a network outage may occur, or a link on a page may result in a not found HTTP 404 error. In this situation you can choose to either show an error page, or simply ignore the error and prevent navigation. This is done using the `airlock.browsing.setNavigationErrorAction(action, url)`. Sets the navigation error action associate with the specified URL.

The `action` parameter of the function is a `airlock.browsing.NavigationErrorAction` type, and can be either 0 (`REDIRECT_TO_ERROR_PAGE`) or 1 (`PREVENT_NAVIGATION`).

To retrieve an error action for a particular page use the `airlock.browsing.getNavigationErrorAction(url)` function. This function gets the navigation error action associate with the URL, if specified. If a URL is not specified, the navigation error action for the current remote web application is returned. And, if that is not specified, the browser's navigation error action setting is returned.

### Configuring the Text Size for a Page

The text on a page can often appear too small on some devices. This may be because of the screen size of the device, or because the web page was not created with mobile devices in mind. To counteract that, Airlock Browser provides a `airlock.browsing.setTextZoomLevel(level)` function, that allows you to set the size of the text according to the viewing requirements of your users. 
The specified `level` parameter is a floating point number where 1.0 is the normal size for the text. 2.0, for example, indicates double the normal size. The specified value is clamped between 0.1 and 5.0. In other words, if you provide a value outside that range, the the nearest valid value is used.

To retrieve the current text size use `airlock.browsing.getTextZoomLevel()`.

## Interacting with the Device at the OS Level

The `airlock.device` namespace provides functions for interacting with the device at the OS level, such as changing the screen brightness or sounding a tone.

### Changing the Screen's Brightness

To retrieve the screen current brightness level, use the `airlock.device.getBrightness()` function, which returns a floating point value between 0 and 1, where 1 indicates maximum brightness.

To change the screen brightness level, use the `airlock.device.setBrightness(brightness)` function, which accepts a floating point number between 0 and 1. The specified value is clamped between 0.1 and 1.0 to prevent the device being unusable.

### Configuring the Ringer Mode of the Device

Ordinarily an Android device is capable of sounding an audible alert and/or vibrating when an incoming call is received. You configure this behavior using the `airlock.device.setRingerMode(mode)` function, which accepts a `airlock.device.RingerMode` enumeration value. 

* A value of 2 (`NORMAL`) specifies that the ringer mode may be audible and may vibrate. It will be audible if the volume before changing out of this mode was audible. It will vibrate if the vibrate setting is on.
* A value of 1 (`VIBRATE`) specifies that the ringer is silent and will vibrate. This value causes the phone ringer to always vibrate.
* A value of 0 (`SILENT`) specifies that the ringer is silent and will not vibrate. (This overrides the vibrate setting.)

The get the current ringer mode use the `airlock.device.getRingerMode()` function.

### Controlling Device Volume

Airlock Browser allows you to control various volume streams via the `airlock.device.setVolume(streamType, volume)`. `streamType` is a `airlock.device.StreamType` enumeration value, with the following values:

* `VOICE_CALL` (0): used to identify the volume of audio streams for phone calls.
* `SYSTEM` (1): Used to identify the volume of audio streams for system sounds.
* `RING` (2): Used to identify the volume of audio streams for the phone ring.
* `MUSIC` (3):,Used to identify the volume of audio streams for music playback.
* `ALARM` (4): ,Used to identify the volume of audio streams for alarms.
* `NOTIFICATION` (5),Used to identify the volume of audio streams for notifications.
* `DTMF` (8): Used to identify the volume of audio streams for DTMF Tones. Dual-tone multi-frequency (DTMF) tones are used by automated dial-in systems such as voicemail or where prompts are used to navigate.

The `volume` parameter is a number between 0 and the maximum volume. To determine the maximum volume for a particular stream, use the `getMaxVolume` function, as demonstrated:

```js
var maxVolume = airlock.device.getMaxVolume(airlock.device.StreamType.MUSIC);
```

To retrieve the current volume level for a particular stream, use the `airlock.device.getMaxVolume(streamType)` function.

### Sounding an Audible Beep

Airlock Browser allows you to sound an audible beep for a specified duration and frequency using the `airlock.device.beep(durationMS, toneFrequency)` function, where `durationMS` is the duration of the sound in milliseconds, and `toneFrequency` is the frequency in Hertz.

### Creating a Custom Beep

If a single toned beep doesn't fit your needs, then you can use the `airlock.device.soundToneFollowedBySilence(soundMS, silenceMS, playCount, toneFrequency)` function to sound multiple beeps. The function plays a tone at the specified `toneFrequency` for the specified number of times; each time followed by a period of silence. The `soundMS` parameter determines the duration of the tone at each repetition, and the `silenceMS` determines the duration of the silence interval following the tone. Both are in milliseconds.

### Vibrating the Device

In noisy environments, supplementing audible alerts with vibration can make your application more usable. To vibrate the device for a specified duration use the `airlock.device.vibrate(vibrateMS, intervalMS, count)` function. All three parameters of the `vibrate` function are optional. By default the `vibrate` function vibrates the device for 100 milliseconds. You can change this duration by specifying the `vibrateMS` parameter. In addition you can also specify an interval of non-vibration and a `count` value, which causes the device to vibrate and then pause vibration repeatedly. This operates much like the `soundToneFollowedBySilence` function, described above.

### Controlling when the Screen Times-out

You can improve the battery life of the device, and in some scenarios increase security of your applications, by reducing the amount of time needed to engage the lock screen after the user becomes inactive. 

To set the lock screen timeout value use the `airlock.device.setScreenTimeoutMS(timeoutMS)` function. The `timeoutMS` parameter specifies the duration in milliseconds before the lock screen is engaged.

> **NOTE:** Decreasing the time-out value substantially can negatively affect the usability of the app if the user is required to authenticate to regain access.

To retrieve the current lock screen timeout value use the `airlock.device.getScreenTimeoutMS()` function.

### Retrieve Detailed Device Information

Sometimes you need detailed information about the device on which your application is running. Using the `airlock.device.getSystemInfo()` function you can retrieve detailed information regarding the device, operating system, and display properties; as well as a unique device identifier. `getSystemInfo()` returns a `airlock.device.SystemInfo` object, with the following properties:

* {string} `manufacturer` The manufacturer of the device.
* {string} `brand` The brand of the device.
* {string} `model` The model of the device.
* {string} `board` The name of the underlying board, like 'goldfish'.
* {string} `hardware` The name of the hardware (from the kernel command line or /proc).
* {string} `serial` A hardware serial, if available.
* {string} `deviceId` A unique identifier for the device. This value may change with a factory reset.
* {string} `apiLevel` The Android build level (the SdkInt).
* {string} `sdk` The Android build name. For example 'kitkat'.
* {string} `buildId` Either a changelist number or a number like "M4-rc20"
* {string} `buildTime` A long value that is a Unix epoch timestamp (in milliseconds) indicating when the device's ROM was built
* {string} `buildVersion` The OS's user-visible version string. E.g., "1.0" or "3.4b5".
* {airlock.device.DisplayInfo} `displayInfo` Indicates the properties of the device display.
 
 The `airlock.device.DisplayInfo` type is useful for determining the display capabilities of the device and contains the following properties:
 
* {number} `widthPixels` Width of the screen in pixels.
* {number} `heightPixels` Height of the screen in pixels.
* {number} `density` The logical density of the display.
* {number} `scaledDensity` A scaling factor for fonts on the display.
* {number} `widthDpi` The physical pixels per inch of the screen in the X dimension.
* {number} `heightDpi` The physical pixels per inch of the screen in the Y dimension.
* {number} `densityDpi` The screen density expressed as dots per inch.

### Detecting if an Application Package is Installed

Before launching an external app via the `airlock.app.launchApp` function, it's important to test if the package is installed. You do this using the `airlock.device.isPackageInstalled(packageName)` function, which returns `true` if the package is installed, and `false` otherwise.

### Locking and Unlocking the Screen

When the devices screen times-out, or the user explicitly engages the lock-screen, your application is able to unlock the screen using the `airlock.device.unlockScreen()` function. 

You can also choose to engage the lock screen by calling the `airlock.device.lockScreen()` function.

To determine the current state of the lock screen; whether it is locked or unlocked, use the `airlock.device.isScreenLocked()` function.

The lock screen APIs comprise a special set of functions that require explicit permission be granted while the app is running. This step only needs to be undertaken once, but if it is not, an exception is raised when attempting to read or set the locked state of the screen. You can do this via the Enterprise Administration screen within Airlock Browser. See the following section.

### Setting Advanced Scripting Permission

Some APIs present in the `airlock.device` namespace require that Airlock Browser be granted [device admin privileges](https://developer.android.com/guide/topics/admin/device-admin). The following APIs require this:

* `airlock.device.lockScreen()`
* `airlock.device.unlockScreen()`
* `airlock.device.isScreenLocked()`

To grant Airlock Browser device admin privileges, use the *Enable device administration* link on the  Administration screen of the app.

> **NOTE:** Calling these functions without device admin, raises a JavaScript error.

### Monitoring the Power State of the Device

It's important to notify the user if the device battery is running low and if a current activity is in danger of not being able to be completed because of an imminent device shutdown. The `airlock.device.onPowerChanged` event allows you to monitor, in real-time, the power state of the device. It provides you with a notification when the device battery level changes by two percent, or when the device is plugged or unplugged from an external power supply.

To subscribe to the event call the `addListener` function of the event as shown in the following example:

```js
airlock.device.onPowerChanged.addListener(handlePowerChanged);
```

The `handlePowerChanged` parameter is a function in your code that will receive a `airlock.device.PowerInfo` object when the event is raised; as demonstrated by the following:

```js
function handlePowerChanged(args) {
	if (args.powerSource === airlock.device.PowerSource.BATTERY) {
		// Using battery. Display remaining battery percentage.
		alert(args.remainingBatteryPercent)
	}
}
```

The properties of the `PowerInfo` type are described in the following list:

* {airlock.device.PowerSource} `powerSource`
	* `BATTERY` (0): A battery power source.
	* `EXTERNAL` (1): An external power supply such as mains power.
* {number} `remainingBatteryMinutes`: An estimate of the number of minutes of remaining battery charge.
* {number} `remainingBatteryPercent`: A value between 0 and 100 indicating the battery charge remaining. Note that this value may not be indicative of the time until the device runs out of charge, as the device may be connected to mains power and charging. See the `batteryState` value.
* {airlock.device.BatteryState} `batteryState` Indicates the charging state of battery.
    * `UNKNOWN` (0): The battery state is unknown. 
	* `CHARGING` (1): Indicates the unit is charging.
	* `DISCHARGING` (2): Indicates the battery is running down.
	* `FULL` (4): Battery is fully charged.
	* `NOT_CHARGING` (8): Battery is not charging.

> **NOTE:** The `onPowerChanged` is raised when the devices power source changes, or when the remaining battery percent changes by 2 or more percent. The reason why it is 2 percent and not 1 percent, is that when the device is charging and sitting on about 100%, the remaining charge level will frequently oscillate, up and down, by 1 percent. This can unnecessarily burden your page with events calls.
	
To remove a listener from the `onPowerChanged` event, use the `removeListener(function)` function, as shown:

```js
airlock.device.onPowerChanged.removeListener(handlePowerChanged);
```



### Configuring the Barcode Reader via JavaScript

Airlock Browser provides a JavaScript API that allows you to fully configure the mobile computer's hardware barcode reader.

> **NOTE:** Configuration changes applied via JavaScript do *not* result in permanent changes to the device configuration with Airlock Browser. The device configuration, as specified in Airlock Browser's device configuration settings, is restored when Airlock Browser is restarted. The one exception to this is the `airlock.scanning.resetConfiguration()` function, which does alter the devices configuration across app restarts.

#### Retrieving a Decoder's Configuration

The `airlock.scanning` object allows you to retrieve a decoder using the name of the decoder or its ID. You see how to retrieve a decoder by name in the following excerpt:

```javascript
var decoder = airlock.scanning.getDecoderWithName('Code39');
```

> **NOTE:** Decoder names are *not* case sensitive. For example, calling `getDecoderWithName` with a value 'Code39' is equivalent to calling the same method with 'CODE39'.

Alternatively, you can retrieve the decoder object using its SDK identifier. To do so, use the `getDecoderWithNativeId` function, as shown in the following example:

```javascript
var decoder = airlock.scanning.getDecoderWithNativeId(71);
```

All properties that are configurable within Airlock Browser's device configuration screen are also configurable via JavaScript.

For a list of configurable properties specific to the device you're using, see the [Device Specific Resource Documentation](../../../Scripting/V2/#device-specific-resources)

Once you have obtained a decoder object, you can set its values and then push it back to the app using the `setDecoder` function, as shown in the following example:

```javascript
try {
	var codabarDecoder = airlock.scanning.getDecoderWithNativeId(71);
	codabarDecoder.enabled = true;
	codabarDecoder.notisEditingType = 1;
	codabarDecoder.length1 = 10;
	airlock.scanning.setDecoder(codabarDecoder);
	alert("Decoder set");
} catch (e) {
	alert("Error: " + e);
}
```

> **NOTE:** You must call the `setDecoder` function of the `airlock.scanner` object for the setting to be applied. See the following example:

The `airlock.scanning.setDecoder` function throws an exception if the decoder values are unable to be set. 

For a live example see the [Scanning examples page](../../../Scripting/V2/Samples/Scanning/).

### Monitoring Network Connectivity
Airlock Browser detects when there is a change in network connectivity, and can notify your page via a JavaScript handler. To define a network connectivity JavaScript handler, subscribe to the `onConnectionChanged` event, like so:

```javascript
airlock.networking.onConnectionChanged.addListener(handleConnectionChanged);

function handleConnectionChanged(args) {
	alert(args.connected);
}
```

The `onConnectionChanged` event handler receives a `NetworkInfo` object. For a complete list of properties see the [NetworkInfo type](../../../Scripting/V2/JSDoc/Airlock/airlock.networking.html#.NetworkInfo).

You can also request the network information by calling `getNetworkInfo`, like so:

```javascript
var value = airlock.networking.getNetworkInfo();
alert("connected: " + value.connected +
	"\napproachingDataLimit: " + value.approachingDataLimit +
	"\nroaming: " + value.roaming +
	"\nnetworkConnectionType: " + value.networkConnectionType +
	"\nlimitData: " + value.limitData +
	"\nssid: " + value.ssid +
	"\nipAddress: " + value.ipAddress);
```

For a live example see the [Networking samples](../../../Scripting/V2/Samples/Networking/).

### Printing a Page via JavaScript

You are able to launch the print service, installed on a device, from either a JavaScript event handler in a web profile, or from on-page JavaScript. To launch the print service to print the current active page, use the following:

```javascript
airlock.printing.printPage();
```

For a live example see the [Printing examples page](../../../Scripting/V2/Samples/Printing/).

### Using Text to Speech with JavaScript

You can have Airlock Browser speak any text, from either a JavaScript event handler in a web profile, or from on-page JavaScript. To speak text use the following:

```javascript
airlock.speech.speakText("Hi from Airlock Browser");
```

