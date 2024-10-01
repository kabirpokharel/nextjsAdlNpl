import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";


export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("see the posts = > ", posts[0]._id.toString());
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  console.log("see this is slug", slug);
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    console.log("see this is single post fetched from serverc= = > ", post);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
