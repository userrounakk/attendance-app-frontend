"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
      toast.success("logged in sucessfully");
      localStorage.setItem("userData", JSON.stringify(res.data));

      router.push("/dashboard");
    } catch (e: any) {
      toast.error("login failed:", e);
      console.error(e);
    }

    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16">
      <Toaster position="top-center" reverseOrder={false} />
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
      <Link href={"/register"}>
        <div>{"Don't have an account?"}</div>
      </Link>
    </div>
  );
}
