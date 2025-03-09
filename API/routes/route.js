const express = require("express");
const router = express.Router();
const CategoriesController = require("../controller/CategoriesController");

router.get("/", CategoriesController.GetAllCategories);
router.post("/create", CategoriesController.CreateCategories);

module.exports = router;
