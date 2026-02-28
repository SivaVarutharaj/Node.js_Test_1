const express = require("express");
const app = express();
const route = require("./routers/usersRouter");
const path = require("path");

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views")); // default folder

app.use(route);

module.exports = app;
