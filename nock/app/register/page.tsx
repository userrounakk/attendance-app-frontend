"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function initiateLogin() {
    console.log(email, pass);
    if (pass === confirmPass) {
      let res = await axios.post("https://atapp.fly.dev/v1/auth/register", {
        email: email,
        name: name,
        password: pass,
        profile_image:
          "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
      });
      console.log(res.data);
    } else {
      console.log("passwords don't match");
    }

    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16">
      <div className="font-bold text-2xl py-8">Log In</div>
      <div className="flex flex-col">
        <label htmlFor="">Name</label>
        <input
          className="border-2"
          type="email"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <div className="flex flex-col">
        <label htmlFor="">Confirm Password</label>
        <input
          className="border-2"
          type="password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={initiateLogin}
      >
        Register
      </button>
    </div>
  );
}
