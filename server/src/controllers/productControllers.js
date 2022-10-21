const AsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = AsyncHandler(async (req, res) => {});

const getProducts = AsyncHandler(async (req, res) => {
  res.send("All products");
});

const updateProduct = AsyncHandler(async (req, res) => {});

const deleteProduct = AsyncHandler(async (req, res) => {});

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
