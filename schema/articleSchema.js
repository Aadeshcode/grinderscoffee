import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    topic: { type: String, required: true, unique: true },
    category: { type: String },
    article: { type: Array, required: true },
    slug: { type: String, required: true },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
  }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", blogSchema);

export default Article;
