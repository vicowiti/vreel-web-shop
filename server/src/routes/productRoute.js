const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productControllers");

const Router = require("express").Router();

// Create a Product in Db

Router.post("/products", createProduct);

// Read all items in DB

Router.get("/products", getProducts);

// Get a single project
Router.get("/products/:id", getProduct);

// Update an Item in Db

Router.put("/products/:id", updateProduct);

// Delete an Item in Db

Router.delete("/products/:id", deleteProduct);

module.exports = Router;
