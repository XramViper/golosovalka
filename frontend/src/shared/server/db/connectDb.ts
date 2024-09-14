/**
 * !!! Use this connect in every API route
 */

"use server";

import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGO_URI || "";
const DATABASE_NAME = process.env.MONGO_DB_NAME || "";

if (!DATABASE_URL || !DATABASE_NAME) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(DATABASE_URL, { bufferCommands: false, dbName: DATABASE_NAME })
      .then((mongoose) => {
        return mongoose;
      });
  }
  // @ts-expect-errordasd
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
