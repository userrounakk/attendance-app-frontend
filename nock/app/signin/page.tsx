"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function initiateLogin() {
    console.log(name, email, pass);
    let res = await axios.post("https://atapp.fly.dev/v1/auth/register", {
      email: email,
      name: name,
      password: pass,
      profile_image:
        "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
    });
    console.log(res.data);
    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => setPass(e.target.value)} />
      </div>
      <button onClick={initiateLogin}>Submit</button>
    </div>
  );
}
