// server side, manages the storage of the stages
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

// connect to mongodb
const MONGO_URL = process.env.MONGO_URL;
mongoose
	.connect(MONGO_URL)
	.then(() => console.log("connected to mongodb"))
	.catch((err) => console.error("error: ", err));
// mongoose schema
const stateSchema = new mongoose.Schema({
	name: String,
});
const State = mongoose.model("State", stateSchema);

// populate the states
async function populateStates() {
	const states = [
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming",
	];
	for (const state of states) {
		const existingState = await State.findOne({ name: state });
		if (!existingState) {
			await new State({ name: state }).save();
			console.log(`saved state: ${state}`);
		}
	}
}
populateStates();

// fetch states
app.get("/states", async (req, res) => {
	const states = await State.find();
	res.json(states);
});

app.listen(3000, () => {
	console.log("server is running at port 3000");
});
