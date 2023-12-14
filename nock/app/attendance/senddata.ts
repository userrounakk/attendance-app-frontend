"use server";

export async function createMeeting() {
  const teamId = localStorage.getItem("team_id");
  const data = {
    name: "New meeting",
    description: "Some description",
    protected: false,
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDAwNjExNzIsImlkIjoxMH0.IjNNByq1B-yW8WnbVGMqoCX0CNa-wQ8KeqKAbzPmZ84";

  const url = "https://atapp.fly.dev/v1/team";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
    body: JSON.stringify(data),
  });
  console.log(res.status);
  const d = await res.json();
  console.log(d.ID);
  return d;
}
