"use strict";
// Controller
"use strict";
const catModel = require("../models/catModel");

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  res.json(cats.filter((cat) => cat.id === req.params.id));
};

const cat_create = (req, res) => {
  res.json(`cat created with id: ${res} `);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
};
