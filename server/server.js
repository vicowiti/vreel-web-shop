const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const connectDb = require("./src/utils/connectDb");
const PORT = process.env.PORT || 5000;
const URL_PATH = process.env.URL_PATH;
const productRoutes = require("./src/routes/productRoute");
const categoryRoutes = require("./src/routes/categoryRoutes");
const app = express();
app.use(cors());
app.options("*", cors());

//DB Call

connectDb();

// Express Middleware
app.use(express.json());
app.use(morgan("tiny"));

// Routes Middleware
app.use(`${URL_PATH}/prods`, productRoutes);
app.use(`${URL_PATH}/categories`, categoryRoutes);

// Test Route

app.get("/", (req, res) => {
  res.send("<h1>We back up</h1>");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
