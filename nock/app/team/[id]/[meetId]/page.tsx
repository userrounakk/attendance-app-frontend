"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  params: {
    id: string;
    meetId: string;
  };
};
export default function Attendees({ params }: Props) {
  const [attendees, setAttendees] = useState<any[]>([]);
  console.log(params);
  useEffect(() => {
    async function getAttendees() {
      console.log("bruh");
      try {
        const userData = localStorage.getItem("userData")!;
        let data = JSON.parse(userData);
        const config = {
          headers: { Authorization: `Bearer ${data.token}` },
        };
        const res = await axios.get(
          `https://atapp.fly.dev/v1/team/${params.id}/meetings/${params.meetId}/attendance`,
          config
        );
        console.log(res.data);

        if (res.status == 200) {
          console.log(res.data);
          setAttendees(res.data);
          toast.success("attendees fetched sucessfully");
        } else {
          toast.error("failed to fetch");
        }
      } catch (e: any) {
        console.error(e);
        toast.error("failed to get attendees");
      }
    }
    getAttendees();
  }, []);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-4 font-semibold text-lg">Attendees: </div>
      {attendees &&
        attendees.map((attendee) => (
          <div className="flex flex-row">
            <img src={attendee.User.ProfileImage} alt="" />
            <div className="p-8 text-sm" key={attendee.ID}>
              {attendee.User.Name}
            </div>
            <div>
              {attendee.OnTime ? (
                <span className="text-[#2BA24C]">On Time</span>
              ) : (
                <span className="text-[#E43E2B]">Late</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
