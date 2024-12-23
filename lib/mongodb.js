import { MongoClient, ServerApiVersion } from "mongodb";
import { version } from "react";

const clientPromise = () => {
  const MONGODB_URI = process.env.NEXT_PUBLIC_DATABASE_URI;
  const options = {};

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing envirenment variable: "MONGODB_URI"');
  }
  const client = new MongoClient(MONGODB_URI, options);
  return client.connect();
};

export default clientPromise;
