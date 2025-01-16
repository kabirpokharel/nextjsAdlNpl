"use server";

import { signIn, auth, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import bcrypt from 'bcryptjs';

export const addPost = async (formData) => {
    const { title, desc, slug, userId, imgString } = Object.fromEntries(formData);
  "use server";
  const img = imgString.split(",").map((a) => a.trim());
  console.log("Hello from the server", formData.get("title"));
  console.log("see this is value of img", img);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  const session = await auth();
  console.log("see this is session = = = > ", session);
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (prevState,formData) => {
  "use server";
//   console.log("see this is value  = == < >>>>>", username, email, password,passwordRepeat);
  const { username, email, password, passwordRepeat } =
      Object.fromEntries(formData);
  if (password !== passwordRepeat) {
      return { error: "Password does not match" };
  }
  try {
      connectToDb();
      const dbUser = await User.findOne({ email });
      if (dbUser) {
          return { error: "User with this email already exists" };
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    });
      await newUser.save();
      console.log("new user created");
      return {success:"saved to DB"}
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!"};
  }
};

export const login = async (prevState,formData) => {
    const { username, password } = Object.fromEntries(formData);
    console.log("see this is form data  = ==  > ", Object.fromEntries(formData))
    console.log("see this is user name and password = =  > ", username, password);
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      console.log(err);
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };
