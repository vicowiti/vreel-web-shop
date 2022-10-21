const AsyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// Get all created categories
const getCategories = AsyncHandler(async (req, res) => {
  const categories = await Category.find({});
  if (!categories) {
    res.status(200).json({
      message: "No categories found",
    });
  } else {
    res.status(200).json(categories);
  }
});

// Get a single category

const getCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const existingCategory = await Category.findById(id);

  if (existingCategory) {
    res.status(200).json(existingCategory);
  } else {
    res.status(404).json({
      message: "Category not found",
    });
  }
});

// Add a new category
const addCategory = AsyncHandler(async (req, res) => {
  const { name, color, icon } = req.body;
  if (!name || !color || !icon) {
    res.status(400).json({
      message: "Kindly add all required fields.",
    });
  }
  // Checking for duplicates
  const categoryExists = await Category.find({ name });

  if (categoryExists.length > 0) {
    res.status(400).json({
      message: "Sorry, Category already exists",
    });
  } else {
    // Create new category in DB
    const category = await Category.create({
      name,
      color,
      icon,
    });

    if (category) {
      res.status(201).json({
        ...category,
        message: "New Category Added",
      });
    }
  }
});

// Remove a category
const removeCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await Category.findByIdAndRemove(id);

  if (data) {
    res.status(200).json({
      message: "Category removed successfully",
    });
  } else {
    res.status(404).json({
      message: "Category not found",
    });
  }
});

const updateCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, icon, color } = req.body;

  const data = await Category.findByIdAndUpdate(id, {
    name,
    icon,
    color,
  });

  if (data) {
    res.status(201).json({
      message: "Edit successful",
      data,
    });
  } else {
    res.status(400).json({
      message: "Edit was not successful",
    });
  }
});

module.exports = {
  updateCategory,
  getCategories,
  addCategory,
  removeCategory,
  getCategory,
};
