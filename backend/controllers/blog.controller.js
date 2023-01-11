import Blogs from "../models/blog.model.js";

const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) return res.status(400).json({ message: "Failed to fetch blog" });
    res
      .status(200)
      .json({ message: "Fetched project successfully", data: blog });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    if (blogs)
      res.status(200).json({ message: "Fetched all blogs", data: blogs });
    else res.status(400).json({ message: "Failed to fetch blogs" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const createBlog = async (req, res) => {
  const {
    title,
    description,
    thumbnail,
    authorName,
    date,
    link,
    domain,
    tags,
  } = req.body;
  try {
    const exist = await Blogs.findOne({ title });
    if (exist) res.status(400).json({ message: "Blog Already Exists" });
    else {
      const newBlog = new Blogs({
        title,
        description,
        thumbnail,
        authorName,
        date,
        link,
        domain,
        tags,
      });
      const check = await newBlog.save();
      if (check)
        res.status(200).json({ message: "New Blog Created", data: newBlog });
      else res.status(400).json({ message: "Failed to Create blog" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to fetch blog", data: error.message });
  }
};

const updateBlog = async (req, res) => {
  const {
    id,
    title,
    description,
    thumbnail,
    authorName,
    date,
    link,
    domain,
    tags,
  } = req.body;
  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      {
        title,
        description,
        thumbnail,
        authorName,
        date,
        link,
        domain,
        tags,
      },
      { new: true }
    );
    if (!updatedBlog)
      return res.status(400).json({ message: "Failed to update blog" });
    res.status(200).json({ message: "Updated blog successfully", updatedBlog });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update blog", data: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedBlog = await Blogs.findByIdAndDelete(id);
    if (deletedBlog)
      res.status(200).json({ message: "Deleted blog successfully" });
    else res.status(400).json({ message: "Failed to delete blog" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete blog", data: error.message });
  }
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
