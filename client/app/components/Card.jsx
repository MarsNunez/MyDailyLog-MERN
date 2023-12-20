"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({ post }) => {
  const { author, title, thumbnail, _id } = post;
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      // const response = await axios.post("http://localhost:3001/get-user", {
      const response = await axios.post(
        "https://my-daily-log-mern-server.vercel.app/get-user",
        {
          userID: author,
        }
      );
      setUsername(response.data.username);
    };
    getUserData();
  }, []);

  return (
    <Link
      href={"/posts/" + _id}
      className="max-w-xs bg-white border border-gray-200 rounded-lg h-fit min-h-full shadow group overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          className="rounded-t-lg h-48 w-full object-cover object-center group-hover:scale-125 duration-200"
          src={thumbnail}
          alt="card image"
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-lg font-medium leading-7 mb-2">{title}</h3>
        <p className="text-sm mb-2">Something take some part of me by</p>
        <p className="text-sm">
          By <span className="text-blue-600">{username}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
