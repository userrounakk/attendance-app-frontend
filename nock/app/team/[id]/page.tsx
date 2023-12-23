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
  const [meets, setMeets] = useState([]);
  useEffect(() => {
    async function getMeetingData() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.get(
        `https://atapp.fly.dev/v1/team/${params.id}/meetings?filterBy=upcoming&orderBy=desc`,
        config
      );
      console.log(res.data);
      setMeets(res.data);
    }
    getMeetingData();
  }, []);
  return (
    <div>
      {meets.map((meet: any, idx: number) => {
        const time = new Date(meet.StartTime).toDateString();
        return (
          <MeetCard
            key={idx}
            date={new Date(meet.StartTime).toDateString()}
            time={new Date(meet.StartTime).toTimeString()}
            venue={meet.Venue}
            teamId={params.id}
            meetId={meet.ID}
          />
        );
      })}
    </div>
  );
}
