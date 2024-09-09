import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
