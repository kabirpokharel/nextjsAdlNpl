import { addPost } from "@/lib/action";
import React from "react";

const serverActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId" />
        <textarea type="text" placeholder="Image url" name="imgString" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default serverActionTestPage;
