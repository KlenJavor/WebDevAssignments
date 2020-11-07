"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute("SELECT * FROM wop_user");
    return rows;
  } catch (e) {
    console.error("userModel:", e.message);
  }
};

const getUser = async (id) => {
  try {
    console.log("userModel getUser", id);
    const [
      rows,
    ] = await promisePool.execute("SELECT * FROM wop_user WHERE user_id = ?", [
      id,
    ]);
    return rows[0];
  } catch (e) {
    console.error("userModel:", e.message);
  }
};

const insertUser = async (req) => {
  try {
    const [
      status,
    ] = await promisePool.execute(
      "INSERT INTO wop_user(name, email, password) VALUES(?, ?, ?)",
      [req.body.name, req.body.email, req.body.passwd]
    );
    return await getUser(status["insertId"]);
  } catch (e) {
    return { error: e.message };
  }
};

const updateUser = async (id, req) => {
  try {
    const [
      rows,
    ] = await promisePool.execute(
      "UPDATE wop_user SET name = ?, email = ?, passwd = ? WHERE user_id = ?;",
      [req.body.name, req.body.username, req.body.passwd, id]
    );
    console.log("userModel update:", rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

const deleteUser = async (id) => {
  try {
    const [
      rows,
    ] = await promisePool.query("DELETE FROM wop_user WHERE user_id = ?", [id]);
    console.log("userModel deleted user");
    return rows.affectedRows === 1;
  } catch (e) {
    console.error("userModel deleteUser: ", e);
    return false;
  }
};

const getUserLogin = async (params) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
      "SELECT * FROM wop_user WHERE email = ?;",
      params
    );
    return rows;
  } catch (e) {
    console.log("error", e.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
  getUserLogin,
};
