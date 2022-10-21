const AsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

// Create a product in DB
const createProduct = AsyncHandler(async (req, res) => {
  const {
    name,
    description,
    image,
    richDesc,
    brand,
    price,
    inStock,
    rating,
    isFeatured,
    images,
    category,
  } = req.body;

  const validCategory = await Category.findById(category);

  if (!validCategory)
    return res.status(400).json({ message: "Invalid category Id" });
  const newProduct = await Product.create({
    name,
    description,
    image,
    richDesc,
    brand,
    price,
    inStock,
    rating,
    isFeatured,
    images,
    category,
  });

  if (newProduct) {
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({
      message: "Product was not created",
    });
  }
});

// Get all Products
const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({}).populate("category");

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(400).json({
      message: "Could not fetch products.",
    });
  }
});

// Get a single product
const getProduct = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleProduct = await Product.findById(id).populate("category");

  if (singleProduct) {
    res.status(200).json(singleProduct);
  } else {
    res.status(400).json({
      message: "Item not found.",
    });
  }
});

// Update a single product
const updateProduct = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    image,
    richDesc,
    brand,
    price,
    inStock,
    rating,
    isFeatured,
    images,
    category,
  } = req.body;

  const updatedItem = await Product.findByIdAndUpdate(id, {
    name,
    description,
    image,
    richDesc,
    brand,
    price,
    inStock,
    rating,
    isFeatured,
    images,
    category,
  });

  if (updateProduct) {
    res.status(201).json({
      message: "Update successful",
    });
  } else {
    res.status(500).json({
      message: "Update failed",
    });
  }
});

// Delete a single product
const deleteProduct = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedItem = await Product.findByIdAndRemove(id);

  if (deletedItem) {
    res.status(201).json({ message: "Item deleted successfully" });
  } else {
    res.status(500).json({
      message: "Unable to delete resource",
    });
  }

  const removed = await Product.findByIdAndRemove(id);
});

module.exports = {
  getProduct,
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
