"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rootRoute = require("./routes/rootRoute");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("uploads"));
app.use(express.static("week2_public_html"));

// routes
app.use("/", rootRoute);
app.use("/cat", catRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// learning map, filter, reduce
/*
const myArr = [3, 2, 5, 67, 54, 33, 22];
const mapArr = myArr.map((i) => i * 3);
const filterArr = myArr.filter((i) => i > 10);
const reduceArr = myArr.reduce((acumulator, i) => (acumulator += i));
console.log(
  "original",
  myArr,
  "\nmap",
  mapArr,
  "\nfilter",
  filterArr,
  "\nreduce",
  reduceArr
);*/
