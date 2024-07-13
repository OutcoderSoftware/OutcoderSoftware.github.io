---
author: Violet Durand
title: How to Do Client-Side Scripting with Airlock Browser
published: true
---

# How to Do Client-Side Scripting with Airlock Browser

Airlock Browser includes a rich set of client-side JavaScript APIs that allow you to control many aspects of the browser and device. Airlock Browser JavaScript APIs can be invoked from an on-page script or from a remote web application JavaScript event handler. Here’s a step-by-step guide to get started:

## 1. Creating a Web Application Profile
- Open Airlock Browser and navigate to the launchpad.
- Tap the "+" tile to create a new web application profile.
- Enter the title, web address, and choose the tile color.

## 2. Invoking Custom JavaScript
- Tap the JavaScript button on the Web Application Profile screen.
- Create or edit JavaScript that executes during specific events, such as page load or barcode scan.
- Use the "+" button to add new JavaScript items and select the event trigger (e.g., On Page Load, Before Barcode Wedge, After Barcode Scan).

## 3. Handling Barcode Scan Events
- Airlock Browser provides barcode data to client-side JavaScript as an immutable object named `scanData`.
- Use fields like `BarcodeData`, `SourceScanner`, and `Symbology` to handle and manipulate scan results.

## 4. Adding Client-Side CSS
- Improve the appearance and usability of legacy web applications by applying custom CSS.
- Tap the CSS button on the Web Application Profile screen and use the CSS editor to add your styles.

## 5. Applying a Custom User Agent
- Some web applications require specific User Agents to render content correctly.
- Paste a custom User Agent string into the User Agent field in the Web Application Profile settings.

### Example: Adding a Custom JavaScript


1. **Creating a New Script**
   - Use the JavaScript editor to write or import your script.
   - Example:
     ```javascript
     console.log("Page loaded successfully.");
     ```
   - Select the execution event (e.g., On Page Load).

2. **Testing the Script**
   - Reload the web application profile by tapping on the application tile.
   - Verify that the script runs as expected when the event triggers.



For more detailed instructions, refer to the [Airlock Browser User Guide](https://outcoder.com/Products/AirlockBrowser/UserGuides/V2/).
