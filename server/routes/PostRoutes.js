import { Router } from "express";
import { PostModel } from "../models/PostModel.js";

const router = Router();

router.get("/get-posts", async (req, res) => {
  const posts = await PostModel.find({});
  res.json({
    count: posts.length,
    posts,
  });
});

router.post("/create", async (req, res) => {
  const { title, content, thumbnail, author, videoUrl, entry } = req.body;
  const newPost = await new PostModel({
    title,
    content,
    thumbnail,
    author,
    videoUrl,
    entry,
  });

  await newPost.save();
  res.json(newPost);
});

// ROUTE FOR DELETING
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const postDeleted = await PostModel.findOneAndDelete({ _id: id });
  res.json(postDeleted);
});

// GET single post -> for editing and for printing
router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await PostModel.findById(id);
  res.json(post);
});

// UPDATE post
router.put("/edit/:id", async (req, res) => {
  const { title, content, thumbnail, author, videoUrl, entry } = req.body;
  const { id } = req.params;
  const post = await PostModel.findOneAndUpdate(
    { _id: id },
    {
      title,
      content,
      thumbnail,
      author,
      videoUrl,
      entry,
    }
  );
  post.save();
  res.json(post);
});

export { router as PostRoutes };
