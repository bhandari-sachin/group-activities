const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// GET /blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// POST /blogs
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body });
    res.status(201).json(newBlog);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// GET /blogs/:blogId

const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }
    const blog = await Blog.findById(blogId);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// UPDATE /blogs/:blogId
const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }
    const updatedBlog = await Blog.findOneAndUpdate({ _id: blogId }, req.body, {
      new: true,
    });
    if (updatedBlog) {
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// DELETE /blogs/:blogId
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }
    const deletedBlog = await Blog.findOneAndDelete({ _id: blogId });

    if (deletedBlog) {
      res.status(200).json(deletedBlog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
  updateBlog,
};
