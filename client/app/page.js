"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      // const response = await axios.get("http://localhost:3001/get-posts");
      const response = await axios.get(
        "https://my-daily-log-mern-server.vercel.app/get-posts"
      );
      setPosts(response.data.posts);
    };
    getPost();
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-20">
      <h1 className="text-center text-3xl py-14 uppercase underline underline-offset-8 decoration-blue-600 decoration-4">
        Nuevo post cada que se me salga del nabo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-fit mx-auto">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
