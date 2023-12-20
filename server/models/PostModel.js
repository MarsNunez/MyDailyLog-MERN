import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    videoUrl: String,
    entry: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model("posts", PostSchema);
