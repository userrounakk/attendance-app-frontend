"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [publicGroup, setPublicGroup] = useState(false);

  async function initiateTeamCreation() {
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };

    let res = await axios.post(
      "https://atapp.fly.dev/v1/team",
      {
        name: teamName,
        description: description,
        protected: publicGroup,
      },
      config
    );
    console.log(res.data);
    if (res.status == 200) {
      toast.success("team created!");
    }
    /*  } catch (e: any) {
      console.error(e);
      toast.error("failed to create team");
    } */
  }
  return (
    <div className="px-8 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-2xl py-8">Create Team</div>
      <div className="flex flex-col my-8">
        <label htmlFor="" className="text-slate-500 text-sm">
          Team Name
        </label>
        <input
          className="border-2"
          type="text"
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
