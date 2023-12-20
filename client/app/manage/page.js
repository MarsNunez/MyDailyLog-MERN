"use client";

import { useEffect, useState } from "react";
import ManageCard from "../components/ManageCard";
import axios from "axios";

const ManagePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("http://localhost:3001/get-posts");
      setPosts(response.data.posts);
    };
    getPost();
  }, [posts]);

  return (
    <div className="py-10">
      <h2 className="text-center text-2xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 mb-10">
        Manage Posts
      </h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-1">
        {posts.map((post) => (
          <ManageCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ManagePage;
