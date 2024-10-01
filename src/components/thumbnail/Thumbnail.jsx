"use client";
import Image from "next/image";
import React from "react";
import styles from "./thumbnail.module.css";

const Thumbnail = ({ imgArrary, selectImg, imgId }) => {
  return (
    <div className={styles.container}>
      {imgArrary.map((img, id) => (
        <button
          onClick={() => selectImg(id)}
          key="id"
          className={styles.imgContainer}
        >
          <Image src={img} alt="" fill className={styles.img} />
        </button>
      ))}
    </div>
  );
};

export default Thumbnail;
