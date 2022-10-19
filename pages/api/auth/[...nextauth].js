import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectDB from "../../../utils/connectDB";
import User from "../../../schema/userSchema";
import { compare } from "bcryptjs";
export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Grinders Cafe",
      credentials: {
        email: { label: "email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        connectDB();
        const result = await User.findOne({
          email: credentials.email,
        });
        if (!result) {
          throw new Error("No user found with the email");
        }
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword) {
          throw new Error("Password doesnt match");
        }
        return { email: result.email, isAdmin: result.isAdmin };
      },
    }),
  ],
};
export default NextAuth(authOptions);
