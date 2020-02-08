const assert = require("assert");
const MarioChar = require("../models/MarioChar");

describe("saving records", () => {
	it("saves a record to the database", done => {
		const char = new MarioChar({
			name: "Donkey Kong",
			weight: 300
		});
		char.save().then(() => {
			assert(char.isNew === false);
			done();
		});
	});
});
