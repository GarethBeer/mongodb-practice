const mongoose = require("mongoose");

mongoose.connect("mongodb:localhost/testaroo");

mongoose.connection
	.once("open", () => {
		console.log("connection has been made, let the fireworks begin..");
	})
	.on("error", err => console.log(`connection error: ${err}`));
