"use strict";
// userRoute
const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.user_list_get);
router.post(
  "/",
  [
    body("name", "Name must have at least 3 letters").isLength({ min: 3 }),
    body("email", "Please add a valid e-mail").isEmail(),
    body("passwd", "Minimum 8 characters, at least one upper case").matches(
      "(?=.*[A-Z]).{8,}"
    ),
  ],
  userController.user_create
);

router.get("/:id", userController.user_get_by_id);
router.put("/:id", userController.user_update);
router.delete("/:id", userController.user_delete);

module.exports = router;
