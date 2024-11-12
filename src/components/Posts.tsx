import { Post } from "../types";
import PostDetails from "./PostDetails";

const Posts = ({ onPostClicked, showDetails, posts, clickedPostId }) => {
  console.log(showDetails);
  return (
    <div>
      {posts?.map((post: Post) => (
        <div key={post.id}>
          <p onClick={() => onPostClicked(post.id)}>{post.title}</p>
          {clickedPostId == post.id && <PostDetails postDetail={post} />}
        </div>
      ))}
    </div>
  );
};

export default Posts;
