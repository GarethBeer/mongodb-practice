const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testaroo", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

before(done => {
	mongoose.connection
		.once("open", () => {
			console.log("connection has been made, let the fireworks begin..");
			done();
		})
		.on("error", err => {
			console.log(`connection error: ${err}`);
		});
});

beforeEach(done => {
	mongoose.connection.collections.mariochars.drop(() => {
		done();
	});
});
