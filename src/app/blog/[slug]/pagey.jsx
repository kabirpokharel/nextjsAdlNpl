// "use client";
// import { useState } from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import Thumbnail from "@/components/thumbnail/Thumbnail";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const [imgId, setImgId] = useState(0);
  // const selectImg = (id) => {
  //   setImgId(id);
  // };
  // FETCH DATA WITH AN API
  const post = await getPost(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img.length && (
        <div className={styles.imgContainer}>
          <Image src={post.img[0]} alt="" fill className={styles.img} />
          {/* <Image src={post.img[imgId]} alt="" fill className={styles.img} /> */}
          {/* <Thumbnail selectImg={selectImg} imgId={imgId} imgArrary={post.img} /> */}
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
