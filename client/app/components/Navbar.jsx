"use client";
import Link from "next/link";
import { useGetUserID } from "../hooks/useGetUserId";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const getUserID = useGetUserID();
    setUserID(getUserID);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    setUserID(null);
    window.localStorage.removeItem("userID");
    router.push("/login");
  };

  return (
    <div className="border-b flex max-w-5xl mx-auto justify-between py-3 px-4">
      <Link href={"/"}>
        <h1 className="text-3xl font-semibold">My daily log 🐧</h1>
      </Link>
      {userID ? (
        <div className="flex gap-3">
          <Link href={"/manage"}>
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-md">
              Manage Posts
            </div>
          </Link>
          <Link href={"/create"}>
            <div className="bg-green-600 text-white px-3 py-1 rounded-md">
              Create
            </div>
          </Link>

          <div className="cursor-pointer" onClick={(e) => handleLogout(e)}>
            <div className="bg-red-600 text-white px-3 py-1 rounded-md">
              Logout
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={"/login"}
          className="bg-blue-600 text-white px-3 py-1 rounded-md"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
