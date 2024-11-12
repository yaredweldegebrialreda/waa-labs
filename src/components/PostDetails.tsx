const PostDetails = ({ postDetail }) => {
  return (
    <div>
      <div>
        <p>{postDetail.id}</p>
        <p>{postDetail.author}</p>
      </div>
    </div>
  );
};

export default PostDetails;
