"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT wop_cat.*, wop_user.name as Owner FROM wop_cat LEFT JOIN wop_user ON wop_cat.owner = wop_user.user_id');
    return rows;
  } catch (e) {
    console.err("catModel getAllCats:", e.message);
  }
};

const getCat = async (id) => {
  try {
    console.log("catModel getCat: ", id);
    const [
      rows
    ] = await promisePool.query('SELECT wop_cat.*, wop_user.name as Owner FROM wop_cat LEFT JOIN wop_user ON wop_cat.owner = wop_user.user_id WHERE wop_cat.cat_id = ? ', [id]);
    return rows[0];
  } catch (e) {
    console.err("catModel getCat: ", e.message);
  }
};

const insertCat = async (req) => {
  try {
    const [
      rows
    ] = await promisePool.query(
      "INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES ( ?, ?, ?, ?, ?);",
      [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.file.filename
      ]
    );
    console.log("catModel insert", rows);
    return rows.insertId;
  } catch (e) {
    console.error("catModel insertCat: ", e);
    return false;
  }
};

const updateCat = async (id, req) => {
  try {
    const [
      rows
    ] = await promisePool.query(
      "UPDATE wop_cat SET name=?, age=?, weight=?, owner = ? WHERE cat_id = ?;",
      [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        id
      ]
    );
    console.log("catModel updateCat", rows);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error("catModel updateCat: ", e);
    return false;
  }
};

const deleteCat = async (id) => {
  try {
    const [
      rows
    ] = await promisePool.query(
      'DELETE FROM wop_cat WHERE cat_id = ?',
      [id]
    );
    console.log("catModel deleted cat");
    return rows.affectedRows === 1;
  } catch (e) {
    console.error("catModel deleteCat: ", e);
    return false;
  }
};

module.exports = {
  getAllCats,
  getCat,
  insertCat,
  updateCat,
  deleteCat
};
