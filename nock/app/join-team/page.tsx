"use client";
import BackButton from "@/app/components/BackButton";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BottomNav from "../team/[id]/components/BottomNav";
import AddLinkIcon from "@mui/icons-material/AddLink";

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
    <>
      <div className="px-8 py-16 mx-auto max-w-[500px]">
        <BackButton />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="font-bold text-2xl mt-10">Enter Link</div>
        <div className="mt-4 text-sm text-muted">
          Please enter the code given to you by the Super Admin/Admin.
        </div>
        {/* <div className="flex flex-col my-8">
          <label htmlFor="" className="text-slate-500 text-sm">
            Link
          </label>
          <input
            className="border-2 p-2 rounded-md"
            type="text"
            defaultValue={teamLink}
            onChange={(e) => setTeamLink(e.target.value)}
          />
        </div> */}
        <div className="relative mt-8">
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
            <input
              type="url"
              id="link"
              className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
              placeholder=" "
              defaultValue={teamLink}
              onChange={(e) => setTeamLink(e.target.value)}
              style={{ fontSize: "16px" }}
              autoComplete="email"
            />
            <AddLinkIcon
              className="h-6 w-6 mr-2 text-muted"
              onClick={() => document.getElementById("link")?.focus()}
            />
            <label
              htmlFor="link"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
            >
              Link
            </label>
          </div>
        </div>
        {/* <button
          className="bg-[#3D73DD] text-white py-4 px-16 my-8 rounded-md w-[100%]"
          onClick={initiateTeamJoin}
        >
          Join Team
        </button> */}
        <button
          className="bg-theme-blue text-white py-4 px-16 mt-8 rounded-lg w-[100%]"
          onClick={initiateTeamJoin}
        >
          Join Team
        </button>
      </div>
      <BottomNav active="dashboard" />
    </>
  );
}
