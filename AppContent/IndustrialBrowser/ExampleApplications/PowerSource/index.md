---
layout: None
---
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<title>Responding to Power Events</title>
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/normalize.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/skeleton.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/ExampleApplications.css" rel="stylesheet" />
	<script src="/AppContent/IndustrialBrowser/ExampleApplications/JavaScript/IndustrialBrowser.js" type="text/javascript"></script>

	<meta http-equiv="BatteryNavigate" 
		  content="Javascript:onBatteryNavigate('%s', '%s', '%s', '%s', '%s');"/>

	<script type="text/javascript">
		function onBatteryNavigate(acLineStatus, batteryStrength, backupBatteryStrength, batteryChemistry, minutesRemaining)
		{
			var messageDiv = document.getElementById("messageDiv");
			messageDiv.innerHTML =
				"AC Line Status: " + formatForHtml(acLineStatus) + "<br/>"
				+ "Battery Strength: " + formatForHtml(batteryStrength) + "<br/>"
				+ "Backup Battery Strength: " + formatForHtml(backupBatteryStrength) + "<br/>"
				+ "Battery Chemistry: " + formatForHtml(batteryChemistry) + "<br/>"
				+ "Minutes Remaining: " + formatForHtml(minutesRemaining) + "<br/>";
		}
	</script>
</head>
<body>
	<h2>Responding to Power Events</h2>

	<p>On this page, when a power event is detected on your device, such as when the device is disconnected from a power supply, 
		a JavaScript handler is invoked.</p>
	<p>Try unplugging your device from its power supply.</p>
	
	<label for="messageDiv">Event Information</label>
	<div id="messageDiv" class="highlightBackground" style="margin-bottom: 50px;font-size: small">Event information will appear here</div>
	
	<h3>Understanding Power Source Event Handling</h3>
	<p>The page contains a meta tag within its head tag, as shown:</p>
	<pre>&lt;meta http-equiv=&quot;BatteryNavigate&quot; 
		content=&quot;Javascript:onBatteryNavigate('%s', '%s', '%s', '%s', '%s');&quot;/&gt;</pre>
	
	<p>The page contains a div with an id of messageDiv:</p>
	<pre>&lt;div id=&quot;messageDiv&quot;&gt;&lt;/div&gt;</pre>
	
	<p>The JavaScript handler (onScannerNavigate) receives the barcode information and displays it like so:</p>
	<pre>function onBatteryNavigate(acLineStatus, batteryStrength, backupBatteryStrength, batteryChemistry, minutesRemaining)
{
	var messageDiv = document.getElementById(&quot;messageDiv&quot;);
	messageDiv.innerHTML =
		&quot;AC Line Status: &quot; + formatForHtml(acLineStatus) + &quot;&lt;br/&gt;&quot;
		+ &quot;Battery Strength: &quot; + formatForHtml(batteryStrength) + &quot;&lt;br/&gt;&quot;
		+ &quot;Backup Battery Strength: &quot; + formatForHtml(backupBatteryStrength) + &quot;&lt;br/&gt;&quot;
		+ &quot;Battery Chemistry: &quot; + formatForHtml(batteryChemistry) + &quot;&lt;br/&gt;&quot;
		+ &quot;Minutes Remaining: &quot; + formatForHtml(minutesRemaining) + &quot;&lt;br/&gt;&quot;;
}</pre>
</body>
</html>
