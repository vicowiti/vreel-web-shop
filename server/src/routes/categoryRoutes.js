const {
  getCategories,
  addCategory,
  removeCategory,
  getCategory,
  updateCategory,
} = require("../controllers/categoryController");

const Router = require("express").Router();

// Get all Categories

Router.get("/", getCategories);

Router.get("/:id", getCategory);

// Add a category

Router.post("/", addCategory);
//  Remove a category

Router.delete("/:id", removeCategory);

Router.put("/:id", updateCategory);

module.exports = Router;
