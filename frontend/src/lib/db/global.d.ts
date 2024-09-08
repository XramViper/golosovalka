/* eslint-disable no-var */
import { MongoClient } from "mongodb";

export declare global {
  declare module globalThis {
    var mongoose: {
      conn: Promise<MongoClient> | null;
      promise: Promise<MongoClient | typeof import("mongoose")> | null;
    };
  }
}
