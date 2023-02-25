const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db.js");

// database connection
const app = express();
dotenv.config();
connection();

// middlewares
app.use(express.json());
app.use(cors());

// PARSE application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// PARSE application/json
app.use(bodyParser.json());

// routes
app.use("/api/form", require("./routes/form"));

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
