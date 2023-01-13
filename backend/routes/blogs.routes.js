import express from "express";
const router = express.Router();

import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";

router.get("/getBlogs", getBlogs);
router.get("/getBlog/:id", getBlog);
router.post("/createBlog", createBlog);
router.put("/updateBlog", updateBlog);
router.delete("/deleteBlog", deleteBlog);

export default router;
