---
title: Example Applications
layout: IndustrialBrowserExample
---

<p><br/></p>
<div id="AndroidLinks">
	<h2>About This Page</h2>
	This page links to a set of examples that demonstrate some of the features of Airlock Browser.
	This page is located on the <a href="http://outcoder.com">Outcoder</a> website
	<br/>
	For more information see the <a href="https://outcoder.com/Products/AirlockBrowser/UserGuides/V1/AirlockBrowserUserGuide.html">Airlock Browser User Guide</a>.
	<br/>
	<br/>
</div>

<h3>Application Samples</h3>
<ul>
	<li><a href="Wedge01/">Demonstrating the Keyboard Wedge</a></li>
	<li><a href="ScanHandler/">Defining an On-Page Scan Handler</a></li>
	<li><a href="PreScanAction/">Preparing for Data with a Pre-Scan Action</a></li>
	<li><a href="PostScanAction/">Finalizing a Scan with a Post-Scan Action</a></li>
	<li><a href="NetworkAvailability/">Monitoring Network Availability</a></li>
	<li><a href="PowerSource/">Responding to Power Events</a></li>
</ul>

<script type="text/javascript">
	var ua = navigator.userAgent,
		browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrome\W\d/.test(ua) ? 'gc' : /Chromium\W\d/.test(ua) ? 'oc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
		os = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
		mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
		tablet = /Tablet|iPad/i.test(ua),
		touch = 'ontouchstart' in document.documentElement;

	var androidDiv = document.getElementById("AndroidLinks");
	if (mobile === 'a')
	{
		androidDiv.style.display = 'block';
	}
	else
	{
		androidDiv.style.display = 'none';
	}
</script>