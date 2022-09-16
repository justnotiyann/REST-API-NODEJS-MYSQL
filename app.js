var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejsLayout = require("express-ejs-layouts");
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
var app = express();

app.use(cors());
app.listen(port, () => {
	console.log("server berjalan");
});

// Session
const db = require("./config/db");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize");
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
	db: db,
	checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
	expiration: 0.05 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
});
app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: "auto"
		}
	})
);

// continue as normal

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "tmp/avatar")));

app.set("view engine", "ejs");
app.use(ejsLayout);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const routerProducts = require("./routes/Products");
const routerUsers = require("./routes/Users");
const routerAdmins = require("./routes/Admins");
app.use("/users", routerUsers);
app.use("/products", routerProducts);
app.use("/admins", routerAdmins);

module.exports = app;
