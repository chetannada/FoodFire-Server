const mongoose = require("mongoose");

module.exports.connectToMongoDB = () => {
  // Connect to MongoDB Atlas using the connection string from environment variables
  const MONGODB_ATLAS_CONNECTION = process.env.MONGODB_ATLAS_CONNECTION;

  mongoose
    .connect(MONGODB_ATLAS_CONNECTION)
    .then(() => console.log(`✅ Connected to database`))
    .catch((err) => console.error("MongoDB connection error:", err));
};
