// app/api/auth/[...nextauth]/route.js
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { connectClientPromise } from "@/shared/server";

import { MongoClient } from "mongodb";
import Yandex from "next-auth/providers/yandex";
import VK from "next-auth/providers/vk";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      // @ts-expect-error logo is already defined
      style: {
        bg: "transparent",
        bgDark: "#20252a",
        text: "#fff",
      },
    }),
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID || "",
      clientSecret: process.env.YANDEX_CLIENT_SECRET || "",
      // @ts-expect-error logo is already defined
      style: {
        bg: "transparent",
        bgDark: "#20252a",
        text: "#fff",
      },
    }),
    VK({
      clientId: process.env.VK_CLIENT_ID || "",
      clientSecret: process.env.VK_CLIENT_SECRET || "",
      // @ts-expect-error logo is already defined
      style: {
        bg: `transparent`,
        bgDark: "#20252a",
        text: "#fff",
      },
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_SERVER_HOST,
        port: process.env.SMTP_SERVER_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_SENDER_FROM,
    }),
  ],
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
  },

  theme: {
    colorScheme: "dark",
    brandColor: "trasnsparent",
  },
  // @ts-expect-error some shit
  adapter: MongoDBAdapter(
    connectClientPromise as unknown as Promise<MongoClient>
  ),
  secret: process.env.NEXTAUTH_SECRET || "",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
