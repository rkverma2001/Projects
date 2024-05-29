const express = require("express");

const mongoose = require("mmongoose");

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/authapp")
  .then(() => console.log("Mongoose is connected"));

app.use("/api/v1", authRoutes);

app.listen(8080, () => console.log("App is up and running at port 8080"));
