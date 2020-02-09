const assert = require("assert");
const MarioChar = require("../models/MarioChar");

describe("finding records", () => {
	let char;
	beforeEach(done => {
		char = new MarioChar({
			name: "Donkey Kong",
			weight: 300
		});
		char.save().then(() => {
			done();
		});
	});

	it("finds one record from the database uses name", done => {
		MarioChar.findOne({ name: "Donkey Kong" }).then(result => {
			assert(result.name === "Donkey Kong");
			done();
		});
	});
	it("finds one record from the database using ID", done => {
		MarioChar.findOne({ _id: char._id }).then(result => {
			assert(result._id.toString() === char._id.toString());
			done();
		});
	});
});
