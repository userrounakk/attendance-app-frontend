"use client";
import { useEffect, useState } from "react";
import TeamCard from "../dashboard/components/TeamCard";
import BottomNav from "../team/[id]/components/BottomNav";
import axios from "axios";
import { getTeams } from "./api/fetchTeams";
import toast, { Toaster } from "react-hot-toast";
import TopNav from "./components/TopNav";

export default function PublicTeams() {
  const [teams, setTeams] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchTeams() {
      const userData = localStorage.getItem("userData")!;
      const data = await getTeams(userData);
      setTeams(data);
    }
    fetchTeams();
  }, []);

  async function joinTeam(invite: string) {
    setLoading(true);
    toast.loading("Joining Team...");
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    try {
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      let res = await axios.post(
        `https://atapp.fly.dev/v1/team/invite/${invite}/join`,
        {},
        config
      );
      console.log(res.data);
      toast.dismiss();
      toast.success(res.data.message);
      return res.data;
    } catch (e: any) {
      console.error(e);
      toast.dismiss();
      if (e.response.status == 409) {
        toast.error("You are already a member of the team.");
      } else {
        toast.error(e.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      <Toaster position="top-center" reverseOrder={false} />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 z-50"></div>
      )}
      <div className="min-h-full justify-between flex flex-col">
        <TopNav />
        <div className="px-4 pt-5 font-semibold text-lg mt-14">Teams</div>
        <div className="font-semibold px-4 mb-2 text-muted">
          Anyone can join these teams.
        </div>
        <div className="min-h-full mb-20 px-2">
          {teams &&
            teams.map((team: any, idx: number) => (
              <div
                className="flex flex-row justify-between p-4  m-2 rounded border border-[#0000009d] bg-[#f5f5f5]"
                key={idx}
              >
                <div className="text-lg font-semibold">{team.Name}</div>
                <button
                  className="text-[#3D73DD]"
                  onClick={() => joinTeam(team.Invite)}
                  disabled={loading}
                >
                  Join
                </button>
              </div>
            ))}
        </div>

        <BottomNav active="discovery" />
      </div>
    </div>
  );
}
