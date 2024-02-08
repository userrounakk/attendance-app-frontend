"use server";
import axios from "axios";

export async function getTeams(userData: string) {
  let data = JSON.parse(userData);
  try {
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };
    let res = await axios.get("https://atapp.fly.dev/v1/team", config);
    console.log(res.data);
    return res.data;
  } catch (e: any) {
    console.error(e);
  }
}
