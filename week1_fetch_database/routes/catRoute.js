"use strict";
// catRoute
const express = require("express");
const multer = require("multer");
const router = express.Router();
const catController = require("../controllers/catController");
const upload = multer({ dest: "uploads/" });

router.get("/", catController.cat_list_get);
router.post("/", upload.single("cat"), catController.cat_create);

router.put("/:id", catController.cat_update);
router.get("/:id", catController.cat_get_by_id);
router.delete('/:id', catController.cat_delete);

module.exports = router;
