---
layout: None
---
<html>
<head>
	<title>Monitoring Network Availability - Airlock Browser</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="robots" content="noindex" />
	
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/normalize.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/skeleton.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/ExampleApplications.css" rel="stylesheet" />
	<script src="/AppContent/IndustrialBrowser/ExampleApplications/JavaScript/IndustrialBrowser.js" type="text/javascript"></script>

	<meta http-equiv="SignalNavigate" 
		  content="Javascript:onSignalNavigate('%s', '%s', '%s');"/>

	<script type="text/javascript">
		function onSignalNavigate(signalStrength, essId, macaddress)
		{
			var messageDiv = document.getElementById("messageDiv");
			messageDiv.innerHTML =
				formatForHtml(signalStrength) + "<br/>"
				+ formatForHtml(essId) + "<br/>"
				+ formatForHtml(macaddress) + "<br/>";
		}
	</script>

</head>
<body>
	<h2>Monitoring Network Availability</h2>

	<p>On this page, when a network availability change is detected on your device, such as losing a wi-fi connection, 
		a JavaScript handler is invoked.</p>
	<p>Try disabling your wi-fi connection by switching to flight mode on your device.</p>
	
	<label for="messageDiv">Event Information</label>
	<div id="messageDiv" class="highlightBackground" style="margin-bottom: 50px;font-size: small">Event information will appear here</div>
	
	<h3>Understanding Network Availability Handling</h3>
	<p>The page contains a meta tag within its head tag, as shown:</p>
	<pre>&lt;meta http-equiv=&quot;SignalNavigate&quot; 
		content=&quot;Javascript:onSignalNavigate('%s', '%s', '%s');&quot;/&gt;</pre>
	
	<p>The page contains a div with an id of messageDiv:</p>
	<pre>&lt;div id=&quot;messageDiv&quot;&gt;&lt;/div&gt;</pre>
	
	<p>The JavaScript handler (onScannerNavigate) receives the barcode information and displays it like so:</p>
	<pre>function onSignalNavigate(signalStrength, essID, macaddress)
{
	var messageDiv = document.getElementById(&quot;messageDiv&quot;);
	messageDiv.innerText =
		signalStrength + &quot; &lt;br /&gt; &quot;
		+ essID + &quot; &lt;br /&gt; &quot;
		+ macaddress + &quot; &lt;br /&gt; &quot;;
}</pre>
</body>
</html>

