"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MeetCard } from "./components/MeetCard";
import { Toaster } from "react-hot-toast";
import Home from "@mui/icons-material/Home";
import { CalendarMonth, People, PeopleAlt } from "@mui/icons-material";
import Link from "next/link";
import BottomNav from "./components/BottomNav";
type Props = {
  params: {
    id: string;
  };
};

export default function Team({ params }: Props) {
  const [meets, setMeets] = useState([]);
  const [goingStates, setGoingStates] = useState<any>({}); // Use an object to store going state for each meet
  const [attendanceStates, setAttendanceStates] = useState<any>({});
  const [userRole, setUserRole] = useState("");

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
      const initialStates: any = {};
      const attendanceStates: any = {};
      res.data.forEach((meet: any) => {
        initialStates[meet.ID] = false;
        attendanceStates[meet.ID] = false;
      });
      setGoingStates(initialStates);
      setAttendanceStates(attendanceStates);
    }
    getMeetingData();

    async function getPlayerFunction() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.get(
        `https://atapp.fly.dev/v1/team/${params.id}/myrole`,
        config
      );
      console.log(res.data);
      setUserRole(res.data.role);
    }
    getPlayerFunction();
  }, []);

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      {meets.map((meet: any, idx: number) => {
        const going = goingStates[meet.ID];
        const attendance = attendanceStates[meet.ID];
        return (
          <MeetCard
            key={idx}
            date={new Date(meet.StartTime).toDateString()}
            time={new Date(meet.StartTime).toTimeString()}
            venue={meet.Venue}
            teamId={params.id}
            meetId={meet.ID}
            onGoing={going}
            setGoing={(value: any) => {
              setGoingStates((prev: any) => ({ ...prev, [meet.ID]: value }));
              console.log(value, goingStates);
            }}
            attendance={attendance}
            setAttendance={(value: any) => {
              setAttendanceStates((prev: any) => ({
                ...prev,
                [meet.ID]: value,
              }));
              console.log(value, attendanceStates);
            }}
            userRole={userRole}
          />
        );
      })}
      <BottomNav id={params.id} />
    </div>
  );
}
