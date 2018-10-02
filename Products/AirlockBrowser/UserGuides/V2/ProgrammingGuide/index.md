---
layout: UserGuide
title: Airlock Browser Programming Guide
---

# Airlock Browser Programming Guide
#### For Version 2.0, Android

## Table of Contents

[//]: # (TOC Begin)
* [Introduction](#introduction)
	* [Ensuring Airlock is Ready to Receive Commands](#ensuring-airlock-is-ready-to-receive-commands)
	* [Enabling Intellisense](#enabling-intellisense)
	* [Configuring the Barcode Reader via JavaScript](#configuring-the-barcode-reader-via-javascript)
	* [Monitoring Network Connectivity](#monitoring-network-connectivity)
	* [Printing a Page via JavaScript](#printing-a-page-via-javascript)
	* [Using Text to Speech with JavaScript](#using-text-to-speech-with-javascript)
	* [Setting Advanced Scripting Permission](#setting-advanced-scripting-permission)

[//]: # (TOC End)


## Introduction

Airlock Browser includes a rich set of client-side JavaScript APIs that allow you to control many aspects of the browser and device.
Airlock Browser JavaScript APIs via can be invoked from an on-page script or from a remote web application JavaScript event handler. 

> **NOTE:**
Please note that there exists [comprehensive working examples](../../Scripting/V2/Examples/) for the APIs listed in this document.

In this document you explore the following sets of APIs, which are grouped together in the following JavaScript namespaces:
* `airlock.app` Provides licensing, updates, versioning, and APIs for exiting the app.
* `airlock.browsing` Allows modification of the user's web browsing experience.
* `airlock.device` Provides functions for interacting with the device at the OS level.
* `airlock.io` Provides APIs for reading and writing files.
* `airlock.log` Provides persistent logging capabilities.
* `airlock.networking` Provides functions and events for working with the network capabilities of a device.
* `airlock.printing` Allows for printing of documents.
* `airlock.scanning` Provides various functions for working with the hardware barcode scanner.
* `airlock.speech` Brings text to speech capabilities to your web application.
* `airlock.ui` Allows you to control various user interface elements within the browser.

> **NOTE:** For security reasons, the JavaScript APIs can only be called from a page with a domain that matches one of the domains of a web profile, present on the launchpad. This prevents unauthorized web sites from invoking a function from a web page.

### Ensuring Airlock is Ready to Receive Commands

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

### Enabling Intellisense

During development of your web application, you can include the [Airlock.js](../../../Scripting/V2/JavaScript/Airlock/Airlock.js) file in your project for intellisense/code completion support. The JSDoc comments within the file include type and parameter information, a long with examples. This aids in increasing the speed of development and reduces errors from typos.

In addition, you can also find JavaScript files with type definitions for various 

> **NOTE:** Airlock Browser includes 80+ APIs for controlling and interacting with the browsers. Only a small subset are covered in this guide. Please see the [Live Examples](../../Scripting/V2/Examples/) and [API Documentation](../../Scripting/V2/JSDoc/Airlock/) for more information.

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

All properties that are configurable within Airlock Browser's device configuration are also configurable via JavaScript.

For a list of configurable properties, see the [Device SDK API Documentation](Products/AirlockBrowser/Scripting/V2/JSDoc/Sdks/)

> **NOTE:** You must call the `setDecoder` function of the `airlock.scanner` object for the setting to be applied. See the following example:

```javascript
try {
	var codabarDecoder = airlock.scanning.getDecoderWithNativeId(71);
	codabarDecoder.enabled = true;
	codabarDecoder.notisEditingType = 1;
	codabarDecoder.lengthMin = 10;
	airlock.scanning.setDecoder(codabarDecoder);
	alert("Decoder set");
} catch (e) {
	alert("Error: " + e);
}
```

The `airlock.scanning.setDecoder` function raises an exception if the decoder value's are unable to be set. 

### Monitoring Network Connectivity
Airlock Browser detects when there is a change in network connectivity, and can notify your page via a JavaScript handler. To define a network connectivity JavaScript handler, subscribe to the `onConnectionChanged` event, like so:

```javascript
airlock.networking.onConnectionChanged.addListener(handleConnectionChanged);

function handleConnectionChanged(args) {
	alert(args.connected);
}
```

The `onConnectionChanged` event handler receives a `NetworkInfo` object. For a complete list of properties see the [NetworkInfo type](../../Scripting/V2/JSDoc/Airlock/global.html#NetworkInfo).

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

For a live example see the [Networking examples page](../../Scripting/V2/Examples/Networking/).

### Printing a Page via JavaScript

You are able to launch the print service, installed on a device, from either a JavaScript event handler in a web profile, or from on-page JavaScript. To launch the print service to print the current active page, use the following:

```javascript
airlock.printing.printPage();
```

### Using Text to Speech with JavaScript

You can have Airlock Browser speak any text, from either a JavaScript event handler in a web profile, or from on-page JavaScript. To speak text use the following:

```javascript
airlock.speech.speakText("Hi from Airlock Browser");
```

### Setting Advanced Scripting Permission

Some APIs present in the `airlock.device` namespace require that Airlock Browser be granted [device admin privileges](https://developer.android.com/guide/topics/admin/device-admin). The following APIs require this:

* `airlock.device.lockScreen()`
* `airlock.device.unlockScreen()`
* `airlock.device.isScreenLocked()`

To grant Airlock Browser device admin privileges, use the *Enable device administration* link on the  Administration screen of the app.

Calling these functions without device admin, raises an JavaScript error.