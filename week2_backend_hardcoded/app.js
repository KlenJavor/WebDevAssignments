"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routes/rootRoute");
const catRoute = require("./routes/catRoute");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/", rootRoute);
app.use("/cat", catRoute);
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
