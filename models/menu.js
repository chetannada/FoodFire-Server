const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: String,
      required: true,
      index: true // for fast lookup
    },
    data: {
      type: Object,
      required: true
    }
  },
  { strict: false }
);

module.exports = mongoose.model("menu", menuSchema);
