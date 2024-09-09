import { connectToDatabase } from "@/lib/db/connectToDatabase";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const dynamic = "force-static";

export async function GET() {
  const { db } = await connectToDatabase();
  const session = await getServerSession(authOptions);

  console.log("session", session);

  // await db?.collection("mycollection").insertOne({
  //   name: "test",
  // });
  const data = await db?.collection("mycollection").find().toArray();

  if (data) {
    return Response.json({ message: JSON.stringify(session) });
  }

  return Response.json({ message: "none data" });
}
