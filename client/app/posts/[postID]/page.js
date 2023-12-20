"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    entry: "",
    content: "",
    thumbnail: "",
    videoUrl: "",
  });
  const markup = { __html: post.content };

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        // "http://localhost:3001/posts/" + params.postID
        "https://my-daily-log-mern-server.vercel.app/posts/" + params.postID
      );
      setPost(response.data);
    };
    getPost();
  }, []);
  return (
    <section className="pb-20">
      <img
        src={post.thumbnail}
        alt="post thumbnail"
        className="h-56 w-full object-cover object-center"
      />
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-3xl mt-10 mb-3">{post.title}</h2>
        <p className="text-lg font-normal text-gray-500">{post.entry}</p>
        <div className="flex items-center space-x-3 mt-3 mb-5 text-sm">
          <img
            className="w-10 rounded-full"
            src="https://cdn.sanity.io/images/d4elamj1/production/79eceee3c5fd5addc6761462702ea7b672921cd6-444x450.png"
            alt="profile image"
          />
          <p className="font-light">
            Post created by <span className="text-green-600">Mars</span> -
            Published at 01/09/2001
          </p>
        </div>
        <hr />
        <div
          className="mt-5 container_content text-justify"
          dangerouslySetInnerHTML={markup}
        ></div>
      </div>
    </section>
  );
};

export default PostPage;
