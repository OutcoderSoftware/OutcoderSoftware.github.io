---
layout: None
title: Simple Input Fields
---

<h1>Input Fields</h1>

<style>
	.form-container {
		max-width: calc(100% - 100px); /* 50px from each side */
		margin: 0 auto;
		padding: 20px;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input, textarea {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		color: white;
		background-color: #007bff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>

<div class="form-container">
	<form>
		<div class="form-group">
			<label for="input1">First Input</label>
			<input type="text" id="input1" name="input1">
		</div>
		<div class="form-group">
			<label for="text1">Text Area Input</label>
			<textarea id="text1" name="textarea" rows="3"></textarea>
		</div>
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
</div>