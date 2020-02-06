const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

const MarioChar = mongoose.model("marioChar", MarioCharSchema);

module.exports = MarioChar;
