// app/singlePost/[slug]/SinglePostPage.js (Client Component)
"use client";
import { useState, Suspense } from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
// import { getPost } from "@/lib/data";
import Thumbnail from "@/components/thumbnail/Thumbnail";

const SinglePostPage = ({ post }) => {
  const [imgId, setImgId] = useState(0);
  const selectImg = (id) => {
    setImgId(id);
  };

  return (
    <div className={styles.container}>
      {post.img.length && (
        <div className={styles.imgContainer}>
          <Image src={post.img[imgId]} alt="" fill className={styles.img} />
        </div>
      )}
      <Thumbnail selectImg={selectImg} imgId={imgId} imgArrary={post.img} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              {/* <PostUser userId={post.userId} /> */}
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
