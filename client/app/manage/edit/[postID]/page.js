"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    entry: "",
    content: "",
    thumbnail: "",
    videoUrl: "",
  });
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        // "http://localhost:3001/posts/" + params.postID
        "https://my-daily-log-mern-server.vercel.app/posts/" + params.postID
      );
      setPost(response.data);
      // console.log(response);
    };
    getPost();
  }, []);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.put("http://localhost:3001/edit/" + post._id, post);
    await axios.put(
      "https://my-daily-log-mern-server.vercel.app/edit/" + post._id,
      post
    );
    // console.log(response);
    router.push("/");
  };

  return (
    <section className="max-w-3xl mx-auto py-10">
      <h2 className="text-center text-2xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 mb-10">
        Edit Post
      </h2>
      <form className="max-w-xl mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="entry"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Entry comment
          </label>
          <input
            type="text"
            id="entry"
            name="entry"
            value={post.entry}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Content
          </label>
          {post.content && (
            <ReactQuill
              theme="snow"
              name="content"
              defaultValue={post.content}
              onChange={(content) => setPost({ ...post, content })}
            />
          )}

          {/* <ReactQuill
            theme="snow"
            name="content"
            defaultValue={post.content}
            onChange={(content) => setPost({ ...post, content })}
          /> */}
        </div>
        <div className="mb-5">
          <label
            htmlFor="thumbnail"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Url Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={post.thumbnail}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="videoUrl"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Url video (optional)
          </label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={post.videoUrl}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">
          Save
        </button>
      </form>
    </section>
  );
};

export default EditPost;
