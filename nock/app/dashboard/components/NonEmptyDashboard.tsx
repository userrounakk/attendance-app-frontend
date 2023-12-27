"use client";
import { useState } from "react";
import TeamCard from "./TeamCard";
import Link from "next/link";
export default function NonEmptyDashboard({ teams }: any) {
  console.log(teams);
  const [showOptions, setShowOptions] = useState(false);

  function handleButtonClick() {
    setShowOptions(!showOptions);
  }

  return (
    <div className="h-full justify-between flex flex-col p-8">
      {teams.map((team: any, idx: number) => (
        <TeamCard
          key={idx}
          id={team.Team.ID}
          name={team.Team.Name}
          description={team.Team.Description}
        />
      ))}
      <button
        onClick={handleButtonClick}
        title="Create or join team"
        className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-200"
      >
        +
      </button>
      {showOptions && (
        <div className="absolute bottom-32 right-8 flex flex-col bg-white p-4 shadow-md rounded">
          <Link href="/create-team" className="mb-2">
            Create Team
          </Link>
          <Link href="/join-team">Join Team</Link>
        </div>
      )}
    </div>
  );
}
