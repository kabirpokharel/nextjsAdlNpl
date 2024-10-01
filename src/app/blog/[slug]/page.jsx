import { getPost } from "@/lib/data";
import SinglePostPage from "./singlePost";


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePost = async ({ params }) => {  
  const { slug } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);
  return <SinglePostPage post={post} />;
};

export default SinglePost;