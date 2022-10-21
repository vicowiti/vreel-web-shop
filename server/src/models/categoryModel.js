const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    // image: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
