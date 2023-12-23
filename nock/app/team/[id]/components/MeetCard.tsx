"use client";

import axios from "axios";

type Props = {
  date: string;
  time: string;
  venue: string;
  meetId: string;
  teamId: string;
};
export function MeetCard({ date, time, venue, meetId, teamId }: Props) {
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
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="bg-gray-200 rounded-md m-4">
      <div className="text-center p-2">Meeting Alert</div>
      <div className="p-4 text-sm">
        <div>Date: {date}</div>
        <div>Time: {time}</div>
        <div>Venue: {venue}</div>
      </div>
      <div className="w-full bg-[#545458A6] h-[0.1px]"></div>
      <div className="text-center p-2 text-[#007AFF]" onClick={startMeeting}>
        Start Meeting
      </div>
      <div className="w-full bg-[#545458A6] h-[0.1px]"></div>
      <div className="text-center p-2 text-[#007AFF]">Take Attendance</div>
    </div>
  );
}
