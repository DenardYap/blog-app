import Post from "./Post";
import { IoSadOutline } from "react-icons/io5";

const Blog = ({ posts, onDelete }) => {
  return (
    <div>
      {!!posts.length ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            content={post.content}
            date={post.date_created}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="format-box">
          <IoSadOutline size={"20%"} />
          <h1>No posts to show</h1>
        </div>
      )}
    </div>
  );
};

export default Blog;
