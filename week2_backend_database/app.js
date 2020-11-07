"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("uploads"));
app.use(express.static("week2_public_html"));

// routes
app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
