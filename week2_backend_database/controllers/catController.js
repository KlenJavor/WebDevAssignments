"use strict";
// catController

const catModel = require("../models/catModel");
const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  console.log("catController cat_list_get", req.body, req.file);
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  console.log("catController cat_get_by_id", req.body, req.file);
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
};

const cat_create = async (req, res) => {
  console.log("catController cat_create", req.body, req.file);
  const cat = await catModel.getCat(await catModel.insertCat(req));
  res.send(cat);
};

const cat_update = async (req, res) => {
  console.log("catController cat_update", req.body, req.file);
  const updateOk = await catModel.updateCat(req.prans.id, req);
  res.send(`updated...${updateOk}`);
};

const cat_delete = async (req, res) => {
  console.log("catController cat_delete", req.body, req.file);
  const deleteOk = await catModel.deleteCat(req.params.id);
  res.send(`deleted...${deleteOk}`);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
  cat_update,
  cat_delete,
};
