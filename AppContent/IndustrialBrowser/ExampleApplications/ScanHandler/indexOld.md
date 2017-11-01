---
layout: None
---
<html>
<head>
	<title>Defining an On-Page Scan Handler - Airlock Browser</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="robots" content="noindex" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/normalize.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/skeleton.css" rel="stylesheet" />
	<link href="/AppContent/IndustrialBrowser/ExampleApplications/Css/ExampleApplications.css" rel="stylesheet" />
	<script src="/AppContent/IndustrialBrowser/ExampleApplications/JavaScript/IndustrialBrowser.js" type="text/javascript"></script>
	<meta http-equiv="ScannerNavigate" content="Javascript:onScannerNavigate('%s', '%s', '%s', '%s', '%s', '%s');"/>
</head>
<body>
    <h2>Defining an On-Page Scan Handler</h2>

    <p>On this page, the barcode reader on your device is used to populate a div element using a custom JavaScript handler, which is defined on the page itself.</p>
    <p>Press the barcode reader hardware button on your device and scan a barcode. The barcode information should be displayed below.</p>

    <script type="text/javascript">
        function onScannerNavigate(barcodeData, deviceId, symbology, timestamp, dataLength, label)
        {
            var messageDiv = document.getElementById("messageDiv");
            messageDiv.innerHTML =
                formatForHtml(label) + "<br />"
                + formatForHtml(barcodeData) + "<br />"
                + formatForHtml(deviceId) + "<br />"
                + formatForHtml(symbology) + "<br />"
                + formatForHtml(timestamp) + "<br />"
                + formatForHtml(dataLength);
        }
    </script>

    <label for="messageDiv">Barcode Information</label>
    <div id="messageDiv" class="highlightBackground" style="margin-bottom: 50px;font-size: small">Barcode information will appear here</div>
    
    <h3>Understanding Scan Handling</h3>
    <p>The page contains a meta tag within its head tag, as shown:</p>
    <pre>&lt;meta http-equiv=&quot;ScannerNavigate&quot; 
      content=&quot;Javascript:onScannerNavigate(&#39;%s&#39;, &#39;%s&#39;, &#39;%s&#39;, &#39;%s&#39;, &#39;%s&#39;, &#39;%s&#39;);&quot;/&gt;</pre>
    
    <p>The page contains a div with an id of messageDiv:</p>
    <pre>&lt;div id=&quot;messageDiv&quot;&gt;&lt;/div&gt;</pre>
    
    <p>The JavaScript handler (onScannerNavigate) receives the barcode information and displays it like so:</p>
    <pre>&lt;script type=&quot;text/javascript&quot;&gt;
    function onScannerNavigate(barcodeData, deviceId, symbology, timestamp, dataLength, label)
    {
        var messageDiv = document.getElementById(&quot;messageDiv&quot;);
        messageDiv.innerText =
            label + &quot;&lt;br /&gt;&quot;
            + barcodeData + &quot;&lt;br /&gt;&quot;
            + deviceId + &quot;&lt;br /&gt;&quot;
            + symbology + &quot;&lt;br /&gt;&quot;
            + timestamp + &quot;&lt;br /&gt;&quot;
            + dataLength;
    }
&lt;/script&gt;</pre>
</body>
</html>
