const express = require("express");

const fileRoutes = require("./routes/file");

const app = express();

app.use(express.urlencoded());

app.use(fileRoutes);

app.listen(8080, () => console.log("App is up and running on port 8080"));
