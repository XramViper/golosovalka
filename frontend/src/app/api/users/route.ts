import { connectToDatabase } from "@/lib/db/connectToDatabase";

export const dynamic = "force-static";

export async function GET() {
  const { db } = await connectToDatabase();

//   await db?.collection("mycollection").insertOne({
//     name: "test",
//   });
  const data = await db?.collection("mycollection").find().toArray();

  if (data) {
    return Response.json({ message: JSON.stringify(data) });
  }
  return Response.json({ message: "none data" });
}
