"use strict";
// userController
const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  console.log("userController: http get user with path param", req.params);
  const user = await userModel.getUser(req.params.id);
  res.json(user);
};

const user_create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return { error: errors.array() };

  const result = await userModel.insertUser(req);
  if (result["error"]) res.status(400).json(result);
  else res.json(result);
};

const user_update = async (req, res) => {
  const updateOk = await userModel.updateUser(req.params.id, req);
  res.send(`updated... ${updateOk}`);
};

const user_delete = async (req, res) => {
  res.send("deleted...");
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_create,
  user_update,
  user_delete,
};
