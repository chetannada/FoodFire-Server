const mongoose = require("mongoose");

// Define a loose schema to allow flexible structure
const restaurantSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("restaurant", restaurantSchema);
