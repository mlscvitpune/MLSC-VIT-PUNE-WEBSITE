const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        require: true,
    },
    desciprtion: {
        type: String,
        required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    liveLink: {
        type: String,
        required: false,
    },
    gihtubRepo: {
        type: String,
        required: false,
    },
    isHidden: {
        type: Boolean,
        required: false,
        default: false,
    },
  },
  { collection: "projects" },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema)