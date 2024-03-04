"use client";
import { useState } from "react";
import TeamCard from "./TeamCard";
import Link from "next/link";
import BottomNav from "@/app/team/[id]/components/BottomNav";
import TopNav from "@/app/team/[id]/components/TopNav";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
export default function NonEmptyDashboard({ teams }: any) {
  console.log(teams);
  const [showOptions, setShowOptions] = useState(false);

  function handleButtonClick() {
    setShowOptions(!showOptions);
  }

  return (
    <div className="h-full justify-between flex flex-col ">
      <TopNav />
      <div className="p-2 font-semibold text-lg">Teams</div>
      <div className="mb-20">
        {teams.map((team: any, idx: number) => (
          <TeamCard
            key={idx}
            id={team.Team.ID}
            name={team.Team.Name}
            description={team.Team.Description}
          />
        ))}
      </div>
      <BottomNav active="dashboard" />
    </div>
  );
}
