"use client";
import BackButton from "@/app/components/BackButton";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function JoinWithLink() {
  const [teamLink, setTeamLink] = useState("");

  async function initiateTeamJoin() {
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };
    try {
      let res = await axios.post(
        `https://atapp.fly.dev/v1/team/invite/${teamLink}/join`,
        {},
        config
      );
      console.log(res.data);
      toast.success("team joined successfully");
    } catch (e: any) {
      console.error(e);
      toast.error("failed to join team");
    }
  }
  return (
    <div className="px-8 py-16 mx-auto max-w-[500px]">
      <BackButton />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="font-bold text-2xl">Enter Code</div>
      <div className="text-slate-500">
        Please enter the code given to you by the Super Admin/Admin.
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="" className="text-slate-500 text-sm">
          Link
        </label>
        <input
          className="border-2 p-2 rounded-md"
          type="text"
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
