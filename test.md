---
layout: test
title: Test page 1
---
<h1>{{ page.title }}</h1>

<h1>Three Text Input Fields</h1>
    <form>
        <div class="form-group">
            <label for="input1">First Input</label>
            <input type="text" id="input1" name="input1">
        </div>
		<label for="input1">Text Area Input</label>
		<textarea id="text1" name="textarea" rows="1" cols="50">

</textarea>
        <div class="form-group">
            <label for="input2">Second Input</label>
            <input type="text" id="input2" name="input2">
        </div>
        <div class="form-group">
            <label for="input3">Third Input</label>
            <input type="text" id="input3" name="input3">
        </div>
        <button type="submit">Submit</button>
    </form>