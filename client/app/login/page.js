"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      // const response = await axios.post("http://localhost:3001/login", {
      const response = await axios.post(
        "https://my-daily-log-mern-server.vercel.app/login",
        {
          username,
          password,
        }
      );
      if (response.data.message) return setMessage(response.data.message);
      setMessage("");

      // SAVE current ID user in LocalStorage
      window.localStorage.setItem("userID", response.data.userID);

      router.push("/");
    };
    login();
  };

  return (
    <div className="py-10">
      <h2 className="text-center text-2xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 mb-10">
        Login
      </h2>

      <form className="max-w-sm mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        {message.length > 0 && <p className="mb-5 text-red-500">{message}</p>}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Ok lets go
        </button>
      </form>
    </div>
  );
};

export default Login;
