import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const client = await clientPromise;

    if (!client) {
      console.error("MongoClient not initialized");
      throw new Error("MongoClient not initialized");
    }

    console.log("MongoClient initialized:", !!client);

    const db = client.db("sample_mflix");

    console.log("Database connection established");

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ year: -1, metacritic: -1 })
      .limit(12)
      .toArray();

    console.log("Fetched Movies:", movies);

    return NextResponse.json(movies);
  } catch (error) {
    console.error("MONGODB ERROR:", error.message, error.stack);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
};
