"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Verify() {
  const searchParams = useSearchParams();

  useEffect(() => {
    async function verifyEmail() {
      try {
        let res = await axios.post(
          `https://atapp.fly.dev/v1/auth/verify?email=${searchParams.get(
            "email"
          )}&otp=${searchParams.get("otp")}`
        );
        console.log(res.data);
        toast.success("verification sucess");
        localStorage.setItem("userData", JSON.stringify(res.data));
      } catch (e: any) {
        toast.error("verification failed:", e);
        console.error(e);
      }
    }
    verifyEmail();
  }, []);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      Verified!
    </div>
  );
}
