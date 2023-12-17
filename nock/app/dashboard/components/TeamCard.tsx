"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function TeamCard({ id, name, description }: any) {
  async function initiateTeamJoin() {
    /*  let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
      email: email,
      password: pass,
    });
    console.log(res.data); */
    //let res = await fetch("https://atapp.fly.dev/v1/auth/google/login");
    //console.log(await res.json());
  }
  return (
    <div className="rounded-md mx-4 my-4 p-2 text-left font-semibold">
      <Link href={`/team/${id}`}>
        {name}
        <div className="font-light text-gray-600">{description}</div>
      </Link>
    </div>
  );
}
