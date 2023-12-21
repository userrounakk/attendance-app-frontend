"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MeetCard } from "./components/MeetCard";

type Props = {
  params: {
    id: string;
  };
};

export default function Team({ params }: Props) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamJoinRequests, setTeamJoinRequests] = useState([]);
  useEffect(() => {}, []);
  console.log(params);
  return (
    <div>
      <MeetCard date={"17 November 2023"} time={"7:00PM"} venue={"Foodys"} />
    </div>
  );
}
