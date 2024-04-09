"use client";

import BackButton from "@/app/components/BackButton";
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

        if (res.status == 200) {
          console.log(res.data);
          setAttendees(res.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (e: any) {
        console.error(e);
        toast.error(e.response.data.message);
      }
    }
    getAttendees();
  }, []);
  return (
    <div className="px-6 pt-12">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-3xl py-8">Attendees: </div>
      {attendees ? (
        attendees.map((attendee) => (
          <div key={attendee.ID} className="flex flex-row justify-between p-4">
            <img
              src={attendee.User.ProfileImage}
              className="rounded-full w-10 h-10"
              alt=""
            />
            <div className="text-md" key={attendee.ID}>
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
        ))
      ) : (
        <center className="mt-20">
          <div className="text-2xl text-muted">No Attendees Yet</div>
        </center>
      )}
    </div>
  );
}
