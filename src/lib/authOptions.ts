import Admin from "@/model/admin.model";
import Mentor from "@/model/mentor.model";
import Student from "@/model/student.model";
import bcrypt from "bcryptjs";
import { Model } from "mongoose";
import type { AuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./dbConnect";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          await dbConnect();
          const userModels = [Student, Mentor, Admin];

          for (const ModelItem of userModels) {
            const UserModel = ModelItem as Model<any>;
            const user = await UserModel.findOne({ email: credentials.email });

            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (!isPasswordCorrect) {
                throw new Error("Either email or password is incorrect");
              }

              return {
                id: user._id.toString(),
                email: user.email,
                role: user.role,
              };
            }
          }
          throw new Error("User not found");
        } catch (error) {
          console.log("Error in authOptions: ", error);
          throw error;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET
};
