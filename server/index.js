const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect();

app.listen(3000, () => {
	console.log("Serving is Running");
})