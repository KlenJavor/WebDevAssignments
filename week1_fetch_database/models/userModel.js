"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM wop_user`);
    return rows;
  } catch (e) {
    console.err("userModel getAllUsers:", e.message);
  }
};

const getUser = async (id) => {
  try {
    console.log("userModel getUser: ", id);
    const [
      rows,
    ] = await promisePool.query(`SELECT * FROM wop_user WHERE user_id = ?`, [
      id,
    ]);
    return rows[0];
  } catch (e) {
    console.err("userModel getUser: ", e.message);
  }
};

const insertUser = async (req) => {
  try {
    const [
      rows,
    ] = await promisePool.query(
      "INSERT INTO wop_user(name, email, password) VALUES(?, ?, ?)",
      [req.body.name, req.body.email, req.body.passwd]
    );
    console.log("userModel insert", rows);
    return rows.insertId;
  } catch (e) {
    console.error("userModel insertUser: ", e);
    return false;
  }
};

const updateUser = async (id, req) => {
  try {
    const [
      rows,
    ] = await promisePool.query(
      "UPDATE wop_user SET name=?, email=?, password=? WHERE user_id = ?;",
      [req.body.name, req.body.email, req.body.passwd, id]
    );
    console.log("userModel updateUser", rows);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error("userModel updateUser: ", e);
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

module.exports = {
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
};
