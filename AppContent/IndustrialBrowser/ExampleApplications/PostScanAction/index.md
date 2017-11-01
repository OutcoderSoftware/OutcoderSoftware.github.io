---
title: Finalizing a Scan with a Post-Scan Action
layout: IndustrialBrowserExample
---
<h2>Finalizing a Scan with a Post-Scan Action</h2>
<p>A post-scan action allows you to execute any JavaScript on a page after the scan data is received by the page.
	You could navigate to a different page, switch focus to a different field, or trigger a button click; as this example demonstrates. 
</p>
<p>On this page, the example application has been configured to execute some JavaScript 
	to locate and simulate a tap of a button. Tapping the button displays an alert.
	Tap the 
</p>
<p>Press the barcode reader hardware button on your device and scan a barcode. 
	A message is displayed when a barcode is read.</p>
	
<button id="postScanButton" onclick="alert('button clicked!');return false;">Show Message</button>
<label for="field1">Field 1</label>
<input id="field1" type="text"/>
	
<h3>Understanding Post-Scan Actions</h3>
	
<p>This page contains a button, as shown:</p>
<pre>&lt;button id=&quot;postScanButton&quot; onclick=&quot;alert(&#39;button clicked!&#39;);return false;&quot;&gt;Show Message&lt;/button&gt;</pre>

<p>The example application is configured with the following post-scan JavaScript:</p>
<pre>var field = document.getElementById(&#39;postScanButton&#39;);
if (field != null) {
	field.click();
}</pre>
	
<p>When the device scans a barcode, after sending the barcode to the page
	the JavaScript is executed on the page. This invokes the button's click event; opening a alert box.
</p>
