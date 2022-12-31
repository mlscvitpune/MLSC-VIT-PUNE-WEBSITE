import mongoose from "mongoose";

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
      required: true,
    },
  },
  { collection: "projects" },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
