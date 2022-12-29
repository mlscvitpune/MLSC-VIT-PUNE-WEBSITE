const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    domain: {
      type: String,
      required: false,
    },
    tags: [String],
  },
  { collection: "blogs" },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
