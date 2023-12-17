"use client";
import React, { useState } from "react";

export default function JoinWithLink() {
  const [teamLink, setTeamLink] = useState("");

  async function initiateTeamJoin() {
    /*  let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
      email: email,
      password: pass,
    });
    console.log(res.data); */
    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16 mx-auto max-w-[500px]">
      <div className="font-bold text-2xl">Enter Link</div>
      <div className="text-slate-500">
        Please enter the link given to you by the Super Admin/Admin.
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="" className="text-slate-500 text-sm">
          Link
        </label>
        <input
          className="border-2 p-2 rounded-md"
          type="email"
          defaultValue={teamLink}
          onChange={(e) => setTeamLink(e.target.value)}
        />
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-8 rounded-md w-[100%]"
        onClick={initiateTeamJoin}
      >
        Join Team
      </button>
    </div>
  );
}
