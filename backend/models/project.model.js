const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
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
    images: [String],
    liveLink: {
      type: String,
      required: false,
    },
    githubRepo: {
      type: String,
      required: false,
    },
  },
  { collection: "projects" },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema);
