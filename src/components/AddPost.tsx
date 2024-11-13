import { useState } from "react";
import publicClientApi from "../api/public-client-api";
import { Post } from "../types";

const AddPost = () => {
  const [formData, setFormData] = useState<Post>({
    author: "",
    title: "",
    content: "",
    comment: [],
  });
  const handleAddPost = () => {
    try {
      const response = publicClientApi.post("/", { data: formData });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleAddPost}>
      <input name="title" placeholder="Title of the post..." />
      <br />
      <input name="author" placeholder="Author of the post..." />
      <br />
      <input name="content" placeholder="Content of the post..." />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
