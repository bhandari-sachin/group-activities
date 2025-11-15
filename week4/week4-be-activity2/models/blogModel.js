const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: "throw" }
);
blogSchema.index({ title: 1, body: 1, author: 1 }, { unique: true });

module.exports = mongoose.model("Blog", blogSchema);
