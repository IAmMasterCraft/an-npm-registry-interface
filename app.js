const express = require("express");
// cors
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//package api-router
const package = require("./router/package.route");

// use routes
app.use("/api", package);

const port = 5000;

app.listen(port, (() => console.log(`server started on port ${port}`)));