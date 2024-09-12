// app/api/auth/[...nextauth]/route.js
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { connectClientPromise } from "@/shared/server";

import { MongoClient } from "mongodb";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    EmailProvider({
      server: {
        host: "connect.smtp.bz" || process.env.SMTP_SERVER_HOST,
        port: 2525 || process.env.SMTP_SERVER_PORT,
        auth: {
          user: "danyalavra@gmail.com" || process.env.SMTP_USER,
          pass: "XBuR4bVksz6I" || process.env.SMTP_PASSWORD, // Пароль от почты или специальный пароль для приложений
        },
      },
      from: "check@xram-viper.ru" || process.env.SMTP_SENDER_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },

  // @ts-expect-error some shit
  adapter: MongoDBAdapter(
    connectClientPromise as unknown as Promise<MongoClient>
  ),
  secret: process.env.NEXTAUTH_SECRET || "",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
