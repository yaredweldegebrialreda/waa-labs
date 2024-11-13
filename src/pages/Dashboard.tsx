import { useEffect, useState } from "react";
import publicClientApi from "../api/public-client-api";
import { postsData } from "../components/Post";
import Posts from "../components/Posts";
import { Post } from "../types";

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [posts, setPosts] = useState<Post[]>(postsData);
  const [name, setName] = useState("");
  const [clickedPostId, setClickedPostId] = useState(null);

  const fetchPosts = async () => {
    try {
      const response: Post[] = await publicClientApi.get("/");
      console.log(response);
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOnPostClicked = (id: any) => {
    setClickedPostId((prevId) => (prevId === id ? null : id));
    setShowDetails(!showDetails);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };
  const handleChangeNameClicked = (e) => {
    e.preventDefault();

    setPosts([{ ...posts[0], title: name }, ...posts.slice(1)]);

    console.log(posts[0]);
  };

  return (
    <div>
      <input name="name" type="text" onChange={handleNameChange} />
      <button onClick={handleChangeNameClicked}>Change Name</button>

      <Posts
        onPostClicked={handleOnPostClicked}
        showDetails={showDetails}
        posts={posts}
        clickedPostId={clickedPostId}
      />
    </div>
  );
};

export default Dashboard;
