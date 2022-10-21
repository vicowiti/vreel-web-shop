const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    passwordHash: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },

    street: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
