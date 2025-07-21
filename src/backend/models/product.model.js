const mongoose = require ("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },

    description: {
      type: String,
      required: true,
      default: 0,
    },

    year: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Projects", ProjectSchema);

module.exports = Product;