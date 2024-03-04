"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function TeamCard({ id, name, description }: any) {
  return (
    <div className="rounded-md mx-4 my-3 p-2 text-left font-semibold bg-gray-200">
      <Link href={`/team/${id}`}>
        {name}
        <div>{}</div>
        <div className="font-light text-gray-600">{description}</div>
      </Link>
    </div>
  );
}
