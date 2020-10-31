"use strict";
// userController

const userModel = require("../models/userModel");
const users = userModel.users;

const user_list_get = async (req, res) => {
  console.log("userController user_list_get", req.body, req.file);
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  console.log("userController user_get_by_id", req.body, req.file);
  const user = await userModel.getUser(req.params.id);
  res.json(user);
};

const user_create = async (req, res) => {
  console.log("userController user_create", req.body, req.file);
  const user = await userModel.getUser(await userModel.insertUser(req));
  res.send(user);
};

const user_update = async (req, res) => {
  console.log("userController user_update", req.body, req.file);
  const updateOk = await userModel.updateUser(req.prans.id, req);
  res.send(`updated...${updateOk}`);
};

const user_delete = async (req, res) => {
  console.log("userController user_delete", req.body, req.file);
  const deleteOk = await userModel.deleteUser(req.params.id);
  res.send(`deleted...${deleteOk}`);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_create,
  user_update,
  user_delete,
};
