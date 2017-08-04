---
layout: Padded
title: Outcoder - Request Quote
customjs:
 - RequestQuote.js
---

<div class="col-lg-6">
<div class="contact-form-cont">
<h3>Request Quote</h3>
<form action="https://formspree.io/sales@outcoder.com" method="post">
    <input type="text" name="name" class="form-control" placeholder="Name" />
    <p class="help-block"></p>
    <input type="text" name="Organization" class="form-control" placeholder="Organization" />
    <p class="help-block"></p>
    <input type="email" name="_replyto" id="email" class="form-control" placeholder="Email" />
    <p class="help-block"></p>
    <input type="text" name="LicenseCount" class="form-control" placeholder="Number of Licenses" />
    <p class="help-block"></p>
    <textarea type="text" name="MessageBody" class="form-control" placeholder="Message"></textarea>
    <input type="hidden" name="_next" value="https://outcodersoftware.github.io/Products/RequestQuote/FormSubmitted.html" />
    <input type="hidden" name="_subject" value="Request Quote" />
    <input type="hidden" name="_format" value="plain" />
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="ProductId" id="ProductId" />
    <p class="help-block"></p>
    <input type="submit" value="Send" id="validate" class="btn btn-primary btn-xl" />
</form>
</div>
</div>

<h2 id='result'></h2>

