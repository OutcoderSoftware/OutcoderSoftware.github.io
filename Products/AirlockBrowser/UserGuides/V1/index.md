---
layout: UserGuide
title: Airlock Browser User Guide
redirect_from:
 - /Products/AirlockBrowser/UserGuides/V1/AirlockBrowserUserGuide.html
---

# Airlock Browser User Guide
#### For Version 1, Android

## Table of Contents

[//]: # (TOC Begin)
* [Introduction](#introduction)
* [Overview of the User Interface](#overview-of-the-user-interface)
* [Configuring General Settings](#configuring-general-settings)
	* [Language](#language)
	* [Search Using](#search-using)
	* [Screen Mode at Startup](#screen-mode-at-startup)
	* [Hardware Back Button Action](#hardware-back-button-action)
	* [Show Launchpad when App Starts](#show-launchpad-when-app-starts)
	* [Pause Browser Tab when Inactive](#pause-browser-tab-when-inactive)
	* [Show Orientation Lock](#show-orientation-lock)
	* [Download Images](#download-images)
	* [Ad Blocker](#ad-blocker)
* [Configuring Security Settings](#configuring-security-settings)
	* [Prevent App Exit](#prevent-app-exit)
	* [Require Passcode at Launch](#require-passcode-at-launch)
	* [Unlock using Fingerprint Reader](#unlock-using-fingerprint-reader)
	* [Restore Tabs at Startup](#restore-tabs-at-startup)
	* [Allow Access to My Location](#allow-access-to-my-location)
	* [Save Passwords for Web Pages](#save-passwords-for-web-pages)
	* [Delete Saved Passwords](#delete-saved-passwords)
	* [Delete Cookies](#delete-cookies)
	* [URL Rules](#url-rules)
* [Customizing the Browser's Appearance](#customizing-the-browsers-appearance)
	* [Customizing Menus and Toolbars](#customizing-menus-and-toolbars)
	* [Night Dimmer Level](#night-dimmer-level)
	* [Launchpad Background](#launchpad-background)
	* [Styling the App with a Custom Theme](#styling-the-app-with-a-custom-theme)
* [Using the Device Settings tab](#using-the-device-settings-tab)
	* [Configuration File URL](#configuration-file-url)
	* [License Server Address](#license-server-address)
	* [Configuring Device Vendor Specific Settings](#configuring-device-vendor-specific-settings)
* [Configuring Lock-Down Mode with the Administration Screen](#configuring-lock-down-mode-with-the-administration-screen)
* [Creating a Web Application Profile](#creating-a-web-application-profile)
	* [Invoking Custom JavaScript](#invoking-custom-javascript)
	* [Adding Client-Side CSS to Pages](#adding-client-side-css-to-pages)
	* [Applying a Custom User Agent](#applying-a-custom-user-agent)
	* [Limiting Screen Rotation](#limiting-screen-rotation)
	* [Improving Text Readability](#improving-text-readability)
	* [Enabling the Keyboard Wedge Capability](#enabling-the-keyboard-wedge-capability)
	* [Understanding the Scan Insert Mode](#understanding-the-scan-insert-mode)
	* [Using a Scan Terminator](#using-a-scan-terminator)
* [Interacting with the Browser via On-Page JavaScript](#interacting-with-the-browser-via-on-page-javascript)
	* [Defining an On-Page Scan Handler](#defining-an-on-page-scan-handler)
	* [Monitoring Network Connectivity](#monitoring-network-connectivity)
* [Using the History Screen](#using-the-history-screen)
* [Creating and Editing Bookmarks](#creating-and-editing-bookmarks)

[//]: # (TOC End)

## Introduction

Airlock Browser is a modern, feature rich, highly configurable web browser that allows mobile workers to be more productive. It has been specifically designed for ruggedized devices and is based on the popular Surfy Browser for Windows 10 and Android. Airlock Browser includes all the features you'd expect in an industrial browser such as hardware barcode reader support, client side JavaScript and CSS execution, URL rules, and remote configuration; as well as some distinctive features, such as passcode and fingerprint access, text to speech, and a fully customizable user interface.

This guide provides information on the usage and configuration of Airlock Browser, and also on developing web-based applications for Airlock Browser.

Airlock Browser for Android is compatible with devices running Android 5.0 (Lollipop) and above.

## Overview of the User Interface

When launching Airlock Browser, the launchpad is displayed. The launchpad contains tiles, which are quick links to web application profiles that you create. (See Figure 1.) You look at creating web application profiles later in the guide.

Tapping or sliding the launchpad to the left reveals the web content. By tapping the ellipsis button in the bottom right hand corner of the main view, the application bar expands.

There is an address bar, and various toolbar and menu items. Tapping the address bar allows you to enter a URL or a search query.

> **NOTE:** The buttons and menu items in the application bar and tab menu are completely customizable. A device administrator may re-order, remove, or add buttons according to requirements. You see how to achieve this later in this guide.

<figure><img src='Images/MainView.png'><figcaption>Figure 1. Launchpad and Tabbed Browser side-by-side</figcaption></figure>

When the application bar is expanded, the tab headers are revealed at the top of the screen. You can switch between tabs by scrolling and tapping the desired tab. A favicon image for the page sits in each tab along with the page title and an SSL indicator that notifies the user of an secure SSL connection. A vertical ellipsis button reveals a set of commands available for the active tab. (See Figure 2.)

<figure><img src='Images/TabMenu.png'><figcaption>Figure 2. Browser Tab Menu</figcaption></figure>

Tapping the Settings button in the application bar menu, displays the Settings screen. (See Figure 3.)

> **NOTE:** All settings are exportable, as are web application profiles. You explore how to export the browser's configuration, and even host the exported configuration on a server, to deliver browser settings to multiple devices. 

The Settings screen  offers various settings, and is divided into four sections:
* General Settings
* Security Settings
* Appearance Settings
* Device Settings

<figure><img src='Images/Settings_General.png'><figcaption>Figure 3. Settings Screen</figcaption></figure>

> **NOTE:** When first launching Airlock Browser, the app is in its non-locked-down state. All screens are visible, all settings are present on the Settings screen, and launchpad tiles are editable. However, upon setting an administration password, most settings are hidden on the Settings screen, launchpad tiles are no longer editable, and the screens available to the user are limited to those that you (as the administrator) allow in the application bar. You can decide which items, if any, are appropriate for your organization's needs and should appear in the application bar and tab menu. We explore these aspects later in this guide.

## Configuring General Settings
In this section you explore the items in the General section of the Settings screen.

### Language
By default Airlock Browser selects its user interface language according to the devices language setting. You can, however, configure the language independently, which enables administration of the device to be performed in one language, while providing Airlock Browser's interface to users of another language. 

### Search Using
When you enter text into Airlock Browser's address bar, if the text is unable to be converted to a URL, Airlock Browser performs a search using the specified search provider.

> **NOTE:** Selecting the *none* option, from the *Search using* drop down box, disables the address bar search feature.

### Screen Mode at Startup
By default, Airlock Browser launches in full-screen mode; hiding the application bar and tab headers. Set the option to *Normal* to have the application bar and tab headers displayed at launch.

> **NOTE:** The user is able to enable or disable full-screen mode using the *Full Screen* item in the application bar menu. To prevent this, remove the Full Screen item from the application bar menu via the *Customize Menus* item on the Appearance tab of the Settings screen.

### Hardware Back Button Action
To perform a back navigation of a web page, the user may either use Airlock Browser's back button in its main toolbar or the user can tap the hardware back button in the operating system's navigation bar. To prevent the hardware back button from navigating to the previous web page set the *Hardware Back Button Action* to *None*.

### Show Launchpad when App Starts
When Airlock Browser launches or is deactivated for 5 minutes, the launchpad is brought into view. To prevent this behavior, disable this option.

### Pause Browser Tab when Inactive
When switching between tabs, Airlock Browser does *not* stop playback of video on inactive tabs. Enable this option to prevent video playback when a tab is not the active tab.

### Show Orientation Lock
The orientation lock appears when the device is rotated, and allows the user to temporarily prevent Airlock Browser from switching from, or to, landscape or portrait mode. On some devices, where the accelerator is malfunctioning or not properly configured, the orientation lock can be displayed incorrectly. This option allows you to prevent the orientation lock from showing.

### Download Images
This option allows you to disable the downloading of images when a web page loads, which may be useful in low bandwidth environments, or when a web application presents images that have a large file size. 

### Ad Blocker
When enabled, the Ad Blocker stops most web page ads from being displayed.

## Configuring Security Settings
In this section you explore the items in the Security section of the Settings screen.

### Prevent App Exit
Ordinarily, the devices back button may be used to exit Airlock Browser. To prevent the app from exiting via the hardware back button, enable this option.

### Require Passcode at Launch
When *Require Passcode at Launch* is enabled, the user is presented with a passcode entry screen when the app launches or the app is deactivated for 5 minutes or longer. See Figure 4. This feature is commonly used when the device is being used by staff in a public or unrestricted environment. 

When Require Passcode at Launch is enabled, the window for the app is secured. This means that there is no app preview when cycling through apps, and taking a screenshot of the app is disabled.

> **NOTE:** The passcode **is** included in the exported configuration in an encrypted format. Thus, you are able to control the passcode for multiple devices using a hosted configuration file. 

When you set a passcode for the browser, the Require Passcode at Launch is automatically enabled. You can, however, disable Require Passcode at Launch after a passcode is set.

> **NOTE:** Do not confuse the Administration password with the passcode. The Administration password, set on the Administration screen, limits access to authorized administrators only. While the passcode limits access to authorized users only.

<figure><img src='Images/PasscodeEntry.png'><figcaption>Figure 4. Passcode Entry Screen</figcaption></figure>

### Unlock using Fingerprint Reader
If the device has a hardware fingerprint reader, then Airlock Browser can be unlocked using a fingerprint, without requiring the user to enter the passcode.

> **NOTE:** A passcode must be set to use the Fingerprint Reader unlock feature.

### Restore Tabs at Startup
When enabled, this option causes Airlock Browser to re-open the pages that were open the last time it was running.

### Allow Access to My Location
Some websites rely on knowing the GPS location of the device to provide, for example, navigation services. Disabling this option prevents web pages from accessing the location of the device.

### Save Passwords for Web Pages
When enabled, the browser prompts the user to save a password when it identifies a form submission with a password field. If the user agrees to saving the password, the password is stored in an encrypted form. When the user navigates to the same page, the browser will attempt to populate the password field.

Disabling this option prevents the saving of passwords.

> **NOTE:** Web page passwords are not included when exporting the browser's configuration.

### Delete Saved Passwords
This button deletes all saved web page passwords.

### Delete Cookies
This button deletes all cookies.

### URL Rules
URL rules determine which pages can or cannot be accessed by the browser. When navigating to a URL the list is evaluated from top to bottom. (See Figure 5.)

As soon as a match is found, the *Allow* or *Deny* rule is applied. Long press to change the order of a URL rule. Swipe a URL rule left or right to delete it. If you mistakenly delete a rule, use the undo button in the application bar to restore it.
To create a new rule, tap the *+* button in the application bar.

Wildcards are supported by default. You may also specify more complex rules using regular expressions.

> **NOTE:** An allow rule is automatically created for the URL of active web application profile (defined in the Launchpad), and it takes precedence over the URL rules defined on the URL Rules screen. 

<figure><img src='Images/UrlRules.png'><figcaption>Figure 5. URL Rules Screen</figcaption></figure>

## Customizing the Browser's Appearance
In this section you see how to change theme options and customize menu and toolbars via the Appearance section of the Settings screen.

### Customizing Menus and Toolbars
Depending on your organizations needs, you may wish to hide, show, or reorder some items in the browsers main application bar and tab menu.

The items that appear in the main application bar and tab menu are customizable. You can remove items, change their order, and even add new items.

To open the menu and toolbar editor, tap the *Customize Menus* button on the *Appearance* tab of the Settings screen.

There are three menus to choose from:
* Main Toolbar
* Main Menu
* Tab Menu

The main menu and toolbar are located together on the application bar. While the tab menu is located at the top of each browser tab. (See Figure 6.)

<figure><img src='Images/AppBarTabMenu.png'><figcaption>Figure 6. Application bar menu, toolbar, and tab menu</figcaption></figure>

Choosing *Main Toolbar* from the *Select Menu* screen displays the *Main Toolbar* customization screen. (See Figure 7.)

A checkmark alongside an item indicates that it will be displayed. You can introduce new items to the toolbar, or remove items by unchecking them. Items can be reordered by long pressing and dragging the item to a new position in the list.

There are two required items that cannot be unchecked: the *Expand* button in the Main Toolbar and the *Administration* item in the Main Menu. The Expand button is required so that the user can open the application bar menu to get to the *Administration* button.

<figure><img src='Images/CustomizingToolbar.png'><figcaption>Figure 7. Customizing the toolbar</figcaption></figure>

### Night Dimmer Level
The Night Dimmer Level setting controls the how dark the screen is when the Night Dimmer is engaged via the main application bar menu.
This setting is visible in lock-down mode to allow it to be adjusted in different lighting conditions.

### Launchpad Background

The Launchpad's background image can be replaced by an image better reflecting your organization's branding.

To select a new image, tap the existing image. A file-picker dialog is displayed. 

> **NOTE:** When exporting Airlock Browser's configuration, the Launchpad background image **is** included in the configuration. The image is optimized to limit the overall file size of the exported configuration file.

To restore the default Launchpad background image, tap the *Reset* button.

### Styling the App with a Custom Theme
The following three configurable theme colors allow you create a look to the app that better represents your organization:

* Browser Tab Background
* Application Bar Background
* and Accent Color

The three color settings also determine the appearance of other UI elements within the app, such as dialog boxes, screen backgrounds, and buttons.

The Browser Tab Background setting determines the theme type of the app. If Browser Tab Background is set to a light color (such as white or yellow), the app adopts a light theme. While a dark tone, results in a dark theme. If a light theme is in place, screen and dialog boxes are white and text is gray. Conversely, a dark theme causes dark backgrounds and white text.

> **NOTE:** Airlock Browser attempts to ensure that text is always readable. For example, if you select a light color (such as white) as your Browser Tab Background, the text color is switched to gray. 

> **NOTE:** Selecting white as both the *Accent Color* and the *Application Bar Background* causes the browsers default accent color to be used in some parts of the user interface, where readability would be otherwise compromised.

## Using the Device Settings tab

In this section you explore the items on the Device tab of the Settings screen.

### Configuration File URL
Airlock Browser can be configured remotely using an exported configuration file. The file is hosted on a server and can be used to configure multiple devices. We discuss this in greater detail in the following section: *Configuring Lock-Down Mode with the Administration Screen*  

Changing the Configuration File URL causes the browser to immediately attempt to download the configuration file and import the configuration. If configuration importation succeeds, a success message is displayed.

### License Server Address

Once you procure a license for Airlock Browser, there are two ways to apply the license. You can manually import the license using the Import License button in Administration -> Manage License. Alternatively, you can set a License Server address on the Device tab of the Settings screen. When using a License Server, the Outcoder License Server needs to be installed and running on a computer that is reachable on your organization's intranet. For further information regarding the Outcoder License Server, please see the [Outcoder License Server](http://www.outcoder.com/Products/LicenseServer/) User Guide, available on the Outcoder website.

### Configuring Device Vendor Specific Settings
Airlock Browser allows configuration of vendor specific settings for devices manufactured by Honeywell, Panasonic, Zebra, Datalogic, and Bluebird. Different device types offer different options for their hardware. To configure Airlock Browser for a specific device type, tap *Vendor Configurations* from the *Device* tab of the Settings screen. A list of device vendors is displayed. Tapping a vendor name opens the *Device Configuration* screen for that vendor. (See Figure 8.)

The list of available settings varies for each of the vendor device types.

The Device Configuration screen uses a tabbed interface. You can tap the tab header or swipe to switch between configuration categories.

> **NOTE:** Multiple vendor specific configuration may be configured on the device. The correct vendor configuration is applied automatically depending on the device. In this way, you are able to support multiple device vendors using the same configuration file.

<figure><img src='Images/DC_DeviceConfiguration.png'><figcaption>Figure 8. Device Configuration screen</figcaption></figure>

Configure barcode symbologies by tapping the *Barcode Symbologies* button. A list of supported symbologies is displayed. (See Figure 9.)

It may improve barcode scanning performance to disable those symbologies that will not be needed. Tap on a symbology to configure it.

> **NOTE:** For information regarding each vendor specific setting, including barcode symbologies, please see the documentation supplied by the vendor.

<figure><img src='Images/DC_Symbologies.png'><figcaption>Figure 9. Symbology Selection screen</figcaption></figure>

Each symbology may be enabled or disabled. (See Figure 10.)
When a symbology is disabled it appears dimmed-out in the Symbology Selection screen. 

<figure><img src='Images/DC_Symbology.png'><figcaption>Figure 10. Symbology screen</figcaption></figure>

Vendor device configurations *are* included in the exported configuration file.

## Configuring Lock-Down Mode with the Administration Screen

The Administration Screen provides a step-by-step guide on how to set up the browser for your organization. (See Figure 11.)  

The first two steps direct you to create application profiles on the *Launchpad* and to configure the app via the *Settings* screen.

Step 3, *Set a configuration password* is important because, once set, Airlock Browser will require the user to enter the password to access the Administration screen. Other parts of the application are also placed in lock-down mode, such as the Settings screen; which displays only a subset of the settings. 

> **NOTE:** You may also decide to disable the *Settings* menu item in the application bar. In this case, the only way to open the Settings screen is via the Administration screen after entering the configuration password.

The final step, 'Export the configuration' saves the settings and web profiles to a file. The configuration file can then be imported to another device using the 'Import Configuration' item on the Administration screen. Alternatively, the configuration file can be hosted on a web server and automatically imported using the 'Configuration file URL' option on the Device tab of the Settings screen.

If you specify the 'Configuration file URL' option, Airlock Browser periodically checks for an updated configuration and automatically imports the configuration; thereby allowing you to easily configure multiple devices at once.

<figure><img src='Images/Administration.png'><figcaption>Figure 11. Administration Screen</figcaption></figure>

Tapping the Manage License item displays the Manage License screen. (See Figure 12.)

The Manage License screen allows you to export the serial number of the product, which can be provided to Outcoder or your supplier to procure a license. You can use the Save button, to save the serial number to a file. The *Copy* button copies the serial to the devices clipboard. While the *Share* button allows you to select another app, such as an email client, to send the serial number to yourself or a third-party.

Once a license has been procured, you can import the license using the *Import* item on the Manage License screen.

> **NOTE:** A license file can contain licenses for multiple devices.

To deploy licenses to multiple devices in the field, the [Outcoder License Server](http://www.outcoder.com/Products/LicenseServer/) may be used.

<figure><img src='Images/ManageLicense.png'><figcaption>Figure 12. Manage License Screen</figcaption></figure>

## Creating a Web Application Profile
Web application profiles (AKA applications) represent web sites. They allow you to define the behavior of Airlock Browser when navigating to pages within your organization. Each application is represented as a tile on the launchpad. Tapping on a tile applies the settings for that application and opens the Web Address in a new browser tab. 

To create a new web application profile, tap the + tile on the launchpad. (See Figure 13.)

The Web Address edit box defaults to the URL of the current active tab.

To edit an existing web application profile, long press its tile in the launchpad. A menu appears allowing you to edit the tile or delete the tile. When a tile is deleted from the applications section in the launchpad, it is deleted from the device.

The web application profile includes a *Title* field, the *Web Address* (URL), a tile color option, and several other options that we now explore.

<figure><img src='Images/WebApplication.png'><figcaption>Figure 13. Web Application Profile Screen</figcaption></figure>

### Invoking Custom JavaScript
The Web Application Profile *JavaScript* option allows you to edit or create JavaScript that is executed when, for example, the web page loads or when a barcode scan occurs.

The list of JavaScript items is presented on the JavaScript screen. (See Figure 14.) Each item displays the title of the script and the event when the JavaScript is invoked on the web page.

New JavaScript items are created using the *+* button in the application bar. To delete a JavaScript item, swipe it left or right. If you mistakenly delete an item, use the undo button in the application bar to restore it.

<figure><img src='Images/JavaScripts.png'><figcaption>Figure 14. JavaScript List</figcaption></figure>

Tapping a JavaScript item displays the JavaScript editor. (See Figure 15.)

The following are the three available execution events:
* On Page Load
* Before Barcode Wedge
* After Barcode Scan

If *On Page Load* is selected, the script is invoked on the web page as soon as the page has loaded.

If *Before Barcode Wedge* is selected, the script is invoked before text is inserted into a field.

> **NOTE:** When *Before Barcode Wedge* is selected, the *Keyboard Wedge* option must be enabled in the Web Application Profile settings for the script to be invoked.

If *After Barcode Scan* is selected, the script is invoked after a barcode scan is performed, regardless of the *Keyboard Wedge* option in the Web Application Profile settings.

JavaScript may be entered directly into the JavaScript field. Alternatively, use the Import button in the application bar to browse for a JavaScript file. This allows you to edit the file with the convenience of a desktop editor. 

When importing a file, you are given the option to append its content to the JavaScript field or replace the content in the JavaScript field.

<figure><img src='Images/JavaScript.png'><figcaption>Figure 15. JavaScript Editor</figcaption></figure>

### Adding Client-Side CSS to Pages
If you have a legacy web application that was not designed for a mobile device, you may apply custom CSS to the page to improve its appearance and usability. Tap the *CSS* button on the Web Application Profile screen to display the CSS editor.

When a page loads, the CSS is applied.

<figure><img src='Images/Css.png'><figcaption>Figure 16. CSS Editor</figcaption></figure>

### Applying a Custom User Agent
Web applications often use a device's User Agent to determine the capabilities of the device and how to render content. Sometimes it is useful to impersonate a different device to coerce the web application to render content in a particular manner. 

To achieve this in Airlock Browser, paste a custom user agent into the User Agent field. The user agent is applied for the web application profile's browser tab. Each web application profile's user agent setting is applied independently.

### Limiting Screen Rotation
In some scenarios it may make sense to limit the automatic rotation of the screen to portrait or landscape orientation. Some pages may not render well in landscape (or portrait). To lock the orientation for web application, set the *Screen Rotation* option to either *Lock Portrait* or *Lock Landscape*. By default, Screen Rotation is set to *Dynamic*, meaning that the device is free to rotate the screen depending on the orientation.

### Improving Text Readability
Sometimes web pages that were originally designed for the desktop and not for mobile devices may have text that is too small to read. To increase (or decrease) the size of the text for a page, use the *Web Page Text Size* option on the Application screen.

### Enabling the Keyboard Wedge Capability
In Airlock Browser, when a scan completes using the hardware barcode reader, the text is automatically pushed into the currently selected field of the web page. If you wish to disable this function, or if you require greater control over this capability and wish to rely solely on custom JavaScript for handling barcode events, you can disable the keyboard wedge function using the *Keyboard Wedge* option on the Application screen.

### Understanding the Scan Insert Mode
When Airlock Browser's Keyboard Wedge capability is enabled, text is automatically inserted to the active field on the active browser tab. The barcode text, by default, replaces the content in the field. Use the *Scan Insert Mode* option to append or prepend the barcode to the existing content within the field.

### Using a Scan Terminator
The Application's *Scan Terminator* option allows you to provide a key, or keys, that are invoked in the browser when the keyboard wedge is used to insert a barcode into a field. Use combinations of *{Tab}* and *{Enter}*. Use *{Tab}* to indicate that the tab key should be invoked to skip to the next field on a page. Use *{Enter}* to invoke the enter key when a scan completes.

## Interacting with the Browser via On-Page JavaScript
In addition to Airlock Browsers client-side JavaScript, you can also interact with the browser using on-page JavaScript. Airlock Browser offers a JavaScript API that is consumable from web pages to respond to power events, monitor network availability, and handle barcode scanning events.

### Defining an On-Page Scan Handler
You declare an on-page scan handler using a meta tag, placed in the *Head* element of an HTML document, as shown in the following example:

```html
<meta http-equiv="ScannerNavigate" 
      content="Javascript:onScannerNavigate('%s', '%s', '%s', '%s', '%s', '%s');"/>
```

The *http-equiv* attribute indicates to Airlock Browser that when a scan event occurs, to call the *onScannerNavigate* function. The `%s` arguments are replaced at runtime with the following:
* barcodeData
* deviceId
* symbology
* timestamp
* dataLength
* label

The example application, which comes pre-installed with Airlock Browser, demonstrates the on-page scan handling capability. Its scan handler function is shown in the following excerpt:

```javascript
function onScannerNavigate(barcodeData, deviceId, 
            symbology, timestamp, dataLength, label)
{
    var messageDiv = document.getElementById("messageDiv");
    messageDiv.innerText =
        label + "<br />"
        + barcodeData + "<br />"
        + deviceId + "<br />"
        + symbology + "<br />"
        + timestamp + "<br />"
        + dataLength;
}
```    

On the page there exists a div `<div id="messageDiv"></div>`. When a scan event occurs the div is populated with the content of values supplied to the *onScannerNavigate* function.

You can use the barcode scan information to perform whatever custom activity you require.

### Monitoring Network Connectivity
Airlock Browser detects when there is a change in network connectivity, and can notify your page via a JavaScript handler. To define a network connectivity JavaScript handler, declare the function in a meta-tag, as shown:

```html
<meta http-equiv="SignalNavigate" 
      content="Javascript:onSignalNavigate('%s', '%s', '%s');"/>
```

The example application, which comes pre-installed with Airlock Browser, demonstrates the network connection monitoring capability. Its handler function is shown in the following excerpt:

```javascript
function onSignalNavigate(signalStrength, essID, macaddress)
{
    var messageDiv = document.getElementById("messageDiv");
    messageDiv.innerText =
        signalStrength + " <br /> "
        + essID + " <br /> "
        + macaddress + " <br /> ";
}
```

On the page there exists a div `<div id="messageDiv"></div>`. When a network connectivity event occurs the div is populated with the content of values supplied to the *onSignalNavigate* function.

## Using the History Screen
The History screen displays a searchable list of pages URLs, grouped by day. (See Figure 17.)

To delete the history items, tap the bin icon in the application bar.

> **NOTE:** To prevent access to the History screen, uncheck the *History* item on the *Main Menu* screen, located at Settings -> Appearance -> Customize Menus -> Main Menu.

<figure><img src='Images/History.png'><figcaption>Figure 17. History screen</figcaption></figure>

## Creating and Editing Bookmarks

The *Bookmarks* screen allows the user to edit bookmarks, delete bookmarks, and to create new bookmark folders. (See Figure 18.) Tapping a bookmark closes the Bookmarks screen and opens the bookmark in a new browser tab. 

To delete bookmarks or folders, select the list icon in the toolbar. Checkboxes appear next to each bookmark and folder, allowing you to delete individual bookmarks or entire folders. If you mistakenly delete a bookmark or a bookmark folder, use the undo button, in the application bar menu, to restore the item or items.

> **NOTE:** To prevent access to the Bookmarks screen, uncheck the *Bookmarks* item on the *Main Menu* screen, located at Settings -> Appearance -> Customize Menus -> Main Menu.

<figure><img src='Images/Bookmarks.png'><figcaption>Figure 18. Bookmarks screen</figcaption></figure>

To create a new bookmark, select *Add Bookmark* from the main screen's tab menu. The *Add to Bookmarks* dialog allows you to enter a name for the bookmark, which defaults to the page title. The URL is also editable.

You can choose to place the bookmark into an existing folder within the bookmarks screen, or leave the bookmark in the unsorted folder.

<figure><img src='Images/BookmarkAdd.png'><figcaption>Figure 19. Add to Bookmarks dialog</figcaption></figure>





