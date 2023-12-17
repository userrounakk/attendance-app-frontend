"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  async function initiateLogin() {
    console.log(email, pass);
    try {
      let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
        email: email,
        password: pass,
      });
      console.log(res.data);
      localStorage.setItem("userData", JSON.stringify(res.data));
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }

    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16">
      <div className="font-bold text-2xl py-8">Log In</div>
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
      <div className="flex justify-end py-4">Forgot Password?</div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={initiateLogin}
      >
        Login
      </button>
    </div>
  );
}
