var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejsLayout = require("express-ejs-layouts");
const port = process.env.PORT || 3000;
require("dotenv").config();
var app = express();

app.listen(port, () => {
  console.log("server berjalan");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(ejsLayout);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const routerProducts = require("./routes/Products");
const routerUsers = require('./routes/Users')
app.use('/users',routerUsers)
app.use("/products", routerProducts);

module.exports = app;
