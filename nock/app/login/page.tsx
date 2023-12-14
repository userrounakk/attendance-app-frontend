"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function initiateLogin() {
    console.log(email, pass);
    let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
      email: email,
      password: pass,
    });
    console.log(res.data);
    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16">
      <div className="font-bold text-2xl">Log In</div>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          className="border-2"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input
          className="border-2"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={initiateLogin}
      >
        Submit
      </button>
    </div>
  );
}
