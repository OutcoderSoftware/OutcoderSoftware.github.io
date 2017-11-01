---
title: Preparing for Data with a Pre-Scan Action
layout: IndustrialBrowserExample
---

<h2>Preparing for Data with a Pre-Scan Action</h2>
<p>A pre-scan action allows you to execute any JavaScript on a page before the scan data is pushed into an input field.
    You could trigger a button click, navigate within the page, or switch focus to a field designed to accept the scan data; 
    as this sample demonstrates. 
</p>
    
<p>The example application has been configured to execute some JavaScript 
    to locate, select, and clear a text box before the scanned data is inserted using the keyboard wedge capability.
    You can view the JavaScript by long pressing and editing the app within Surfy Industrial.
</p>
    
<p>You can view the JavaScript in the configuration settings for the Example application, which is located on the launchpad. 
    Within the launchpad long press the Example app's tile and select the edit icon.</p>

<p>Please note that pre-scan JavaScript is only enabled when the keyboard wedge is enabled.</p>

<p>Press the barcode reader hardware button on your device and scan a barcode. 
    The barcode information should be displayed in the second text box below.</p>

<label for="field1">Field 1</label>
<input id="field1" type="text"/>
<label for="preScanExampleField2">Field 2</label>
<input id="preScanExampleField2" type="text"/>
<label for="field3">Field 3</label>
<input id="field3" type="text"/>
    
<h3>Understanding Pre-Scan Actions</h3>
    
<p>This page contains three input fields, as shown:</p>
<pre>&lt;input id=&quot;field1&quot; type=&quot;text&quot;/&gt;

&lt;input id=&quot;preScanExampleField2&quot; type=&quot;text&quot;/&gt;

&lt;input id=&quot;field3&quot; type=&quot;text&quot;/&gt;</pre>

<p>The example application is configured with the following pre-scan JavaScript:</p>
<pre>var field = document.getElementById(&#39;preScanExampleField2&#39;);
if (field != null) {
field.innerText = &#39;&#39;;
field.focus();
}</pre>
    
<p>When the device scans a barcode, the JavaScript is executed on the page. This occurrs before sending the barcode to the page (if keyboard wedge is enabled).
</p>
<p>TIP: You can combine a pre-scan action with a post-scan action to change and restore focus to an active page element.</p>

