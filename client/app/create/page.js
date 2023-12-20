"use client";

import { useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePage = () => {
  const router = useRouter();

  const [post, setPost] = useState({
    title: "",
    entry: "",
    content: "",
    thumbnail: "",
    videoUrl: "",
    author: useGetUserID(),
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/create", post);
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-center text-2xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 mb-10">
        Create a post
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
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Content
          </label>
          <ReactQuill
            className=""
            theme="snow"
            name="content"
            // defaultValue="<p>Este es el texto <strong>predefinido xd</strong></p>"
            onChange={(content) => setPost({ ...post, content })}
          />
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
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Ok lets Go
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
