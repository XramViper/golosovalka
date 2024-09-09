import { AuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";

// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID || '',
      clientSecret: process.env.VK_CLIENT_SECRET || '',
    }),
    // TODO: Realize the CredentialsProvider
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     // Add logic to verify credentials here
    //     if (!credentials) return null;

    //     const { email, password } = credentials;
    //     // Fetch user and password hash from your database
    //     // Example: const user = await getUserByEmail(email)
    //     if (user && bcrypt.compareSync(password, user.passwordHash)) {
    //       return { id: user.id, name: user.name, email: user.email };
    //     } else {
    //       throw new Error("Invalid credentials");
    //     }
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day (in seconds)
  },
  callbacks: {
    // signIn, session callbacks
  },
  pages: {
    signIn: "/signIn", // Custom sign-in page
  },
};

export const getAuth = () => getServerSession(authOptions);
