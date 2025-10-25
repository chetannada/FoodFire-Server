const express = require("express");
const dotenvFlow = require("dotenv-flow");
const cors = require("cors");
const { connectToMongoDB } = require("./database/connection");

// dotenv-flow is used to manage environment variables across different environments
dotenvFlow.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB
connectToMongoDB();

const router = require("./routers/router");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
