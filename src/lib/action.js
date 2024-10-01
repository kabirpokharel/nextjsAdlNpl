"use server"

import { signIn,auth } from "./auth";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";

export const addPost = async (formData) => {
    "use server"
    const { title, desc, slug, userId, imgString } = Object.fromEntries(formData);
    const img = imgString.split(',').map(a=>a.trim());
    console.log("Hello from the server", formData.get("title"));
    console.log("see this is value of img", img);
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });
        await newPost.save();
        console.log("saved to db")
    } catch (error) {
        console.log(error);
        return {error: "something went wrong!"}
    }
}


export const handleGithubLogin = async () => {
    "use server";
    const session = await auth();
    console.log("see this is session = = = > ", session);
    await signIn("github");
  };