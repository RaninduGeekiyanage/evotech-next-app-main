import { NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  console.log(request);

  // Bind database
  // Find the user in database
  // Check the password validity
  // Return the response with the token
  // If password invalid retun error response

  return NextResponse.json({ success: true, username: "Ranindu" });
};
