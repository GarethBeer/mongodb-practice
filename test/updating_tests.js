const assert = require("assert");
const MarioChar = require("../models/MarioChar");

describe("Updating records", () => {
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

	it("updates one record in the database", done => {
		MarioChar.findOneAndUpdate({ name: "Donkey Kong" }, { name: "Mario" }).then(
			() => {
				MarioChar.findById({ _id: char._id }).then(result => {
					assert(result.name === "Mario");
					done();
				});
			}
		);
	});

	it("Increments the weight by 1", done => {
		MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(() => {
			MarioChar.findOne({ name: "Donkey Kong" }).then(result => {
				assert(result.weight === 301);
				done();
			});
		});
	});
});
