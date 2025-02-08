import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from  "next-auth/providers/credentials"
import { User } from "./models";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcryptjs";
// import Google from "next-auth/providers/google"


const login = async (credentials) => {
  try {
    connectToDb();
    console.log("see this is credentials  aaaaaa= == > ", credentials);
    const user = await User.findOne({ email: credentials.username });
    console.log("see this is a user xxxxxxxx= = = > ", user);
    if (!user) {
      throw new Error("Wrong credentails");
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    console.log("see this is credentials.parssowrd = =  >  ",credentials.password)
    console.log("see this is user.password = =  >  ",user.password)
    console.log("see isPasswordCorrect", isPasswordCorrect);
    if (!isPasswordCorrect) {
      throw new Error("Wrong credentails")
    }
    return user;
  } catch(err) {
    console.log(err);
    throw new Error("Failed to login");
  }
}

export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          console.log("this is credentials from credentials provider @!!!" ,credentials)
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Here is the value of user, acc and profile", user, account, profile);
      if (account.provider === "github") { //this is for github only credential login is handled by login funciton above
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          console.log("see this is profile ==> ", user, account, profile);
          if (!user) {
            const newUser = new User({
              userName: profile.name,
              email: profile.email,
              img: profile.avatar_url
            })
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      } 
      return true;
      }
  }
});
