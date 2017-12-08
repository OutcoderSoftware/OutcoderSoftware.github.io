---
author: Daniel Vaughan
title: Configuring Airlock Browser Barcode Reader Support on Panasonic Devices
published: false
---

To enable the barcode reader to work with Airlock Browser on Android Panasonic devices,
configuration must be performed using the Panasonic Barcode Reader app,
which comes installed on Panasonic devices such as the FZ-N1.

1.      Ensure that Airlock Browser is installed on the device
2.      Open the "Barcode Reader" app
3.      Tap the Menu button (...) and choose "Select Profile"
4.      Choose "Create Profile"
5.      Enter "Airlock" as the profile name
6.      Tap on the newly created profile, "Airlock", to change the settings
7.      Tap on "Associated Apps"
8.      Tap the Menu button (...) and choose "New app/activity"
9.      Select "com.outcoder.ibrowser" as the app
10,    Select "*" as the activity
11.    Tap on the back button to return to the settings for the Airlock profile.
12.   Tap to disable "keyboard Wedge"
13.   Tap "Intent output settings"
14.   Tap to enable "Intent output"
15.   Tap to change "Intent action name"
16.   Enter "com.outcoder.browser.intent.action.BARCODE", Press "OK"
17.   Tap to change the "Intent category name"
18.   Enter "android.intent.category.DEFAULT", press "OK"
19.   Tap to change "Intent delivery type"
20.   Tap "Broadcast intent"
21.   Hit the back button to return to the settings for the Airlock profile
22.   Configure "Symbologies" and any other settings that you may need.
 
If the left and right side buttons of the device do not activate scanner, launch the *UserButtonManager* app 
and assign the left and right buttons to the scanner.
 
Once this has been completed and you have exited the Barcode Reader app, 
you can launch Airlock Browser and begin scanning.


