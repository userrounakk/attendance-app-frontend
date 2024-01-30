"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  date: string;
  time: string;
  venue: string;
  meetId: string;
  teamId: string;
  onGoing: boolean;
  setGoing: any;
  attendance: boolean;
  setAttendance: any;
  userRole: string;
};
export function MeetCard({
  date,
  time,
  venue,
  meetId,
  teamId,
  onGoing,
  setGoing,
  attendance,
  setAttendance,
  userRole,
}: Props) {
  async function startMeeting() {
    try {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${teamId}/meetings/${meetId}/start`,
        {},
        config
      );
      console.log(res.data, res.status);
      if (res.status === 200) {
        setGoing(true);
        toast.success("meeting started!");
      } else {
        toast.error(res.data.error);
      }
    } catch (e: any) {
      if (e.response.status === 500) {
        setGoing(false);
        toast.error(e.response.data.error);
      } else {
        toast.error("some internal error occured");
      }
      console.error(e);
    }
  }

  async function endMeeting() {
    try {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${teamId}/meetings/${meetId}/end`,
        {},
        config
      );
      console.log(res.data, res.status);
      if (res.status === 200) {
        setGoing(false);
        toast.success("meeting ended!");
      } else {
        toast.error(res.data.error);
      }
    } catch (e) {
      setGoing(false);
      toast.error("some internal error occured");
      console.error(e);
    }
  }

  function handleMeeting() {
    if (onGoing) {
      endMeeting();
    } else {
      startMeeting();
    }
  }

  async function takeAttendance() {
    try {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${teamId}/meetings/${meetId}/attendance/start`,
        {},
        config
      );
      console.log(res.data, res.status);
      if (res.status === 200) {
        setAttendance(true);
        toast.success("attendance started!");
      } else {
        toast.error(res.data.error);
      }
    } catch (e: any) {
      if (e.response.status === 500) {
        setAttendance(false);
        toast.error(e.response.data.error);
      } else {
        toast.error("some internal error occured");
      }
      console.error(e);
    }
  }
  async function stopAttendance() {
    try {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${teamId}/meetings/${meetId}/attendance/end`,
        {},
        config
      );
      console.log(res.data, res.status);
      if (res.status === 200) {
        setGoing(true);
        toast.success("attendance stopped!");
      } else {
        toast.error(res.data.error);
      }
    } catch (e: any) {
      if (e.response.status === 500) {
        setGoing(false);
        toast.error(e.response.data.error);
      } else {
        toast.error("some internal error occured");
      }
      console.error(e);
    }
  }

  async function giveAttendance() {
    try {
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.patch(
        `https://atapp.fly.dev/v1/team/${teamId}/meetings/${meetId}/attendance`,
        {},
        config
      );
      console.log(res.data, res.status);
      if (res.status === 200) {
        setGoing(true);
        toast.success("attendance posted!");
      } else {
        toast.error(res.data.error);
      }
    } catch (e) {}
  }

  function handleAttendance() {
    if (userRole === "super_admin" || userRole === "admin") {
      if (attendance) {
        stopAttendance();
      } else {
        takeAttendance();
      }
    } else {
      giveAttendance();
    }
  }
  return (
    <div className="bg-gray-200 rounded-md m-4">
      <Link href={`/team/${teamId}/${meetId}`}>
        <div className="text-center p-2">Meeting Alert</div>
        <div className="p-4 text-sm">
          <div>Date: {date}</div>
          <div>Time: {time}</div>
          <div>Venue: {venue}</div>
        </div>
        <div className="w-full bg-[#545458A6] h-[0.1px]"></div>
        {/* {userRole === "super_admin" || userRole === "admin": <div className="text-center p-2 text-[#007AFF]" onClick={handleMeeting}>
        {onGoing ? "End Meeting" : "Start Meeting"}
      </div>:""} */}
        {
          userRole === "super_admin" || userRole === "admin" ? (
            <div
              className="text-center p-2 text-[#007AFF]"
              onClick={handleMeeting}
            >
              {onGoing ? "End Meeting" : "Start Meeting"}
            </div>
          ) : null // or any other content you want to display when the condition is false
        }

        <div className="w-full bg-[#545458A6] h-[0.1px]"></div>
        <div
          className="text-center p-2 text-[#007AFF]"
          onClick={handleAttendance}
        >
          {userRole === "super_admin" || userRole === "admin"
            ? attendance
              ? "End Attendance"
              : "Take Attendance"
            : "Give Attendance"}
        </div>
      </Link>
    </div>
  );
}
