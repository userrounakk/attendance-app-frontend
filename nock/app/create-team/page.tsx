"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [publicGroup, setPublicGroup] = useState(false);

  async function initiateTeamCreation() {
    /*  let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
      email: email,
      password: pass,
    });
    console.log(res.data); */
    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="px-8 py-16">
      <div className="font-bold text-2xl py-8">Create Team</div>
      <div className="flex flex-col my-8">
        <label htmlFor="" className="text-slate-500 text-sm">
          Team Name
        </label>
        <input
          className="border-2"
          type="email"
          defaultValue={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500 text-sm">
          Description
        </label>
        <input
          className="border-2"
          type="text"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="" className="text-slate-500 text-sm">
          Settings
        </label>
        <div className="flex flex-row justify-between px-4">
          <div>Require approval to join</div>
          <input
            className="border-2"
            type="checkbox"
            defaultChecked={publicGroup}
            onChange={(e) => setPublicGroup(e.target.checked)}
          />
        </div>
        <div className="text-slate-500 text-xs">
          Super Admin/Admin must approve new members before they can join.
        </div>
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-16 rounded-sm w-[100%]"
        onClick={initiateTeamCreation}
      >
        Create Team
      </button>
    </div>
  );
}
