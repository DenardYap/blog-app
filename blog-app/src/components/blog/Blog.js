import Post from "./Post";

const Blog = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post title={post.title} author={post.author} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
