"use strict";
// catRoute
const express = require("express");
const multer = require("multer");
const router = express.Router();
const catController = require("../controllers/catController");
const upload = multer({ dest: "uploads/" });


/*
router.get("/", (req, res) => {
  res.send(`From this endpoint you can get all cats.`);
});

router.get("/:id", (req, res) => {
  console.log("catRoute: http get cat with path param", req.params);
  res.send(
    `From this endpoint you can get a cat with an id:  ${req.params.id}`
  );
});
*/
router.get("/", catController.cat_list_get);
router.get("/:id", catController.cat_get_by_id);

router.post("/", upload.single("cat"), catController.cat_create);
router.put("/:id", catController.cat_update);
//router.delete("/:id", catController.cat_delete);

/*router.post("/", upload.single('cat'), (req, res) => {
  console.log("catRoute", req.body, req.file);
  res.send('trying to add a cat...')
});*/

router.post("/", upload.single("cat"), catController.cat_create);

module.exports = router;
