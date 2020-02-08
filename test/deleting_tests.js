const assert = require("assert");
const MarioChar = require("../models/MarioChar");

describe("Deletes records", () => {
	let char;
	beforeEach(done => {
		char = new MarioChar({
			name: "Donkey Kong",
			weight: 300
		});
		char.save().then(() => {
			assert(char.isNew === false);

			done();
		});
	});

	it("deletes one record from the database using name", done => {
		MarioChar.findOneAndRemove({ name: "Donkey Kong" }).then(() => {
			MarioChar.findOne({ name: "Donkey Kong" }).then(result => {
				assert(result === null);
				done();
			});
		});
	});
});
