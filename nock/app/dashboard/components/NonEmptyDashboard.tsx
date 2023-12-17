"use client";
import TeamCard from "./TeamCard";
export default function NonEmptyDashboard({ teams }: any) {
  console.log(teams);

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
    </div>
  );
}
