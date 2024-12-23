import { NextResponse } from "next/server";

const MOVIES = [
  { id: 1, title: "Harry Potter 1" },
  { id: 2, title: "LOard of the ring" },
  { id: 3, title: "Hobbit" },
  { id: 4, title: "Instasteller" },
  { id: 5, title: "Lord of the Rings 1" },
  { id: 6, title: "Lord of the Rings 2" },
  { id: 7, title: "The Witcher" },
  { id: 8, title: "Game of thrones" },
];

export const GET = async (req) => {
  // simple end point in nextjs
  return NextResponse.json({ success: true, movies: MOVIES });
};
