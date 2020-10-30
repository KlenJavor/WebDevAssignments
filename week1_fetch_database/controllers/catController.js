"use strict";
// Controller
"use strict";

const catModel = require("../models/catModel");

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};
/*
const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  res.json(cats.filter((cat) => cat.id === req.params.id));
};
*/

const cat_get_by_id = async (req, res) => {
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
};

const cat_create = async (req, res) => {
  //here we will create a cat with data coming from req...
  console.log("catController cat_create", req.body, req.file);
  const cat = await catModel.getCat(await catModel.insertCat(req));
  res.send(cat);
};

const cat_update = async (req, res) => {
  const updateOk = await catModel.updateCat(req.prans.id, req);
  res.send(`updated...${updateOk}`);
};

/*const cat_delete = async (req, res) => {
    res.send(`deleted...`);
};*/

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
  cat_update,
  //cat_delete
};
