---
layout: Padded
title: Outcoder - Airlock Browser for Android - Downloads
---

# Download Airlock Browser for Android

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
    $(document).ready (function () {
        $.getJSON("https://api.github.com/repos/OutcoderSoftware/AirlockBrowser/releases/latest").done(function (data) {
            $ ('#prod-download').attr ('href', data.assets[0].browser_download_url); 
			$ ('#versionSpan').text(data.name); 
        })
    });
</script>

<ul>
<li>
<a id="prod-download">Airlock Browser <span id="versionSpan"></span> for Android</a>
</li>
<li>
<a href="../UserGuides/V2/">User Guide</a>
</li>
</ul>


* [All Releases](https://github.com/OutcoderSoftware/AirlockBrowser/releases)
