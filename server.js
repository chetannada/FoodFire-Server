const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

const router = require("./routers/router");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
