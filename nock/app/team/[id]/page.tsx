"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MeetCard } from "./components/MeetCard";
import { Toaster } from "react-hot-toast";
import BottomNav from "./components/BottomNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";
type Props = {
  params: {
    id: string;
  };
};

export default function Team({ params }: Props) {
  const [teamName, setTeamName] = useState("");
  const [meets, setMeets] = useState([]);
  const [goingStates, setGoingStates] = useState<any>({}); // Use an object to store going state for each meet
  const [attendanceStates, setAttendanceStates] = useState<any>({});
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function getMeetingData() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.get(
        `https://atapp.fly.dev/v1/team/${params.id}/meetings?filterBy=all&orderBy=desc`,
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

    async function getTeamData() {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.get(
        `https://atapp.fly.dev/v1/team/${params.id}`,
        config
      );
      setTeamName(res.data.Name);
    }
    getTeamData();
    setLoading(false);
    console.log(teamName, userRole);
  }, []);

  async function getMeetings(filter: string) {
    setFilter(filter);
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };
    const res = await axios.get(
      `https://atapp.fly.dev/v1/team/${params.id}/meetings?filterBy=${filter}&orderBy=desc`,
      config
    );
    console.log(res.data);
    setMeets(res.data);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="p-2">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="p-4">
          <BackButton />
        </div>
        <div className="text-2xl font-bold p-2">Team {teamName}</div>
        <div className="text-2xl font-semibold p-2">Meetings</div>
        {/* <div className="flex flex-row justify-between">
        <AccountCircleIcon className="text-[#D9D9D9] m-4" fontSize="large" />
        <MoreHorizIcon className="m-4" fontSize="large" />
      </div> */}
        <div className=" w-full p-4 overflow-hidden ">
          <div className="flex rounded-md bg-[#7676801F] gap-1 p-0.5 ">
            <div
              className={`${
                filter == "upcoming" ? "bg-white" : "bg-grey"
              } flex-1 rounded-md p-2 text-xs text-center`}
              onClick={() => getMeetings("upcoming")}
            >
              Upcoming
            </div>
            <div
              className={`${
                filter == "all" ? "bg-white" : "bg-grey"
              } flex-1 rounded-md p-2 text-xs text-center`}
              onClick={() => getMeetings("all")}
            >
              All
            </div>
            <div
              className={`${
                filter == "past" ? "bg-white" : "bg-grey"
              } flex-1 rounded-md p-2 text-xs text-center`}
              onClick={() => getMeetings("past")}
            >
              Done
            </div>
          </div>
        </div>
        {meets.length > 0 ? (
          meets.map((meet: any, idx: number) => {
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
                  setGoingStates((prev: any) => ({
                    ...prev,
                    [meet.ID]: value,
                  }));
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
          })
        ) : (
          <div className="p-8">No meetings today!</div>
        )}
        <div className="h-20"></div>
        {userRole === "super_admin" ? (
          <Link href={`/team/${params.id}/create-meeting`}>
            <div
              title="Create or join team"
              className=" fixed z-90 bottom-24 right-2 bg-theme-blue p-3 rounded-3xl drop-shadow-lg flex justify-center items-center text-white text-md hover:bg-blue-700 hover:drop-shadow-2xl duration-200"
            >
              <EditCalendarIcon className="mx-2" />
              Create new meeting
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <BottomNav active="meeting" />
    </>
  );
}
