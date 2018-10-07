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

* `manufacturer` {string} The manufacturer of the device.
* `brand` {string} The brand of the device.
* `model` {string} The model of the device.
* `board` {string} The name of the underlying board, like 'goldfish'.
* `hardware` {string} The name of the hardware (from the kernel command line or /proc).
* `serial` {string} A hardware serial, if available.
* `deviceId` {string} A unique identifier for the device. This value may change with a factory reset.
* `apiLevel` {string} The Android build level (the SdkInt).
* `sdk` {string} The Android build name. For example 'kitkat'.
* `buildId` {string} Either a changelist number or a number like "M4-rc20"
* `buildTime` {string} A long value that is a Unix epoch timestamp (in milliseconds) indicating when the device's ROM was built
* `buildVersion` {string} The OS's user-visible version string. E.g., "1.0" or "3.4b5".
* {airlock.device.DisplayInfo} `displayInfo` Indicates the properties of the device display.
 
 The `airlock.device.DisplayInfo` type is useful for determining the display capabilities of the device and contains the following properties:

* `widthPixels` {number} Width of the screen in pixels.
* `heightPixels` {number} Height of the screen in pixels.
* `density` {number} The logical density of the display.
* `scaledDensity` {number} A scaling factor for fonts on the display.
* `widthDpi` {number} The physical pixels per inch of the screen in the X dimension.
* `heightDpi` {number} The physical pixels per inch of the screen in the Y dimension.
* `densityDpi` {number} The screen density expressed as dots per inch.

## Reading and Writing Files

Airlock Browser offers an extensive set of APIs for reading and writing files, and creating and searching for files and directories.

### A Note about JavaScript Promises

While some functions are synchronous, most of the functions in the `airlock.io` namespace are asynchronous and use JavaScript promises. Promises is a feature of modern JavaScript and provides an elegant way of handling callbacks from asynchronous code. Some of the JavaScript APIs, especially those in the `airlock.io` and `airlock.networking` namespaces, can potentially take seconds to complete. Rather than lock the UI thread of the browser, some calls are performed on a background thread and returned to the your code via a promise. 

If you are new to promises, please see one of the many tutorials online covering promises. In this section you see how to employ promises to read and write files in a asynchronous manner. 

You see later in this section how you can use the async/await features of EcmaScript 2015, to treat promises in a synchronous manner; greatly simplifying your code. So, if the Promise code structure seems a little daunting or complex, take a look at the section entitled [Simplifying Your Code with Async/Await](#simplifying-your-code-with-asyncawait) to see what can be achieved with async/await in Android 7.0 (Nougat) onward.

### Copying a File

To copy a file use the `airlock.io.copyFile(sourcePath, destinationPath, overwriteIfExists)` function. It accepts a string path to an existing file and a destination path, which denotes where to place the copied file. If `overwriteIfExists` is `false`, and a file already exists with the `destinationPath`, then a exception is thrown.

The `copyFile` function is an asynchronous operation and returns a promise. To no for certain if the function completed successfully or if an exception was raised, you need to use the promise. See the following example:

```js
airlock.io.moveFile(sourcePath, destinationPath)
 	.then(function () {
 		alert(`File moved to: ${destinationPath}`);
 	}).catch(function (error) {
 		alert(`Error ${error}`);
 	});
```

If and when the file is copied correctly, the 'then' function is called. If an exception is thrown, then you have the opportunity to handle it in the `catch` function.

### Deleting a File

To delete a file call the `airlock.io.deleteFile(path)` function, as demonstrated in the following example:

```js
airlock.io.deleteFile(filePath)
	.then(function () {
		alert(`File deleted.`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
 ```

### Determining if a File Exists

To test for the exists of a file use the `airlock.io.fileExists(filePath)` function, as shown:

```js
airlock.io.fileExists(filePath)
	.then(function (fileExists) {
		alert(`File exists: ${fileExists}`);
	}).catch(function (error) {
		alert(`Error: ${error}`);
	});
 ```

`true` is provided to the `then` function if the file exists; `false` otherwise.

### Determining if a Directory Exists

To test for the exists of a directory use the `airlock.io.directoryExists(directoryPath)` function, as shown:

```js
airlock.io.directoryExists(directoryPath)
	.then(function (fileExists) {
		alert(`Directory exists: ${fileExists}`);
	}).catch(function (error) {
		alert(`Error: ${error}`);
	});
```

`true` is provided to the `then` function if the directory exists; `false` otherwise.

### Working with Directories

Before you can create a file in a directory, you must be certain that the directory exists. To test for the existance of a directory use the `airlock.io.directoryExists(directoryPath)` function, as shown in the following example:

```js
airlock.io.directoryExists(directoryPath)
    .then(function (exists) {
		alert(`Directory exists: ${exists}`);
		// Create a file etc.
	}).catch(function (error) {
		alert(`Error: ${error}`);
	});
```

If `exists` is `false` then use the `airlock.io.createDirectory(newDir)` function to create a new directory, as shown:

```js
airlock.io.directoryExists(directoryPath)
    .then(function (exists) {
		if (!exists) {
		    airlock.io.createDirectory(newDir)
	        .then(function () {
		alert(`Created directory ${newDir}`);
	})
		}
	}).catch(function (error) {
		alert(`Error: ${error}`);
	});
```

```js
airlock.io.createDirectory(newDir)
	.then(function () {
		alert(`Created directory ${newDir}`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
 ```

### Creating or Opening Files

The `airlock.io.openFile(path, fileMode)` function is a cornerstone in Airlock Browser for working with files. The `fileMode` parameter determines the behavior of the function; whether it creates or opens an existing file; whether is truncates or appends to a file, are determined by the parameter. See the following example:

```js
var file1Handle;

airlock.io.openFile(filePath, airlock.io.FileMode.OPEN)
	.then(function (fileHandle) {
		file1Handle = fileHandle;
		alert(`Successfully opened ${filePath}`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
```

The return value of the `openFile` function is an identifier or *handle* that you use to read, write, and close the file when you are done with it. You see examples of using the handle subsequent sections.

The `airlock.io.FileMode` enumeration properties are described in the following list:

* `CREATE_NEW` (numeric value 1): Specifies that the operating system should create a new file. If the file already exists, an IOException exception is thrown.
* `CREATE` (numeric value 2): Specifies that the operating system should create a new file.
If the file already exists, it will be overwritten. This requires Write permission.
FileMode.Create is equivalent to requesting that if the file does not exist,
use CreateNew; otherwise, use Truncate. If the file already exists
but is a hidden file, an UnauthorizedAccessException exception is thrown.
* `OPEN` (numeric value 3): Specifies that the operating system should open an existing file.
A FileNotFoundException exception is thrown if the file does not exist.
* `OPEN_OR_CREATE`: 4, Specifies that the operating system should open a file if it exists;
otherwise, a new file should be created.
* `TRUNCATE` (numeric value 5): Specifies that the operating system should open an existing file.
When the file is opened, it should be truncated so that its size is zero bytes.
This requires Write permission. Attempting to read from a file opened
with FileMode.Truncate causes an ArgumentException exception.
* `APPEND` (numeric value 6): Opens the file if it exists and seeks to the end of the file,
or creates a new file. This requires Append permission.
FileMode.Append can be used only in conjunction with FileAccess.Write.
Trying to seek to a position before the end of the file
throws an IOException exception, and any attempt
to read fails and throws a NotSupportedException exception.

When you receive back a file handle, Airlock Browser maintains the current position within the file. Thus, when writing or reading data from the file, its optional to specify the location within the file; as you see in later in this section.

### Chaining Promises when Working with Files

A common scenario when working with files is that you need to perform an asynchronous
operation and then wait for the result. In the following example, you see how to test
if a directory exists, if it doesn't, it is created. A file is then created using
the `airlock.io.touch` function, and its file information retrieved. Each of these steps
occurs asynchronously, yet together they complete sequentially.

```js
var directoryPath = filesDir + "/" + testDiretory;
var filePath = directoryPath + "/touchedFile.txt";

airlock.io.directoryExists(directoryPath)
	.then(function (exists) {
		if (!exists) {
			alert("Creating directory.");
			return airlock.io.createDirectory(directoryPath);
		}
		/* Directory already exists. 
		 * Return an immediately completing promise. */
		return Promise.resolve();
	}).then(function () {
		return airlock.io.touch(filePath);
	}).then(function() {
		return airlock.io.getFileInfo(filePath);
	}).then(function(fileInfo) {
		setText(textElement, "File modified: " + fileInfo.modifiedTime);
	}).catch(function (error) {
		setText(textElement, "Error: " + error);
	});
```

If an exception is raised in any of the steps leading up to displaying the modified time, 
it can be handled in the `catch` function.

### Simplifying Your Code with Async/Await

If you're planning on supporting only devices running Android 7.0 and above, you can simplify 
your asynchronous code by using the new async and await features of ECMAScript 2015, which make it possible to treat promises as though they were synchronous!

For example, the code example in the chaining promises example can be rewritten as follows:

```js
async function testAwaitIOPromises(textElement) {
	try {
		var directoryPath = filesDir + "/" + testDiretory;
		var filePath = directoryPath + "/touchedFile.txt";
		
		var exists = await airlock.io.directoryExists(directoryPath);
		if (!exists) {
			alert("Creating directory.");
			await airlock.io.createDirectory(directoryPath);
		}
		await airlock.io.touch(filePath);
		var fileInfo = await airlock.io.getFileInfo(filePath);
		setText(textElement, "File modified: " + fileInfo.modifiedTime);
	} catch (e) {
		setText(textElement, "Error: " + e);
		return;
	}
}
```

Here you see we are able to do away with the `.then()` handler chains, and treat the code
in the same manner as a synchronous code block.

> **NOTE:** JavaScript that makes use of the `await` keyword, must be decorated with the `async` keyword.

### Closing a File

Once you've opened a file, it is kept open until Airlock Browser is exited or deactivated. To close the file, so it is available for other processes, use the `airlock.io.closeFile(file1Handle)` function; passing it the file handle returned by the `openFile` function. See the following example:

```js
airlock.io.closeFile(file1Handle)
	.then(function () {
		alert(`File closed.`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
 ```
 
 ### Deleting a Directory
 
 Airlock Browser allows you to delete a directory using the `airlock.io.deleteDirectory(path, recursive)` function. The Boolean `recursive` parameter tells Airlock Browser to delete the directory and its contents. If the directory is not empty and `recursive` is false, an exception is thrown. See the following example:
 
 ```js
airlock.io.deleteDirectory(newDir, recursive)
	.then(function () {
		alert(`Deleted directory ${newDir}`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
 ```
 
 ### Searching for Files or Directories
 
 The following two functions exists to allow you to search for a file or directory matching a particular pattern:
 
 * airlock.io.getFiles(directoryPath, searchPattern, recursive)
 * airlock.io.getDirectories(directoryPath, searchPattern, recursive)
 
 Both return promises resulting in a list of strings. 
 The `directoryPath` parameter is the path of the directory to look in.
 The search pattern to match against the names of directories.
 The `searchPattern` parameter can contain a combination of valid literal path and wildcard (* and ?) characters, but it does not support regular expressions.
 If `true` the Boolean `recursive` parameter causes nested directories to be included in the search. 
 
The following example demonstrates how to retrieve a list of all directories beneath a specified directory, which includes all subdirectories:
 
 ```js
airlock.io.getDirectories(outputDir, "*.*", true)
	.then(function (result) {
		alert(`${outputDir} contains: ${result.join("\n")}`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
 ```

Likewise, to retrieve a list of all files in the specified directory and subdirectories, you could use the following:

```js
airlock.io.getFiles(directoryPath, "*.*", true)
	.then(function (result) {
		alert(`${directoryPath} contains: ${result.join("\n")}`);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
```

### Retrieving File Information

To retrieve a file's information use the `airlock.io.getFileInfo(path)` function, which accepts a string parameter representing the path to the file. See the following example:

```js
airlock.io.getFileInfo(sourcePath)
	.then(function (result) {
		alert(result.sizeBytes);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
```

The resulting object is a `airlock.io.FileInfo` object, with the following properties:

 * `directory` {string}The path to the file's directory.
 * `sizeBytes` {Number}  The size of the file in bytes.
 * `modifiedTime` {Date} The date and time that the file was last modified in universal time.
 * `modifiedTimeUtc` {Date} The date and time that the file was last modified in universal time.
 * `creationTime` {Date} The date and time that the file was created.
 * `creationTimeUtc` {Date} The date and time that the file was created in universal time.
 * `accessedTime` {Date} The date and time that the file was last accessed.
 * `accessedTimeUtc` {Date} The date and time that the file was last accessed in universal time.

### Reading a File's Contents as Text

There are two ways to read the contents of a file as text. 
To read the entire contents of a file without using a file handle, use the `airlock.io.readAllText(filePath)` function. This returns a promise, which provides the text. See the following usage example:

```js
airlock.io.readAllText(filePath)
    .then(function (text) {
		alert(`${text}`);
	}).catch(function (error) {
		alert(`Error: ${error}`);
	});
```

The second approach relies on a file handle and allows you to read the whole file, or just a segment of a file. For this, use the `airlock.io.readText(handle, length, offset)` function.
The `handle` parameter is acquired when you first open or create the file. The `length` parameter is the length of the segment to read in characters. The encoding of the file is determined automatically. If the encoding cannot be determine, UTF-8 is used.

The `offset` parameter is optional and specifies where in the file to start reading. Airlock Browser maintains the current position within the file for you.

To read a line of text from the current file, use the `airlock.io.readLine(handle)` function. The function reads a line of character from the current position until the next line break.

### Writing Text to a File

Use the `airlock.io.writeText(handle, text)` function to write a string to a file at the current file offset. See the following usage example:

```js
airlock.io.writeText(file1Handle, "These pretzels are making me thirsty.")
	.then(function () {
		alert(textElement, "Done");
	}).catch(function (error) {
		alert(textElement, `Error ${error}`);
	});
```

An exception is thrown if the `text` parameter is undefined.

### Reading a Binary File's Contents as Base64

Use the `airlock.io.readBase64(handle, length, offset)` function to read the contents of a binary file as a Base64 string. The `handle` parameter is acquired when you first open or create the file. The `length` parameter is the length of the segment to read in characters. 

The `offset` parameter denotes where within the file to start reading. If not specified, the current file offset is used.

See the following usage example:

```js
airlock.io.readBase64(binaryFile1Handle, fileLength)
	.then(function (base64) {
		var text = atob(base64);
		alert(text);
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
```

### Writing Binary Data to a File using Base64

To write binary data to a file, use the `airlock.io.writeBase64(handle, base64String)` function. The `base64String` parameter is the binary data converted to a Base64 string. To convert the binary data to a Base64 string in JavaScript use the built-in `btoa` function, as demonstrated in the following usage example:

```js
var textToWrite = "That rug really tied the room together.";

var base64 = btoa(textToWrite);

airlock.io.writeBase64(binaryFile1Handle, base64)
	.then(function () {
		alert("Done");
	}).catch(function (error) {
		alert(`Error ${error}`);
	});
```

The example takes a string and converts it to Base64, where each character in the string is treated as a byte of binary data. The Base64 string is then written as binary data to the specified file at the current file offset.

### Changing the File Offset

To move to a new location with a file for reading or writing data, use the `airlock.io.seek(handle, offset)` function.
Unlike other functions within the `airlock.io` namespace, `seek` is a synchronous operation.
See the following usage example:

```js
let position = 1024; // 1024 bytes past the start of the file.
airlock.io.seek(file1Handle, position);
```

To retrieve the current offset within a file, use the synchronous `airlock.io.getFileOffset(handle)` function, as demonstrated:

```js
var position = airlock.io.getFileOffset(file1Handle);
```

### Updating the Timestamp or Creating a File using the Touch Function

The `airlock.io.touch(filePath)` function allows you to easily set the last modified date
of a specified file to the current time. Calling this function with a file path that does not exist causes the file to be created. If the file cannot be created or the operation fails for whatever reason, an JavaScript exception is thrown.

### Retrieving the Location of Special Directories

Internally, Airlock Browser saves files to the location identified by the `airlock.io.getAppFilesDirectory()` function. This function returns a string that
typically resembles */data/data/com.outcoder.ibrowser/files*.

To retrieve the path to the external files directory use the `airlock.io.getExternalStorageDirectory()` function. This function gets the path to the shared directory on the device, which may or may not be located on an SD card.

## Recording Application Activity using the Logging API

Logging is an important aspect of any application. It allows you to analyze errors, record unexpected events, and gives you insight into the usage of the application.

Airlock Browser provides you with an application log that is internally stored within a database. Providing you with thread-safe logging capabilities across multiple pages.

Log entries not only record messages and error information, but also include the file location of when logging information, making it easy to identify the origin of the logging activity.

The following demonstrates how to write to the log at the debug level:

```js
airlock.log.debug("Message from my web page");
```

There are 4 log functions, with increasing levels of priority:

* debug
* info
* warn
* error

You can set the minimum logging level using the `airlock.log.setMinLevel(level)` function such that any logging events received having a lesser level are ignored and not written to the database.

For example, if we call `airlock.log.setMinLevel(airlock.log.LogLevel.WARN)`, and the call `airlock.log.info("A message.")`, the "A message." string is not written to the log database. If, however, we call `airlock.log.warn("A message.")` the "A message." string is written to the database. By specifying the minimum log level you can tailor the logging according to your requirements. During development you might want to specify a less restrictive log level such as `airlock.log.LogLevel.debug` to receive more logging messages.

While there are only 4 log functions for writing log entries, these 4 are not indicative of all of the log levels. There are three others, as shown in the `LogLevel` enumeration below:

* `ALL` (0): The least restrictive level.
* `DEBUG` (2): For debugging purposes. More verbose than the Info level
* and less verbose than the Trace level.
* `INFO` (4): Signifies verbose information. More verbose than the Warn level 
and less verbose than the Debug level.
* `WARN` (8): Signifies a warning from e.g. an unexpected event.
* `ERROR` (16): When an application error occurs.
* `FATAL` (32): When the application is no longer
able to function or is in an unreliable state.
Highly restrictive logging.
* `NONE` (64): Logging is disabled.

Using `NONE` as the minimum log level allows you to switch off logging. Using `ALL` lets everything through. The `FATAL` level is not used at this time.

### Retrieving Log Entries

To retrieve a list of log entries use the `airlock.log.getEntries(startDate, endDate)` function. The `startDate` and `endDate` parameters are both optional, and allow you to specify a time interval that log entries must fall between to be returned. In other words, if supplied, only those entries that fall between `startDate` and `endDate` are returned. 

> **NOTE:** When specifying an interval, you do not need to specify both a start date and an end date. 

The following example demonstrates how to retrieve the log entries using a promise:

```js
var startDate = new Date();
// Create a Date object that indicates the time one minute ago.
startDate.setMinutes(startDate.getMinutes() - 1);

// Get Entries less than 1 minute old.
airlock.log.getEntries(startDate)
    .then(function (logEntries) {
		let text = "";
		for (let i = 0; i < logEntries.length; i++) {
			let entry = logEntries[i];
			text += entry.message + "\n";
		}
		alert(text);
	}).catch(function(error) {
		alert(`Error ${error}`);
	});
```

Alternatively, if using an async/await approach, you could use:

```js
try {
    await airlock.log.getEntries(startDate);
    let text = "";
	for (let i = 0; i < logEntries.length; i++) {
		let entry = logEntries[i];
		text += entry.message + "\n";
	}
	alert(text);
} catch (error) {
    alert(`Error ${error}`);
}
```

> **NOTE:** The use of `let` keyword and string interpolation using the ` back-tick symbol may not be supported on older mobile operating systems.

The result of the `getEntries` function is a list of `airlock.log.LogEntry` objects; each of which containing the following properties:

 * `message` *string*: The text content of the log entry.
 * `exception` *string*: The error associated with this entry. Can be undefined.
 * `occuredUtc` *Date*: The time and date in universal time
 * when this entry was written to the log.
 * `logLevel` *airlock.log.LogLevel*: The log level of this entry.
 * `url` *string*: The URL of the page or JavaScript file
 * where the log entry was written.
 * `lineNumber` *number*: The line number in the file where the call
 * to write to the log was made.
 * `function` *string*: The name of the function
 * where the log call took place.
 
 
 

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
* `remainingBatteryMinutes` {number}: An estimate of the number of minutes of remaining battery charge.
* `remainingBatteryPercent` {number}: A value between 0 and 100 indicating the battery charge remaining. Note that this value may not be indicative of the time until the device runs out of charge, as the device may be connected to mains power and charging. See the `batteryState` value.
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

