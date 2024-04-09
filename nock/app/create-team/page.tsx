"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import BottomNav from "../team/[id]/components/BottomNav";
import { useRouter } from "next/navigation";
export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [publicGroup, setPublicGroup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function initiateTeamCreation() {
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };
    if (teamName == "") {
      toast.error("Team Name is required");
      return;
    }
    setLoading(true);
    toast.loading("Creating team...");
    try {
      let res = await axios.post(
        "https://atapp.fly.dev/v1/team/",
        {
          name: teamName,
          description: description,
          protected: publicGroup,
        },
        config
      );
      console.log(res.data);
      if (res.status == 201) {
        toast.dismiss();
        toast.success("Team created successfully!");
        router.push("/dashboard");
      }
    } catch (e: any) {
      toast.dismiss();
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
    /*  } catch (e: any) {
      console.error(e);
      toast.error("failed to create team");
    } */
  }
  return (
    <div className="relative">
      <Toaster position="top-center" reverseOrder={false} />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 z-50"></div>
      )}
      <div className=" py-16">
        <div className="px-8">
          <BackButton />
          <div className="font-bold text-2xl py-8">Create Team</div>
          {/* <div className="flex flex-col my-8">
        <label htmlFor="" className="text-slate-500 text-sm">
          Team Name
        </label>
        <input
          className="border-2"
          type="text"
          defaultValue={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div> */}
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
              <input
                type="text"
                id="team-name"
                className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
                placeholder=" "
                onChange={(e) => setTeamName(e.target.value)}
                style={{ fontSize: "16px" }}
              />
              <label
                htmlFor="team-name"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
              >
                Team Name
              </label>
            </div>
          </div>
          {/* <div className="relative mt-5">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <textarea
            id="description"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
            style={{ fontSize: "16px" }}
          ></textarea>
          <label
            htmlFor="description"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Description
          </label>
        </div>
      </div> */}
          <div className="mt-6">
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Optional"
              name="description"
              className="border-b-2 mt-4 focus:outline-none focus:border-b-2 focus:border-theme-blue"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              // cols={28}
              style={{ width: "100%" }}
              rows={1}
            ></textarea>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="" className="text-slate-500 text-sm">
              Settings
            </label>
            <div className="flex flex-row justify-between mt-2">
              <div>Require approval to join</div>
              {/* <input
            className="border-2"
            type="checkbox"
            defaultChecked={publicGroup}
            onChange={(e) => setPublicGroup(e.target.checked)}
          /> */}

              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={publicGroup}
                  className="sr-only peer"
                  onChange={(e) => setPublicGroup(e.target.checked)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#838BA1] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#838BA1] peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="text-slate-500 text-xs mt-3">
              Super Admin/Admin must approve new members before they can join.
            </div>
          </div>
          {/* <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-16 rounded-sm w-[100%]"
        onClick={initiateTeamCreation}
      >
        Create Team
      </button> */}
          <button
            className="bg-theme-blue text-white py-4 px-16 mt-10 rounded-lg w-[100%]"
            onClick={initiateTeamCreation}
          >
            Create Team
          </button>
        </div>
        <BottomNav active="dashboard" />
      </div>
    </div>
  );
}
