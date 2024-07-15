const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log(error));
