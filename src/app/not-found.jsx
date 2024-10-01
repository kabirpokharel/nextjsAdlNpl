import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Not-found</h1>
      <p>Sorry, the page does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
