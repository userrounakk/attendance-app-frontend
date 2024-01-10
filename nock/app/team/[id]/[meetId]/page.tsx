"use client";

import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  params: {
    id: string;
    meetId: string;
  };
};
export default function Attendees({ params }: Props) {
  console.log(params);
  useEffect(() => {
    async function getAttendees() {
      try {
        const res = await axios.get(
          `https://atapp.fly.dev/v1/${params.id}/meetings/${params.meetId}/attendance`
        );
        if (res.status == 200) {
          console.log(res.data);
          toast.success("attendees fetched sucessfully");
        } else {
          toast.error("failed to fetch");
        }
      } catch (e: any) {
        console.error(e);
        toast.error("failed to get attendees");
      }
    }
  }, []);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div>Attendees: </div>
    </div>
  );
}
