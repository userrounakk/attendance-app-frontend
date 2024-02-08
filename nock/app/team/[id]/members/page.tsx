"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import BackButton from "@/app/components/BackButton";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  params: {
    id: string;
  };
};

export default function Team({ params }: Props) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamJoinRequests, setTeamJoinRequests] = useState([]);
  const [invite, setInvite] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getTeamMembers() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      try {
        const config = {
          headers: { Authorization: `Bearer ${data.token}` },
        };
        let res = await axios.get(
          `https://atapp.fly.dev/v1/team/${params.id}/members`,
          config
        );
        setTeamMembers(res.data);
        console.log(res.data);
        res = await axios.get(
          `https://atapp.fly.dev/v1/team/${params.id}`,
          config
        );
        setInvite(res.data.Invite);
      } catch (e) {
        console.error(e);
      }
    }
    getTeamMembers();
    async function getTeamJoinRequests() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      try {
        const config = {
          headers: { Authorization: `Bearer ${data.token}` },
        };
        let res = await axios.get(
          `https://atapp.fly.dev/v1/team/${params.id}/requests`,
          config
        );
        setTeamJoinRequests(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    }
    getTeamJoinRequests();
    setLoading(false);
  }, []);
  async function setJoinRequest(status: string, requestId: number) {
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    try {
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      let res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${params.id}/requests/${requestId}`,
        {
          status: status,
        },
        config
      );
      setTeamJoinRequests(res.data);
      console.log(res.data);
      if (status === "approved") toast.success("member approved");
      else toast.error("member rejected");

      let res1 = await axios.get(
        `https://atapp.fly.dev/v1/team/${params.id}/requests`,
        config
      );
      setTeamJoinRequests(res1.data);
      console.log(res1.data);
    } catch (e: any) {
      toast.error(e.response.data.error);

      console.error(e);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-4 py-8">
      <BackButton />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-lg font-bold">Members</div>
      <div className="flex flex-row">
        <div className="p-8 m-2 text-center rounded-md flex-auto bg-[#D9D9D9]">
          {invite}
        </div>
      </div>
      <label htmlFor="searchbar" className="flex">
        <input
          className="border-2 flex-auto bg-[#D9D9D9] text-black placeholder:text-black p-1 rounded-md"
          type="text"
          placeholder="Search for name,email or student id"
        />
      </label>
      <div className="py-4 text-slate-500">Requests</div>
      <div className="px-4">
        {teamJoinRequests &&
          teamJoinRequests.map((member: any, idx: number) => {
            return (
              <div key={idx} className="flex flex-row justify-between">
                <div>{member.User.Name}</div>
                <div className="flex flex-row">
                  <div
                    className="p-2"
                    onClick={() => {
                      setJoinRequest("rejected", member.Request.ID);
                    }}
                  >
                    ❌
                  </div>
                  <div
                    className="p-2"
                    onClick={() => {
                      setJoinRequest("approved", member.Request.ID);
                    }}
                  >
                    ✔️
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="py-4 text-slate-500">Admins</div>
      <div className="px-4">
        {teamMembers &&
          teamMembers.map((member: any, idx: number) => {
            if (member.Role === "super_admin")
              return (
                <div key={idx} className="flex flex-row justify-between">
                  <div>{member.User.Name}</div>
                  <div className="text-slate-500">Super Admin</div>
                </div>
              );
          })}
      </div>
      <div className="py-4 text-slate-500">Participant</div>
      <div className="px-4">
        {teamMembers.map((member: any, idx: number) => {
          if (member.Role === "member")
            return <div key={idx}>{member.User.Name}</div>;
        })}
      </div>
      <BottomNav />
    </div>
  );
}
