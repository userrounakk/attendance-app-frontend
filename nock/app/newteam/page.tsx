"use client";
import { useState } from "react";
import { handleChange } from "./senddata";
import Link from "next/link";

export default function Team() {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setDescription] = useState("");
  const [teamProtected, setProtected] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  return (
    <div className="flex flex-col">
      <label htmlFor="Team Name">
        Team Name:{" "}
        <input
          type="text"
          className="border-2"
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <label htmlFor="Team Description">
        Team description{" "}
        <input
          type="text"
          className="border-2"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="protected">
        Protected{" "}
        <input
          type="checkbox"
          name=""
          id=""
          className="border-2"
          onChange={(e) => setProtected(e.target.checked)}
        />
      </label>
      <button
        onClick={() => {
          console.log("bruh");
          const data = handleChange(teamName, teamDescription, teamProtected);
          data.then((res) => {
            setInviteCode(res.Invite);
            localStorage.setItem("team_id", "28");
            console.log(res);
          });
        }}
      >
        Submit
      </button>
      <div>
        Link:{" "}
        <Link href={`https:://host/${inviteCode}`}>
          https:://host/{inviteCode}
        </Link>
      </div>
    </div>
  );
}
