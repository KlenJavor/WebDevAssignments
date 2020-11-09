"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [
      rows,
    ] = await promisePool.execute(`SELECT cat_id, wop_cat.name, age, weight, owner, filename, user_id, coords, wop_user.name 
              AS ownername FROM wop_cat LEFT JOIN wop_user ON owner = user_id`);
    return rows;
  } catch (e) {
    console.error("catModel:", e.message);
  }
};

const getCat = async (id) => {
  try {
    console.log("catModel getCat: ", id);
    const [
      rows,
    ] = await promisePool.query(
      "SELECT wop_cat.*, wop_user.name as Owner FROM wop_cat LEFT JOIN wop_user ON wop_cat.owner = wop_user.user_id WHERE wop_cat.cat_id = ? ",
      [id]
    );
    return rows[0];
  } catch (e) {
    console.err("catModel getCat: ", e.message);
  }
};

const insertCat = async (req, coords) => {
  try {
    const [
      rows,
    ] = await promisePool.execute(
      "INSERT INTO wop_cat (name, age, weight, owner, filename, coords) VALUES (?, ?, ?, ?, ?, ?);",
      [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.file.filename,
        req.body.coords,
      ]
    );
    console.log("catModel insert:", rows);
    return rows.insertId;
  } catch (e) {
    console.error("catModel insertCat:", e);
    return 0;
  }
};

const updateCat = async (req) => {
  try {
    console.log(req.body);
    const [
      rows,
    ] = await promisePool.execute(
      "UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE cat_id = ?;",
      [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.body.id,
      ]
    );
    console.log("catModel update:", rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

const deleteCat = async (id) => {
  try {
    console.log("delete getCat", id);
    const [
      rows,
    ] = await promisePool.execute("DELETE FROM wop_cat WHERE cat_id = ?", [id]);
    return rows;
  } catch (e) {
    console.error("catModel:", e.message);
  }
};

module.exports = {
  getAllCats,
  getCat,
  insertCat,
  updateCat,
  deleteCat,
};
